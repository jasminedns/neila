import Image from 'next/image';
import React from 'react';

const HomePageLogo = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/Neila_full_background.png"
        alt="Homepage Background"
        fill
        className="object-cover"
        priority
      />
      
    </div>
  );
};

export default HomePageLogo;
