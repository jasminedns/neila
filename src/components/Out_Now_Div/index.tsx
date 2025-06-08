import Image from "next/image"
import { FaVk, FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";


const Out_Now_Div = () => {
    return (
        <>
            <div className="bg-[linear-gradient(38deg,_rgba(8,8,8,1)_0%,_rgba(0,0,0,1)_51%,_rgba(87,83,66,1)_90%,_rgba(145,122,71,1)_97%)]">
                <div className="flex justify-center p-6">
                <Image src="/out_now.png" alt="out_now" width={0} height={0} sizes="100vw"
                className="w-[15%] h-auto"></Image>
                </div>
                <div className="flex justify-center mt-0">
                <div className="flex justify-between p-4">
                    <div className="social_icon_container">
                    <FaVk size={48} className="social_icon"/>
                    </div>
                    <div className="social_icon_container">
                    <FaFacebookF size={48} className="social_icon"/>
                    </div> 

                    <div className="social_icon_container">
                    <FaYoutube size={48} className="social_icon"/>
                    </div> 

                    <div className="social_icon_container">
                    <SiItchdotio size={48} className="social_icon"/>
                    </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Out_Now_Div