import Logo from "./Logo";      
import translations from "./Translations";

{/* Footer */}
function Footer() {
  return (
      <footer className="bg-black text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <Logo />
          </div>
          <p className="text-xs md:text-sm text-gray-400">{translations.footer.rights}</p>
        </div>
      </footer>
)}

export default Footer;