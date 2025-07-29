import Logo from "./Logo";
import translations from "./Translations";

function Hero() {
return(
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
 )}

export default Hero;