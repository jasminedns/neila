import Image from "next/image"

const Out_Now_Div = () => {
    return (
        <>
            <div className="bg-[linear-gradient(38deg,_rgba(8,8,8,1)_0%,_rgba(0,0,0,1)_51%,_rgba(87,83,66,1)_90%,_rgba(145,122,71,1)_97%)]">
                <div className="flex flex-col items-center align-center p-6">
                    <p className="font-montserrat">Out Now</p>
                    <Image src="/out_now_no_arrows.png" alt="out_now" width={0} height={0} sizes="100vw"
                        className="w-[35%] sm:w-[25%] md:w-[15%] h-auto"></Image>
                </div>     
            </div>
        </>
    )
}

export default Out_Now_Div