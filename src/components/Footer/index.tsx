

import React from "react";
import {FaVk, FaFacebookF, FaYoutube, FaItchIo} from  "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#3B2F2F] text-[#FFFFFF] py-6 px-4 text-center">
          <div className="flex justify-center gap-6 mb-4 text-xl">
            <div className="bg-white rounded-[35%]">
            <a href="https://vk.com/" aria-label="VK" className="hover:text-[#FFFFFF] p-4"><FaVk size={32} fill="black"/></a>
            </div>
            <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:text-[#FFFFFF]"><FaFacebookF size={32}/></a>
            <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:text-[#FFFFFF]"><FaYoutube size={32}/></a>
            <a href="https://itch.io/" aria-label="Itch.io" className="hover:text-[#FFFFFF]"><FaItchIo size={32}/></a>
        </div>
        
        <div className="font-montserrat text-white text-[12px] md:text-[16px] lg:text-[18px] text-center p-8 mx-3">
            <p>&copy; 2025.CounterCurrentGames.</p>
              <p>All rights to franchise belong to the original owner.Original Creator.
                  This Project was created as a part of our education at Futuregames and is not
                  intended for commercial use.We do not claim any ownership
                  of the original product. </p>
        </div>
      
    </footer>
    );
    }


export default Footer;