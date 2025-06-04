import Image from "next/image";

const ProjectInfoPage = () => {
    return (
        <div className="min-h-screen bg-gray-800 p-6  text-white text-xl">
            <div className="flex justify-between m-6">
            <h4 className="text-amber-300 m-3 text-2xl font-bold">The Project:</h4>
            <Image src="/futuregame_logo.png" alt="futuregame_logo" width={150}  height={150}></Image>
            </div>
            <li className="m-6 mt-8">Project Neila is in early development.We welcome all feedback-especially
             on the feel and clarity of the core gameplay.</li>
                      
            <h5 className="m-6 mt-5">Our Design Goals:</h5>
            
            <div className="m-6 mt-7"> 
                <h6 className="font-bold mt-4 text-justify">Player Freedom</h6>
                <li className="mt-3 text-justify">We want to encourage player freedom by allowing players to to tackle 
                    obstacles and combat scenarios in a variety of ways,with many solutios to every problem.</li>
            </div> 

            <div className="m-6 mt-7">
                <h6 className="mt-4 font-bold">Emergent Gameplay</h6>
                <li className=" mt-3 text-justify">Game mechanics should be designed and implemented in a flexible way such that their interactions
                lead to novel and interesting outcomes in gameplay.</li>
            </div>

            <div className="m-6 mt-7">
                <h6 className="font-bold">Immersion</h6>
                    <li className="mt-3 text-justify">The game should tell its narrative primarily through the environment, without interruptiong the gameplay.
                    (show don't tell)</li>
            </div>
                
    </div>
     
    );
  };
  
  export default ProjectInfoPage;
  