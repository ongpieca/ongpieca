import { useRef } from "react";
import { Button } from "./button";
import { ArrowRight, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ChallengeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.3 });
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-light-gray" ref={ref}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className={`inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg mb-8 transform transition-all duration-800 ${isVisible ? 'opacity-100 -rotate-1 scale-100' : 'opacity-0 rotate-0 scale-75'}`}>
          {t.challenge.title}
        </div>
        <p className={`text-xl text-gray-700 leading-relaxed mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t.challenge.description}
        </p>
        <button 
          onClick={() => scrollToSection('about')}
          className={`text-primary-green font-semibold hover:underline transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {t.challenge.learnMoreMission} <ArrowRight className="ml-1 h-4 w-4 inline" />
        </button>
        <div className="mt-12">
          <Button 
            onClick={() => scrollToSection('donate')}
            className={`bg-primary-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-110 hover:shadow-xl duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}
          >
            {t.challenge.supportToday} <Heart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
