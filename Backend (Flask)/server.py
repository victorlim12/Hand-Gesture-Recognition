from flask import Flask, request,jsonify
from flask_socketio import SocketIO,emit
from flask_cors import CORS
import cv2
import io
from io import StringIO
import base64
from PIL import Image
import numpy as np
import imutils
from demo import RUNNER
import time

import argparse
import logging
import os
import time
from typing import Optional, Tuple

import cv2
import numpy as np
import torch
from PIL import Image, ImageOps
from torch import Tensor
from torchvision.transforms import functional as f
from models.Testing_testing_123.ode_mobile import ConcatFC, ODEfunc_mlp, ODEBlock, Mobile_v3_feature, MLP_OUT_Linear
from ssd_mobilenetv3 import SSDMobilenet
import numpy as np
import torch
from PIL import Image, ImageOps
from torch import Tensor
from torchvision.transforms import functional as f
import os
from typing import Optional, Tuple
import time
import torch.nn as nn
from torchvision.transforms import functional as F


from PIL import Image
from torch import nn, Tensor
from typing import Tuple, Dict, Optional, List
from torchvision.transforms import functional as F
# import mediapipe as mp

#mp_drawing = mp.solutions.drawing_utils
#mp_drawing_styles = mp.solutions.drawing_styles

from model import TorchVisionModel
from ssd_mobilenetv3 import SSDMobilenet


COLOR = (0, 255, 0)
FONT = cv2.FONT_HERSHEY_SIMPLEX


targets = {
    1: "call",
    2: "dislike",
    3: "fist",
    4: "four",
    5: "like",
    6: "mute",
    7: "ok",
    8: "one",
    9: "palm",
    10: "peace",
    11: "rock",
    12: "stop",
    13: "stop inverted",
    14: "three",
    15: "two up",
    16: "two up inverted",
    17: "three2",
    18: "peace inverted",
    19: "no gesture"
}


class Demo:

    @staticmethod
    def preprocess(img: np.ndarray) -> Tuple[Tensor, Tuple[int, int], Tuple[int, int]]:
        """
        Preproc image for model input
        Parameters
        ----------
        img: np.ndarray
            input image
        """
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        image = Image.fromarray(img)
        width, height = image.size

        image = ImageOps.pad(image, (max(width, height), max(width, height)))
        padded_width, padded_height = image.size
        image = image.resize((320, 320))

        img_tensor = f.pil_to_tensor(image)
        img_tensor = f.convert_image_dtype(img_tensor)
        img_tensor = img_tensor[None, :, :, :]
        return img_tensor, (width, height), (padded_width, padded_height)

    @staticmethod
    def run(detector: TorchVisionModel, num_hands: int = 2, threshold: float = 0.5, landmarks: bool = False, frame: str = None) -> None:
        """
        if landmarks:
            hands = mp.solutions.hands.Hands(
                model_complexity=0,
                static_image_mode=False,
                max_num_hands=2,
                min_detection_confidence=0.8)
        """
        
        
        #frame = cv2.imread(image_path)    
        #print(type(frame))
        processed_frame, size, padded_size = Demo.preprocess(frame)
        
        with torch.no_grad():
            output = detector(processed_frame)[0]
        boxes = output["boxes"][:num_hands]
        scores = output["scores"][:num_hands]
        labels = output["labels"][:num_hands]
        
        
        # Processing the data   
        result = ["NO GESTURES"]
        count = 0
        #print(scores)
        for i in range(min(num_hands, len(boxes))):
            if scores[i] > threshold:
                count += 1
                result = [targets[int(labels[i])], scores[i]]        
        
        #sprint(count)        
        return result


def _load_model(model_path: str, device: str) -> TorchVisionModel:
    ssd_mobilenet = SSDMobilenet(num_classes=len(targets) + 1)
    if not os.path.exists(model_path):
        logging.info(f"Model not found {model_path}")
        raise FileNotFoundError

    ssd_mobilenet.load_state_dict(model_path, map_location=device)
    ssd_mobilenet.eval()
    return ssd_mobilenet


