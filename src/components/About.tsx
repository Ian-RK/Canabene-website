import type { ReactElement } from "react";
import { aboutContent, WHATSAPP_URL } from "../data/content";

const icons: Record<string, ReactElement> = {
  heart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  "book-open": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  "shield-check": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

const valueColors = [
  { bg: "bg-rose-50", icon: "text-rose-500", border: "border-rose-100" },
  { bg: "bg-blue-50", icon: "text-blue-500", border: "border-blue-100" },
  { bg: "bg-green-50", icon: "text-green-500", border: "border-green-100" },
  { bg: "bg-amber-50", icon: "text-amber-500", border: "border-amber-100" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-widest mb-4">
            {aboutContent.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-3xl mx-auto"
            style={{ fontFamily: "'Fraunces', serif" }}>
            {aboutContent.headline}
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text content */}
          <div className="space-y-6">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg">
                {p}
              </p>
            ))}

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-green-50 rounded-2xl border border-green-100">
                <div className="text-2xl font-bold text-green-600">2015</div>
                <div className="text-xs text-gray-500 mt-1">ANVISA regulamentou</div>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-2xl border border-teal-100">
                <div className="text-2xl font-bold text-teal-600">100%</div>
                <div className="text-xs text-gray-500 mt-1">Legal e regulamentado</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="text-2xl font-bold text-emerald-600">24h</div>
                <div className="text-xs text-gray-500 mt-1">Retorno máximo</div>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl transform rotate-2 opacity-60" />
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">Nosso compromisso</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Apenas produtos autorizados pela ANVISA",
                  "Orientação sem julgamentos, sem pressa",
                  "Informação com base em evidências científicas",
                  "Privacidade total protegida pela LGPD",
                  "Atendimento humano (não somos um robô)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aboutContent.values.map((value, i) => {
            const colors = valueColors[i % valueColors.length];
            return (
              <div
                key={value.title}
                className={`p-6 rounded-2xl border ${colors.bg} ${colors.border} hover:shadow-md transition-shadow`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center ${colors.icon} mb-4 border ${colors.border}`}>
                  {icons[value.icon]}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Future Doctors CTA */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-1.5 rounded-full text-xs font-medium mb-4">
            <svg className="w-3.5 h-3.5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Em breve - Área para Profissionais de Saúde
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {aboutContent.futureDoctorsTeaser.label}
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            {aboutContent.futureDoctorsTeaser.text}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            {aboutContent.futureDoctorsTeaser.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
