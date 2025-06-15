interface TeamMenuTypes {
    category: (cat: string) => void;
    chosenCat: string | null;
}

const TeamMenu = ({ category }: TeamMenuTypes) => {
    const categories = ["Designers", "Artists", "Programmers", "Managers", "Front End"];

    return (
        <div className="flex justify-around text-white min-w-full">
            {categories.map(cat => (
                <p 
                    key={cat}
                    className="font-montserrat team_button md:mr-5 text-xs md:text-xl p-2 rounded-sm hover:cursor-pointer hover:font-bold bg-[#00000049] hover:bg-[#00000078]"
                    onClick={() => category(cat)}
                >
                    {cat}
                </p>
            ))}
        </div>
    )
}

export default TeamMenu;