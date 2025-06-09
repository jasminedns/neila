

import React from "react";
import {FaVk, FaFacebookF, FaYoutube, FaItchIo} from  "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#3B2F2F] text-[#C1A35C] py-6 px-4 text-center">
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a href="#" aria-label="VK" className="hover:text-[#FF8C42]"><FaVk /></a>
        <a href="#" aria-label="Facebook" className="hover:text-[#FF8C42]"><FaFacebookF /></a>
        <a href="#" aria-label="YouTube" className="hover:text-[#FF8C42]"><FaYoutube /></a>
        <a href="#" aria-label="Itch.io" className="hover:text-[#FF8C42]"><FaItchIo /></a>
      </div>
      <p className="text-sm max-w-xl mx-auto text-[#A9A9A9]">
        © 2023, CounterCurrent Games. All rights to the franchise belong to the original owner. 
        This project was created as part of our education at Futuregames and is not intended for 
        commercial use. We do not claim any ownership of the original product.
      </p>
    </footer>
    );
    }


export default Footer;