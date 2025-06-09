import Image from "next/image"

const TeamIntro = () => {
    return (
        <>
        <div className="bg-[url('/images/Empty_background.png')] w-full bg-cover relative h-[calc(100vh-100px)] 
                                                                                        sm:h-[calc(100vh-76px)] 
                                                                                        md:h-[calc(100vh-60px)] 
                                                                                        lg:[h-calc(100vh-45px)]">
           <Image src="/images/crowd_silhouette.png" alt="crowd_silhouette" width={0}  height={0} sizes="100vw"  
                className="w-full h-auto object-contain absolute bottom-16 ">
            </Image>

            <Image  src="/images/Dvider_02.png" alt="Gold_Divider" width={0} height={0} sizes="100vw" 
                className="w-full h-auto object-contain absolute bottom-0 opacity-75">
            </Image>   

            <div className="absolute bottom-80 sm:bottom-70 md:bottom-75 lg:bottom-50 flex justify-center w-full shadow-inner ">
                <Image src="/images/Meet_the_team.png" alt="meet_the_team" width={400} height={0} sizes="100vw"
                className="w-[250px] sm:w-[250px] md:w-[350px] h-auto shadow-inner"></Image>
            </div>
            
            <section className="text-white absolute top-[60px] md:top-[80px] lg:top-[550px]  min-w-full">
                <div className="flex justify-center bottom-[50px]">
                <p className="font-montserrat team_button mx-2 sm:mx-4 text-xs md:text-xl p-2">Designers</p>
                <p className="font-montserrat team_button mx-2 sm:mx-4 text-xs md:text-xl p-2">Artists</p>
                <p className="font-montserrat team_button mx-2 sm:mx-4 text-xs md:text-xl p-2">Developers</p>
                <p className="font-montserrat team_button mx-2 sm:mx-4 text-xs md:text-xl p-2">Managers</p>
                </div>
            </section>
        </div>
        </>
    )
}

export default TeamIntro