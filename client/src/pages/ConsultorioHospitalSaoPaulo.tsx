import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Wind, Wifi, Users, Building2, Stethoscope, CalendarDays, Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMG = {
  hero: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
};

export default function ConsultorioHospitalSaoPaulo() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qual a distância exata entre a Nexus e o Hospital São Paulo?",
      a: "A Nexus está localizada a apenas 5 minutos de caminhada do Hospital São Paulo e do campus da UNIFESP, permitindo que você se desloque rapidamente entre seus plantões, aulas e o seu consultório particular.",
    },
    {
      q: "O modelo por hora atende residentes e pós-graduandos?",
      a: "Sim, é o modelo perfeito para quem tem horários variados. Como residente ou pós-graduando, você pode alugar o consultório apenas nas suas janelas livres, sem se comprometer com um aluguel fixo mensal.",
    },
    {
      q: "O consultório está equipado para atendimento médico?",
      a: "Sim. Todas as salas possuem maca clínica, mesa de atendimento, cadeiras confortáveis, pia para higienização, ar-condicionado e internet de alta velocidade, atendendo a todas as normas da Vigilância Sanitária.",
    },
    {
      q: "Como meus pacientes são recebidos?",
      a: "Temos uma equipe de recepção treinada que acolhe seus pacientes, orienta sobre formulários e os direciona para a sala de espera confortável até que você esteja pronto para o atendimento.",
    },
    {
      q: "Há estacionamento para quem vem de outras regiões?",
      a: "Sim. O prédio conta com estacionamento com serviço de valet, garantindo comodidade para você e para os pacientes que vêm de fora da Vila Clementino.",
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Nexus Espaço Saúde - Consultório Próximo ao Hospital São Paulo",
        "image": IMG.hero,
        "@id": "https://nexusespacosaude.com.br/consultorio-hospital-sao-paulo",
        "url": "https://nexusespacosaude.com.br/consultorio-hospital-sao-paulo",
        "telephone": "+5511932962026",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Onze de Junho, 1070 - Consultório 209",
          "addressLocality": "Vila Clementino",
          "addressRegion": "SP",
          "postalCode": "04041-003",
          "addressCountry": "BR"
        },
        "description": "Aluguel de consultório médico a 5 minutos do Hospital São Paulo e UNIFESP. Ideal para médicos, residentes e profissionais da saúde. Locação por hora ou mensal."
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
        title="Consultório Próximo ao Hospital São Paulo | UNIFESP | Nexus"
        description="Aluguel de consultório médico a 5 minutos do Hospital São Paulo e UNIFESP. Ideal para médicos, residentes e profissionais da saúde. Locação por hora ou mensal."
        canonical="https://nexusespacosaude.com.br/consultorio-hospital-sao-paulo"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen pt-20">
        {/* HERO */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                  <Stethoscope className="w-4 h-4" />
                  Para Médicos, Residentes e Especialistas
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Consultório Próximo ao <span className="text-primary">Hospital São Paulo</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A apenas 5 minutos da UNIFESP e do Hospital São Paulo. Estrutura completa para você focar no atendimento particular, sem burocracia.
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
                <img src={IMG.hero} alt="Consultório Próximo ao Hospital São Paulo" className="rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* TEXTO SEO 1 */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-muted-foreground">
              <p>
                O <strong>Hospital São Paulo (HSP)</strong>, gerido pela <strong>UNIFESP</strong> (Universidade Federal de São Paulo), é um dos maiores complexos hospitalares da América Latina. Diariamente, milhares de médicos, residentes, pós-graduandos e profissionais da saúde circulam pela Vila Clementino, dividindo-se entre plantões, aulas, pesquisas e o atendimento clínico particular.
              </p>
              <p>
                Se você faz parte desse ecossistema, sabe que o tempo é o seu recurso mais valioso. Deslocamentos longos entre o hospital e o seu consultório particular não apenas desgastam o profissional, mas também inviabilizam o atendimento nas pequenas janelas de tempo disponíveis ao longo do dia.
              </p>
              <p>
                É por isso que alugar um <strong>consultório próximo ao Hospital São Paulo</strong> é a decisão mais inteligente para otimizar sua rotina e maximizar sua rentabilidade.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">A Solução Ideal para Residentes e Pós-Graduandos</h2>
              <p>
                Médicos em período de residência ou especialização na UNIFESP enfrentam um grande desafio: a carga horária extensa no hospital dificulta a manutenção de um consultório próprio. Assumir um aluguel mensal, condomínio e custos com secretária é um risco financeiro alto para quem tem poucas horas semanais disponíveis para o atendimento privado.
              </p>
              <p>
                A Nexus Espaço Saúde resolve esse problema através da <strong>locação de consultório por hora</strong>. Localizada a apenas 5 minutos de caminhada do HSP, a Nexus permite que você atenda seus pacientes particulares exatamente nos horários em que está livre. Você paga apenas pelas horas que utilizar, transformando um custo fixo alto em um custo variável que acompanha a sua demanda.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Captação de Pacientes e Networking Médico</h2>
              <p>
                A proximidade com o Hospital São Paulo, o Hospital do Rim e a AACD não beneficia apenas a logística do profissional. Ela é um poderoso motor de captação de pacientes. Muitos pacientes que realizam tratamentos de alta complexidade nessas instituições buscam acompanhamento particular na mesma região, preferindo a conveniência de resolver todas as suas demandas de saúde no mesmo bairro.
              </p>
              <p>
                Além disso, estar inserido na Vila Clementino facilita o networking com colegas de outras especialidades, fomentando uma rede de indicações mútuas essencial para o crescimento sustentável de qualquer clínica privada.
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
              <Link href="/consultorio-medico-vila-clementino"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Consultório Médico na Vila Clementino</a></Link>
              <Link href="/consultorio-metro-santa-cruz"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Próximo ao Metrô Santa Cruz</a></Link>
              <Link href="/coworking-profissionais-saude"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Coworking para Profissionais da Saúde</a></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
