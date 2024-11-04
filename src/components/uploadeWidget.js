import { useRef, useEffect } from "react";

export default function UploadWidget() {
  const cloudinaryRef = useRef();
  const widgetHandler = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log(cloudinaryRef.current);
    widgetHandler.current = cloudinaryRef.current.createUploadWidget({
      cloudName: "de2di2nn8",
      uploadPreset: "yedtv9o7",
      sources: [
        "local", // Allow uploading from local files
        "url", // Allow uploading from a URL
        "camera", // Allow uploading from the camera
        "google_drive", // Allow uploading from Google Drive
        "dropbox",
      ],
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
