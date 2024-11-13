import React from "react";
import UploadWidget from "../../components/UploadWidget";
import DisplayFunction from "../../components/DisplayGallery";
import "./adminPortfolio.css";

function AdminPortfolio() {
  return (
    <div className="portfolio-container">
      <UploadWidget className="upload-widget" />
      <DisplayFunction className="display-gallery" />
    </div>
  );
}

export default AdminPortfolio;
