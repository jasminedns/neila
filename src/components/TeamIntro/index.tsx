import Image from "next/image"
const TeamIntro = () => {
    return (
        <>
        
        <div className="bg-[url('/images/Empty_background.png')] w-screen bg-cover relative  h-screen">
           
                <Image src="/images/crowd_silhouette.png" alt="crowd_silhouette" width={0}  height={0} sizes="100vw"  
                className="w-full h-auto object-contain absolute bottom-6"></Image>
            
                <Image  src="/images/Dvider_02.png" alt="crowd_silhouette" width={0} height={0} sizes="100vw" 
                className="w-full h-auto object-contain absolute bottom-0"></Image>
            
        </div>
        
        
        </>
    )
}

export default TeamIntro