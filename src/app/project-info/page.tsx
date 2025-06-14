import StudentProjectDiv from "@/components/StudentProjectDiv";
import ProjectInfoIntroDiv from "@/components/ProjectInfoIntro";

const ProjectInfoPage = () => {

    return (        
        <div className="min-h-screen bg-[url('/images/Background_dvider.png')] m-o bg-cover p-0  text-white text-xl">
           <ProjectInfoIntroDiv />
           <StudentProjectDiv />
        </div>
    );
  };
  
  export default ProjectInfoPage;
  
