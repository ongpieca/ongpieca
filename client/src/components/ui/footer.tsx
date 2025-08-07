import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

export default function Footer() {
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
            <h3 className="font-bold text-primary-green mb-4">Site Map</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-green transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('work')} className="hover:text-primary-green transition-colors">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-primary-green transition-colors">
                  ARPIECA's Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('impact')} className="hover:text-primary-green transition-colors">
                  Our Impact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-primary-green transition-colors">
                  Connect with Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-primary-green mb-4">Policies</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-primary-green transition-colors">Terms of use</a></li>
              <li><a href="#" className="hover:text-primary-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-primary-green mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              <a href="mailto:info@arpieca.org" className="hover:text-primary-green transition-colors">
                info@arpieca.org
              </a>
            </p>
            
            <h4 className="font-semibold text-gray-700 mb-3">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">📘</a>
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">📷</a>
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">📺</a>
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">🐦</a>
              <a href="#" className="text-primary-green hover:text-green-700 transition-colors text-xl">💼</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-primary-green mb-4 text-center">BECOME A PARTNER OF CHANGE</h3>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:border-primary-green"
              />
              <Textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded focus:border-primary-green"
                rows={3}
              />
              <Button
                type="submit"
                className="w-full bg-yellow-400 text-black p-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          © ARPIECA 2024 - Association pour la Renaissance du Patrimoine Islamique et de l'Expansion de la Culture Arabe
        </div>
      </div>
    </footer>
  );
}
