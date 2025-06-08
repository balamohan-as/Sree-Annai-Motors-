
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();
  
  const reasons = [
    {
      id: 1,
      titleKey: "whyChooseUs.singleOwner.title",
      descriptionKey: "whyChooseUs.singleOwner.description"
    },
    {
      id: 2,
      titleKey: "whyChooseUs.personalized.title",
      descriptionKey: "whyChooseUs.personalized.description"
    },
    {
      id: 3,
      titleKey: "whyChooseUs.honest.title",
      descriptionKey: "whyChooseUs.honest.description"
    },
    {
      id: 4,
      titleKey: "whyChooseUs.genuine.title",
      descriptionKey: "whyChooseUs.genuine.description"
    }
  ];

  return (
    <section id="why-choose-us" className="section bg-[#577BC1]/10">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/lovable-uploads/1547351a-3e7f-4786-9ae1-abdf16e41811.png"
              alt="Why Choose Us Image"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="heading-lg text-[#344CB7] mb-6">{t('whyChooseUs.title')}</h2>
            <div className="h-1 w-20 bg-[#577BC1] mb-8"></div>
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{t(reason.titleKey)}</h3>
                    <p className="text-gray-600">{t(reason.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
