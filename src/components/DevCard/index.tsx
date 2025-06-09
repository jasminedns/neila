import { dev, devTypes } from "@/utils/types"
import Image from "next/image";

const DevCard = () => {
    return (
        <>
            {dev.map((item:devTypes, index:number) => (
                <div className="flex flex-col m-3 items-center">
                    <div className="border-3 border-[#FFD700] w-[15%] devCard__image--container">
                        <Image src={item.image} alt={item.name} height={250} width={300}/>
                    </div>
                    <h2 key={index} className="">{item.name}</h2>
                </div>
            ))}
        </>
    )
}

export default DevCard;