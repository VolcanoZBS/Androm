import React from "react";
import translations from "./Translations";
import { Building2, Wrench, Users2, Phone, Mail, Shield, Hammer, Lightbulb, PaintBucket, CheckCircle2, Trophy, Clock, Target } from 'lucide-react';


function WhyUs() {
  return(
    <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">{translations.whyUs.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {translations.whyUs.items.map((feature, index) => (
              <div key={index} className="text-center">
                {[Shield, Users2, CheckCircle2][index] && (
                  <div className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto mb-3 md:mb-4">
                    {React.createElement([Shield, Users2, CheckCircle2][index], { 
                      size: typeof window !== 'undefined' && window.innerWidth < 768 ? 48 : 64 
                    })}
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default WhyUs;