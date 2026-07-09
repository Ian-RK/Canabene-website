import { useState } from "react";
import { seoData } from "../data/content";

export default function SeoPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-gray-900/90 hover:bg-gray-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm transition-all border border-gray-700"
        title="SEO Reference Panel"
      >
        <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        SEO
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute bottom-10 left-0 w-80 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-5 text-xs overflow-y-auto max-h-96">
          <div className="flex items-center justify-between mb-4">
            <span className="text-green-400 font-bold text-sm">📊 Planejamento SEO</span>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-gray-500 uppercase tracking-wider font-semibold mb-2">Title Tag</div>
              <div className="bg-gray-800 rounded-lg p-2.5 text-gray-300 leading-relaxed">
                {seoData.pageTitle}
              </div>
            </div>

            <div>
              <div className="text-gray-500 uppercase tracking-wider font-semibold mb-2">Meta Description</div>
              <div className="bg-gray-800 rounded-lg p-2.5 text-gray-300 leading-relaxed">
                {seoData.metaDescription}
              </div>
            </div>

            <div>
              <div className="text-gray-500 uppercase tracking-wider font-semibold mb-2">
                Palavras-Chave ({seoData.primaryKeywords.length})
              </div>
              <div className="flex flex-wrap gap-1.5">
                {seoData.primaryKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="bg-green-900/50 text-green-300 border border-green-800 px-2 py-0.5 rounded-md text-xs"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-700 pt-3 text-gray-600 text-xs leading-relaxed">
              ⚙️ Fase 1: CanaBene Information Architecture & SEO Planning
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
