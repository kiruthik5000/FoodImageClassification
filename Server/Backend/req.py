import requests

url = "http://127.0.0.1:5000/predict"
file_path = "./server/backend/jalebi.jpg"

with open(file_path, "rb") as f:
    files = {"file": (file_path, f, "image/jpeg")}
    response = requests.post(url, files=files)

print(response.status_code)
print(response.json())
