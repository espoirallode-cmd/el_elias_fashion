const ContactSection = () => {
  return (
    <section id="contact" className="pt-10 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-gold text-5xl md:text-6xl text-center mb-16">Contact</h2>
        <div className="flex flex-col lg:flex-row lg:items-start justify-center gap-8">
          {/* Info */}
          <div className="space-y-6 flex-shrink-0">
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-location-dot text-gold text-xl mt-1" />
              <div>
                <p className="font-body text-foreground font-semibold">Adresse</p>
                <p className="font-body text-foreground/60">Cotonou, Bénin</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-phone text-gold text-xl mt-1" />
              <div>
                <p className="font-body text-foreground font-semibold">Téléphone</p>
                <p className="font-body text-foreground/60">+229 XX XX XX XX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-envelope text-gold text-xl mt-1" />
              <div>
                <p className="font-body text-foreground font-semibold">Email</p>
                <p className="font-body text-foreground/60">contact@eleliasfashion.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fa-regular fa-clock text-gold text-xl mt-1" />
              <div>
                <p className="font-body text-foreground font-semibold">Horaires</p>
                <p className="font-body text-foreground/60">Lun – Sam : 9h – 19h</p>
              </div>
            </div>
            <a
              href="https://wa.me/22900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit mx-auto lg:mx-0 items-center gap-2 bg-gold/5 backdrop-blur-md border border-gold/30 text-gold font-body font-semibold px-6 py-3 rounded-xl text-sm hover:bg-gold/20 hover:border-gold/50 transition-all duration-300 shadow-lg shadow-gold/5 group"
            >
              <i className="fa-brands fa-whatsapp text-xl group-hover:scale-110 transition-transform" />
              Contactez-nous sur WhatsApp
            </a>
          </div>

          {/* Map with Uiverse Design - Fixed Height Version */}
          <div className="relative w-full lg:max-w-sm group">
            <style dangerouslySetInnerHTML={{ __html: `
              .map-card {
                --bg: #1a1a1a;
                --contrast: #0a0a0a;
                --gold-muted: rgba(212, 175, 55, 0.2);
                position: relative;
                padding: 9px;
                background-color: var(--bg);
                border-radius: 35px;
                box-shadow: rgba(212, 175, 55, 0.2) 0px -2px 6px 0px inset;
                overflow: hidden;
              }

              .map-card-overlay {
                position: absolute;
                inset: 0;
                pointer-events: none;
                background: repeating-conic-gradient(var(--bg) 0.0000001%, var(--gold-muted) 0.000104%) 60% 60%/600% 600%;
                filter: opacity(20%) contrast(110%);
                z-index: 1;
              }

              .map-card-inner {
                position: relative;
                z-index: 2;
                width: 100%;
                height: 330px;
                background-color: var(--contrast);
                border-radius: 30px;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .map-card-inner iframe {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            `}} />
            
            <div className="map-card">
              <div className="map-card-overlay"></div>
              <div className="map-card-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.65788697498!2d2.2945!3d6.3703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a929f5ff6cb5%3A0x42e5c2e0b2eb9b96!2sCotonou%2C%20Benin!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Localisation El_Elias Fashion"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
