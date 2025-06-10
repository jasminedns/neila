import Image from "next/image";

const ProjectInfoPage = () => {
    return (
      
        <div className="min-h-screen p-6  text-white text-xl">
            <div className="flex flex-col md:justify-between md:flex-row m-6">
            <h4 className="font-cinzel m-3 text-3xl font-bold">The Project:</h4>
            <div className="w-[200px]  self-center">
            <Image src="/futuregame_logo.png" alt="futuregame_logo" width={0}  height={0} sizes="100vw" 
             className="w-full h-auto">
            </Image>
            </div>
            </div>
            <li className="m-6 mt-8 font-montserrat text-lg">Project Neila is in early development.We welcome all feedback-especially
             on the feel and clarity of the core gameplay.</li>
                      
            <h5 className="m-6 mt-5 font-montserrat">Our Design Goals:</h5>
            
            <div className="m-6 mt-10"> 
                <h6 className="font-extrabold mt-4 text-justify font-montserrat text-xl">Player Freedom</h6>
                <li className="mt-3 text-justify font-montserrat text-lg">We want to encourage player freedom by allowing players to to tackle 
                    obstacles and combat scenarios in a variety of ways,with many solutios to every problem.</li>
            </div> 

            <div className="m-6 mt-10">
                <h6 className="mt-4 font-extrabold font-montserrat text-xl">Emergent Gameplay</h6>
                <li className=" mt-3 text-justify font-montserrat text-lg font-extralight">Game mechanics should be designed and implemented in a flexible way such that their interactions
                lead to novel and interesting outcomes in gameplay.</li>
            </div>

            <div className="m-6 mt-10">
                <h6 className="font-extrabold font-montserrat text-xl">Immersion</h6>
                    <li className="mt-3 text-justify font-montserrat text-lg">The game should tell its narrative primarily through the environment, without interruptiong the gameplay.
                    (show don't tell)</li>
            </div>
                
    </div>
     
    );
  };
  
  export default ProjectInfoPage;
  
