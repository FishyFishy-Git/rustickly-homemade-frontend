import { useRef, useEffect } from "react";

export default function DynamicPhotos() {
  const containerRef = useRef(null);
  const cloudName = process.env.REACT_APP_CLOUD_NAME;
  console.log(cloudName);

  useEffect(() => {
    if (window && containerRef.current) {
      try {
        const galleryWidget = window.cloudinary.galleryWidget({
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
            columns: 1,
          },
        });

        // Auto-sliding functionality
        galleryWidget.render().then(() => {
          const autoSlideInterval = 3000; // Set the interval in milliseconds (3 seconds)
          console.log(galleryWidget);

          const slideImages = () => {
            const galleryContainer = containerRef.current.querySelector(
              ".scroll-viewer-wrap"
            );
            console.log(containerRef.current);
            if (galleryContainer) {
              const scrollWidth = galleryContainer.scrollWidth;
              const scrollLeft = galleryContainer.scrollLeft;
              const clientWidth = galleryContainer.clientWidth;
              const nextScrollLeft = (scrollLeft + clientWidth) % scrollWidth;

              galleryContainer.scrollTo({
                left: nextScrollLeft,
                behavior: "smooth",
              });
            }
          };

          const intervalId = setInterval(slideImages, autoSlideInterval);

          // Cleanup interval when the component unmounts
          return () => {
            clearInterval(intervalId);
          };
        });
      } catch (error) {
        console.error("Gallery widget JSON error:", error);
      }
    } else {
      console.error("Cloudinary library not loaded or container not found.");
    }
  }, [cloudName]);
  return (
    <div ref={containerRef} style={{ width: "250px", height: "250px" }}></div>
  );
}
