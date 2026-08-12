import { footerContent } from "../data/content";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-brand-surface">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Footer() {
  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-secondary text-text-secondary/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:justify-around lg:justify-center lg:gap-40 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center shadow-md">
                <img
                  src="imgs/Icon-Canabene-no-bg.webp"
                  alt="CanaBene logo"
                  className="h-10 lg:h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
                />
              </div>
              <span className="font-brand text-2xl lg:text-3xl font-semibold text-white">
                Cana<span className="text-brand-primary">Bene</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              {footerContent.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="w-full md:w-auto md:pt-4">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider md:text-center">
              Explore
            </h4>
            <ul className="flex flex-col space-y-3.5 md:flex-row md:space-y-0 md:space-x-8 md:justify-center">
              {footerContent.links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-text-secondary/80 hover:text-brand-primary hover:translate-x-1 md:hover:translate-x-0 md:hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
          <div className="bg-brand-secondary/60 rounded-2xl p-5">
            <p className="text-xs text-text-secondary/80 leading-relaxed">
              <RichText text={footerContent.legalNotice} />
            </p>
          </div>
          <div className="bg-brand-secondary/40 rounded-2xl p-5">
            <p className="text-xs text-text-secondary/80 leading-relaxed">
              <RichText text={footerContent.privacyNotice} />
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-secondary">{footerContent.copyright}</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-xs text-text-secondary">{footerContent.anvisaNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
