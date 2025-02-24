import { useEffect, useState } from "react";

export default function PickerMode() {
  const [openPicker, setOpenPicker] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      // Process the incoming message
      const { id, content, show } = event.data;
      console.log("id is " + id + " and content is " + content);

      // Check if the message has the expected structure
      if (id && content && content.imageUrl) {
        console.log("Image url sent to frontend from extension: ", content.imageUrl);

        // Send a response back to the extension
        const response = {
          id: "responseFromFrontend",
          status: "success",
          message: "Image URL received successfully",
        };
        window.parent.postMessage(response, "*"); // Send the response to the extension
      } else {
        console.warn("Unexpected message format:", event.data);
      }
    };

    // Add the event listener
    window.addEventListener("message", handleMessage);

    // Cleanup function
    return () => {
      console.log("Removing event listener");
      // Remove the event listener
      window.removeEventListener("message", handleMessage);

      // Optionally, send a final message to the extension when the component unmounts
      const finalMessage = {
        id: "componentUnmounted",
        message: "The component has unmounted",
      };
      window.parent.postMessage(finalMessage, "*");
    };
  }, []); // Empty dependency array ensures this runs only once

  const handlePickMeClick = () => {
    // Send a message to the extension when the PickMe button is clicked
    const message = {
      id: "finishedGeneration",
      message: "PickMe button was clicked",
    };
    window.parent.postMessage(message, "*");
  };

  const sendImageUrlToBackend = async (imageUrl) => {
    try {
      console.log("Sending image URL to backend:", imageUrl);
      // Replace the backend URL and endpoint as needed.
      const response = await fetch(
        `http://localhost:5000/get-image?url=${encodeURIComponent(imageUrl)}`
      );

      if (!response.ok) {
        console.error("Backend error:", response.statusText);
        return;
      }

      // Receive the image as a Blob
      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);

      // Set the image URL so it can be displayed
      setFetchedImage(imageObjectURL);
      console.log("Image fetched from backend and updated in state.");
    } catch (error) {
      console.error("Error sending image URL to backend:", error);
    }
  };

  return (
    <div className="flex flex-row-reverse bg-white">
      <div
        className="w-24 h-7 bg-black/80 rounded-full px-[6px] py-1 flex items-center justify-center gap-[2px]"
        onClick={handlePickMeClick} // Add onClick handler
      >
        <h1>PickMe</h1>
      </div>
    </div>
  );
}