# Drishti Smart Glasses - Camera Test
# Placeholder for Avishkaar submission

import cv2

print("Starting Camera Test...")

cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Camera not detected.")
    exit()

while True:
    ret, frame = cap.read()
    if not ret:
        print("Failed to grab frame.")
        break
    
    cv2.imshow("Camera Feed - Drishti Glasses", frame)

    if cv2.waitKey(1) == 27:  # ESC to exit
        break

cap.release()
cv2.destroyAllWindows()
