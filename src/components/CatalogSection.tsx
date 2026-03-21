import { useState, useEffect, useRef } from "react";
import productCostume from "@/assets/product-costume.jpg";
import productChemise from "@/assets/product-chemise.jpg";
import productCravate from "@/assets/product-cravate.jpg";
import productChaussures from "@/assets/product-chaussures.jpg";
import productLacoste from "@/assets/product-lacoste.jpg";
import productPantalon from "@/assets/product-pantalon.jpg";
import productCrepes from "@/assets/product-crepes.jpg";
import productCeinture from "@/assets/product-ceinture.jpg";

const products = [
  { name: "Costumes de qualité", price: "Sur demande", cat: "Costumes", img: productCostume, icon: "fa-solid fa-vest", isPrimary: true },
  { name: "Costume de soirée", price: "Sur demande", cat: "Costumes", img: productCostume, icon: "fa-solid fa-vest" },
  { name: "Costume Slim Fit", price: "Sur demande", cat: "Costumes", img: productCostume, icon: "fa-solid fa-vest" },
  { name: "Costume Premium", price: "Sur demande", cat: "Costumes", img: productCostume, icon: "fa-solid fa-vest" },
  { name: "Costume Croisé", price: "Sur demande", cat: "Costumes", img: productCostume, icon: "fa-solid fa-vest" },
  { name: "Costume de Mariage", price: "Sur demande", cat: "Costumes", img: productCostume, icon: "fa-solid fa-vest" },
  
  { name: "Chemises élégantes", price: "Sur demande", cat: "Chemises", img: productChemise, icon: "fa-solid fa-shirt", isPrimary: true },
  { name: "Chemise Blanche", price: "Sur demande", cat: "Chemises", img: productChemise, icon: "fa-solid fa-shirt" },
  { name: "Chemise Slim", price: "Sur demande", cat: "Chemises", img: productChemise, icon: "fa-solid fa-shirt" },
  { name: "Chemise Premium", price: "Sur demande", cat: "Chemises", img: productChemise, icon: "fa-solid fa-shirt" },
  { name: "Chemise Oxford", price: "Sur demande", cat: "Chemises", img: productChemise, icon: "fa-solid fa-shirt" },
  { name: "Chemise de Soie", price: "Sur demande", cat: "Chemises", img: productChemise, icon: "fa-solid fa-shirt" },
  
  { name: "Lacoste", price: "Sur demande", cat: "Lacostes", img: productLacoste, icon: "fa-solid fa-shirt", isPrimary: true },
  { name: "Lacoste Sport", price: "Sur demande", cat: "Lacostes", img: productLacoste, icon: "fa-solid fa-shirt" },
  { name: "Lacoste Classic", price: "Sur demande", cat: "Lacostes", img: productLacoste, icon: "fa-solid fa-shirt" },
  { name: "Lacoste Premium", price: "Sur demande", cat: "Lacostes", img: productLacoste, icon: "fa-solid fa-shirt" },
  { name: "Lacoste Edition", price: "Sur demande", cat: "Lacostes", img: productLacoste, icon: "fa-solid fa-shirt" },
  { name: "Lacoste Gold", price: "Sur demande", cat: "Lacostes", img: productLacoste, icon: "fa-solid fa-shirt" },
  
  { name: "Pantalons", price: "Sur demande", cat: "Pantalons", img: productPantalon, icon: "fa-solid fa-vest", isPrimary: true },
  { name: "Pantalon Slim", price: "Sur demande", cat: "Pantalons", img: productPantalon, icon: "fa-solid fa-vest" },
  { name: "Pantalon Toile", price: "Sur demande", cat: "Pantalons", img: productPantalon, icon: "fa-solid fa-vest" },
  { name: "Pantalon Premium", price: "Sur demande", cat: "Pantalons", img: productPantalon, icon: "fa-solid fa-vest" },
  { name: "Pantalon Chino", price: "Sur demande", cat: "Pantalons", img: productPantalon, icon: "fa-solid fa-vest" },
  { name: "Pantalon Cargo", price: "Sur demande", cat: "Pantalons", img: productPantalon, icon: "fa-solid fa-vest" },
  
  { name: "Chaussures", price: "Sur demande", cat: "Chaussures", img: productChaussures, icon: "fa-solid fa-shoe-prints", isPrimary: true },
  { name: "Chaussures crêpes", price: "Sur demande", cat: "Chaussures", img: productCrepes, icon: "fa-solid fa-shoe-prints" },
  { name: "Chaussures Derby", price: "Sur demande", cat: "Chaussures", img: productChaussures, icon: "fa-solid fa-shoe-prints" },
  { name: "Mocassins Luxe", price: "Sur demande", cat: "Chaussures", img: productCrepes, icon: "fa-solid fa-shoe-prints" },
  { name: "Richelieu", price: "Sur demande", cat: "Chaussures", img: productChaussures, icon: "fa-solid fa-shoe-prints" },
  { name: "Bottes Oxford", price: "Sur demande", cat: "Chaussures", img: productCrepes, icon: "fa-solid fa-shoe-prints" },
  
  { name: "Accessoires", price: "Sur demande", cat: "Accessoires", img: productCravate, icon: "fa-regular fa-gem", isPrimary: true },
  { name: "Ceintures", price: "Sur demande", cat: "Accessoires", img: productCeinture, icon: "fa-regular fa-gem" },
  { name: "Boutons de manchette", price: "Sur demande", cat: "Accessoires", img: productCravate, icon: "fa-regular fa-gem" },
  { name: "Pochette Soie", price: "Sur demande", cat: "Accessoires", img: productCeinture, icon: "fa-regular fa-gem" },
  { name: "Cravate Luxe", price: "Sur demande", cat: "Accessoires", img: productCravate, icon: "fa-regular fa-gem" },
  { name: "Montre Classique", price: "Sur demande", cat: "Accessoires", img: productCeinture, icon: "fa-regular fa-gem" },
];

