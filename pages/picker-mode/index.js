import { useEffect , useState} from "react";


export default function pickerMode() {
    const [fetchedImage, setFetchedImage] = useState(null);

    useEffect(() => {
        const handleMessage = (event) => {
         //console.log("Received message from:", event.origin, event.data);
          // OPTIONAL: Check event.origin to confirm the sender is trusted
        //   const trustedOrigin = "chrome-extension://kdhjiaombocakfdmpbdebjaejaclaghh"; // replace with the actual origin
        //   if (event.origin !== trustedOrigin) { 
        //     console.warn("Untrusted origin: ", event.origin);
        //     return;
        //   }
    
          // Ensure the message has the expected structure
          const { id, content , show } = event.data;
          if (id && content && content.imageUrl ) {
            sendImageUrlToBackend(content.imageUrl);
            console.log("Image url sended to frontend from extension : ", content.imageUrl);
            //console.log("Received id:", id, "with content:", content);
            // You can update state or perform any other actions here
          } else {
            console.warn("Unexpected message format:", event.data);
          }
        };
    
        window.addEventListener("message", handleMessage);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("message", handleMessage);
        };
      }, []);


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
      <div className="w-24 h-7 bg-black/80 rounded-full px-[6px] py-1 flex items-center justify-center gap-[2px]">
      <h1>PickMe</h1>
      </div>

      {/* Display the image once it's been fetched
      {fetchedImage && (
        <div className="mt-4">
          <h2>Fetched Image:</h2>
          <img src={fetchedImage} alt="Fetched from backend" className="max-w-full h-auto" />
        </div>
      )} */}
    </div>
  );
}