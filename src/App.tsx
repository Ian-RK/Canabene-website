import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Treatment from "./components/Treatment";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content - One-Page Architecture */}
      <main>
        {/* Seção 1: Home / Hero */}
        <Hero />

        {/* Seção 2: O Tratamento */}
        <Treatment />

        {/* Seção 3: FAQ - Dúvidas Frequentes */}
        <FAQ />

        {/* Seção 4: Blog / Biblioteca (Teaser) */}
        <Blog />

        {/* Seção 5: Sobre Nós */}
        <About />

        {/* Seção 6: Contato */}
        <Contact />
      </main>

      {/* Footer com Aviso Legal, LGPD e Rodapé */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloat />
    </div>
  );
}
