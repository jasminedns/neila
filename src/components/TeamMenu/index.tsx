'use client';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TfiControlBackward } from "react-icons/tfi";

interface TeamMenuTypes {
  category: (cat: string) => void;
  chosenCat: string | null;
}

const TeamMenu = ({ category }: TeamMenuTypes) => {
  const [open, setOpen] = useState(false);
  const categories = ["Designers", "Artists", "Programmers", "Managers", "Front End"];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-6 py-6 absolute bottom-5 left-1/2 transform -translate-x-1/2 mt-160 z-10">
        {categories.map(cat => (
          <p
            key={cat}
            className="font-montserrat team_button w-32 text-center font-montserrat text-sm md:text-base p-2 rounded-sm bg-[#00000049] hover:bg-[#00000078] hover:font-bold cursor-pointer"
            onClick={() => category(cat)}
          >
            {cat}
          </p>
        ))}
      </div>

      {/* Mobile */}
<div className="md:hidden relative z-50">
  <div className="flex flex-row-reverse items-center justify-end transform translate-y-[75vh] gap-2 w-full px-4">
    
    {/* Toggle button – behåller pilen till höger */}
    <div className="absolute ml-12 right-2">
    <button
      onClick={() => setOpen(!open)}
      className="p-2 rounded-full bg-black shadow-lg"
    >
      {open ? (
        <ChevronRight className="text-yellow-400 w-6 h-6 animate-pulse" />
      ) : (
        <TfiControlBackward className="text-yellow-400 w-6 h-6 animate-pulse" />
      )}
    </button>
    </div>

    {/* Animated responsive menu */}
    <div
      className={`
        transition-transform duration-500 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'}
          rounded-md px-3 py-3 w-[80vw] ml-4
      `}
    >
      <div className="flex flex-wrap justify-center gap-3 -mt-3 sm:mt-0 mx-auto w-auto ">
        {categories.map(cat => (
          <p
            key={cat}
            onClick={() => {
              category(cat);
              setOpen(false);
            }}
            className="sm:w-[120px] text-center text-white font-semibold text-[11px] sm:text-sm py-1 px-2 sm:py-2 sm:px-3 rounded-sm bg-[#00000078] hover:bg-yellow-500 hover:text-black transition"
          >
            {cat}
          </p>
        ))}
      </div>
    </div>

  </div>
</div>

    </>
  );
};

export default TeamMenu;
