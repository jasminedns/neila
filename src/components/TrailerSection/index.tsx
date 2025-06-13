export default function TrailerSection() {
  const videoId = 'J---aiyznGQ';

  return (
    <div className="bg-transparent py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:justify-between">
          
          <div className="flex-1 lg:max-w-[45%] flex items-center">
            <div className="w-full flex flex-col justify-between py-8 lg:py-12 min-h-[240px] lg:min-h-[360px]">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-amber-300 font-cinzel">
                The Trailer :
              </h2>
              
              <div className="flex gap-3">
                <span className="text-white text-2xl leading-none mt-1">•</span>
                <p className="text-white leading-loose [word-spacing:0.3em] font-montserrat text-xs md:text-base lg:text-lg">
                  Project Neila is in early development. We welcome all feedback—especially on the feel and clarity of the core gameplay. Our team is dedicated to creating an immersive experience that challenges players in meaningful ways.
                </p>
              </div>
            </div> 
          </div>

          <div className="flex-1 lg:max-w-[45%] flex items-center justify-end">
            <div className="w-full max-w-lg">
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] transition-shadow duration-300">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="The Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}