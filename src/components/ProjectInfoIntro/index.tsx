import Image from "next/image"

const ProjectInfoIntroDiv = () => {
    return (
        <>
         <div className="flex flex-col md:justify-between md:flex-row mx-6 my-0 p-7">
            <h1 className="text-amber-300 m-3 text-2xl md:text-3xl font-bold font-cinzel">Project Neila:</h1>
            
            <div className="w-[200px] self-center">
                <Image src="/images/futuregame_logo.png" alt="futuregame_logo" width={0} height={0} sizes="100vw" 
                    className="w-full h-auto">
                </Image>
            </div>
        </div>
        
        <div className="mx-12 mb-16">
            <li className="mt-8 mb-8 font-montserrat text-xl leading-relaxed text-white">
                Project Neila is in early development. We welcome all feedback-especially
                on the feel and clarity of the core gameplay.
            </li>
            
            <h5 className="mt-12 mb-8 text-2xl font-montserrat font-semibold text-white">Our Design Goals:</h5>
                        
            <div className="mb-8"> 
                <h6 className="font-bold mt-8 mb-4 text-justify text-xl md:text-2xl text-white">Player Freedom</h6>
                <li className="font-montserrat text-xl leading-relaxed text-justify text-white">
                    We want to encourage player freedom by allowing players to tackle 
                    obstacles and combat scenarios in a variety of ways, with many solutions to every problem.
                </li>
            </div> 
            
            <div className="mb-8">
                <h6 className="font-bold mt-8 mb-4 text-xl md:text-2xl text-white">Emergent Gameplay</h6>
                <li className="font-montserrat text-xl leading-relaxed text-justify text-white">
                    Game mechanics should be designed and implemented in a flexible way such that their interactions
                    lead to novel and interesting outcomes in gameplay.
                </li>
            </div>
            
            <div className="mb-12">
                <h6 className="font-bold mt-8 mb-4 text-xl md:text-2xl text-white">Immersion</h6>
                <li className="font-montserrat text-xl leading-relaxed text-justify text-white">
                    The game should tell its narrative primarily through the environment, without interrupting the gameplay.
                    (show don't tell)
                </li>
            </div>
        </div>
    </>
    )
}

export default ProjectInfoIntroDiv