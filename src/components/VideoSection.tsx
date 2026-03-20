import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="relative pt-10 pb-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative group cursor-pointer max-w-3xl mx-auto rounded-[20px] overflow-hidden aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gold/10">
          {/* Backdrop Image */}
          <img 
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1400&auto=format&fit=crop" 
            alt="Couture de luxe"
            className="w-full h-full object-cover grayscale-[0.3] brightness-[0.4] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.3]"
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Play Button - Glacial Effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse" />
              <button className="relative w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-gold/80 transition-all duration-500 group-hover:scale-110 shadow-2xl">
                <Play className="w-6 h-6 text-white fill-white translate-x-1" />
              </button>
            </div>
            
            <div className="mt-6 text-center px-4">
              <h2 className="font-display text-2xl md:text-3xl text-white mb-2 tracking-tight drop-shadow-2xl">
                La Collection Hiver 2024
              </h2>
              <p className="font-body text-gold/80 text-[10px] md:text-xs tracking-[0.3em] uppercase drop-shadow-lg">
                Le Film de Présentation
              </p>
            </div>
          </div>

          {/* Glacial Highlight Refraction Overlay */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
