
import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/balaoffl13@gmail.com', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        toast({
          title: "Thank you for sharing your feelings🎉.",
          duration: 5000,
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section bg-[#577BC1]/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-[#344CB7] mb-6">{t('contact.title')}</h2>
          <div className="h-1 w-20 bg-[#577BC1] mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="heading-md mb-6">{t('contact.ourLocation')}</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#344CB7] rounded-full p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600">{t('contact.phone')}</p>
                  <p className="text-lg font-medium">98421 77674</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#344CB7] rounded-full p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600">{t('contact.address')}</p>
                  <p className="text-lg font-medium">
                    181/3A Vannarpettai, Tirunelveli
                    <br />
                    <span className="text-base text-gray-500">(Opposite Reliance Market)</span>
                  </p>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="mt-8 w-full h-64">
                <h4 className="font-medium text-lg mb-4">{t('contact.findUs')}</h4>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.441097733897!2d77.70083421472475!3d8.962107393562912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e906a42bd073%3A0x64c8e275b7a4716c!2sVannarpettai%2C%20Tirunelveli%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1654689421450!5m2!1sen!2sus" 
                  className="w-full h-full border-0 rounded-md"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <form 
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="heading-md mb-6">{t('contact.sendMessage')}</h3>
              
              {/* Hidden fields for Formsubmit.co configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New contact form submission" />
              
              {/* Honeypot field to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#344CB7]" 
                    placeholder={t('contact.yourName')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">{t('contact.phoneNumber')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#344CB7]" 
                    placeholder={t('contact.yourPhone')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">{t('contact.email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#344CB7]" 
                  placeholder={t('contact.yourEmail')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">{t('contact.message')}</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#344CB7]" 
                  placeholder={t('contact.yourMessage')}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#344CB7] hover:bg-[#000957] text-white py-3 px-6 rounded-md font-medium transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
