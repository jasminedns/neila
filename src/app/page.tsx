import { SiItchdotio } from "react-icons/si";
import "@/app/globals.css";
import BackgroundWrapper from "@/components/BackgroundWrapper/backgroundwrapper";

export default function Home() { 
  return (
    <BackgroundWrapper>
      <h1>NEILA</h1>
      <div className="hp__button--link">
        <div className="mx-auto self-center">
          <div className="p-3 border-2 flex flex-row items-center justify-center gap-3 border-[#FFD700]/25 rounded-sm relative z-30">
            <SiItchdotio size={32}/>
            <a href="#" target="_blank" className="hover:underline">Check it out on itcho.io now!</a>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
