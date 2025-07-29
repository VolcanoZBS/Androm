import React from 'react';
import { Building2, Wrench, Users2, Phone, Mail, Shield, Hammer, Lightbulb, PaintBucket, CheckCircle2, Trophy, Clock, Target } from 'lucide-react';
import translations from './Translations';


function Services() {
return(  
<section id="services" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">{translations.services.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {translations.services.items.map((service, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                {[Building2, Wrench, Hammer, Lightbulb, PaintBucket, Building2][index] && (
                  <div className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-3 md:mb-4">
                    {React.createElement([Building2, Wrench, Hammer, Lightbulb, PaintBucket, Building2][index], { 
                      size: typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 48 
                    })}
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
)}

export default Services;