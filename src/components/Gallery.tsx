
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="section bg-[#344CB7]/5 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery Images */}
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
              alt="Auto repair shop workshop" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold mb-2">{t('gallery.workshop')}</h3>
              <p className="text-gray-600">{t('gallery.modernFacility')}</p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1493236296276-d17357e24cb8?auto=format&fit=crop&q=80&w=800" 
              alt="Diagnostic equipment" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold mb-2">{t('gallery.equipment')}</h3>
              <p className="text-gray-600">{t('gallery.latestTech')}</p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1632823471565-1ecdf5ec9499?auto=format&fit=crop&q=80&w=800" 
              alt="Auto mechanic team" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold mb-2">{t('gallery.team')}</h3>
              <p className="text-gray-600">{t('gallery.expertTechnicians')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
