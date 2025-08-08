import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import mosqueImage from "@assets/PHOTO-2025-08-08-01-48-15_1754626959757.jpg";

export default function SolutionSection() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/50"
        style={{
          backgroundImage: `url(${mosqueImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-black text-yellow-400 mb-6">{t.solution.title}</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {t.solution.description}
            </p>
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-accent-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 transition-all transform hover:scale-105"
            >
              Read More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div id="about" className="bg-yellow-400 p-8 rounded-2xl animate-slide-in-right">
            <h3 className="text-2xl font-bold text-black mb-6">About ARPIECA</h3>
            <p className="text-black leading-relaxed">
              The <strong>Association pour la Renaissance du Patrimoine Islamique et de l'Expansion de la Culture Arabe</strong> 
              has worked for decades with governments, communities, and international partners to reach comprehensive 
              development goals. Using a unique approach that addresses both cultural preservation and modern needs, 
              ARPIECA has made significant strides and is recognized as a leader in community-driven development across Senegal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
