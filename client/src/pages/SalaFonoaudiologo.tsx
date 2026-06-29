import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Wind, Wifi, Users, Building2, Ear, CalendarDays, Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMG = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(6)_3c43ebb1.jpeg",
};

export default function SalaFonoaudiologo() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "A sala é silenciosa o suficiente para avaliações audiológicas e fonoterápicas?",
      a: "Sim. Nossos consultórios foram projetados com foco em conforto acústico, garantindo o silêncio necessário para a realização de avaliações, testes e terapias fonoaudiológicas sem interferências externas.",
    },
    {
      q: "O consultório tem espaço para atender crianças e adultos?",
      a: "Com certeza. O ambiente é amplo e versátil, permitindo a acomodação confortável de pacientes adultos, idosos, bem como crianças acompanhadas de seus pais ou responsáveis.",
    },
    {
      q: "Posso levar meus próprios materiais e brinquedos terapêuticos?",
      a: "Sim. Você tem total liberdade para trazer seus materiais de avaliação, jogos, espelhos e recursos terapêuticos para utilizar durante as sessões.",
    },
    {
      q: "Como funciona a locação para fonoaudiólogos?",
      a: "Você pode optar pela locação por hora (pagando apenas pelo tempo que atender), por blocos de horas (períodos) ou planos mensais, garantindo total flexibilidade para a sua agenda.",
    },
    {
      q: "Qual a proximidade com hospitais e clínicas?",
      a: "A Nexus está localizada na Vila Clementino, a 5 minutos do Metrô Hospital São Paulo, muito próxima à UNIFESP, Hospital do Rim e AACD, facilitando o encaminhamento de pacientes e o trabalho multidisciplinar.",
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Nexus Espaço Saúde - Sala para Fonoaudiólogo",
        "image": IMG.hero,
        "@id": "https://nexusespacosaude.com.br/sala-fonoaudiologo-vila-clementino",
        "url": "https://nexusespacosaude.com.br/sala-fonoaudiologo-vila-clementino",
        "telephone": "+5511932962026",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Onze de Junho, 1070 - Consultório 209",
          "addressLocality": "Vila Clementino",
          "addressRegion": "SP",
          "postalCode": "04041-003",
          "addressCountry": "BR"
        },
        "description": "Aluguel de sala para fonoaudiólogo na Vila Clementino. Consultórios com conforto acústico, ideais para fonoterapia e avaliações. Locação por hora ou planos mensais."
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
        title="Sala para Fonoaudiólogo na Vila Clementino | Nexus Espaço Saúde"
        description="Aluguel de sala para fonoaudiólogo na Vila Clementino. Consultórios com conforto acústico, ideais para fonoterapia e avaliações. Locação por hora ou planos mensais."
        canonical="https://nexusespacosaude.com.br/sala-fonoaudiologo-vila-clementino"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen pt-20">
        {/* HERO */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                  <Ear className="w-4 h-4" />
                  Fonoaudiologia Clínica
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Sala para Fonoaudiólogo na <span className="text-primary">Vila Clementino</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Consultórios com conforto acústico e ambiente acolhedor. O espaço perfeito para suas terapias, com aluguel por hora ou mensal.
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
                <img src={IMG.hero} alt="Consultório de Fonoaudiologia" className="rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* TEXTO SEO 1 */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-muted-foreground">
              <p>
                A fonoaudiologia é uma ciência que lida com os aspectos mais sutis da comunicação humana. Seja na avaliação audiológica, na terapia de linguagem infantil, no tratamento de disfagias ou na reabilitação vocal, o ambiente físico onde o atendimento ocorre tem um impacto direto nos resultados terapêuticos.
              </p>
              <p>
                Ao procurar uma <strong>sala para fonoaudiólogo na Vila Clementino</strong>, o profissional precisa de um espaço que ofereça, acima de tudo, conforto acústico e um ambiente livre de distrações. Na Nexus Espaço Saúde, nossos consultórios foram estruturados para proporcionar a tranquilidade necessária para avaliações precisas e terapias focadas.
              </p>
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Flexibilidade para Atender Diferentes Perfis de Pacientes</h2>
              <p>
                A rotina de um fonoaudiólogo pode ser bastante diversificada. Em um mesmo dia, você pode atender uma criança com atraso de fala (que requer a presença dos pais e o uso de brinquedos lúdicos), um adulto em reabilitação vocal ou um idoso com questões de deglutição.
              </p>
              <p>
                Nossas salas são amplas e versáteis, permitindo que você adapte o espaço para cada tipo de atendimento. As poltronas são confortáveis e a disposição do mobiliário facilita tanto a aplicação de testes formais quanto a realização de atividades mais dinâmicas e interativas.
              </p>
              <p>
                Além disso, oferecemos total flexibilidade na locação. Com o nosso modelo de <strong>aluguel de consultório por hora</strong>, você não precisa assumir os altos custos fixos de manter uma clínica própria. Você agenda a sala apenas quando tem pacientes marcados, garantindo rentabilidade desde o primeiro atendimento.
              </p>
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Localização Estratégica e Trabalho Multidisciplinar</h2>
              <p>
                A Vila Clementino é o maior polo de saúde da América Latina. Estar localizado aqui, a apenas 5 minutos do Metrô Hospital São Paulo e próximo à UNIFESP, Hospital do Rim e AACD, coloca você no centro de uma vasta rede de encaminhamentos médicos.
              </p>
              <p>
                Muitos pacientes que realizam tratamentos neurológicos, otorrinolaringológicos ou oncológicos na região necessitam de acompanhamento fonoaudiológico contínuo. Ter o seu consultório na Nexus facilita a logística desses pacientes e abre portas para parcerias com médicos de diversas especialidades que atuam no mesmo bairro.
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
              <Link href="/sala-nutricionista-vila-clementino"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Sala para Nutricionista</a></Link>
              <Link href="/sala-psicologo-vila-clementino"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Sala para Psicólogo</a></Link>
              <Link href="/coworking-medico"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Coworking Médico</a></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
