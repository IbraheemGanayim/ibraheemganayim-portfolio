import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <Header />
      
      <HeroSection />
      
      <AboutSection />
      
      <SkillsSection />
      
      <ProjectsSection />
      
      <ExperienceSection />
      
      <EducationSection />
      
      <TestimonialsSection />
      
      <ContactSection />
      
      <Footer />
      
      <ScrollToTop />
    </main>
  );
}
