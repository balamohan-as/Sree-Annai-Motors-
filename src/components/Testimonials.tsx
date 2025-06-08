
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t, language } = useLanguage();
  
  const testimonials = {
    en: [
      {
        id: 1,
        name: "Customer 01",
        role: "Car Owner",
        quote: "I've been bringing my car to Sri Annai Motors for over 5 years. Their service is consistently excellent, and I trust them completely with my vehicle.",
        rating: 5
      },
      {
        id: 2,
        name: "Customer 02",
        role: "Business Owner",
        quote: "The team at Sri Annai Motors has always provided exceptional service for our company vehicles. Quick turnaround times and quality work every time.",
        rating: 5
      },
      {
        id: 3,
        name: "Customer 03",
        role: "Regular Customer",
        quote: "Finding trustworthy mechanics is difficult, but Sri Annai Motors has never let me down. Fair pricing and honest advice make them stand out.",
        rating: 5
      }
    ],
    ta: [
      {
        id: 1,
        name: "வாடிக்கையாளர் 01",
        role: "கார் உரிமையாளர்",
        quote: "நான் 5 ஆண்டுகளுக்கும் மேலாக எனது காரை ஸ்ரீ அன்னை மோட்டார்ஸுக்கு கொண்டு வருகிறேன். அவர்களின் சேவை தொடர்ந்து சிறப்பாக உள்ளது, மற்றும் எனது வாகனத்தில் அவர்களை முழுமையாக நம்புகிறேன்.",
        rating: 5
      },
      {
        id: 2,
        name: "வாடிக்கையாளர் 02",
        role: "வணிக உரிமையாளர்",
        quote: "ஸ்ரீ அன்னை மோட்டார்ஸில் உள்ள குழு எங்கள் நிறுவன வாகனங்களுக்கு எப்போதும் சிறப்பான சேவையை வழங்கியுள்ளது. விரைவான திரும்ப நேரங்கள் மற்றும் ஒவ்வொரு முறையும் தரமான வேலை.",
        rating: 5
      },
      {
        id: 3,
        name: "வாடிக்கையாளர் 03",
        role: "வழக்கமான வாடிக்கையாளர்",
        quote: "நம்பகமான மெக்கானிக்குகளைக் கண்டுபிடிப்பது கடினம், ஆனால் ஸ்ரீ அன்னை மோட்டார்ஸ் என்னை ஒருபோதும் ஏமாற்றவில்லை. நியாயமான விலை மற்றும் நேர்மையான ஆலோசனை அவர்களை தனித்து காட்டுகிறது.",
        rating: 5
      }
    ]
  };
  
  const currentTestimonials = language === 'en' ? testimonials.en : testimonials.ta;

  return (
    <section className="section bg-[#577BC1]/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-[#344CB7] mb-6">{t('testimonials.title')}</h2>
          <div className="h-1 w-20 bg-[#577BC1] mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFEB00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
