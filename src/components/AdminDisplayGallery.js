import { useRef, useEffect, useState } from "react";
// import { MdDelete } from "react-icons/md";
import ReactDOM from "react-dom";
import "./adminDisplayGallery.css";

export default function DisplayFunction() {
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const cloudName = process.env.REACT_APP_CLOUD_NAME;

  async function destroyImage(publicID) {
    try {
      const res = await fetch(
        `http://localhost:4000/api/images/delete/${publicID}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      console.log("Delete response:", data);
      if (!res.ok) {
        console.error("Failed to delete image");
      } else {
        // Update images state to remove the deleted image
        setImages((prevImages) =>
          prevImages.filter((img) => img.public_id !== publicID)
        );
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  }

  useEffect(() => {
    if (window && containerRef.current) {
      try {
        // Create and store the widget instance
        const galleryWidget = window.cloudinary.galleryWidget({
          container: containerRef.current,
          cloudName: cloudName,
          mediaAssets: [{ tag: "portfolio" }],
          aspectRatio: "4:3",
          transformation: {
            crop: "fill",
            gravity: "auto",
          },
          displayProps: {
            mode: "expanded",
            spacing: 4,
            columns: 4,
          },
        });

        galleryWidget.render().then(() => {
          console.log("Gallery rendered");
          // Access the media assets to map the publicID
          const mediaAssets = galleryWidget.config.mediaAssets;

          // Query all image elements rendered by the widget
          const imageElements =
            containerRef.current.querySelectorAll(".assetWrapper");

          // Match each image element with its publicID based on index
          imageElements.forEach((imageElement, index) => {
            const publicID = mediaAssets[index]?.publicId; // Match by index

            if (publicID) {
              const deleteIconContainer = document.createElement("div");
              deleteIconContainer.className = "delete-icon";
              deleteIconContainer.style.position = "absolute";
              deleteIconContainer.style.bottom = "10px";
              deleteIconContainer.style.right = "10px";
              deleteIconContainer.style.cursor = "pointer";
              deleteIconContainer.style.zIndex = "100";

              // Add the delete icon
              const deleteIconElement = (
                // <MdDelete size={24} color="red" border-color="black" />
                'something'
              );

              // Render the React icon into the container
              ReactDOM.render(deleteIconElement, deleteIconContainer);

              deleteIconContainer.onclick = async (e) => {
                e.stopPropagation();
                console.log(
                  "Attempting to delete image with publicID:",
                  publicID
                ); // Log publicID
                try {
                  await destroyImage(publicID);
                  console.log(
                    "Image deleted successfully, removing element..."
                  );
                  imageElement.remove();
                } catch (error) {
                  console.error("Error while deleting image:", error);
                }
              };

              // Ensure the image has a relative container
              const wrapper =
                imageElement.closest(".assetWrapper") || imageElement;
              wrapper.style.position = "relative";

              // Append the delete icon to the wrapper
              wrapper.appendChild(deleteIconContainer);
            }
            console.log(imageElements);
          });
        });
      } catch (error) {
        console.error("Gallery widget initialization error:", error);
      }
    }
  }, [cloudName]);

  return (
    <div
      className="image-gallery"
      ref={containerRef}
      style={{ width: "1080px", height: "1080px" }}
    ></div>
  );
}
