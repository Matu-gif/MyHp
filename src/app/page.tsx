import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Career from '@/components/Career';
import Skills from '@/components/Skills';
import Domains from '@/components/Domains';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Career />
        <Skills />
        <Domains />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
