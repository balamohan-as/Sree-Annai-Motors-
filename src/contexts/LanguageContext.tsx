
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const defaultLanguage: Language = (localStorage.getItem('lang') as Language) || 'en';

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Navbar translations
    "navbar.home": "Home",
    "navbar.about": "About",
    "navbar.services": "Services",
    "navbar.why_choose_us": "Why Choose Us",
    "navbar.testimonials": "Testimonials",
    "navbar.contact": "Contact",
    
    // Hero translations
    "hero.title": "Personalized Car Care — Trusted by Generations in Tirunelveli!",
    "hero.subtitle": "One Man. One Mission. 100% Dedication to Your Car's Health.",
    "hero.description": "Expert care for both diesel and petrol vehicles, delivered with personal attention.",
    "hero.learn_more": "Learn More",
    "hero.contact_us": "Contact Us",
    
    // About translations
    "about.title": "About Sri Annai Motors",
    "about.description": "Sri Annai Motors is a leading auto repair shop dedicated to providing top-notch services with a commitment to quality and customer satisfaction. With years of experience, our team of certified technicians ensures your vehicle receives the best care possible.",
    "about.yearsExperience": "Years Experience",
    "about.happyCustomers": "Happy Customers",
    "about.personalAttention": "Personal Attention",
    "about.satisfaction": "Client Satisfaction",
    
    // Services translations
    "services.title": "Our Services",
    "services.description": "We offer a comprehensive range of services to keep your vehicle running smoothly. From routine maintenance to complex repairs, our expert technicians have you covered.",
    "services.diagnosis.title": "Vehicle Diagnostics",
    "services.diagnosis.description": "Advanced diagnostics to identify and fix any issues with precision.",
    "services.engine.title": "Engine Repair",
    "services.engine.description": "Expert engine repair and maintenance services for both diesel and petrol.",
    "services.maintenance.title": "Preventative Maintenance",
    "services.maintenance.description": "Regular service to keep your vehicle in top condition and avoid costly repairs.",
    "services.parts.title": "Genuine Parts",
    "services.parts.description": "High-quality, genuine replacement parts for lasting performance.",
    "services.personalized.title": "Personalized Service",
    "services.personalized.description": "Tailored solutions to meet your specific vehicle needs.",
    "services.warranty.title": "Service Warranty",
    "services.warranty.description": "Peace of mind with our service guarantee on all repairs.",
    
    // Why Choose Us translations
    "whyChooseUs.title": "Why Choose Us",
    "whyChooseUs.description": "Discover why Sri Annai Motors is the preferred choice for vehicle owners in Tirunelveli.",
    "whyChooseUs.singleOwner.title": "Single Owner Business",
    "whyChooseUs.singleOwner.description": "Direct accountability and personalized attention from the owner himself.",
    "whyChooseUs.personalized.title": "Personalized Attention",
    "whyChooseUs.personalized.description": "We treat your car like it's our own, with detailed care and attention.",
    "whyChooseUs.honest.title": "Honest Pricing",
    "whyChooseUs.honest.description": "Transparent pricing with no hidden costs or unnecessary repairs.",
    "whyChooseUs.genuine.title": "Genuine Parts Only",
    "whyChooseUs.genuine.description": "We use only manufacturer-approved parts for all repairs and replacements.",
    
    // Testimonials translations
    "testimonials.title": "Testimonials",
    "testimonials.description": "See what our satisfied customers have to say about their experience with Sri Annai Motors.",
    
    // Contact translations
    "contact.title": "Contact Us",
    "contact.description": "Get in touch with us for all your auto repair needs. Our friendly staff is here to assist you.",
    "contact.ourLocation": "Our Location",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.findUs": "Find Us On Map",
    "contact.sendMessage": "Send Us A Message",
    "contact.name": "Name",
    "contact.yourName": "Your name",
    "contact.phoneNumber": "Phone Number",
    "contact.yourPhone": "Your phone number",
    "contact.email": "Email",
    "contact.yourEmail": "Your email address",
    "contact.message": "Message",
    "contact.yourMessage": "Your message",
    "contact.submit": "Submit",
    
    // Footer translations
    "footer.description": "Your trusted partner for quality auto repair services in Tirunelveli for over 25 years.",
    "footer.tagline": "Quality Service, Every Time",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Information",
    "footer.rights": "All Rights Reserved",
    "footer.designedFor": "Designed with ❤️ for Sri Annai Motors"
  },
  ta: {
    // Navbar translations
    "navbar.home": "முகப்பு",
    "navbar.about": "எங்களை பற்றி",
    "navbar.services": "சேவைகள்",
    "navbar.why_choose_us": "ஏன் எங்களை தேர்வு செய்ய வேண்டும்",
    "navbar.testimonials": "வாடிக்கையாளர் கருத்துகள்",
    "navbar.contact": "தொடர்பு கொள்ளவும்",
    
    // Hero translations
    "hero.title": "தனிப்பயனாக்கப்பட்ட கார் பராமரிப்பு — திருநெல்வேலியில் தலைமுறைகளால் நம்பப்படுகிறது!",
    "hero.subtitle": "ஒரு மனிதன். ஒரு இலக்கு. உங்கள் காரின் ஆரோக்கியத்திற்கு 100% அர்ப்பணிப்பு.",
    "hero.description": "டீசல் மற்றும் பெட்ரோல் வாகனங்களுக்கான நிபுணர் பராமரிப்பு, தனிப்பட்ட கவனத்துடன் வழங்கப்படுகிறது.",
    "hero.learn_more": "மேலும் அறிக",
    "hero.contact_us": "எங்களை தொடர்பு கொள்ள",
    
    // About translations
    "about.title": "ஸ்ரீ அன்னை மோட்டார்ஸ் பற்றி",
    "about.description": "ஸ்ரீ அன்னை மோட்டார்ஸ் என்பது தரம் மற்றும் வாடிக்கையாளர் திருப்திக்கான அர்ப்பணிப்புடன் உயர்தர சேவைகளை வழங்குவதில் அர்ப்பணித்துள்ள முன்னணி வாகன பழுதுபார்க்கும் கடையாகும். பல ஆண்டுகள் அனுபவத்துடன், எங்கள் சான்றளிக்கப்பட்ட தொழில்நுட்ப வல்லுநர்கள் குழு உங்கள் வாகனம் சிறந்த கவனிப்பைப் பெறுவதை உறுதி செய்கிறது.",
    "about.yearsExperience": "ஆண்டுகள் அனுபவம்",
    "about.happyCustomers": "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    "about.personalAttention": "தனிப்பட்ட கவனம்",
    "about.satisfaction": "வாடிக்கையாளர் திருப்தி",
    
    // Services translations
    "services.title": "எங்கள் சேவைகள்",
    "services.description": "உங்கள் வாகனம் சீராக இயங்குவதற்கு நாங்கள் விரிவான சேவைகளை வழங்குகிறோம். வழக்கமான பராமரிப்பு முதல் சிக்கலான பழுதுபார்ப்பு வரை, எங்கள் நிபுணர் தொழில்நுட்ப வல்லுநர்கள் உங்களைக் கவனித்துக் கொள்கிறார்கள்.",
    "services.diagnosis.title": "வாகன நோயறிதல்",
    "services.diagnosis.description": "எந்தவொரு சிக்கல்களையும் துல்லியமாக அடையாளம் கண்டு சரிசெய்ய மேம்பட்ட நோயறிதல்.",
    "services.engine.title": "எஞ்சின் பழுது",
    "services.engine.description": "டீசல் மற்றும் பெட்ரோல் இரண்டிற்கும் நிபுணர் எஞ்சின் பழுதுபார்ப்பு மற்றும் பராமரிப்பு சேவைகள்.",
    "services.maintenance.title": "தடுப்பு பராமரிப்பு",
    "services.maintenance.description": "உங்கள் வாகனத்தை சிறந்த நிலையில் வைத்திருக்கவும், விலை உயர்ந்த பழுதுபார்ப்புகளைத் தவிர்க்கவும் வழக்கமான சேவை.",
    "services.parts.title": "உண்மையான பாகங்கள்",
    "services.parts.description": "நீடித்த செயல்திறனுக்கான உயர்தரமான, உண்மையான மாற்று பாகங்கள்.",
    "services.personalized.title": "தனிப்பயனாக்கப்பட்ட சேவை",
    "services.personalized.description": "உங்கள் குறிப்பிட்ட வாகனத் தேவைகளைப் பூர்த்தி செய்ய வடிவமைக்கப்பட்ட தீர்வுகள்.",
    "services.warranty.title": "சேவை உத்தரவாதம்",
    "services.warranty.description": "அனைத்து பழுதுபார்ப்புகளிலும் எங்கள் சேவை உத்தரவாதத்துடன் மன அமைதி.",
    
    // Why Choose Us translations
    "whyChooseUs.title": "ஏன் எங்களை தேர்வு செய்ய வேண்டும்",
    "whyChooseUs.description": "திருநெல்வேலியில் உள்ள வாகன உரிமையாளர்களுக்கு ஸ்ரீ அன்னை மோட்டார்ஸ் ஏன் விருப்பமான தேர்வாக உள்ளது என்பதைக் கண்டறியவும்.",
    "whyChooseUs.singleOwner.title": "ஒற்றை உரிமையாளர் வணிகம்",
    "whyChooseUs.singleOwner.description": "உரிமையாளரிடமிருந்து நேரடி பொறுப்புக்கூறல் மற்றும் தனிப்பயனாக்கப்பட்ட கவனம்.",
    "whyChooseUs.personalized.title": "தனிப்பயனாக்கப்பட்ட கவனம்",
    "whyChooseUs.personalized.description": "உங்கள் காரை எங்கள் சொந்தமாக நடத்துகிறோம், விரிவான கவனிப்பு மற்றும் கவனத்துடன்.",
    "whyChooseUs.honest.title": "நேர்மையான விலை",
    "whyChooseUs.honest.description": "மறைக்கப்பட்ட செலவுகள் அல்லது தேவையற்ற பழுதுபார்ப்புகள் இல்லாத வெளிப்படையான விலை.",
    "whyChooseUs.genuine.title": "உண்மையான பாகங்கள் மட்டுமே",
    "whyChooseUs.genuine.description": "அனைத்து பழுதுபார்ப்புகள் மற்றும் மாற்றுகளுக்கும் உற்பத்தியாளரால் அங்கீகரிக்கப்பட்ட பாகங்களை மட்டுமே பயன்படுத்துகிறோம்.",
    
    // Testimonials translations
    "testimonials.title": "வாடிக்கையாளர் கருத்துகள்",
    "testimonials.description": "ஸ்ரீ அன்னை மோட்டார்ஸில் அவர்களின் அனுபவத்தைப் பற்றி எங்கள் திருப்தியடைந்த வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள் என்பதைப் பாருங்கள்.",
    
    // Contact translations
    "contact.title": "தொடர்பு கொள்ளவும்",
    "contact.description": "உங்கள் அனைத்து வாகன பழுதுபார்ப்பு தேவைகளுக்கும் எங்களுடன் தொடர்பு கொள்ளவும். உங்களுக்கு உதவ எங்கள் நட்பான ஊழியர்கள் இங்கே உள்ளனர்.",
    "contact.ourLocation": "எங்கள் இருப்பிடம்",
    "contact.address": "முகவரி",
    "contact.phone": "தொலைபேசி",
    "contact.findUs": "வரைபடத்தில் எங்களைக் காணுங்கள்",
    "contact.sendMessage": "எங்களுக்கு ஒரு செய்தி அனுப்புங்கள்",
    "contact.name": "பெயர்",
    "contact.yourName": "உங்கள் பெயர்",
    "contact.phoneNumber": "தொலைபேசி எண்",
    "contact.yourPhone": "உங்கள் தொலைபேசி எண்",
    "contact.email": "மின்னஞ்சல்",
    "contact.yourEmail": "உங்கள் மின்னஞ்சல் முகவரி",
    "contact.message": "செய்தி",
    "contact.yourMessage": "உங்கள் செய்தி",
    "contact.submit": "சமர்ப்பிக்கவும்",
    
    // Footer translations
    "footer.description": "திருநெல்வேலியில் 25 ஆண்டுகளுக்கும் மேலாக தரமான வாகன பழுதுபார்ப்பு சேவைகளுக்கான உங்கள் நம்பகமான கூட்டாளர்.",
    "footer.tagline": "ஒவ்வொரு முறையும் தரமான சேவை",
    "footer.quickLinks": "விரைவு இணைப்புகள்",
    "footer.contactInfo": "தொடர்பு தகவல்",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
    "footer.designedFor": "ஸ்ரீ அன்னை மோட்டார்ஸுக்காக ❤️ உடன் வடிவமைக்கப்பட்டது"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const changeLanguage = useCallback((lang: Language) => {
    localStorage.setItem('lang', lang);
    setLanguage(lang);
    
    // Dispatch a custom event for components that don't use the context directly
    window.dispatchEvent(
      new CustomEvent('languageChange', { detail: { language: lang } })
    );
  }, []);

  useEffect(() => {
    // Set initial language based on localStorage or default
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const t = useCallback((key: string) => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
