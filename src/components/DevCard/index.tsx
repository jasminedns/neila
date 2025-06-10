'use client';

import { devTypes } from "@/utils/types"

const DevCard = ({name, category, role, image }:devTypes) => {
    return (
        <> 
            <div className="flex flex-col m-[24px] font-montserrat md:m-[48px]">
                <div className="border-3 border-[#FFD700] w-[100%] devCard__image--container">
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-[200px] h-[200px]"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/devs/unknown.jpg'; }} 
                    />
                </div>
                {name && name === "Priyadharshini Seetha Ram" 
                    ? 
                        <div className="flex flex-col flex-wrap items-center text-xl mt-2">
                            <h2>{name.split(" ")[0]}</h2>
                            <h2>{name.split(" ")[1]} {name.split(" ")[2]}</h2>
                        </div>
                    : 
                        <div className="flex flex-col flex-wrap items-center text-xl mt-2">
                            <h2>{name.split(" ")[0]} {name.split(" ")[1]}</h2>
                            <h2>{name.split(" ")[2]}</h2>
                        </div>
                }
            </div>
        </>
    )
}

export default DevCard;