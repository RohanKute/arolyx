import { useState } from "react";

export default function ImageSlider({ images, isBestSeller }) {
  const [currIndex, setCurrIndex] = useState(0);

  const changeToNext = () => {
    setCurrIndex((next) => (next < images.length - 1 ? next + 1 : 0));
  };

  const changeToPrev = () => {
    setCurrIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <div className="w-80 h-80  md:w-[499px] md:h-[499px] overflow-hidden  relative ">
      {isBestSeller &&
        <p className='bg-gradient-to-r absolute top-4 z-40 from-green-700 via-green-500 to-green-400  text-white p-1 w-44 text-xs font-semibold text-center'>
          BESTSELLER
        </p>
      }
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          className={`absolute inset-0 transition-opacity duration-700 rounded-t-lg   md:rounded-tr-none md:rounded-l-lg ease-in-out ${index === currIndex ? "opacity-100" : "opacity-0"
            }`}
          alt=""
        />
      ))}

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3.5 h-1 rounded-full ${index === currIndex ? "bg-gray-900" : "bg-gray-500"
              }`}
          ></div>
        ))}
      </div>

      <button
        className="p-2 absolute top-1/2 left-0 transform -translate-y-1/2 hover:scale-125"
        onClick={changeToPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-8 stroke-2 stroke-gray-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        className="p-2 absolute top-1/2 right-0 transform -translate-y-1/2 hover:scale-125"
        onClick={changeToNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-8 stroke-2 stroke-gray-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
