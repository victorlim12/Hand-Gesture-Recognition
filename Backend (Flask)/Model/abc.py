import cv2
import numpy as np
import mediapipe as mp
from model import TorchVisionModel
from Testing_testing_123.ode_mobile import ConcatFC, ODEfunc_mlp, ODEBlock, Mobile_v3_feature, MLP_OUT_Linear
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

def collate_fn(batch: List) -> Tuple:
    """
    Collate func for dataloader

    Parameters
    ----------
    batch : List
        Batch of data
    """
    return tuple(zip(*batch))

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
COLOR = (255, 255, 255)
FONT = cv2.FONT_HERSHEY_SIMPLEX

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
        #img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        image = Image.fromarray(img)
        width, height = image.size

        image = ImageOps.pad(image, (max(width, height), max(width, height)))
        padded_width, padded_height = image.size
        image = image.resize((224, 224))

        img_tensor = f.pil_to_tensor(image)
        img_tensor = f.convert_image_dtype(img_tensor)
        img_tensor = img_tensor[None, :, :, :]
        return img_tensor, (width, height), (padded_width, padded_height)

    @staticmethod
    def run(detector: nn.Module, num_hands: int = 2, threshold: float = 0.5, landmarks: bool = False) -> None:
        """
        Run detection model and draw bounding boxes on frame
        Parameters
        ----------
        detector : TorchVisionModel
            Detection model
        num_hands:
            Min hands to detect
        threshold : float
            Confidence threshold
        landmarks : bool
            Detect landmarks
        """
        mphands = mp.solutions.hands
        hands = mphands.Hands()
        mp_drawing = mp.solutions.drawing_utils


        if landmarks:
            hands = mp.solutions.hands.Hands(
                model_complexity=0,
                static_image_mode=False,
                max_num_hands=2,
                min_detection_confidence=0.8)

        cap = cv2.VideoCapture(0)

        t1 = cnt = 0
        _, frame = cap.read()
        h, w, c = frame.shape

        while True:

            _, frame = cap.read()
            delta = (time.time() - t1)
            t1 = time.time()

            ret, frame = cap.read()
            if ret:
                
                
                #img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                img = frame
                kernel_size = 1

                # Create the vertical kernel.
                kernel_v = np.zeros((kernel_size, kernel_size))

                # Create a copy of the same for creating the horizontal kernel.
                kernel_h = np.copy(kernel_v)

                # Fill the middle row with ones.
                kernel_v[:, int((kernel_size - 1)/2)] = np.ones(kernel_size)
                kernel_h[int((kernel_size - 1)/2), :] = np.ones(kernel_size)

                # Normalize.
                kernel_v /= kernel_size
                kernel_h /= kernel_size

                horizonal_mb = cv2.filter2D(img, -1, kernel_h)
                processed_frame = horizonal_mb
                frame = processed_frame
                
                ################################################
                result = hands.process(horizonal_mb)
                pp = horizonal_mb
                hand_landmarks = result.multi_hand_landmarks
                if hand_landmarks:
                    for handLMs in hand_landmarks:
                        x_max = 0
                        y_max = 0
                        x_min = w
                        y_min = h
                        for lm in handLMs.landmark:
                            x, y = int(lm.x * w), int(lm.y * h)
                            if x > x_max:
                                x_max = x
                            if x < x_min:
                                x_min = x
                            if y > y_max:
                                y_max = y
                            if y < y_min:
                                y_min = y
                        cv2.rectangle(frame, (x_min, y_min), (x_max, y_max), (0, 255, 0), 2)
                    pp = horizonal_mb[y_min:y_max, x_min:x_max]
                    #cv2.imshow("cropped", pp)
                ################################################
                    processed_frame, size, padded_size = Demo.preprocess(pp)
                    
                    #images = torch.stack(list(pp.to(conf.device)))
                    #processed_frame = images
                    #frame = processed_frame

                    with torch.no_grad():
                        output = detector(processed_frame)
                        print(output)

                    #print(output["gesture"][0])
                    temppp = output["gesture"][0].tolist()
                    print(output["gesture"][0])
                    gesture =  temppp.index(max(temppp))
                    cv2.putText(frame, targets[gesture], (x_min, y_min - 10),
                                cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), thickness=3)
                
                fps = 1 / delta
                cnt += 1
        
                cv2.imshow("Frame", frame)
                key = cv2.waitKey(1)
                if key == ord('q'):
                    return
            else:
                cap.release()
                cv2.destroyAllWindows()
                
                
def _load_model(
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
    