'use client';

import { devTypes } from "@/utils/types"

const DevCard = ({name, category, role}:devTypes) => {
    return (
        <> 
            <div className="flex flex-col m-[24px] font-montserrat md:mx-[8px] lg:m-[48px]">
                <div className="border-3 border-[#FFD700] min-w-[289px] min-h-[146px] p-4 rounded-xl devCard__image--container flex flex-col items-center justify-center">
                    {name && name === "Priyadharshini Seetha Ram" 
                        ? 
                            <div className="flex flex-col flex-wrap items-center text-xl m-2 font-bold font-cinzel">
                                <h2>{name.split(" ")[0]}</h2>
                                <h2>{name.split(" ")[1]} {name.split(" ")[2]}</h2>
                            </div>
                        : 
                            <div className="flex flex-col flex-wrap items-center text-xl m-2 font-bold font-cinzel">
                                <h2>{name.split(" ")[0]} {name.split(" ")[1]}</h2>
                                <h2>{name.split(" ")[2]}</h2>
                            </div>
                    }
                    <div>
                        {role && role.map((item:string, index:number) => (
                            <p key={index} className="uppercase text-center mt-2">{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DevCard;