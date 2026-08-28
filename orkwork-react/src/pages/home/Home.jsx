import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import WhyUs from './components/WhyUs/WhyUs';
import Gallery from './components/Gallery/Gallery';
import Process from './components/Process/Process';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import ServiceAreas from './components/ServiceAreas/ServiceAreas';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <Gallery />
      <Process />
      <ServiceAreas />
      <Contact />
    </div>
  );
}
