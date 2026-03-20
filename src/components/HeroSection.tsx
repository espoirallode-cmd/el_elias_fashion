import { useEffect, useState, useRef } from "react";
import suitTan from "@/assets/suit-tan.png";
import suitNavy from "@/assets/suit-navy.png";
import suitBurgundy from "@/assets/suit-burgundy.png";
import suitGreen from "@/assets/suit-green.png";
import suitGrey from "@/assets/suit-grey.png";
import heroWatermark from "@/assets/hero-watermark.jpg";

const suits = [
  { img: suitTan, label: "Beige Royal" },
  { img: suitNavy, label: "Navy Business" },
  { img: suitBurgundy, label: "Bordeaux Gala" },
  { img: suitGreen, label: "Vert Émeraude" },
  { img: suitGrey, label: "Gris Anthracite" },
];

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-start overflow-hidden pt-32 md:pt-48 pb-20 bg-background"
    >
      {/* Background radial gradient to mimic the premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,223,100,0.1),transparent_50%)]" />
      
      {/* Watermark Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <img 
          src={heroWatermark} 
          alt="Watermark" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full mb-16">
        <div 
          className={`inline-block border border-gold/40 rounded-full px-4 py-1.5 mb-5 md:mb-8 bg-gold/5 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-body text-gold text-xs uppercase tracking-[0.2em] font-medium">Boutique la Qualité</span>
        </div>
        
        <h1 
          className={`font-hero text-gold text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-4 w-full block text-center whitespace-nowrap transition-all duration-1000 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          L'Élégance Redéfinie
        </h1>

        <div className="max-w-2xl mx-auto px-6">
          <p 
            className={`font-body text-foreground/80 text-lg md:text-2xl mb-10 leading-relaxed transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Avec El_Elias votre élégance est inévitable!
          </p>
        </div>

        <div 
          className={`transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#collections"
            className="group relative inline-flex items-center gap-3 bg-gold text-background font-body font-bold px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 overflow-hidden shadow-gold hover:shadow-[0_0_30px_rgba(255,223,100,0.4)]"
          >
            <span>Commencer l'expérience</span>
            <div className="flex items-center justify-center bg-background rounded-full w-7 h-7 group-hover:bg-gold transition-colors">
              <i className="fa-solid fa-arrow-right text-gold group-hover:text-background text-[10px]" />
            </div>
          </a>
        </div>
      </div>

      {/* Curved Perspective Carousel (Marquee) */}
      <div 
        className={`relative w-full perspective-container mt-4 transition-all duration-1000 delay-500 ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12"
        }`}
      >
        <div className="curved-marquee">
          <div className="animate-marquee gap-4 py-6 px-4">
            {/* Double the list for seamless loop */}
            {[...suits, ...suits].map((suit, idx) => (
              <div
                key={idx}
                className="hero-card relative w-[200px] md:w-[260px] aspect-[4/5] rounded-[20px] overflow-hidden group border border-gold/25 shadow-2xl"
              >
                <img
                  src={suit.img}
                  alt={suit.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Persistent bottom shadow to anchor the image and hide its bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-body text-gold text-xs uppercase tracking-widest mb-2 block">{suit.label}</span>
                  <div className="h-[1px] w-12 bg-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#stats"
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/50 text-xl transition-all duration-1000 delay-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent mx-auto" />
      </a>
    </section>
  );
};

export default HeroSection;
