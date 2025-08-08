import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import partnerLogosImage from "@assets/Screenshot 2025-08-08 011524_1754624325135.png";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.2 });
  const { t } = useLanguage();

  const partners = [
    { name: "Ministry of Education", description: t.partners.partnersList.education },
    { name: "Health Alliance", description: t.partners.partnersList.health },
    { name: "Water Foundation", description: t.partners.partnersList.water },
    { name: "Community Development Partners", description: t.partners.partnersList.community },
    { name: "Islamic Heritage Foundation", description: t.partners.partnersList.heritage },
    { name: "Regional Development Council", description: t.partners.partnersList.regional },
    { name: "International Aid Network", description: t.partners.partnersList.international },
    { name: "Local Community Leaders", description: t.partners.partnersList.local }
  ];

  return (
    <section id="partners" className="py-20 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-black text-primary-green mb-6">{t.partners.title}</h2>
          <p className="text-xl text-black max-w-3xl mx-auto mb-12">
            {t.partners.description}
          </p>
          
          {/* Partner Logos Grid */}
          <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img 
                src={partnerLogosImage} 
                alt="ARPIECA Partner Organizations"
                className="w-full max-w-4xl mx-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Partner Description Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all transform duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${(index + 2) * 100}ms`}}
            >
              <h3 className="text-lg font-bold text-primary-green mb-3">{partner.name}</h3>
              <p className="text-black text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-lg text-black font-medium">
            {t.partners.footerText}
          </p>
        </div>
      </div>
    </section>
  );
}