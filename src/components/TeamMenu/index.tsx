'use client';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      <div className="hidden md:flex justify-around text-white min-w-full">
        {categories.map(cat => (
          <p
            key={cat}
            className="font-montserrat team_button md:mr-5 text-xs md:text-xl p-2 rounded-sm hover:cursor-pointer hover:font-bold bg-[#00000049] hover:bg-[#00000078]"
            onClick={() => category(cat)}
          >
            {cat}
          </p>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden relative z-50">
        <div className="flex flex-row-reverse items-center justify-end transform translate-y-[75vh] gap-2 w-full pr-4">
          {/* Toggle button */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full bg-black shadow-lg"
          >
            {open ? (
              <ChevronRight className="text-yellow-400 w-6 h-6 animate-pulse" />
            ) : (
              <ChevronLeft className="text-yellow-400 w-6 h-6 animate-pulse" />
            )}
          </button>

          {/* Animated responsive menu */}
          <div
            className={`
              flex flex-row flex-nowrap gap-2 w-full overflow-x-auto p-2 rounded-md transition-transform duration-500 ease-in-out
              ${open ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            {categories.map(cat => (
              <p
                key={cat}
                onClick={() => {
                  category(cat);
                  setOpen(false);
                }}
                className="whitespace-nowrap text-white font-semibold px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-base rounded-md bg-[#111111cc] hover:bg-yellow-500 transition"
              >
                {cat}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMenu;
