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


def RUNNER(frame: str = None, path_to_model: str = "", device: str = "cpu") -> None:
    
    model = _load_model(os.path.expanduser(path_to_model),device)
    if model is not None:
        return Demo.run(model, num_hands=100, threshold=0.8, landmarks=False,frame=frame)        
    else:
        return ["NO MODEL"]
