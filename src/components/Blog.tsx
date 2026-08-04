import { useState } from "react";
import { Sparkles } from "lucide-react";
import { blogContent } from "../data/content";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="atualizacoes" className="py-12 lg:py-24 bg-linear-to-b from-brand-surface/40 to-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-widest mb-4">
            {blogContent.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary max-w-3xl mx-auto mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}>
            {blogContent.headline}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {blogContent.intro}
          </p>
        </div>

        {/* Future Blog CTA */}
        <div className="relative overflow-hidden bg-brand-secondary rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-sm my-12">
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-surface-white/10 border border-white/20 text-white/80 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" focusable="false"/>
              {blogContent.futureBlogTeaser.badge}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
              {blogContent.futureBlogTeaser.label}
            </h3>
            
            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
              {blogContent.futureBlogTeaser.text}
            </p>

            <div className="flex gap-1.5 mt-8">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse delay-75"></span>
              <span className="w-2 h-2 rounded-full bg-teal-200 animate-pulse delay-150"></span>
            </div>

          </div>
        </div>


        {/* Newsletter Signup */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-surface-white rounded-3xl border-2 border-brand-primary/15 p-10 shadow-sm">
            <div className="w-14 h-14 bg-brand-surface rounded-2xl flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              {blogContent.newsletter.label}
            </h3>
            <p className="text-text-secondary mb-6 text-sm">
              {blogContent.newsletter.text}
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={blogContent.newsletter.placeholder}
                  required
                  className="flex-1 px-4 py-3 border-2 border-brand-muted/30 rounded-xl text-text-primary placeholder:text-text-secondary/70 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="bg-brand-primary hover:bg-brand-primary text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 text-sm whitespace-nowrap"
                >
                  {blogContent.newsletter.cta}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 bg-brand-surface border border-brand-primary/25 rounded-xl p-4 text-brand-primary font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ótimo! Te avisaremos assim que o conteúdo entrar no ar.
              </div>
            )}

            <p className="mt-3 text-xs text-text-secondary/70">
              Sem spam. Seus dados são protegidos pela LGPD. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
