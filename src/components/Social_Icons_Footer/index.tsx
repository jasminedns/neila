import {FaVk, FaFacebookF, FaYoutube, FaItchIo} from  "react-icons/fa";

const Social_Icons_Footer =() => {
    return (
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
    )
}

export default Social_Icons_Footer
