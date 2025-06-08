
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section bg-[#577BC1]/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg text-[#344CB7] mb-6">{t('about.title')}</h2>
          <div className="h-1 w-20 bg-[#577BC1] mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg">
            {t('about.description')}
          </p>
          <div className="mt-10 flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-[#344CB7] font-bold text-4xl">25+</div>
                <p className="text-gray-600">{t('about.yearsExperience')}</p>
              </div>
              <div className="text-center">
                <div className="text-[#344CB7] font-bold text-4xl">2000+</div>
                <p className="text-gray-600">{t('about.happyCustomers')}</p>
              </div>
              <div className="text-center">
                <div className="text-[#344CB7] font-bold text-4xl">100%</div>
                <p className="text-gray-600">{t('about.personalAttention')}</p>
              </div>
              <div className="text-center">
                <div className="text-[#344CB7] font-bold text-4xl">100%</div>
                <p className="text-gray-600">{t('about.satisfaction')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
