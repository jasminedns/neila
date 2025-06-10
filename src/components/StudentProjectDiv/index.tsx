import Image from "next/image"

const StudentProjectDiv = () => {
    return (
        <>
            <div className=" m-0 p-0">
                <div className="relative flex justify-between m-0 p-0">
                    <Image src="/images/smoke.png" alt="smoke" width={0} height={0} sizes="100vw" 
                            className="absolute left-0 h-[200px] w-[200px] rotate-360 z-0"></Image>
                    
                    <Image src="/images/smoke.png" alt="smoke" width={0} height={0} sizes="100vw" 
                            className="absolute right-0 h-[200px] w-[200px] rotate-180 z-0"></Image>
                </div>
             
                <div className="relative z-10">
                    <h4 className="font-cinzel m-4">A student-led Project</h4>
                    <div className="font-montserrat text-[18px] m-2 mb-0">
                    <li className="m-8">This Project allowed us work side by side with students from other programs,each bringing our unique expertise ,
                        and experience what it's like to develop projects in real world team settings.</li>
                    <li className="m-8">This experience has strengthened our abilities to collaborate effectively,take the lead when needed,
                        and tackle challenges with a proactive mindset.All skills that benefit us greatly in the future.</li> 
                    <li className="m-8 mb-0 p-2">A special thanks to Futuregames for this unique opportunity of learning by doing.</li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentProjectDiv                                    