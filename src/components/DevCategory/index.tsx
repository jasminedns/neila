import { GoDeviceCameraVideo } from "react-icons/go";
import DevCard from "../DevCard";
import { dev } from "@/utils/types";

const DevCategory = () => {
    const uniqueCategory = [...new Set(dev.map(item => item.category))]

    return (
        <div className="my-6 mx-3">
            {uniqueCategory.map(category => (
                <div key={category} className={`${category.split(" ")[0].toLowerCase()} m-3`}>
                    <h2 className="text-center text-[#FFD700] text-2xl font-cinzel my-4">{category}</h2>
                    <div className="flex flex-row justify-evenly">
                        {dev.filter(item => item.category === category).map(person => (
                            <DevCard key={person.name} {...person}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DevCategory;