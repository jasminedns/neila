'use client';
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Image from "next/image";

const images = [
  '/images/first-slide.png',
  '/images/second-slide.png',
  '/images/third-slide.png',
  '/images/first-slide.png',
  '/images/second-slide.png',
  '/images/third-slide.png'
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
    <>
      {/* Mobile Buttons */}
      <div className="flex justify-center gap-6 mb-4 mt-[270px] md:hidden">
        {startIndex !== 0 && 
          <IoChevronBack size={42} color="gold" onClick={prev} className="hover:scale-125 transition-transform min-md:hidden"/>
        }
        {
          startIndex !== 3 &&
          <IoChevronForward size={42} color="gold" onClick={next} className="hover:scale-125 transition-transform min-md:hidden"/>
        }
      </div>

      {/* Desktop Layout */}
      <div className="relative w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 mb-20 px-4 overflow-x-hidden md:mt-[300px] lg:mt-[400px]">
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center overflow-x-hidden px-4">

          {/* Desktop Left Button */}
          {startIndex !== 0 && 
            <IoChevronBack size={42} color="gold" onClick={prev} className="hover:scale-125 transition-transform hidden md:block"/>
          }

          {/* Images */}
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[500px] h-[260px] overflow-hidden border-2 border-[#FFD700]">
              <Image
                src={src}
                alt={`Image ${index}`}
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
          ))}

          {/* Desktop Right Button */}
          {
            startIndex !== 3 &&
            <IoChevronForward size={42} color="gold" onClick={next} className="hover:scale-125 transition-transform hidden md:block"/>
          }
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
