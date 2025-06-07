import Image from "next/image"

const StudentProjectDiv = () => {
    return (
        <>
            <div className=" m-0 p-0">
                <div className="relative flex justify-between m-0 p-0">
                    <Image src="/images/smoke.png" alt="smoke" width={0} height={0} sizes="100vw" 
                            className="absolute left-0 h-[400px] w-[200px] rotate-360 z-0"></Image>
                    
                    <Image src="/images/smoke.png" alt="smoke" width={0} height={0} sizes="100vw" 
                            className="absolute right-0 h-[400px] w-[300px] rotate-180 z-0"></Image>
                </div>
             
                <div className="relative z-10">
                    student project div comes here when we put student div bg gets extended 
                </div>
            </div>
        </>
    )
}

export default StudentProjectDiv