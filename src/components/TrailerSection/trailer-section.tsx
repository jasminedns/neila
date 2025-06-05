export default function TrailerSection() {
  return (
    <div className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-16">
          
            <div className="flex-1">
                <h2 className="text-5xl font-bold text-amber-300 mb-16 font-cinzel">
                The Trailer :
                </h2>
                <p className="text-white text-2xl leading-relaxed font-montserrat">
                Project Neila is in early development. We welcome all feedback—especially on the feel and clarity of the core gameplay. Our team is dedicated to creating an immersive experience that' challenges players in meaningful ways.
                </p>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="flex-1 rounded-lg overflow-hidden border-2 border-amber-300 leading-none">
                    <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/J---aiyznGQ"
                    title="The Trailer"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}