def get_crop_from_bbox(image: Image.Image, bbox: List, box_scale: float = 1.) -> Tuple[Image.Image, np.array]:
    """
    Crop bounding box from image

    Parameters
    ----------
    image : Image.Image
        Source image for crop
    bbox : List
        Bounding box [xyxy]
    box_scale: float
        Scale for bounding box crop
    """
    int_bbox = np.array(bbox).round().astype(np.int32)

    x1 = int_bbox[0]
    y1 = int_bbox[1]
    x2 = int_bbox[2]
    y2 = int_bbox[3]
    cx, cy = (x1 + x2) / 2, (y1 + y2) / 2

    w = h = max(x2 - x1, y2 - y1)
    x1 = max(0, cx - box_scale * w // 2)
    y1 = max(0, cy - box_scale * h // 2)
    x2 = cx + box_scale * w // 2
    y2 = cy + box_scale * h // 2
    x1, y1, x2, y2 = list(map(int, (x1, y1, x2, y2)))

    crop_image = image.crop((x1, y1, x2, y2))
    bbox_orig = np.array([x1, y1, x2, y2]).reshape(2, 2)

    return crop_image, bbox_orig


class Compose:
    def __init__(self, transforms: List[nn.Module]):
        self.transforms = transforms

    def __call__(self, image, target) -> Tuple[Tensor, Optional[Dict[str, Tensor]]]:
        for t in self.transforms:
            image, target = t(image, target)
        return image, target


class ToTensor(nn.Module):
    @staticmethod
    def forward(
            image: Tensor,
            target: Optional[Dict[str, Tensor]] = None
    ) -> Tuple[Tensor, Optional[Dict[str, Tensor]]]:
        image = F.pil_to_tensor(image)
        image = F.convert_image_dtype(image)
        return image, target


def get_transform() -> Compose:
    transforms = [ToTensor()]
    return Compose(transforms)

def __getitem__(self, index: int) -> Tuple[Image.Image, Dict]:
        """
        Get item from annotations

        Parameters
        ----------
        index : int
            Index of annotation item
        """
        row = self.annotations.iloc[[index]].to_dict("records")[0]
        image_resized, gesture, leading_hand = self.__prepare_image_target(
            row["target"], row["name"], row["bboxes"], row["labels"], row["leading_hand"]
        )
        label = {"gesture": self.labels[gesture], "leading_hand": self.leading_hand[leading_hand]}

        if self.transform is not None:
            image_resized, label = self.transform(image_resized, label)

        return image_resized, label

def _load_model_ode(
        model_name: str,
        num_classes: int,
        device: str,
        checkpoint: str = None,
        pretrained: bool = False,
        freezed: bool = False
) -> nn.Module:

    models = {

        'ODE': Mobile_v3_feature(
            num_classes=num_classes,
            size='small',
            pretrained=pretrained,
            freezed=freezed
        ),
    }

    model = models[model_name]
    #print(checkpoint)
    #print(model_name)

    
    if(model_name == 'ODE'):
        endtime = 5
        fc_dim = 64
        act = torch.sin 
        f_coeffi = -1
        layernum = 0
        tol = 1e-3


        model = models[model_name]
        """
        odefunc = ODEfunc_mlp(num_classes=num_classes, size='small', pretrained=pretrained, freezed=freezed,dim=0)
        feature_layers = [ODEBlock(odefunc)] 
        fc_layers = [MLP_OUT_Linear(num_classes=num_classes, size='small', pretrained=pretrained, freezed=freezed)]
        model = nn.Sequential(model, *feature_layers, *fc_layers).to(device)
        """

        odefunc = ODEfunc_mlp(0)
        feature_layers = [ODEBlock(odefunc)] 
        fc_layers = [MLP_OUT_Linear(num_classes=num_classes, size='small', pretrained=pretrained, freezed=freezed)]
        
        model = nn.Sequential(model, *feature_layers, *fc_layers).to(device)
        checkpoint = torch.load(checkpoint, map_location=device)["state_dict"]
        model.load_state_dict(checkpoint, strict=False)
        return model
    

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app,cors_allowed_origins="*")

model_ode = _load_model(os.path.expanduser("SSDLite.pth"),"cpu")
model = _load_model("ODE",19,"cpu",os.path.expanduser("MobileNetV3_small_ODE.pth"))


@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/http-call")
def http_call():
    """return JSON with string data as the value"""
    data = {'data':'This text was fetched using an HTTP call to server on render'}
    return jsonify(data)

@socketio.on("connect")
def connected():
    """event listener when client connects to the server"""
    print(request.sid)
    print("client has connected")
    emit("connect",{"data":f"id: {request.sid} is connected"})

@socketio.on('data')
def handle_message(data):
    """event listener when client types a message"""
    print("data from the front end: ",str(data))
    emit("data",{'data':data,'id':request.sid},broadcast=True)

@socketio.on("disconnect")
def disconnected():
    """event listener when client disconnects to the server"""
    print("user disconnected")
    emit("disconnect",f"user {request.sid} disconnected",broadcast=True)

@socketio.on('image')
def image(data_image):
    start = time.time()
    print("im here")
    sbuf = StringIO()
    sbuf.write(data_image)

    # decode and convert into image
    b = io.BytesIO(base64.b64decode(data_image))
    pimg = Image.open(b)
    end1 = time.time()
    print("1. "+str(end1-start))

    ## converting RGB to BGR, as opencv standards
    start2 = time.time()
    frame = cv2.cvtColor(np.array(pimg), cv2.COLOR_RGB2BGR)
    end2 = time.time()
    print("2. "+str(end2-start2))

    # Process the image frame
    # frame = imutils.resize(frame, width=700)
    #frame = cv2.flip(frame, 1)
    start3 = time.time()
    print("#########################")
    #model = _load_model(os.path.expanduser("SSDLite.pth"),"cpu")
    # end3a = time.time()
    result= Demo.run(model_ode, num_hands=100, threshold=0.75, landmarks=False,frame=frame)
    print(result[0])
 
    end3b = time.time()
    print("3a. "+str(end3b-start3))
    # print("3b. "+str(end3b-start3))
    # imgencode = cv2.imencode('.jpg', frame)[1]

    # base64 encode
    # stringData = base64.b64encode(imgencode).decode('utf-8')
    # b64_src = 'data:image/jpg;base64,'
    # stringData = b64_src + stringData
    
    # emit the frame back
    # emit('response_back', stringData)
    emit('response_back', result[0])


if __name__ == '__main__':
    socketio.run(app, debug=True,port=5001)
