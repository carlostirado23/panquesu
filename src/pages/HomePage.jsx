import Navbar    from '../components/Navbar';
import Hero      from '../components/Hero';
import About     from '../components/About';
import Locations from '../components/Locations';
import Footer    from '../components/Footer';
import WAButton  from '../components/WAButton';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Locations />
      <Footer />
      <WAButton />
    </>
  );
}
