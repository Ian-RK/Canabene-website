import { useState, useEffect } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "../data/content";
import { cn } from "../utils/cn";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "O Tratamento", href: "#tratamento" },
  { label: "FAQ", href: "#faq" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Contato", href: "#contato" },
];

type WhatsAppButtonProps = {
  className: string;
  onClick?: () => void;
};

function WhatsAppButton({ className, onClick }: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      <MessageCircle className="w-4 h-4" aria-hidden="true" focusable="false" />
      Falar no WhatsApp
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface-white/95 backdrop-blur-md shadow-sm border-b border-brand-primary/15"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#inicio")}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/Icon-Canabene-no-bg.png"
              alt="CanaBene logo"
              className="h-14 lg:h-18 w-auto object-contain transition-opacity group-hover:opacity-90"
            />

            <div className="flex items-baseline">
              <span
                className={cn(
                  "font-brand text-2xl lg:text-3xl font-semibold transition-colors duration-300",
                  scrolled ? "text-brand-primary" : "text-white"
                )}
              >
                Cana
              </span>

              <span
                className={cn(
                  "font-brand text-2xl lg:text-3xl font-semibold transition-colors duration-300",
                  scrolled ? "text-brand-secondary" : "text-brand-primary"
                )}
              >
                Bene
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  activeSection === link.href.replace("#", "")
                    ? "text-brand-primary bg-brand-surface"
                    : scrolled
                    ? "text-brand-secondary hover:text-brand-primary hover:bg-brand-surface"
                    : "text-white/90 hover:text-white hover:bg-surface-white/10"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <WhatsAppButton
              className="hidden sm:flex items-center gap-2 bg-whatsapp-green hover:bg-brand-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-brand-primary/25 hover:scale-105"
            />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-brand-secondary hover:bg-brand-surface" : "text-white hover:bg-surface-white/10"
              )}
              aria-label="Menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" focusable="false" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" focusable="false" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-surface-white border-t border-brand-muted/15 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  activeSection === link.href.replace("#", "")
                    ? "text-brand-primary bg-brand-surface"
                    : "text-brand-secondary hover:bg-brand-surface/40"
                )}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <WhatsAppButton
                className="flex items-center justify-center gap-2 bg-whatsapp-green text-white px-4 py-3 rounded-xl text-sm font-semibold w-full"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
