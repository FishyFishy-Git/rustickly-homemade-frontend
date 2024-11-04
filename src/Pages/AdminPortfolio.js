import React from "react";
import { useEffect, useState } from "react";
import CldImage from "../components/CloudImage";
import UploadWidget from "../components/uploadeWidget";

function AdminPortfolio() {
  const [photos, setPhotos] = useState("");
  const [loading, setLoading] = useState(true);
  const cloudName = process.env.REACT_APP_CLOUD_NAME;

  console.log(`https://res.cloudinary.com/${cloudName}/image/list/`);
  const Data = async () => {
    const res = await fetch(
      `https://res.cloudinary.com/${cloudName}/image/list/`
    );
    const data = await res.json();
    setPhotos(data);
    setLoading(false);
  };
  useEffect(() => {
    Data("myphotoalbum-react");
  }, []);
  return (
    <div>
      <UploadWidget />
      {loading && <p className="loading">Loading gallery</p>}
      {!loading && photos.length !== 0 ? (
        <div className="gallery">
          {photos.resources.map((photo, idx) => {
            return (
              <div className="photos" key={idx}>
                <CldImage publicId={photo.public_id} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="error">
          No photos to list. Please make sure that you have uploaded some images
          using this app.
        </p>
      )}
    </div>
  );
}

export default AdminPortfolio;
