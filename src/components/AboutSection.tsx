import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-image.jpg";

const values = [
  { icon: "fa-solid fa-gem", title: "Qualité" },
  { icon: "fa-regular fa-handshake", title: "Confiance" },
  { icon: "fa-solid fa-medal", title: "Excellence" },
];

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          // Add a small offset if needed, but offsetHeight is more accurate for matching borders
          setTextHeight(textRef.current?.offsetHeight || entry.contentRect.height);
        }
      });
      observer.observe(textRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section id="about" ref={ref} className="pt-0 pb-0 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-20 max-w-7xl mx-auto">
          {/* Image */}
          <div
            className={`w-full lg:w-auto flex transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div 
              className="border-2 border-gold/40 rounded-lg overflow-hidden shadow-gold w-full max-w-[400px]"
              style={{ height: textHeight && window.innerWidth >= 1024 ? `${textHeight}px` : "auto" }}
            >
              <img src={aboutImage} alt="El_Elias Fashion" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={`w-full lg:max-w-xl transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="font-display text-gold text-5xl md:text-6xl mb-6 text-center lg:text-left">Notre Histoire</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              Depuis plus de 10 ans, <strong className="text-gold">Boutique la Qualité — El_Elias Fashion</strong> habille
              les hommes et femmes de Cotonou avec élégance et raffinement. Notre passion pour la mode haut de gamme nous
              pousse à sélectionner les meilleurs tissus et les coupes les plus soignées.
            </p>
            <p className="font-body text-foreground/60 leading-relaxed mb-8">
              Chaque pièce de notre collection est choisie with soin pour garantir qualité, style et durabilité. Nous
              croyons que l'élégance est un art de vivre, et nous sommes là pour vous accompagner dans cette démarche.
            </p>

            <div className="flex justify-center lg:justify-start gap-8">
              {values.map((v) => (
                <div key={v.title} className="text-center">
                  <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-2 mx-auto">
                    <i className={`${v.icon} text-gold text-lg`} />
                  </div>
                  <span className="font-body text-foreground text-xs uppercase tracking-wider">{v.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
