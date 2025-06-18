import CoverImage from "../CoverImage"
import ImageCarousel from "../ImageCarousel"

const StoryElement = () => {
    return (
        <>
        <div>


            <h3 className="relative font-cinzel text-gold text-2xl text-center font-bold mt-64 mb-16 mx-4 md:mt-80 md:mb-16 lg:mr-48 lg:mb-12 lg:mt-48 lg:text-right md:text-4xl">


                The Story :
            </h3>
            <div className=" flex justify-center lg:justify-end min-h-[150px]">
            <div className="relative flex flex-col items-center justify-center w-full bg-[#FFD700]/3 border border-[#FFD700]/20 rounded-[10px] m-4 p-4 min-h-[260px] md:w-[80%] lg:w-[60%] lg:mr-30 lg:mb-20 mb-40 lg:ml-20">
                <p className="relative font-montserrat text-[20px] md:text-2xl text-center leading-snug text-white max-w-[1300px] md-max-w-[600px] md-gap">
                    Captured on an alien planet and infused with telekinetic powers and elemental abilities, you must creatively
                    leverage your enhanced arm to escape a chaotic research facility filled with dangerously modified creatures. 
                    Experiment with manipulating the environment and applying elemental effects to objects to overcome obstacles and enemies to survive.
                </p>
            </div>
        </div>
        </div>
        <div className="flex-shrink flex justify-start -mt-98 mb-20 ml-13 ">
            <CoverImage/>
        </div>
            <ImageCarousel/>
        </>
    )
}

export default StoryElement