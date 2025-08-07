import { Button } from "./button";
import { ArrowRight, Heart } from "lucide-react";

export default function ChallengeSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg mb-8 transform -rotate-1 animate-fade-in">
          THE CHALLENGE
        </div>
        <p className="text-xl text-gray-700 leading-relaxed mb-8 animate-fade-in">
          Vulnerable populations across Senegal, including <strong className="text-primary-green">orphans, widows, the elderly, and the sick</strong>, 
          face significant challenges in accessing basic necessities like education, healthcare, clean water, and spiritual guidance. 
          These communities require comprehensive support to preserve their cultural heritage while building sustainable foundations for the future.
        </p>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-primary-green font-semibold hover:underline transition-colors animate-fade-in"
        >
          Learn More About Our Mission <ArrowRight className="ml-1 h-4 w-4 inline" />
        </button>
        <div className="mt-12">
          <Button 
            onClick={() => scrollToSection('donate')}
            className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-105 animate-fade-in"
          >
            Support Us Today <Heart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
