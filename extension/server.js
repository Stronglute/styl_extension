const express = require("express");
const multer = require("multer");
const cors = require("cors");
const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Set up Multer for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Load the model once when the server starts
let model;
(async function loadModel() {
  console.log("Loading model...");
  model = await tf.loadLayersModel("https://tfhub.dev/google/tfjs-model/mobilenet_v2_130_224/classification/3/default/1");
  console.log("Model loaded successfully!");
})();

// Function to classify the image
async function classifyImage(imageBuffer) {
  const imageTensor = tf.node
    .decodeImage(imageBuffer)
    .resizeNearestNeighbor([224, 224])
    .expandDims()
    .toFloat()
    .div(255.0);

  const predictions = model.predict(imageTensor);
  const predictionData = predictions.dataSync();
  const topPrediction = predictionData.indexOf(Math.max(...predictionData));

  // Assuming clothing class indices are between 400 and 600
  const isClothing = topPrediction > 400 && topPrediction < 600;

  return isClothing;
}

// API Route to handle image classification
app.post("/classify", upload.single("image"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No image provided" });

  try {
    const isClothing = await classifyImage(req.file.buffer);
    res.json({ isClothing });
  } catch (error) {
    console.error("Classification error:", error);
    res.status(500).json({ error: "Failed to classify image" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
