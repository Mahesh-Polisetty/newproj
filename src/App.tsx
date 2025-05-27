import { useEffect } from 'react';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Mahesh Polisetty | Portfolio";

    // Update favicon
    const existingFavicon = document.querySelector("link[rel='icon']");
    if (existingFavicon) {
      existingFavicon.setAttribute("href", "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3ER%3C/text%3E%3C/svg%3E");
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans overflow-x-hidden">
      <Navbar />
      <SocialLinks />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <ScrollToTopButton />
    </div>
  );
}

export default App;