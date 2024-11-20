import React from "react";
import UploadWidget from "../../components/UploadWidget";
import DisplayFunction from "../../components/AdminDisplayGallery";
import "./adminPortfolio.css";
import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";

function AdminPortfolio() {
  const { user } = useContext(AdminContext);

  if (!user) {
    return (
      <div className="content-container">
          <div className="no-auth">Cannot access, must be logged in.</div>
      </div>
    );
  } else {
    return (
      <div className="portfolio-container">
      <UploadWidget className="upload-widget" />
      <DisplayFunction className="display-gallery" />
      </div>
    );
  }
}

export default AdminPortfolio;
