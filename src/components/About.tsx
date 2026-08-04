import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle,
} from "lucide-react";
import { aboutContent, WHATSAPP_URL } from "../data/content";

export default function About() {
  return (
    <section id="sobre" className="py-12 lg:py-24 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-widest mb-4">
            {aboutContent.sectionLabel}
          </span>
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-secondary max-w-3xl mx-auto">
            {aboutContent.headline}
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text + Commitment card */}
          <div className="space-y-10">
            <div className="space-y-6">
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>

            {/* Commitment card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-br from-green-100 to-teal-100 rounded-3xl transform rotate-2 opacity-60" />
              <div className="relative bg-surface-white rounded-3xl p-8 shadow-xl border border-brand-surface">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-brand-primary" aria-hidden="true" focusable="false" />
                  </div>
                  <span className="font-semibold text-brand-secondary">{aboutContent.commitment.title}</span>
                </div>
                <ul className="space-y-4">
                  {aboutContent.commitment.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-primary">
                      <Check className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" strokeWidth={2.5} aria-hidden="true" focusable="false" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Image*/}
          <div className="space-y-12">
            {/* Team image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-br from-green-100 to-teal-100 rounded-3xl transform rotate-2 opacity-60" />
              <img
                src="imgs/about-img.jpg"
                alt="Equipe CanaBene em atendimento humanizado"
                className="relative rounded-3xl shadow-xl border border-brand-surface object-cover w-full h-[600px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Future Doctors CTA */}
        <div className="bg-brand-secondary rounded-3xl p-8 lg:p-12 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-white/10 border border-white/20 text-white/80 px-4 py-1.5 rounded-full text-xs font-medium mb-4">
            <BadgeCheck className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" focusable="false" />
            {aboutContent.futureDoctorsTeaser.badge}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {aboutContent.futureDoctorsTeaser.label}
          </h3>
          <p className="text-white/75 max-w-2xl mx-auto mb-6">
            {aboutContent.futureDoctorsTeaser.text}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            {aboutContent.futureDoctorsTeaser.cta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>
    </section>
  );
}
