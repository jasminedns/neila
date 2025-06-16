
import { SiItchdotio } from "react-icons/si";
import "@/app/globals.css";

import TrailerSection from "@/components/TrailerSection";

import StoryElement from "@/components/StoryElement";
import HomePageLogo from "@/components/HomePageLogo";
import Mechanics_Element from "@/components/Mechanics_Element";


export default function Home() { 
  return (
    <>
      <h1>NEILA</h1>

      <div className="hp__button--link">
        <HomePageLogo />
      </div> {/* This closing tag was missing! */}

      <div className="absolute bottom-0 md:top-[74%] lg:top-[74%] w-full min-h-[248px] flex justify-center bg-cover bg-[url('/border.png')] bg-[position:100%_5%] z-10">
        <div className="mx-auto self-center">
          <div className="p-3 border-2 flex flex-row items-center justify-center bg-[#FFD700]/5 shadow-xl team_button gap-3 border-[#FFD700] rounded-sm relative z-30">
            <SiItchdotio size={32} fill="white"/>
            <a href="#" target="_blank" className="hover:underline font-montserrat">Check it out on itcho.io now!</a>
          </div>
        </div>
      </div>

      <TrailerSection />
      <StoryElement/>
      <Mechanics_Element />
    </>
  );
}
