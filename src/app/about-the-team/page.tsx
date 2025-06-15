'use client'

import TeamIntro from "@/components/TeamIntro";
import DevCategory from "@/components/DevCategory";
import Team_Page_pragraph from "@/components/Team_Page_Paragraph";
import { useState } from "react";

const AboutTheTeam = () => {
    const [chosenCat, SetChosenCat] = useState<string | null>(null);

    const handleClick = (category: string) => {
        SetChosenCat(category)
    }

    return (
        <>
            <TeamIntro clickedCat={handleClick} chosenCategory={chosenCat} />
            {chosenCat && <DevCategory category={chosenCat} name={""} role={[]} />}
            <Team_Page_pragraph />
        </>        
    )
}

export default AboutTheTeam;