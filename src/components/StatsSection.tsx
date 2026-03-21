import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: "fa-solid fa-users", value: 500, suffix: "+", label: "Clients satisfaits" },
  { icon: "fa-solid fa-award", value: 10, suffix: "+", label: "Ans d'expérience" },
  { icon: "fa-solid fa-tags", value: 100, suffix: "+", label: "Références disponibles" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-gold font-body text-5xl md:text-6xl font-bold">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => (
  <section id="stats" className="pt-10 pb-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center items-stretch gap-[12px]">
        {stats.map((s) => (
          <div
            key={s.label}
            className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 text-center hover:bg-gold/10 hover:border-gold/40 transition-all duration-500 shadow-2xl group w-[340px] md:w-[320px] shrink-0"
          >
            {/* Subtle light reflection for glacial effect */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all" />
            
            <div className="flex items-center justify-center gap-4 relative z-10 mb-2">
              <i className={`${s.icon} text-gold text-3xl md:text-4xl`} />
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <p className="font-body text-foreground/50 group-hover:text-foreground/80 mt-1 text-xs md:text-sm uppercase tracking-[0.2em] relative z-10 transition-colors whitespace-nowrap">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
