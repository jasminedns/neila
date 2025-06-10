import { ReactNode } from "react";

export default function BackgroundWrapper({ children }: { children: ReactNode }) {
  return (
    <div 
      className="min-h-screen w-full bg-repeat-y bg-top bg-[length:100%_auto]"
      style={{backgroundImage: "url('/images/Background_dvider.png')"}}
    >
      {children}
    </div>
  );
}