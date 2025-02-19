from flask import Flask, request, Response, jsonify
import requests
import time
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get-image', methods=['GET'])
def get_image():
    # Retrieve the image URL from the query parameter
    image_url = request.args.get('url')
    if not image_url:
        return jsonify({"error": "Missing 'url' parameter"}), 400

    # Print the received URL
    print(f"Received image URL: {image_url}")
    
    # Wait for 5 seconds
    print("Waiting for 5 seconds...")
    time.sleep(5)
    
    # Fetch the image from the provided URL
    try:
        print("Fetching image...")
        response = requests.get(image_url)
        response.raise_for_status()  # Raise an error for bad responses
    except Exception as e:
        print("Error fetching image:", e)
        return jsonify({"error": "Could not fetch image"}), 500

    # Print confirmation and return the image data
    print("Sending image back to client.")
    content_type = response.headers.get('Content-Type', 'image/jpeg')
    return Response(response.content, content_type=content_type)

if __name__ == "__main__":
    app.run(debug=True)
