const Footer = () => (
  <footer className="bg-background py-12 border-t border-gold/10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="font-display text-gold text-3xl">
          El_Elias Fashion
        </a>
        <div className="flex gap-6">
          <a href="#collections" className="font-body text-foreground/60 hover:text-gold text-sm transition-colors">
            Collections
          </a>
          <a href="#about" className="font-body text-foreground/60 hover:text-gold text-sm transition-colors">
            À Propos
          </a>
          <a href="#contact" className="font-body text-foreground/60 hover:text-gold text-sm transition-colors">
            Contact
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all">
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all">
            <i className="fa-brands fa-whatsapp" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 pt-6 border-t border-gold/10">
        <p className="font-body text-foreground/40 text-xs">
          © 2026 El_Elias Fashion — Cotonou, Bénin. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
