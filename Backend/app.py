import tensorflow as tf
import numpy as np
from fastapi import FastAPI, File, UploadFile   
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from pydantic import BaseModel
from io import BytesIO

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or replace "*" with a list like ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # e.g., ["GET", "POST"]
    allow_headers=["*"],
)
# import our model

model = tf.keras.models.load_model('../Model/FoodImageClassifier.h5')

LABLES = ['Briyani', 'Butter_Chicken', 'Chaparti', 'Gulab_Jamun', 'Jalebi', 'Mysore_pak']
def preprocess(image):
  img = Image.open(image).convert('RGB')
  img = img.resize((224, 224))
  img_arr = np.array(img) / 255.0
  img_arr = np.expand_dims(img_arr, axis=0)
  return img_arr

@app.post("/")
def intial():
    return {"message": "model is running"}

@app.post("/predict")
async def predict (file: UploadFile = File(...)):
    print(f"Recived file {file.filename}")
    contens = await file.read()
    img = BytesIO(contens)
    img_arr = preprocess(img)

    pred = np.argmax(model.predict(img_arr))

    return {"message": f"The predict Image is {LABLES[pred]}"}


