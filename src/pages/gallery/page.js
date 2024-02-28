"use client";
import React from "react";
import { useEffect, useState } from "react";
import "./page.scss";
import { Helmet } from "react-helmet";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>ACM Gallery | Bharati Vidyapeeth ACM Student Chapter</title>
      </Helmet>
      <div className="p-10 shadow-inner shadow-lg">
        <span
          className="text-blue-400 text-2xl md:text-4xl font-bold md:pl-8"
          style={{ fontFamily: "Fredoka" }}
        >
          ACM Student Chapter Gallery
        </span>
      </div>
      <div className="gallery">
        <div className="masonry">
          {images.map((item) => (
            <div key={item.id} className="mItem">
              <button onClick={() => handleImageClick(item.download_url)}>
                <img src={item.download_url} alt={`${item.id}`} />
              </button>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="imageViewer" onClick={handleCloseViewer}>
            <div className="imageContainer">
              <img src={selectedImage} alt="selected" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
