
import { useState } from 'react';
import { Globe, Facebook, Instagram } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'ta' : 'en');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close mobile menu when clicking a link
      setIsOpen(false);
      
      // Scroll to section with smooth behavior
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#000957] to-[#344CB7] border-b border-white/10 py-4 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <span className="text-[#FFEB00] font-poppins font-bold text-2xl md:text-3xl">
                Sri Annai Motors
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white/90 hover:text-[#FFEB00] font-medium transition-colors"
            >
              {language === 'en' ? 'About' : 'எங்களை பற்றி'}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white/90 hover:text-[#FFEB00] font-medium transition-colors"
            >
              {language === 'en' ? 'Services' : 'சேவைகள்'}
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')} 
              className="text-white/90 hover:text-[#FFEB00] font-medium transition-colors"
            >
              {language === 'en' ? 'Why Choose Us' : 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்'}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white/90 hover:text-[#FFEB00] font-medium transition-colors"
            >
              {language === 'en' ? 'Contact' : 'தொடர்பு'}
            </button>
            <Toggle 
              pressed={language === 'ta'} 
              onPressedChange={toggleLanguage}
              className="bg-transparent hover:bg-[#577BC1]/20 text-white p-2 rounded-full"
            >
              <Globe size={20} className="mr-2" />
              {language === 'en' ? 'தமிழ்' : 'English'}
            </Toggle>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Toggle 
              pressed={language === 'ta'} 
              onPressedChange={toggleLanguage}
              className="bg-transparent hover:bg-[#577BC1]/20 text-white p-2 rounded-full"
            >
              <Globe size={16} />
            </Toggle>
            <button 
              type="button" 
              className="text-white hover:text-[#FFEB00] transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in bg-[#000957]/95 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="flex flex-col space-y-2 py-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white/90 hover:text-[#FFEB00] hover:bg-white/5 font-medium transition-colors px-4 py-3 text-left"
              >
                {language === 'en' ? 'About' : 'எங்களை பற்றி'}
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white/90 hover:text-[#FFEB00] hover:bg-white/5 font-medium transition-colors px-4 py-3 text-left"
              >
                {language === 'en' ? 'Services' : 'சேவைகள்'}
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')} 
                className="text-white/90 hover:text-[#FFEB00] hover:bg-white/5 font-medium transition-colors px-4 py-3 text-left"
              >
                {language === 'en' ? 'Why Choose Us' : 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்'}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white/90 hover:text-[#FFEB00] hover:bg-white/5 font-medium transition-colors px-4 py-3 text-left"
              >
                {language === 'en' ? 'Contact' : 'தொடர்பு'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
