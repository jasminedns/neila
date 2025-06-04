const ProjectInfoPage = () => {
    return (

        <div className="relative bg-gray-800 min-h-screen">
            <div className="absolute  bg-[url('/1.png')] min-h-screen min-w-screen  bg-cover">
                <div className="relative z-10 p-6 text-white">
                    <h4 className="text-amber-300">The Project:</h4>
                    <li className="text-white">Project Neila is in early development.We welcome all feedback-especially
                         on the feel and clarity of the core gameplay.</li>
                    <h5>Our Design Goals:</h5>
                    <h6>Player Freedom</h6>
                    <li>We want to encourage player freedom by allowing players to to tackle 
                        obstacles and combat scenarios in a variety of ways,with many solutios to every problem.</li>
                    <h6>Emergent Gameplay</h6>
                    <li>Game mechanics should be designed and implemented in a flexible way such that their interactions
                         lead to novel and interesting outcomes in gameplay.</li>
                         <h6>Immersion</h6>
                         <li>The game should tell its narrative primarily through the environment, without interruptiong the gameplay.
                            (show don't tell)</li>
                </div>
            </div>
        </div>

     
    );
  };
  
  export default ProjectInfoPage;
  