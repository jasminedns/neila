import Image from "next/image"
const TeamIntro = () => {
    return (
        <>
        <div className="bg-[url('/images/Empty_background.png')]  bg-cover relative h-screen">
           <Image src="/images/crowd_silhouette.png" alt="crowd_silhouette" width={0}  height={0} sizes="100vw"  
                className="w-full h-auto object-contain absolute bottom-16 ">
            </Image>

            <Image  src="/images/Dvider_02.png" alt="Gold_Divider" width={0} height={0} sizes="100vw" 
                className="w-full h-auto object-contain absolute bottom-0 opacity-75">
            </Image>   

            <div className="absolute bottom-90 sm:bottom-70 flex justify-center w-full shadow-inner ">
                <Image src="/images/Meet_the_team.png" alt="meet_the_team" width={400} height={0} sizes="100vw"
                className="w-[200px] sm:w-[200px] md:w-[400px] h-auto shadow-inner"></Image>
            </div>
            
            <section className="text-white absolute  bottom-5 sm:bottom-15 md:bottom-20 lg:bottom-40 flex justify-around min-w-full">
                <p className="font-montserrat team_button text-xs md:text-xl p-2">Designers</p>
                <p className="font-montserrat team_button text-xs md:text-xl p-2">Artists</p>
                <p className="font-montserrat team_button text-xs md:text-xl p-2">Developers</p>
                <p className="font-montserrat team_button text-xs md:text-xl p-2">Managers</p>
            </section>
        </div>
        </>
    )
}

export default TeamIntro