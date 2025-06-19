import { SiItchdotio } from "react-icons/si";
import "@/app/globals.css";
import Mechanics_Element from "@/components/Mechanics_Element";
import HomePageLogo from "@/components/HomePageLogo";
import StoryElement from "@/components/StoryElement";

export default function Home() { 
  return (
    <>
      <div className="hp__button--link">
        <HomePageLogo />
      </div> 

      <div className="absolute bottom-0 md:top-[74%] lg:top-[74%] w-full min-h-[248px] flex justify-center bg-cover bg-[url('/border.png')] bg-[position:100%_5%] z-10 top-goldimage top-goldimage-portrait">

        <div className="mx-auto self-center">
          <div className="p-3 border-2 flex flex-row items-center sm:top[10px] justify-center  bg-[#FFD700]/5 shadow-xl team_button gap-3 border-[#FFD700] rounded-sm relative z-30">
            <SiItchdotio size={32} fill="white"/>
           <a href="https://futuregames.itch.io/project-neila" target="_blank" className="hover:underline font-montserrat text-base md:text-[20px] lg:text-[20px]">
              Check it out on itcho.io now!
            </a>
          </div>
        </div>
      </div>
      <StoryElement/>
      
      <Mechanics_Element />
    </>
  );
}
