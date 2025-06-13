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
    <div className="w-full flex justify-center items-center gap-4 mt-10 mb-20">
      <button onClick={prev} className="hover:scale-125 transition-transform">
        <IoChevronBack size={42} color="gold" />
      </button>
      <div className="flex gap-4">
        {visibleImages.map((src, index) => (
          <div
            key={index}
            className="relative w-[400px] h-60 overflow-hidden border-2 border-[#FFD700]"
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
      <button onClick={next} className="hover:scale-125 transition-transform">
        <IoChevronForward size={42} color="gold" />
      </button>
    </div>
  );
};

export default ImageCarousel;
