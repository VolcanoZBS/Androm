import ContactForm from './components/ContactForm';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import WhyUs from "./components/WhyUs";


function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Portfolio />
      {/* Why Choose Us Section */}
      <WhyUs />
      {/* Contact Section */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;