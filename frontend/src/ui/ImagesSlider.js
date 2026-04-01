
import React, { useState, useEffect } from "react";
import "./ImagesSlider.css";

export default function ImagesSlider({ images, children }) {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider">
      
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="slide"
          className={`slide ${index === current ? "active" : ""}`}
        />
      ))}

      {/* Overlay content */}
      <div className="overlay">
        {children}
      </div>

      {/* Buttons */}
      {/* <button className="prev" onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}>❮</button>
      <button className="next" onClick={() => setCurrent((current + 1) % images.length)}>❯</button> */}
    </div>
  );
}