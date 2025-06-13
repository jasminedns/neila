'use client';
import { useState } from "react";
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import Image from "next/image";

const images = [
    '/images/test.jpg',
    '/images/test.jpg',
    '/images/test.jpg',
    '/images/test.jpg',
    '/images/test.jpg',
    '/images/test.jpg',
    '/images/test.jpg',
    '/images/test.jpg',
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
    <div className="w-full max-w-6xl mx-auto px-4">

      <div className="flex justify-between items-center mb-4">
        <button className="text-white text-3xl hover:scale-125 transition-transform">
          <IoArrowBack onClick={prev} />
        </button>
        <button  className="text-white text-3xl hover:scale-125 transition-transform">
          <IoArrowForward onClick={next} />
        </button>
      </div>

      {/* Bilder */}
      <div className="flex gap-4 overflow-hidden">
        {visibleImages.map((src, index) => (
          <div key={index} className="relative w-1/3 h-64 rounded-xl overflow-hidden">
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
    </div>
  );
};

export default ImageCarousel;