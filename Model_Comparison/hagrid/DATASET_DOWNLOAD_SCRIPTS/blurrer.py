import cv2
import numpy as np
import sys
    
import glob
kernel_size_input = int(sys.argv[1])


jpgFilenamesList = glob.glob('*.jpg')
#print(jpgFilenamesList)
for i in jpgFilenamesList:
    img = cv2.imread(i)
  
    # Specify the kernel size.
    # can try increase this, the more the motion.
    kernel_size = kernel_size_input #############

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

    # Apply the vertical kernel.
    vertical_mb = cv2.filter2D(img, -1, kernel_v)

    # Apply the horizontal kernel.
    horizonal_mb = cv2.filter2D(img, -1, kernel_h)

    # Save the outputs.
    #vertical motion blur
    #cv2.imwrite(i, vertical_mb)
    #horizontal motion blur
    cv2.imwrite(i, horizonal_mb)

