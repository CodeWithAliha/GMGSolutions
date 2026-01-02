import { useState, useEffect } from 'react';
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
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      if (hash === 'home' || hash === 'about' || hash === 'services') {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = page;
  };

  return (
    <div className="app">
      <CustomCursor />
      <Loader />
      <GlobeBackground />
      <Header onNavigate={navigate} currentPage={currentPage} />

      {currentPage === 'home' && (
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
      )}

      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
