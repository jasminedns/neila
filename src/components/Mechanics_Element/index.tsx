import Image from "next/image"

const Mechanics_Element = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row m-4 sm:m-8 ">
                <div className="basis-[50%] justify-items-center md:justify-items-start">
                    <h5 className="font-cinzel text-[24px] m-4 sm:m-8">The Mechanics</h5>
                    <div className="font-montserrat font-thin text-[20px] m-4 sm:m-8">
                        <li className="my-4">Telekinetic Object Pickup & Throwing</li>
                        <li className="my-4">Object Attachment via Goop Mechanic</li>
                        <li className="my-4">Environmental Interaction Using Physics</li>
                        <li className="my-4">Zero-Gravity Gas Manipulation</li>
                        <li className="my-4">Enemy Avoidance & Prototype Combat</li>
                    </div>
                </div>

                <div className="basis-[50%] justify-items-center lg:justify-items-end">
                    <Image src="/images/Game_cover.png" alt="Game_cover" width={0} height={0} sizes="100vw"
                    className="w-[50%] sm:w-[30%] md:w-[70%] lg:w-[40%] h-auto m-4 sm:m-8"></Image>
                </div>
            </div>
        </>
    )
}

export default Mechanics_Element