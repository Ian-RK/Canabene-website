import { useState } from "react";
import { seoData } from "../data/content";

export default function SeoPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-brand-secondary/90 hover:bg-brand-secondary/80 text-white text-xs px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm transition-all border border-brand-muted/30"
        title="SEO Reference Panel"
      >
        <svg className="w-3.5 h-3.5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        SEO
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute bottom-10 left-0 w-80 bg-brand-secondary border border-brand-muted/30 rounded-2xl shadow-2xl p-5 text-xs overflow-y-auto max-h-96">
          <div className="flex items-center justify-between mb-4">
            <span className="text-brand-primary font-bold text-sm">📊 Planejamento SEO</span>
            <button onClick={() => setOpen(false)} className="text-text-secondary/80 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-text-secondary/80 uppercase tracking-wider font-semibold mb-2">Title Tag</div>
              <div className="bg-brand-secondary/80 rounded-lg p-2.5 text-brand-surface leading-relaxed">
                {seoData.pageTitle}
              </div>
            </div>

            <div>
              <div className="text-text-secondary/80 uppercase tracking-wider font-semibold mb-2">Meta Description</div>
              <div className="bg-brand-secondary/80 rounded-lg p-2.5 text-brand-surface leading-relaxed">
                {seoData.metaDescription}
              </div>
            </div>

            <div>
              <div className="text-text-secondary/80 uppercase tracking-wider font-semibold mb-2">
                Palavras-Chave ({seoData.primaryKeywords.length})
              </div>
              <div className="flex flex-wrap gap-1.5">
                {seoData.primaryKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="bg-brand-secondary/50 text-brand-surface border border-brand-primary/40 px-2 py-0.5 rounded-md text-xs"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-brand-muted/30 pt-3 text-text-secondary text-xs leading-relaxed">
              ⚙️ Fase 1: CanaBene Information Architecture & SEO Planning
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
