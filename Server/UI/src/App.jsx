// src/App.jsx
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null); // store actual File object
  const [preview, setPreview] = useState(null); // for base64 preview
  const [response, setResponse] = useState("");

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);  // save file object

      // create base64 preview
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handlePredict = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);  // send actual File object

    try {
      const res = await axios.post("http://localhost:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponse(res.data.message);
    } catch (error) {
      setResponse("Cannot get response, try after some time");
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1>Food Image Recognizer</h1>
      <label className="upload-box">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview ? (
          <img src={preview} alt="Uploaded Preview" />
        ) : (
          <span>Click to upload image</span>
        )}
      </label>
      {file && (
        <button className="predict-button" onClick={handlePredict}>
          Predict
        </button>
      )}
      {response && (
        <div className="response">
          <h1>Response</h1>
          <span>{response}</span>
        </div>
      )}
    </div>
  );
}

export default App;
