import { SiItchdotio } from "react-icons/si";
import "@/app/globals.css";
import Mechanics_Element from "@/components/Mechanics_Element";
import HomePageLogo from "@/components/HomePageLogo";

export default function Home() { 
  return (
    <>
      <HomePageLogo />
      <h1 className="hidden">NEILA</h1>
      <div className="hp__button--link">
        <div className="mx-auto self-center">
          <div className="p-3 border-2 flex flex-row items-center justify-center gap-3 border-[#FFD700]/25 rounded-sm relative z-30">
            <SiItchdotio size={32} />
            <a href="#" target="_blank" className="hover:underline">Check it out on itcho.io now!</a>
          </div>
        </div>
      </div>
      <Mechanics_Element />
    </>
  );
}
