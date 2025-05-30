# 🍽️ Food Image Classifier

A Convolutional Neural Network (CNN)-based image classification project for identifying Indian food dishes using TensorFlow/Keras.

# 📂 Dataset

- ### Structure
  > /data/ \
  >  &nbsp;&nbsp;&nbsp;&nbsp;Briyani/\
  >  &nbsp;&nbsp;&nbsp;&nbsp;Butter_chicken/\
  >  &nbsp;&nbsp;&nbsp;&nbsp;Chapati/\
  >  &nbsp;&nbsp;&nbsp;&nbsp;Gulab_jamun/\
  >  &nbsp;&nbsp;&nbsp;&nbsp;Jelabi/\
  >  &nbsp;&nbsp;&nbsp;&nbsp;Mysore_pak/
- ### Format : RGB images
- ### Image Size : Resized to 224 x 224
- ### Total Classes : 6

# 🧠 Model Architecture

Transfer learning (MobileNetV2) with custom dense layers at the end

    - MobileNetV2 as input
    - Dense layer (128)
    - Dense layer as output (6)

- Loss Function: categorical_crossentropy
- Optimizer: Adam
- Metrics: Accuracy
- Epochs: 50

# 📊 Results

- Final Validation Accuracy: ~ 96 %

- Model saved as: FoodImageClassifier.h5

- Includes accuracy and loss plots

# 📦 Requirements

- Python 3.8+
- TensorFlow 2.x
- NumPy
- Image from PIL
- Path from pathlib
- Matplotlib
- sklearn

# ▶️ How to Run

1. Clone this repo:
   > git clone https://github.com/yourusername/FoodImageClassifier.git\
   > cd FoodImageClassifier
2. Install dependencies:
   > pip install -r requirements.txt
3. Run this notebook:
   > jupyter notebook FoodImageClassifier.ipynb

# 📁 Files Included

- FoodImageClassifier.ipynb – Model training and evaluation

- FoodImageClassifier_2.h5 – Trained custom CNN model

- Custom prediction logic
# 🛠️ For Custom images 
upload the images in the root directory and run the 'Custom image' cell
it will process the image and give results 