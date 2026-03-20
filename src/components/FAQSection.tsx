import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";

const faqData = [
  {
    question: "Quels sont vos délais de confection ?",
    answer: "Nos délais varient généralement entre 2 et 4 semaines selon la complexité de la pièce et notre planning actuel. Pour les événements urgents, n'hésitez pas à nous consulter pour voir nos disponibilités.",
  },
  {
    question: "Proposez-vous du sur-mesure ?",
    answer: "Oui, c'est notre spécialité. Nous créons des pièces uniques adaptées à votre morphologie et à votre style, que ce soit pour des tenues de ville, de soirée ou de cérémonie.",
  },
  {
    question: "Comment se passe la prise de rendez-vous ?",
    answer: "Vous pouvez nous contacter via le formulaire de contact ci-dessous ou directement par WhatsApp. Nous fixerons ensemble un créneau pour une prise de mesures et une discussion sur votre projet.",
  },
  {
    question: "Quels types de tissus utilisez-vous ?",
    answer: "Nous sélectionnons rigoureusement des tissus de haute qualité : soies, cotons fins, dentelles et étoffes traditionnelles. Nous pouvons également travailler avec le tissu de votre choix.",
  },
];

const FAQSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={ref}
      className={`pt-10 pb-24 bg-background transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-gold text-4xl md:text-5xl lg:text-6xl mb-6">
            Questions Fréquentes
          </h2>
          <p className="font-body text-white/50 text-lg max-w-md mx-auto">
            Des réponses claires pour vous accompagner dans votre projet de haute couture.
          </p>
        </div>

        {/* FAQ List */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold/30 group">
                <AccordionTrigger className="w-full px-6 py-6 text-foreground hover:no-underline flex justify-between items-center group-data-[state=open]:bg-gold/5 transition-colors">
                  <span className="font-body text-left text-lg md:text-xl font-medium pr-8">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-foreground/70 font-body leading-relaxed text-base pt-2">
                  <div className="border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
