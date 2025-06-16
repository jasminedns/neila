import DevCard from "../DevCard";
import { dev } from "@/utils/types";

const DevCategory = () => {
    const uniqueCategory = [...new Set(dev.map(item => item.category))]

    return (
        <div className="mt-8 lg:mx-3">
            {uniqueCategory.map(category => (
                <div key={category} className={`${category.split(" ")[0].toLowerCase()} m-2 lg:m-auto lg:w-[80%]`}>
                    <h2 className="text-center text-[#FFD700] text-4xl font-cinzel my-6">{category}</h2>
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