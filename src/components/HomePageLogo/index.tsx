
import Image from 'next/image';
import React from 'react';

const HomePageLogo = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/Neila_full_background.png" 
        alt="Homepage Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/Background_logo.png"
          alt="Steam Wrecked Logo"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HomePageLogo;
