import React, { useState } from 'react';


const images = [
  'http://res.cloudinary.com/duq3vm2lu/image/upload/v1719577304/arolyx/zdfckcs3il1gpvhislsg.jpg',
  'http://res.cloudinary.com/duq3vm2lu/image/upload/v1719577254/arolyx/rqbvgoejpvwsfgkn2718.jpg',
];

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-screen-lg mx-auto overflow-hidden relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
         move
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
move      </button>
      <div className="flex transition-transform duration-500 ease-in-out max-h-96">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-full ${index === currentImage ? 'block' : 'hidden'}`}
            src={image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
