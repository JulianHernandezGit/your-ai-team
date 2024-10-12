import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import Integrations from '@/components/Integrations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <UseCases />
        <Integrations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}