import React from 'react';
import { Carousel } from "@material-tailwind/react";

export default function ImageSlider({ images }) {
  return (
    <Carousel
      className="w-80 h-80 md:w-96 md:h-96 mx-auto"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => (
        <img
          key={index}
          className="w-80 h-80 md:h-96 md:w-96 object-cover"
          src={image.url}
          alt={`Slide ${index}`}
        />
      ))}
    </Carousel>
  );
}
