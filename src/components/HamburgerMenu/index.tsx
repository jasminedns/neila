'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { label: 'About the Game', href: '/game' },
  { label: 'About the Team', href: '/team' },
  { label: 'Project Info', href: '/project' },
  { label: 'Developers', href: '/team/developers' },
  { label: 'Designers', href: '/team/designers' },
  { label: 'Artists', href: '/team/artists' },
  { label: 'Managers', href: '/team/managers' },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative z-50">
        
      <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-[#101010]/90 w-64 shadow-lg rounded p-4 flex flex-col space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-[#FFD700] transition-colors duration-200"
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
