function handleSubmit() {
    document.getElementById("imageInput").addEventListener("change", async function () {
        const file = this.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Upload failed");

            const result = await response.json();
            alert("Success: " + JSON.stringify(result));
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload image.");
        }
    });
}

// Attach event listener to the button
document.querySelector(".submit").addEventListener("click", handleSubmit);
