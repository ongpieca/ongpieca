import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-primary-green mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-black">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-green transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('work')} className="hover:text-primary-green transition-colors">
                  {t.nav.ourWork}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-primary-green transition-colors">
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('impact')} className="hover:text-primary-green transition-colors">
                  {t.nav.ourImpact}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-primary-green transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-black leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-primary-green mb-4">{t.footer.contactInfo}</h3>
            <p className="text-black mb-4">
              <a href="mailto:info@arpieca.org" className="hover:text-primary-green transition-colors">
                info@arpieca.org
              </a>
            </p>
            
            <h4 className="font-semibold text-black mb-3">{t.footer.followUs}</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">📘</a>
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">📷</a>
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">📺</a>
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">🐦</a>
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">💼</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-primary-green mb-4 text-center">{t.footer.newsletter}</h3>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder={t.footer.enterEmail}
                className="w-full p-3 border border-gray-300 rounded focus:border-primary-green"
              />
              <Textarea
                placeholder={t.contact.form.message}
                className="w-full p-3 border border-gray-300 rounded focus:border-primary-green"
                rows={3}
              />
              <Button
                type="submit"
                className="w-full bg-yellow-400 text-black p-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                {t.footer.subscribe}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-black">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
