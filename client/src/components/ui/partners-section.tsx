import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import partnerLogosImage from "@assets/Screenshot 2025-08-08 011524_1754608108658.png";

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.2 });

  const partners = [
    { name: "Ministry of Education", description: "Educational infrastructure development" },
    { name: "Health Alliance", description: "Healthcare service delivery" },
    { name: "Water Foundation", description: "Clean water access initiatives" },
    { name: "Community Development Partners", description: "Sustainable community programs" },
    { name: "Islamic Heritage Foundation", description: "Cultural preservation projects" },
    { name: "Regional Development Council", description: "Infrastructure and planning support" },
    { name: "International Aid Network", description: "Global humanitarian coordination" },
    { name: "Local Community Leaders", description: "Grassroots engagement and support" }
  ];

  return (
    <section id="partners" className="py-20 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-black text-primary-green mb-6">Our Partners</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Working together with trusted organizations to maximize our impact across Senegal's communities.
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
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-lg text-gray-700 font-medium">
            <span className="text-accent-red">Together</span>, we're building stronger communities across Senegal
          </p>
        </div>
      </div>
    </section>
  );
}