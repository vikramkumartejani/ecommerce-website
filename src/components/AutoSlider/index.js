import React, { useState, useEffect } from "react";
import "./AutoSlider.css";

const images = [
  require("../../assets/slider-img-1.webp"),
  require("../../assets/slider-img-2.webp"),
  require("../../assets/slider-img-3.webp"),
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="carousel max-width">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt='Slider'
          style={{
            transform: `translateX(${(index - currentImage) * 100}%)`,
            display: index === currentImage ? "block" : "none",
          }}
        />
      ))}
    </section>
  );
};

export default Carousel;
