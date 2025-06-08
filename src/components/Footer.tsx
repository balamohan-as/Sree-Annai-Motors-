
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#000957] text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sri Annai Motors</h3>
            <p className="mb-4">{t('footer.description')}</p>
            <p className="text-[#577BC1]">{t('footer.tagline')}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#FFEB00] transition-colors">
                {t('about.title')}
              </a></li>
              <li><a href="#services" className="hover:text-[#FFEB00] transition-colors">
                {t('services.title')}
              </a></li>
              <li><a href="#why-choose-us" className="hover:text-[#FFEB00] transition-colors">
                {t('whyChooseUs.title')}
              </a></li>
              <li><a href="#contact" className="hover:text-[#FFEB00] transition-colors">
                {t('contact.title')}
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <address className="not-italic">
              <p className="mb-2">181/3A Vannarpettai, Tirunelveli</p>
              <p className="mb-2">Opposite Reliance Market</p>
              <p className="mb-2">{t('contact.phone')}: 98421 77674</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Sri Annai Motors. {t('footer.rights')}</p>
            <div className="mt-4 md:mt-0">
              <p>{t('footer.designedFor')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
