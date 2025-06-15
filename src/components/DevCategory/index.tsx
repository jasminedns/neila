import DevCard from "../DevCard";
import { dev, devTypes } from "@/utils/types";

const DevCategory = ({ category }: devTypes) => {
    if (!category) return null;

    return (
        <div className="mt-8 lg:mx-3">
            <div key={category} className={`${category.split(" ")[0].toLowerCase()} m-2 lg:m-auto lg:w-[80%]`}>
                <h2 className="text-center text-[#FFD700] text-4xl font-cinzel my-6">{category}</h2>
                <div className="flex flex-row justify-evenly flex-wrap gap-4">
                    {dev.filter(item => item.category.toLowerCase() === category.toLowerCase()).map(person => (
                            <DevCard key={person.name} {...person} />
                        ))}
                </div>
            </div>
        </div>
    );
};
export default DevCategory;