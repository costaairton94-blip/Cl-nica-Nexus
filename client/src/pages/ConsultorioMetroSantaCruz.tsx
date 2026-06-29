import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Train, Building2, Stethoscope, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMG = {
  hero: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/MMIQogZagwsminEA.jpeg",
};

export default function ConsultorioMetroSantaCruz() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "A que distância a clínica fica do Metrô Santa Cruz?",
      a: "A Nexus Espaço Saúde está a uma curta caminhada ou a poucos minutos de carro da Estação Santa Cruz (Linhas 1-Azul e 5-Lilás), oferecendo acesso rápido e seguro para seus pacientes.",
    },
    {
      q: "Qual a vantagem de atender próximo a uma estação de metrô?",
      a: "A proximidade com o metrô é um fator decisivo para muitos pacientes, especialmente em São Paulo. Facilita o deslocamento, reduz atrasos e aumenta a adesão ao tratamento, já que o paciente não precisa se preocupar com trânsito ou estacionamento.",
    },
    {
      q: "O prédio possui acessibilidade?",
      a: "Sim, nosso edifício e nossas instalações são totalmente acessíveis, contando com elevadores, rampas e banheiros adaptados para pessoas com mobilidade reduzida.",
    },
    {
      q: "Posso alugar o consultório apenas nos finais de semana?",
      a: "Sim. Com o nosso modelo flexível, você pode agendar salas aos sábados, atendendo à demanda de pacientes que não têm disponibilidade durante a semana.",
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Nexus Espaço Saúde - Consultório Próximo ao Metrô Santa Cruz",
        "image": IMG.hero,
        "@id": "https://nexusespacosaude.com.br/consultorio-metro-santa-cruz",
        "url": "https://nexusespacosaude.com.br/consultorio-metro-santa-cruz",
        "telephone": "+5511932962026",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Onze de Junho, 1070 - Consultório 209",
          "addressLocality": "Vila Clementino",
          "addressRegion": "SP",
          "postalCode": "04041-003",
          "addressCountry": "BR"
        },
        "description": "Aluguel de consultório médico próximo ao Metrô Santa Cruz. Fácil acesso pelas Linhas Azul e Lilás. Estrutura completa para profissionais da saúde."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Consultório Próximo ao Metrô Santa Cruz | Nexus Espaço Saúde"
        description="Aluguel de consultório médico próximo ao Metrô Santa Cruz. Fácil acesso pelas Linhas Azul e Lilás. Estrutura completa para profissionais da saúde."
        canonical="https://nexusespacosaude.com.br/consultorio-metro-santa-cruz"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen pt-20">
        {/* HERO */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                  <Train className="w-4 h-4" />
                  Acessibilidade e Conveniência
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Consultório Próximo ao <span className="text-primary">Metrô Santa Cruz</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Garanta a melhor localização para os seus pacientes. Consultórios equipados a poucos minutos de uma das principais estações de São Paulo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="https://wa.me/5511932962026" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full sm:w-auto text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
                      Falar no WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <img src={IMG.hero} alt="Consultório Metrô Santa Cruz" className="rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* TEXTO SEO 1 */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-muted-foreground">
              <p>
                Em uma metrópole como São Paulo, a mobilidade é um dos principais fatores que os pacientes avaliam antes de agendar uma consulta. Dificuldade de acesso, trânsito intenso e falta de opções de transporte público são motivos frequentes de cancelamentos, atrasos e abandono de tratamento.
              </p>
              <p>
                Ao escolher um <strong>consultório próximo ao Metrô Santa Cruz</strong>, você elimina essa barreira. A Estação Santa Cruz é um dos mais importantes hubs de mobilidade da cidade, interligando a Linha 1-Azul (Norte-Sul) e a Linha 5-Lilás. Isso significa que seus pacientes podem chegar à sua clínica com rapidez e conforto, venham eles da Zona Sul, Centro, Paulista ou Santo Amaro.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Conveniência que Fideliza</h2>
              <p>
                A região do Metrô Santa Cruz também abriga o Shopping Santa Cruz e uma vasta rede de serviços, farmácias, laboratórios de análises clínicas e centros de imagem. Para o paciente, isso representa uma conveniência inestimável: ele pode passar pela consulta, realizar exames e comprar a medicação prescrita no mesmo dia, sem precisar se deslocar para outros bairros.
              </p>
              <p>
                A Nexus Espaço Saúde está estrategicamente posicionada para oferecer essa facilidade. Localizada na Vila Clementino, nossa clínica alia a proximidade com o Metrô Santa Cruz à tranquilidade de uma rua segura e arborizada, proporcionando uma experiência de alto nível do início ao fim.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-secondary">
          <div className="container max-w-3xl">
            <header className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Dúvidas Frequentes</h2>
            </header>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-left text-lg pr-8">{faq.q}</h3>
                    {expandedFaq === idx ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                  </button>
                  {expandedFaq === idx && <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed border-t border-border">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Navegue por outras soluções</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/consultorio-hospital-sao-paulo"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Próximo ao Hospital São Paulo</a></Link>
              <Link href="/consultorio-medico-vila-clementino"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Consultório na Vila Clementino</a></Link>
              <Link href="/coworking-profissionais-saude"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Coworking para Profissionais da Saúde</a></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
