import torchvision

import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.nn.parameter import Parameter
from torchdiffeq import odeint_adjoint as odeint
from typing import Dict
from torch import nn, Tensor

endtime = 5
fc_dim = 64
act = torch.sin 
f_coeffi = -1
layernum = 0
tol = 1e-3

class ConcatFC(nn.Module):

    def __init__(self, dim_in, dim_out):
        super(ConcatFC, self).__init__()
        self._layer = nn.Linear(dim_in, dim_out)
    def forward(self, t, x):
        return self._layer(x)


    
class ODEfunc_mlp(nn.Module):

    def __init__(self, dim):
        super(ODEfunc_mlp, self).__init__()
        self.fc1 = ConcatFC(64, 256)
        self.act1 = act
        self.fc2 = ConcatFC(256, 256)
        self.act2 = act
        self.fc3 = ConcatFC(256, 64)
        self.act3 = act
        self.nfe = 0

    def forward(self, t, x):
        self.nfe += 1
        out = f_coeffi*self.fc1(t, x)
        out = self.act1(out)
        out = f_coeffi*self.fc2(t, out)
        out = self.act2(out)
        out = f_coeffi*self.fc3(t, out)
        out = self.act3(out)
        
        return out

    
    
class ODEBlock(nn.Module):

    def __init__(self, odefunc):
        super(ODEBlock, self).__init__()
        self.odefunc = odefunc
        self.integration_time = torch.tensor([0, endtime]).float()

    def forward(self, x):
        self.integration_time = self.integration_time.type_as(x)
        out = odeint(self.odefunc, x, self.integration_time, rtol=tol, atol=tol)
        return out[1]

    @property
    def nfe(self):
        return self.odefunc.nfe

    @nfe.setter
    def nfe(self, value):
        self.odefunc.nfe = value

class fcs(nn.Module):

    def __init__(self,  fc_dim):
        super(fcs, self).__init__()
        self.dropout = 0.1
        self.merge_net = nn.Sequential(nn.Linear(in_features=1024,
                                                 out_features=1024),
                                       nn.Tanh())
        self.merge_net2 = nn.Sequential(nn.Linear(in_features=1024,
                                                 out_features=fc_dim),
                                       nn.Tanh(),)

    def forward(self, inputs):
        output = self.merge_net(inputs)
        #print(" yes")
        #print(output.shape)
        output = self.merge_net2(output)
        return output


class Mobile_v3_feature(nn.Module):
    def __init__(
            self,
            num_classes: int,
            size: str = "large",
            pretrained: bool = False,
            freezed: bool = False
    ) -> None:

        super(Mobile_v3_feature, self).__init__()
        if size == "small":
            torchvision_model = torchvision.models.mobilenet_v3_small(pretrained)
            in_features = 576
            out_features = 1024
        else:
            torchvision_model = torchvision.models.mobilenet_v3_large(pretrained)
            in_features = 960
            out_features = 1280

        if freezed:
            for param in torchvision_model.parameters():
                param.requires_grad = False

        self.backbone = nn.Sequential(
            torchvision_model.features,
            torchvision_model.avgpool
        )

        if size == "small":
            self.last_stuff = nn.Sequential(
                nn.Linear(in_features=in_features, out_features=out_features),
                nn.Hardswish(),
                nn.Dropout(p=0.2, inplace=True),
                nn.Linear(in_features=1024,out_features=fc_dim),
                nn.Tanh(),
            )
        else:
           self.last_stuff = nn.Sequential(
                nn.Linear(in_features=in_features, out_features=out_features),
                nn.Hardswish(),
                nn.Dropout(p=0.2, inplace=True),
                nn.Linear(in_features=1280,out_features=fc_dim),
                nn.Tanh(),
            )


        #self.fc1 = fcs(fc_dim)
        self.num_classes = num_classes

    def forward(self, x: Tensor) -> Dict:
        x = self.backbone(x)
        x = x.view(x.size(0), -1)
        x = self.last_stuff(x)
        #print(x.shape)
        return x #self.fc1(x)


class MLP_OUT_Linear(nn.Module):
    def __init__(
            self,
            num_classes: int,
            size: str = "large",
            pretrained: bool = False,
            freezed: bool = False
    ) -> None:
        super(MLP_OUT_Linear, self).__init__()
        self.gesture_classifier = nn.Sequential(
            nn.Linear(in_features=fc_dim, out_features=num_classes),
        )
        self.leading_hand_classifier = nn.Sequential(
            nn.Linear(in_features=fc_dim, out_features=2),
        )

    def forward(self, x):
        gesture = self.gesture_classifier(x)
        leading_hand = self.leading_hand_classifier(x)
        return {"gesture": gesture, "leading_hand": leading_hand}


"""
model = WideResNet_save(fc_dim, 34, 10, widen_factor=10, dropRate=0.0)
odefunc = ODEfunc_mlp(0)
feature_layers = [ODEBlock(odefunc)] 
fc_layers = [MLP_OUT_Linear()]
model = nn.Sequential(model, *feature_layers, *fc_layers).to(device)
"""

