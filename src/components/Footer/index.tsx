

import React from "react";
import {FaVk, FaFacebookF, FaYoutube, FaItchIo} from  "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#3B2F2F] text-[#FFFFFF] py-6 px-4 text-center">
          <div className="flex justify-center gap-6 mb-4 text-xl">
            <div className="bg-white rounded-[45%]">
              <a href="https://vk.com/" aria-label="VK" className="hover:text-[#FFFFFF] ">
                <FaVk size={28} fill="black" className="m-2"/></a>
            </div>
            <div className="bg-white rounded-[45%] ">
              <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:text-[#FFFFFF]">
              <FaFacebookF size={28} fill="black" className="m-2"/></a>
            </div>
            <div className="bg-white rounded-[45%] ">
              <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:text-[#FFFFFF]">
              <FaYoutube size={28} fill="black" className="m-2"/></a>
            </div>
            <div className="bg-white rounded-[45%] ">
              <a href="https://itch.io/" aria-label="Itch.io" className="hover:text-[#FFFFFF]">
              <FaItchIo size={28} fill="black" className="m-2"/></a>
          </div>
        </div>
        
        <div className="font-montserrat text-white text-[12px] md:text-[16px] lg:text-[18px]  p-4 md:p-8 mx-1 md:mx-3 text-justify">
            <p className="text-center">&copy; 2025.CounterCurrentGames.</p>
              <p className="text-center">All rights to franchise belong to the original owner.Original Creator.
                  This Project was created as a part of our education at Futuregames and is not
                  intended for commercial use.We do not claim any ownership
                  of the original product. </p>
        </div>
      
    </footer>
    );
    }


export default Footer;