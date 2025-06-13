'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { label: 'About the Game', href: '/' },
  { label: 'About the Team', href: '/about-the-team' },
  { label: 'Project Info', href: '/project-info' }
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative z-50">
        
      <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
         <div className="absolute top-12 right-[-35%] bg-black/80 w-64 shadow-lg p-4 flex flex-col space-y-3 font-montserrat border-[#FFD700] border-b-[4px]">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-center focus:text-[#FFD700] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
