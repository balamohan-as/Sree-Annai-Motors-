
import { Car, Wrench, Battery, Package, User, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const servicesData = [
    {
      id: 1,
      titleKey: "services.diagnosis.title",
      descriptionKey: "services.diagnosis.description",
      icon: <Car className="h-10 w-10 text-[#344CB7]" />
    },
    {
      id: 2,
      titleKey: "services.engine.title",
      descriptionKey: "services.engine.description",
      icon: <Wrench className="h-10 w-10 text-[#344CB7]" />
    },
    {
      id: 3,
      titleKey: "services.maintenance.title",
      descriptionKey: "services.maintenance.description",
      icon: <Battery className="h-10 w-10 text-[#344CB7]" />
    },
    {
      id: 4,
      titleKey: "services.parts.title",
      descriptionKey: "services.parts.description",
      icon: <Package className="h-10 w-10 text-[#344CB7]" />
    },
    {
      id: 5,
      titleKey: "services.personalized.title",
      descriptionKey: "services.personalized.description",
      icon: <User className="h-10 w-10 text-[#344CB7]" />
    },
    {
      id: 6,
      titleKey: "services.warranty.title",
      descriptionKey: "services.warranty.description",
      icon: <CheckCircle className="h-10 w-10 text-[#344CB7]" />
    }
  ];

  const ServiceCard = ({ titleKey, descriptionKey, icon, delay }: { titleKey: string; descriptionKey: string; icon: JSX.Element; delay: string }) => {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${delay}`}>
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{t(titleKey)}</h3>
        <p className="text-gray-600">{t(descriptionKey)}</p>
      </div>
    );
  };

  return (
    <section id="services" className="section bg-[#577BC1]/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-[#344CB7] mb-6">{t('services.title')}</h2>
          <div className="h-1 w-20 bg-[#577BC1] mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id}
              titleKey={service.titleKey}
              descriptionKey={service.descriptionKey}
              icon={service.icon}
              delay={`animate-slide-up`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
