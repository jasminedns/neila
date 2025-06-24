export default function TrailerSection() {
  return (
    <div className="bg-transparent py-2 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row m-4 sm:m-8">
        
        <div className="basis-[50%]">
          <h3 className="font-cinzel text-[24px] m-4 sm:m-8">The Trailer</h3>
          <div className="font-montserrat font-thin text-[20px] m-4 sm:m-8">
            <li className="my-4">Project Neila is in early development.</li>
            <li className="my-4">We welcome all feedback—especially on the feel and clarity of the core gameplay.</li>
            <li className="my-4">Our team is dedicated to creating an immersive experience that challenges players in meaningful ways.</li>
          </div>
        </div>

        <div className="basis-[50%] flex justify-center items-center mt-12 lg:mt-0">
          <div className="w-full max-w-lg">
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] transition-shadow duration-300">
              <video
                controls
                className="w-full h-full object-cover"
              >
                <source src="/trailer/NeilaTrailer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
