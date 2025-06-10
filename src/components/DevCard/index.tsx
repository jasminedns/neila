'use client';

import { devTypes } from "@/utils/types"

const DevCard = ({name, category, role, image }:devTypes) => {
    return (
        <> 
            <div className="flex flex-col m-3">
                <div className="border-3 border-[#FFD700] w-[100%] devCard__image--container">
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-[200px] h-[200px]"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/devs/unknown.jpg'; }} 
                    />
                </div>
                <div className="flex flex-col items-center text-xl">
                    <h2 className="text-center">{name.split(" ")[0]} {name.split(" ")[1]}</h2>
                    <h2>{name.split(" ")[2]}</h2>
                </div>
            </div>
        </>
    )
}

export default DevCard;