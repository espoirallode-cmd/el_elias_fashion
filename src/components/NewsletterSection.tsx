import { useEffect, useRef, useState } from "react";

const NewsletterSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`bg-gold py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        <i className="fa-regular fa-envelope text-background text-3xl mb-4" />
        <h2 className="font-body text-background font-bold text-xl md:text-2xl mb-2">
          Soyez les premiers à connaître nos offres exclusives !
        </h2>
        <p className="font-body text-background/70 text-sm mb-6">
          Inscrivez-vous à notre newsletter pour ne rien manquer.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Votre email"
            className="flex-1 px-4 py-3 rounded-sm font-body text-sm border-2 border-background bg-foreground text-background focus:outline-none focus:ring-2 focus:ring-background"
          />
          <button
            type="submit"
            className="bg-background text-gold font-body font-semibold px-6 py-3 rounded-sm text-sm uppercase tracking-wider hover:bg-background/90 transition-colors"
          >
            S'abonner
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
