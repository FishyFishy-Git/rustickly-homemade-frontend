import { useRef, useEffect } from "react";

export default function UploadWidget() {
  const cloudinaryRef = useRef();
  const widgetHandler = useRef();
  const cloudName = process.env.REACT_APP_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;
  console.log(process.env.REACT_APP_CLOUD_NAME);

  useEffect(() => {
    if (window.cloudinary) {
      cloudinaryRef.current = window.cloudinary;
      console.log(cloudinaryRef.current);
      widgetHandler.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName,
          uploadPreset,
          sources: ["local", "url", "camera", "google_drive", "dropbox"],
          tags: ["portfolio"],
        },
        (error, result) => {
          if (error) {
            console.error("Upload Widget Error:", error);
          } else if (result.event === "success") {
            console.log("Upload successful:", result.info);
            console.log("Assigned Tags:", result.info.tags); // Check if tags were assigned
          }
        }
      );
    } else {
      console.error("Cloudinary library not found.");
    }
  }, []);
  return (
    <div className="widget-container">
      <button
        className="upload-widget"
        onClick={() => widgetHandler.current.open()}
      >
        Upload
      </button>
    </div>
  );
}
