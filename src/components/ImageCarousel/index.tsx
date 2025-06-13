'use client';
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Image from "next/image";

const images = [
  '/images/test.jpg',
  '/images/Dvider_01.png',
  '/images/test.jpg',
  '/images/Dvider_01.png',
  '/images/test.jpg',
  '/images/Dvider_01.png',
  '/images/test.jpg',
  '/images/Dvider_01.png',
];

const ImageCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex + 3 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + 3);

  return (
    <div className="relative w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 mb-20 px-4 overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center overflow-x-hidden px-4">
        <button onClick={prev} className="relative hover:scale-125 transition-transform hidden sm:block ml-0">
            <IoChevronBack size={42} color="gold" />
          </button>
          
      {/* Images */}

    {visibleImages.map((src, index) => (
      <div key={index} className="relative w-full sm:w-[500px] h-[260px] overflow-hidden border-2 border-[#FFD700]">
        <Image src={src} alt={`Image ${index}`} fill className="object-cover transition-transform hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw"/>
          </div>
    ))}
        <button onClick={next} className="relative hover:scale-125 transition-transform hidden sm:block mr-10">
        <IoChevronForward size={42} color="gold" />
          </button>

      </div>
   </div>
  );
};

export default ImageCarousel;