const categories = ["Tous", "Costumes", "Chemises", "Lacostes", "Pantalons", "Chaussures", "Accessoires"];

const CatalogSection = () => {
  const [active, setActive] = useState("Tous");
  const [visible, setVisible] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const filtered = active === "Tous" 
    ? products.filter((p) => (p as any).isPrimary) // Show only the 5 selected items for "Tous"
    : products.filter((p) => p.cat === active);

  return (
    <section id="collections" ref={ref} className="pt-10 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <h2
          className={`font-display text-gold text-5xl md:text-6xl text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Notre Collection
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-body text-[10px] md:text-xs uppercase tracking-widest px-3 py-1.5 md:px-5 md:py-2 rounded-sm border transition-all duration-300 ${
                active === c
                  ? "bg-gold text-background border-gold"
                  : "border-gold/30 text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {filtered.map((p, i) => (
            <div
              key={p.name}
              className="bg-dark-card rounded-lg overflow-hidden border border-transparent hover:border-gold/50 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group w-full max-w-sm"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div 
                className="relative overflow-hidden aspect-square cursor-zoom-in"
                onClick={() => setSelectedImg(p.img)}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-background/80 rounded-full w-10 h-10 flex items-center justify-center">
                  <i className={`${p.icon} text-gold text-sm`} />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <i className="fa-solid fa-expand text-white text-2xl" />
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-body font-semibold text-foreground text-sm md:text-base mb-1 truncate">{p.name}</h3>
                <p className="text-gold font-body font-bold text-xs md:text-sm mb-4">{p.price}</p>
                {active === "Tous" && (
                  <button 
                    onClick={() => {
                      setActive(p.cat);
                      window.scrollTo({ top: ref.current?.offsetTop ? ref.current.offsetTop - 100 : 0, behavior: 'smooth' });
                    }}
                    className="w-full font-body text-xs md:text-xs uppercase tracking-widest py-3 md:py-3 border border-gold/40 text-foreground rounded-sm hover:bg-gold hover:text-background transition-all duration-300"
                  >
                    Voir plus
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-all duration-500 animate-in fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors p-2"
            onClick={() => setSelectedImg(null)}
          >
            <i className="fa-solid fa-xmark" />
          </button>
          
          <img 
            src={selectedImg} 
            alt="Product Preview" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CatalogSection;
