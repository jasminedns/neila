import Image from "next/image"
const TeamIntro = () => {
    return (
        <>
        
        <div className="bg-[url('/images/Empty_background.png')] w-screen bg-cover relative  h-screen">
           
                <Image src="/images/crowd_silhouette.png" alt="crowd_silhouette" width={0}  height={0} sizes="100vw"  
                className="w-full h-auto object-contain absolute bottom-16"></Image>
            
                <Image  src="/images/Dvider_02.png" alt="crowd_silhouette" width={0} height={0} sizes="100vw" 
                className="w-full h-auto object-contain absolute bottom-0">
                </Image>    
                <div className="absolute bottom-70 flex justify-center w-full shadow-inner ">
                <Image src="/images/Meet_the_team.png" alt="meet_the_team" width={400} height={0} sizes="100vw"
                className="w-[400px] h-auto shadow-inner"></Image>
            </div>
            <section className="text-white absolute bottom-18 flex justify-around m-8 w-screen">
                <p>designers</p>
                <p>Artists</p>
                <p>Developers</p>
                <p>Managers</p>
            </section>
        </div>
        
        
        </>
    )
}

export default TeamIntro