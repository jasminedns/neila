import Image from "next/image"
import TeamMenu from "../TeamMenu"

interface TeamIntroTypes {
    clickedCat: (category: string) => void;
    chosenCategory: string | null;
}

const TeamIntro = ({ clickedCat, chosenCategory }: TeamIntroTypes) => {
    return (
        <>
        <h1 className="sr-only">Meet the Team</h1>
        <div className="bg-[url('/images/Empty_background.png')] w-full bg-cover relative h-[calc(100vh-59px)] 
                                                                                        sm:h-[calc(100vh-59px)]">
            <div className="py-11 md:hidden ">
                <TeamMenu category={clickedCat} chosenCat={chosenCategory}/>
            </div>                                                                              
           <Image src="/images/crowd_silhouette.png" alt="crowd_silhouette" width={0}  height={0} sizes="100vw"  
                className="w-full h-auto object-contain absolute bottom-16 ">
            </Image>

            <Image  src="/images/Dvider_02.png" alt="Gold_Divider" width={0} height={0} sizes="100vw" 
                className="w-full h-auto object-contain absolute bottom-0 opacity-75">
            </Image>  

            <div className="absolute bottom-10 sm:bottom-15 md:bottom-20 lg:bottom-50 flex justify-center w-full shadow-inner team_logo_landscape">
                <Image src="/images/Meet_the_team.png" alt="meet_the_team" width={0} height={0} sizes="100vw"
                className="w-[200px] sm:w-[250px] md:w-[250px]  h-auto shadow-inner"></Image>
            </div>

            <div className="absolute bottom-60  sm:bottom-60  md:bottom-50 lg:bottom-50 flex justify-center w-full shadow-inner team_logo ">
                <Image src="/images/Meet_the_team.png" alt="meet_the_team" width={0} height={0} sizes="100vw"
                className="w-[250px] sm:w-[250px] md:w-[350px] h-auto shadow-inner"></Image>
            </div>

            <div className="hidden md:flex justify-center gap-4 py-6 bottom-5">
                <TeamMenu category={clickedCat} chosenCat={chosenCategory}/>
            </div> 
        </div>
        </>
    )
}

export default TeamIntro