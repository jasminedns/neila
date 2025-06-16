import Image from "next/image"

const Out_Now_Div = () => {
    return (
        <>
        <div className="flex flex-col items-center text-center align-center pt-6">
            <p className="font-montserrat text-[14px] md:text-[20px] mx-12 md:mx-0">Out Now</p>
        
                <a href = "https://futuregames.itch.io/project-neila" className="flex justify-center">
                    <Image src="/out_now_no_arrows.png" alt="out_now" width={0} height={0} sizes="100vw"
                        className=" w-[100%]  md:w-[75%] lg:w-[50%] h-auto md:mx-12"></Image>
                </a>
        </div> 
                   
           
        </>
    )
}

export default Out_Now_Div