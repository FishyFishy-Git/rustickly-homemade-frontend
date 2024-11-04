import { useRef, useEffect } from "react";

export default function UploadWidget() {
  const cloudinaryRef = useRef();
  const widgetHandler = useRef();
  const cloudName = process.env.REACT_APP_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log(cloudinaryRef.current);
    widgetHandler.current = cloudinaryRef.current.createUploadWidget({
      cloudName,
      uploadPreset,
      sources: [
        "local", // Allow uploading from local files
        "url", // Allow uploading from a URL
        "camera", // Allow uploading from the camera
        "google_drive", // Allow uploading from Google Drive
        "dropbox",
      ],
      tags: "gallery",
    });
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
