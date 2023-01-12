from demo import RUNNER
import cv2
# image_path, model_path, device
# 1. CHECK IF FILE EXISTS

import time
start = time.time()
frame = cv2.imread("3e40afc6-524b-4cf8-aa58-b6e21992d744.jpg")
print(RUNNER(frame, "SSDLite.pth"))
end = time.time()
print(end-start)