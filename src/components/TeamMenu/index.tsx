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
            className="font-montserrat team_button w-32 text-center text-sm md:text-base p-2 rounded-sm bg-[#00000049] hover:bg-[#00000078] hover:font-bold cursor-pointer"
            onClick={() => category(cat)}
          >
            {cat}
          </p>
        ))}
      </div>

      {/* Mobile */}
     <div className="md:hidden z-50">
      <div className="flex flex-row-reverse items-center justify-center absolute top-[95%] sm:top-[92%] -translate-y-1/2 gap-2 w-full px-4 z-40">
       <div className="rounded-md py-3 w-[80vw] ml-1 sm:ml-2 overflow-x-auto">
        <div className="flex flex-nowrap gap-3 h-[32px] sm:h-[38px] px-2">
          {categories.map(cat => (
          <p key={cat} onClick={() => category(cat)}
            className="font-montserrat flex-shrink-0 sm:w-[120px] text-center text-[#fffb] text-[11px] sm:text-sm py-1 px-2 sm:py-2 sm:px-3 rounded-sm bg-[#00000049] hover:bg-[#00000078] border-[2px] border-[#ffd900af] transition"
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
