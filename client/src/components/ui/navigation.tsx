import { useState, useEffect } from "react";
import { Button } from "./button";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./language-selector";
import arpiecaLogo from "@assets/240871454_588027879041722_576747084793897900_n (1)_1754632817174.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

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
                className="h-20 w-20 object-contain"
              />
              <div className="px-3 py-2 rounded font-bold text-xl transition-colors text-white bg-[#4b7a2b]">ONG ARPIECA</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('projects')} className={`transition-colors hover:text-primary-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              {t.nav.projects}
            </button>
            <button onClick={() => scrollToSection('about')} className={`transition-colors hover:text-primary-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              {t.nav.aboutUs}
            </button>
            <a href="/contact" className="transition-colors hover:text-primary-green text-[#0a0a0a]">
              {t.nav.contact}
            </a>
            <LanguageSelector />
          </div>
          <Button 
            onClick={() => scrollToSection('donate')}
            className="bg-accent-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
          >
            {t.nav.donate} <Heart className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
