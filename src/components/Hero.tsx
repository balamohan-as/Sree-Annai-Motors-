import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-gradient-to-b from-white to-[#577BC1]/10 py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="heading-xl text-[#000957]">
              {t('hero.title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-[#344CB7]">
              {t('hero.subtitle')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('hero.description')}
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl animate-slide-up h-[600px]">
              <img 
                src="/lovable-uploads/hero.png" 
                alt="Mechanic working on car engine" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

