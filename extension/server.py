import tensorflow as tf
import numpy as np
import flask
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# Load MobileNetV2 pre-trained model
model = tf.keras.applications.MobileNetV2(weights="imagenet")

# ImageNet Clothing-Related Class Labels
CLOTHING_LABELS = ["T-shirt", "jean", "suit", "coat", "dress", "trouser", "shirt", "jacket", "gown", "sari", "kimono", "abaya"]

def preprocess_image(image):
    image = image.resize((224, 224))  # Resize for MobileNetV2
    image = np.array(image) / 255.0  # Normalize
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image

@app.route("/classify", methods=["POST"])
def classify_image():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image_file = request.files["image"]
    print(image_file)
    image = Image.open(io.BytesIO(image_file.read()))

    processed_image = preprocess_image(image)
    predictions = model.predict(processed_image)

    # Decode predictions
    decoded_predictions = tf.keras.applications.mobilenet_v2.decode_predictions(predictions, top=3)[0]

    # Check if any prediction is clothing-related
    is_clothing = any(label in CLOTHING_LABELS for (_, label, _) in decoded_predictions)

    return jsonify({"isClothing": is_clothing, "predictions": decoded_predictions})

if __name__ == "__main__":
    print(tf.__version__)
    app.run(host="0.0.0.0", port=5000, debug=True)
