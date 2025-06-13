import CoverImage from "../CoverImage"
import ImageCarousel from "../ImageCarousel"

const StoryElement = () => {
    return (
        <>
        <div>
            <h3 className="relative font-cinzel text-gold text-4xl font-bold text-right mr-50 mb-5 mt-50">
                The Story :
            </h3>
            <div className="absolut flex justify-end min-h-[150px]">
            <div className="flex flex-col items-center justify-center mr-30 mb-20 ml-20 w-full max-w-[75%] md-max-w-[60%px] bg-[#FFD700]/3 border border-[#FFD700]/20 rounded-[10px] p-4 min-h-[260px] sm:max-w-[150px] md:max-w-[1000px]">
            <p className="relative font-montserrat text-2xl text-center leading-snug text-white max-w-[1300px] md-max-w-[600px] md-gap">
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