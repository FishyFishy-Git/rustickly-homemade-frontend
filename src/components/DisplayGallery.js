import { useRef, useEffect } from "react";

export default function DisplayFunction() {
  const containerRef = useRef(null);
  const cloudName = process.env.REACT_APP_CLOUD_NAME;
  console.log(cloudName);

  useEffect(() => {
    if (window && containerRef.current) {
      try {
        window.cloudinary
          .galleryWidget({
            container: containerRef.current,
            cloudName: cloudName,
            mediaAssets: [{ tag: "portfolio" }],
            aspectRatio: "4:3",
            transformation: {
              crop: "fill",
              gravity: "auto", // Centering the crop if needed
            },
            displayProps: {
              mode: "expanded",
              spacing: 4,
              columns: 4,
            },
            zoomProps: {
              type: "popup",
              trigger: "click"
            },
            carouselStyle: "thumbnails", // default value: included for clarity
            carouselLocation: "left", // default value: included for clarity
            viewportBreakpoints: [
              {
                breakpoint: 1600,
                displayProps: {
                  columns: 2
                },
                carouselStyle: "none"
              },
              {
                breakpoint: 800,
                displayProps: {
                  columns: 1
                },
                carouselStyle: "none"
              },
            ],

          })
          .render();
        console.log(window.cloudinary);
      } catch (error) {
        console.error("Gallery widget JSON error:", error);
      }
    } else {
      console.error("Cloudinary library not loaded or container not found.");
    }
  }, []);
  return (
    <>
      <div
        ref={containerRef}
        style={{ width: "80vw", maxWidth: "70rem" }}
      ></div>
    </>
  );
}
