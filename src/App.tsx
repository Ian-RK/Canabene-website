import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Treatment from "./components/Treatment";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import SeoPanel from "./components/SeoPanel";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content - One-Page Architecture */}
      <main>
        {/* Seção 1: Home / Hero */}
        <Hero />

        {/* Seção 2: Sobre Nós */}
        <About />

        {/* Seção 3: O Tratamento */}
        <Treatment />

        {/* Seção 4: FAQ - Dúvidas Frequentes */}
        <FAQ />

        {/* Seção 5: Blog / Biblioteca (Teaser) */}
        <Blog />

        {/* Seção 6: Contato */}
        <Contact />
      </main>

      {/* Footer com Aviso Legal, LGPD e Rodapé */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloat />

      {/* SEO Reference Panel - Developer Tool */}
      <SeoPanel />
    </div>
  );
}
