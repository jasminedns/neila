import ProjectInfoIntroDiv from "@/components/ProjectInfoIntro";
import Out_Now_Div from "@/components/Out_Now_Div";

const ProjectInfoPage = () => {
    return (
        <> 
        <div className="min-h-screen bg-[url('/images/Background_dvider.png')] m-o bg-cover p-0  text-white text-xl">
           <ProjectInfoIntroDiv />
        </div> 
         <Out_Now_Div />
         </>
    );
  };
  
export default ProjectInfoPage;
