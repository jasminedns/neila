import { SiItchdotio } from "react-icons/si";
import TrailerSection from "@/components/TrailerSection";

export default function Home() {
  return (
    <>
      <h1>NEILA</h1>
      <div className="hp__button--link">
        <div className="mx-auto self-center">
          <div className="p-3 border-2 flex flex-row items-center justify-center gap-3 border-[#FFD700]/25 rounded-sm relative z-30">
            <SiItchdotio size={32}/>
            <a href="#" target="_blank" className="hover:underline">Check it out on itcho.io now!</a>
          </div>
          <TrailerSection />
        </div>
      </div>
    </>
  );     
}
