import { useState, useEffect } from "react";
import { Button } from "./button";
import { Heart } from "lucide-react";
import arpiecaLogo from "@assets/upscalemedia-transformed_1754608155161.jpeg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src={arpiecaLogo} 
                alt="ARPIECA Logo" 
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div className={`px-3 py-2 rounded font-bold text-xl transition-colors ${isScrolled ? 'bg-primary-green text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                ARPIECA
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('work')} className={`transition-colors hover:text-primary-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Our Work
            </button>
            <button onClick={() => scrollToSection('projects')} className={`transition-colors hover:text-primary-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Projects
            </button>
            <button onClick={() => scrollToSection('impact')} className={`transition-colors hover:text-primary-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Our Impact
            </button>
            <button onClick={() => scrollToSection('about')} className={`transition-colors hover:text-primary-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className={`transition-colors hover:text-primary-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Contact
            </button>
          </div>
          <Button 
            onClick={() => scrollToSection('donate')}
            className="bg-accent-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
          >
            DONATE <Heart className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
