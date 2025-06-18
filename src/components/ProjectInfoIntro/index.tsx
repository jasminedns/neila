import Image from "next/image"

const ProjectInfoIntroDiv = () => {
    return (
        <>
         <div className="flex flex-col md:justify-between md:flex-row mx-6 my-0 p-7">
            <h1 className="text-amber-300  m-3 text-2xl md:text-3xl font-bold font-cinzel">Project Neila</h1>
            
            <div className="w-[200px]  self-center">
                <Image src="/images/futuregame_logo.png" alt="futuregame_logo" width={0}  height={0} sizes="100vw" 
                    className="w-full h-auto">
                </Image>
            </div>
        </div>
        
        <li className="m-12 mt-8 font-montserrat">Project Neila is in early development.We welcome all feedback-especially
                     on the feel and clarity of the core gameplay.</li>
        <h5 className="m-12 mt-5 text-2xl  font-montserrat">Our Design Goals:</h5>
                    
        <div className="m-12 mt-10 mb-0 font-montserrat"> 
            <h6 className="font-bold mt-4 text-justify text-xl md:text-2xl">Player Freedom</h6>
            <li className="mt-6 text-justify">We want to encourage player freedom by allowing players to to tackle 
                obstacles and combat scenarios in a variety of ways,with many solutios to every problem.</li>
        </div> 
        
        <div className="m-12 mt-10 font-montserrat">
            <h6 className="mt-4 font-bold text-xl md:text-2xl">Emergent Gameplay</h6>
            <li className=" mt-6 text-justify">Game mechanics should be designed and implemented in a flexible way such that their interactions
                    lead to novel and interesting outcomes in gameplay.</li>
        </div>
        
        <div className="m-12 mt-10 mb-0 font-montserrat">
            <h6 className="mt-4 font-bold text-xl md:text-2xl">Immersion</h6>
            <li className="mt-6 text-justify">The game should tell its narrative primarily through the environment, without interruptiong the gameplay.
                (show don't tell)</li>
        </div>
    </>
    )
}

export default ProjectInfoIntroDiv