import { Button } from "./button";
import { ArrowRight, Heart } from "lucide-react";

export default function HeroSection() {
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
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 animate-fade-in">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
          <span className="text-yellow-400">PRESERVING</span>{' '}
          <span className="text-primary-green bg-white px-4 py-2 rounded">HERITAGE</span>
          <br />
          <span className="text-white">TRANSFORMING</span>{' '}
          <span className="text-accent-red bg-white px-4 py-2 rounded">COMMUNITIES</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
          Drawing on decades of experience, ARPIECA works hand-in-hand with communities across 
          Senegal, using innovative strategies to preserve Islamic heritage while supporting 
          comprehensive development in education, healthcare, water accessibility, and religious services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-105"
          >
            Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            onClick={() => scrollToSection('donate')}
            className="bg-accent-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 transition-all transform hover:scale-105"
          >
            Support Us Today <Heart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
