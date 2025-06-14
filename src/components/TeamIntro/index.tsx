import Image from "next/image"
import TeamMenu from "../TeamMenu"
const TeamIntro = () => {
    return (
        <>
        <div className="bg-[url('/images/Empty_background.png')] w-full bg-cover relative h-[calc(100vh-59px)] 
                                                                                        sm:h-[calc(100vh-59px)]">
            <div className="py-11 md:hidden ">
                <TeamMenu />
            </div>                                                                              
           <Image src="/images/crowd_silhouette.png" alt="crowd_silhouette" width={0}  height={0} sizes="100vw"  
                className="w-full h-auto object-contain absolute bottom-16 ">
            </Image>

            <Image  src="/images/Dvider_02.png" alt="Gold_Divider" width={0} height={0} sizes="100vw" 
                className="w-full h-auto object-contain absolute bottom-0 opacity-75">
            </Image>   

            <div className="absolute bottom-70 md:bottom-75 lg:bottom-50 flex justify-center w-full shadow-inner ">
                <Image src="/images/Meet_the_team.png" alt="meet_the_team" width={0} height={0} sizes="100vw"
                className="w-[250px] sm:w-[250px] md:w-[350px] h-auto shadow-inner"></Image>
            </div>

            <div className="py-11 hidden md:block absolute bottom-5 md:left-[15%] lg:left-[35%]">
                <TeamMenu />
            </div> 
        </div>
        </>
    )
}

export default TeamIntro