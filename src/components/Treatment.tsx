import { treatmentContent, WHATSAPP_URL } from "../data/content";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-text-primary">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Treatment() {
  return (
    <section id="tratamento" className="py-12 lg:py-24 bg-linear-to-b from-brand-surface/40 to-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-widest mb-4">
            {treatmentContent.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary max-w-3xl mx-auto mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}>
            {treatmentContent.headline}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {treatmentContent.intro}
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-linear-to-br from-brand-primary to-brand-secondary rounded-3xl p-4 lg:p-8 mb-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-surface-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{treatmentContent.howItWorks.title}</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                <RichText text={treatmentContent.howItWorks.body} />
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-2 shadow-xl w-full max-w-sm">
                <img
                  src="public/images/treatment-img-1.jpg"
                  alt="Ilustração do sistema endocanabinoide e o mecanismo chave-fechadura dos canabinoides"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Compounds */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {treatmentContent.mainCompounds.map((compound) => (
            <div
              key={compound.acronym}
              className={`rounded-3xl p-8 border-2 ${
                compound.color === "green"
                  ? "bg-brand-surface border-brand-primary/25"
                  : "bg-brand-surface border-brand-muted/30"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`text-3xl font-black ${
                  compound.color === "green" ? "text-brand-primary" : "text-brand-secondary"
                } leading-none`}>
                  {compound.acronym}
                </div>
                <div>
                  <div className="font-bold text-text-primary text-lg">{compound.name}</div>
                  <div className={`text-sm font-medium ${
                    compound.color === "green" ? "text-brand-primary" : "text-brand-secondary"
                  }`}>
                    {compound.acronym === "CBD" ? "Sem propriedade psicoativa" : "Uso controlado e prescrito"}
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">{compound.description}</p>
            </div>
          ))}
        </div>

        {/* Conditions */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              {treatmentContent.conditions.title}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {treatmentContent.conditions.list.map((condition) => (
                <div
                  key={condition}
                  className="flex items-center gap-3 p-4 bg-surface-white rounded-xl border border-brand-muted/15 shadow-sm hover:border-brand-primary/25 hover:shadow-md transition-all"
                >
                  <div className="w-2 h-2 bg-brand-primary rounded-full shrink-0" />
                  <span className="text-text-secondary font-medium">{condition}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-text-secondary/80 italic">{treatmentContent.conditions.disclaimer}</p>
          </div>

          {/* How to Access - Steps */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-12">
              {treatmentContent.howToAccess.title}
            </h3>
            <div className="space-y-4">
              {treatmentContent.howToAccess.steps.map((step, i) => (
                <div key={step.number} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-brand-primary text-white rounded-2xl flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                    {i < treatmentContent.howToAccess.steps.length - 1 && (
                      <div className="w-0.5 h-6 bg-brand-surface mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h4 className="font-bold text-text-primary mb-1">{step.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-brand-surface rounded-2xl border border-brand-primary/25">
              <p className="text-brand-primary font-medium mb-4 text-sm">
                Pronto para entender se esse tratamento é indicado para o seu caso?
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {treatmentContent.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
