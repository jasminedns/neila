export default function TrailerSection() {
  const videoId = 'J---aiyznGQ';

  return (
    <div className="bg-transparent py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="flex-1">
            <h2 className="text-2xl lg:text-6xl font-bold text-amber-300 mb-8 lg:mb-16 font-cinzel">
              The Trailer :
            </h2>
            <p className="text-white leading-relaxed font-montserrat text-sm md:text-lg lg:text-xl">
              Project Neila is in early development. We welcome all feedback—especially on the feel and clarity of the core gameplay. Our team is dedicated to creating an immersive experience that challenges players in meaningful ways.
            </p>
          </div>

          <div className="flex-1">
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] transition-shadow duration-300">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="The Trailer"
                allow="picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}