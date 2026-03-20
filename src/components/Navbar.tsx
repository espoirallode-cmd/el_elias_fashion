import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#collections", label: "Collections" },
    { href: "#about", label: "À Propos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border-white/10 py-2 shadow-2xl" 
          : "bg-black/20 backdrop-blur-md border-white/5 py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-gold text-2xl md:text-4xl flex items-center gap-2">
          <i className="fa-solid fa-bag-shopping text-lg md:text-xl" />
          El_Elias Fashion
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-foreground hover:text-gold transition-colors duration-300 text-sm tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-3xl border-t border-gold/10 px-6 pb-6 pt-4 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-foreground hover:text-gold transition-colors text-sm tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
