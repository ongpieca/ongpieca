import { Button } from "./button";
import { ArrowRight, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
          <span className="inline-block text-yellow-400 animate-slide-in-left">{t.hero.preserving}</span>{' '}
          <span className="inline-block text-primary-green bg-white px-4 py-2 rounded animate-bounce-in" style={{animationDelay: '0.3s'}}>{t.hero.heritage}</span>
          <br />
          <span className="inline-block text-white animate-slide-in-right" style={{animationDelay: '0.5s'}}>{t.hero.transforming}</span>{' '}
          <span className="inline-block text-accent-red bg-white px-4 py-2 rounded animate-bounce-in" style={{animationDelay: '0.7s'}}>{t.hero.communities}</span>
        </h1>
        <p className="md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 font-normal text-[20px] animate-fade-in-up" style={{animationDelay: '1s'}}>
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-110 hover:shadow-xl"
          >
            {t.hero.learnMore} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            onClick={() => scrollToSection('donate')}
            className="bg-accent-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 transition-all transform hover:scale-110 hover:shadow-xl"
          >
            {t.hero.supportUs} <Heart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
