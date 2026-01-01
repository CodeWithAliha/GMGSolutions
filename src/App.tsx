import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import GlobeBackground from './components/GlobeBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseSection from './components/WhyChooseSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Loader />
      <GlobeBackground />
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="why-choose">
          <WhyChooseSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
