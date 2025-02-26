import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { HeroSection } from '@/components/hero-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
