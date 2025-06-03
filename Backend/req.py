import requests

url = "http://127.0.0.1:5000/predict"
file_path = "e:/PROJECT py/FOOD/FoodImageClassifier/Server/Backend/briyani.jpg"


with open(file_path, "rb") as f:
    files = {"file": ("briyani.jpg", f, "image/jpeg")}
    response = requests.post(url, files=files)

print("Status code:", response.status_code)

try:
    print("Response JSON:", response.json())
except ValueError:
    print("Response content (not JSON):", response.text)
