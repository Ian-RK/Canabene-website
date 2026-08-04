import type { ReactElement } from "react";
import { FileText, HeartHandshake, Lock, ShieldCheck } from "lucide-react";
import { heroContent, WHATSAPP_URL } from "../data/content";

const trustIcons: Record<string, ReactElement> = {
  shield: (
    <ShieldCheck className="w-5 h-5" aria-hidden="true" focusable="false" />
  ),
  "file-text": (
    <FileText className="w-5 h-5" aria-hidden="true" focusable="false" />
  ),
  lock: (
    <Lock className="w-5 h-5" aria-hidden="true" focusable="false" />
  ),
  "message-circle": (
    <HeartHandshake className="w-5 h-5" aria-hidden="true" focusable="false" />
  ),
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imgs/hero-bg-2.jpeg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-secondary/30 via-brand-secondary/60 to-brand-secondary/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* Main Headline */}
        <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
          {heroContent.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
          {heroContent.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-whatsapp-green hover:bg-brand-primary text-white px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 shadow-lg hover:shadow-brand-primary/30 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {heroContent.cta}
          </a>
          <button
            onClick={() => scrollTo("faq")}
            className="flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:bg-surface-white/10 w-full sm:w-auto justify-center"
          >
            {heroContent.ctaSecondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {heroContent.trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-2.5 bg-surface-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-white/90"
            >
              <span className="text-brand-primary shrink-0">
                {trustIcons[badge.icon]}
              </span>
              <span className="text-xs font-medium text-center leading-tight">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
