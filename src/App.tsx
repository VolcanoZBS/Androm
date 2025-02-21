import React from 'react';
import { Building2, Wrench, Users2, Phone, Mail, Shield, Hammer, Lightbulb, PaintBucket, CheckCircle2, Trophy, Clock, Target } from 'lucide-react';
import Logo from './components/Logo';
import ContactForm from './components/ContactForm';

// Language translations
const translations = {
  nav: {
    services: 'Servicii',
    about: 'Despre Noi',
    projects: 'Proiecte',
    contact: 'Contact',
  },
  hero: {
    title: '',
    subtitle: 'Partenerul dvs. de încredere pentru soluții complete în construcții - de la construcții noi până la renovări, aducem expertiză și fiabilitate în fiecare proiect.',
    cta: 'Consultație Gratuită',
  },
  services: {
    title: 'Serviciile Noastre',
    items: [
      { title: 'Construcții Noi', desc: 'Servicii complete de construcții pentru proiecte rezidențiale și comerciale.' },
      { title: 'Reabilitare Termică', desc: 'Soluții eficiente energetic pentru îmbunătățirea performanței termice a clădirii.' },
      { title: 'Reparații și Întreținere', desc: 'Servicii profesionale de reparații pentru toate tipurile de probleme ale clădirilor.' },
      { title: 'Instalații Electrice', desc: 'Instalare și întreținere completă a sistemelor electrice.' },
      { title: 'Renovări Interioare', desc: 'Servicii complete de renovare pentru apartamente și case.' },
      { title: 'Soluții Personalizate', desc: 'Soluții de construcții adaptate cerințelor unice ale proiectului.' },
    ],
  },
  about: {
    title: 'Despre Noi',
    subtitle: 'Experiență și Profesionalism în Construcții',
    description: 'Cu o experiență de peste 15 ani în domeniul construcțiilor, ANDROM CONSTRUCTII s-a remarcat prin calitatea serviciilor și angajamentul față de satisfacția clienților. Echipa noastră de profesioniști este dedicată excelenței în fiecare proiect pe care îl realizăm.',
    stats: [
      { value: '15+', label: 'Ani de Experiență' },
      { value: '500+', label: 'Proiecte Finalizate' },
      { value: '100%', label: 'Clienți Mulțumiți' },
    ],
    values: [
      { 
        title: 'Misiunea Noastră',
        desc: 'Să oferim servicii de construcții de cea mai înaltă calitate, respectând termenele și bugetele stabilite.',
        icon: Target
      },
      {
        title: 'Experiență Dovedită',
        desc: 'Peste 15 ani de experiență în domeniul construcțiilor și renovărilor.',
        icon: Trophy
      },
      {
        title: 'Punctualitate',
        desc: 'Respectăm cu strictețe termenele de execuție agreate pentru fiecare proiect.',
        icon: Clock
      }
    ]
  },
  projects: {
    title: 'Proiectele Noastre',
    subtitle: 'Portofoliu de Lucrări',
    items: [
      {
        title: 'Reabilitare termică',
        category: 'Bd. Tineretului, Bucuresti',
        image: '/Bloc Tineretului .jpg',
        description: 'Reabilitare termică a unui bloc cu 2 scări și 120 de apartamente, terasa blocului, balcoane.',
      },
      {
        title: 'Renovare Clădire Istorică',
        category: 'Renovare',
        image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80',
        description: 'Restaurare completă a unei clădiri istorice din centrul orașului, cu păstrarea elementelor arhitecturale originale.',
      },
      {
        title: 'Centru Comercial Modern',
        category: 'Construcție Comercială',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
        description: 'Centru comercial modern cu 30 de spații comerciale, parcare și facilități de ultimă generație.',
      },
    ],
  },
  whyUs: {
    title: 'De Ce Să Ne Alegeți',
    items: [
      { title: 'Licențiați și Asigurați', desc: 'Complet licențiați și asigurați pentru liniștea dvs.' },
      { title: 'Echipă de Experți', desc: 'Profesioniști calificați cu ani de experiență în industrie.' },
      { title: 'Calitate Garantată', desc: 'Garantăm calitatea lucrărilor noastre.' },
    ],
  },
  contact: {
    title: 'Contactați-ne',
    getInTouch: 'Luați Legătura',
    form: {
      name: 'Numele Dvs.',
      email: 'Email-ul Dvs.',
      message: 'Mesajul Dvs.',
      send: 'Trimite Mesaj',
    },
  },
  footer: {
    rights: '© 2025 ANDROM CONSTRUCTII. Toate drepturile rezervate.',
  },
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="relative z-10 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="text-white">
                <Logo />
              </div>
              <div className="hidden md:flex md:items-center md:space-x-8">
                <div className="flex items-center space-x-8">
                  <a href="#services" className="text-white hover:text-blue-400 transition">{translations.nav.services}</a>
                  <a href="#about" className="text-white hover:text-blue-400 transition">{translations.nav.about}</a>
                  <a href="#projects" className="text-white hover:text-blue-400 transition">{translations.nav.projects}</a>
                  <a href="#contact" className="text-white hover:text-blue-400 transition">{translations.nav.contact}</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100%-64px)] md:h-[calc(100%-80px)] flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{translations.hero.title}</h1>
            <p className="text-base md:text-xl mb-6 md:mb-8">{translations.hero.subtitle}</p>
            <a href="#contact" className="inline-block bg-blue-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-blue-500 transition text-sm md:text-base">
              {translations.hero.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
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

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{translations.about.title}</h2>
            <p className="text-xl text-gray-600">{translations.about.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {translations.about.description}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {translations.about.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
                alt="Echipa noastră"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {translations.about.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
                  {React.createElement(value.icon, { size: 64 })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{translations.projects.title}</h2>
            <p className="text-xl text-gray-600">{translations.projects.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translations.projects.items.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative h-48 md:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">{translations.contact.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">{translations.contact.getInTouch}</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  <span className="text-sm md:text-base">+40 (123) 456-789</span>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  <span className="text-sm md:text-base">contact@andromconstructii.ro</span>
                </div>
              </div>
            </div>
            <ContactForm translations={translations.contact.form} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <Logo />
          </div>
          <p className="text-xs md:text-sm text-gray-400">{translations.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;