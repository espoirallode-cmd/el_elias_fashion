const testimonials = [
  { quote: "Une boutique exceptionnelle ! Les costumes sont d'une qualité remarquable.", name: "Koffi Mensah", city: "Cotonou" },
  { quote: "El_Elias Fashion m'a transformé. Chaque fois que je porte leurs vêtements, je reçois des compliments.", name: "Aminata Diallo", city: "Porto-Novo" },
  { quote: "Service impeccable et produits haut de gamme. L'équipe est à l'écoute.", name: "Jean-Pierre Ahouandjinou", city: "Cotonou" },
  { quote: "La référence du sur-mesure au Bénin. Des finitions impeccables.", name: "Gildas Sossa", city: "Abomey" },
  { quote: "Un style unique qui allie tradition et modernité. Bravo !", name: "Sarah Zinsou", city: "Ouidah" },
  { quote: "Le meilleur rapport qualité-prix pour de la haute couture.", name: "Marc Toudonou", city: "Cotonou" },
  { quote: "Des tissus de premier choix et un accueil très professionnel.", name: "Idriss Lawson", city: "Parakou" },
  { quote: "Je ne porte que des créations El_Elias pour mes grands événements.", name: "Chantal Dovonou", city: "Cotonou" },
];

const TestimonialsSection = () => {
  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="pt-10 pb-24 bg-background overflow-hidden px-4 md:px-0">
      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
          position: relative;
        }
        .marquee {
          display: flex;
          width: max-content;
          gap: 12px;
          animation: marquee-scroll 40s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        .marquee-item {
          flex: 0 0 auto;
          width: 280px;
          height: 220px;
          transition: transform 0.3s, filter 0.3s;
        }
        .marquee:hover .marquee-item {
          filter: grayscale(1) blur(2px);
          opacity: 0.5;
        }
        .marquee-item:hover {
          filter: grayscale(0) blur(0) !important;
          opacity: 1 !important;
          transform: scale(1.05);
          z-index: 10;
        }
        .uiverse-card {
          width: 100%;
          height: 100%;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          color: white;
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}} />

      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="font-display text-gold text-4xl md:text-5xl lg:text-6xl text-center">
          Témoignages
        </h2>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee">
          {duplicatedTestimonials.map((t, i) => (
            <div key={i} className="marquee-item">
              <div className="uiverse-card">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, star) => (
                    <i key={star} className="fa-solid fa-star text-gold text-[10px]" />
                  ))}
                </div>
                <p className="font-body text-sm mb-4 line-clamp-4 italic text-white/90">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="text-gold font-semibold text-xs tracking-wider">{t.name}</h4>
                  <p className="text-white/40 text-[9px] uppercase tracking-tighter">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
