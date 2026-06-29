import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Wind, Wifi, Users, Building2, Apple, CalendarDays, Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMG = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
};

export default function SalaNutricionista() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "A sala comporta balança de bioimpedância e outros equipamentos nutricionais?",
      a: "Sim. Nossos consultórios têm espaço suficiente para você acomodar sua balança de bioimpedância, estadiômetro e demais equipamentos portáteis necessários para a avaliação física do paciente.",
    },
    {
      q: "Posso alugar a sala apenas para os retornos dos pacientes?",
      a: "Com certeza. O modelo de aluguel por hora é perfeito para nutricionistas que precisam de um espaço físico pontual, seja para a primeira consulta ou apenas para os retornos mensais de acompanhamento.",
    },
    {
      q: "O ambiente é adequado para consultas longas?",
      a: "Sim. Sabemos que a primeira consulta nutricional costuma ser detalhada e demorada. Nossas salas possuem poltronas confortáveis, ar-condicionado e ambiente silencioso para que o paciente se sinta à vontade durante toda a anamnese.",
    },
    {
      q: "Quais as opções de planos disponíveis?",
      a: "Oferecemos locação avulsa (por hora), locação por período (blocos de horas) e planos mensais. O valor por hora reduz progressivamente conforme a sua recorrência de atendimentos.",
    },
    {
      q: "Existe recepção para receber os pacientes?",
      a: "Sim, a Nexus conta com uma recepção calorosa e preparada para acolher seus pacientes com conforto enquanto aguardam a consulta.",
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Nexus Espaço Saúde - Sala para Nutricionista",
        "image": IMG.hero,
        "@id": "https://nexusespacosaude.com.br/sala-nutricionista-vila-clementino",
        "url": "https://nexusespacosaude.com.br/sala-nutricionista-vila-clementino",
        "telephone": "+5511932962026",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Onze de Junho, 1070 - Consultório 209",
          "addressLocality": "Vila Clementino",
          "addressRegion": "SP",
          "postalCode": "04041-003",
          "addressCountry": "BR"
        },
        "description": "Aluguel de sala para nutricionista na Vila Clementino. Consultórios preparados para consultas e retornos, com aluguel por hora ou planos mensais."
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
        title="Sala para Nutricionista na Vila Clementino | Nexus Espaço Saúde"
        description="Aluguel de sala para nutricionista na Vila Clementino. Consultórios preparados para consultas e retornos, com aluguel por hora ou planos mensais."
        canonical="https://nexusespacosaude.com.br/sala-nutricionista-vila-clementino"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen pt-20">
        {/* HERO */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                  <Apple className="w-4 h-4" />
                  Nutrição Clínica e Esportiva
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Sala para Nutricionista na <span className="text-primary">Vila Clementino</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  O espaço ideal para realizar suas avaliações físicas, consultas e retornos. Aluguel por hora com flexibilidade total.
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
                <img src={IMG.hero} alt="Consultório Nutricional" className="rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* TEXTO SEO 1 */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-muted-foreground">
              <p>
                A prática da nutrição clínica exige um ambiente que transmita confiança, profissionalismo e, ao mesmo tempo, acolhimento. Ao procurar uma <strong>sala para nutricionista na Vila Clementino</strong>, o profissional precisa considerar não apenas a localização, mas a estrutura oferecida para a realização de uma anamnese completa e avaliações físicas precisas.
              </p>
              <p>
                Na Nexus Espaço Saúde, oferecemos consultórios projetados para atender às necessidades específicas dos profissionais de nutrição. Nossas salas são amplas o suficiente para acomodar confortavelmente o paciente, o acompanhante (quando necessário) e os equipamentos do profissional, como balanças de bioimpedância, adipômetros e estadiômetros portáteis.
              </p>
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Consultas e Retornos com Total Flexibilidade</h2>
              <p>
                Muitos nutricionistas trabalham com pacotes de acompanhamento que incluem a primeira consulta (geralmente mais longa) e retornos mensais ou quinzenais. Manter um consultório próprio apenas para atender essa demanda intercalada pode gerar custos fixos desnecessários que comprometem a rentabilidade do profissional.
              </p>
              <p>
                É aqui que o modelo de <strong>aluguel por hora</strong> se destaca. Na Nexus, você pode agendar o consultório exatamente nos horários em que seus pacientes marcaram as consultas ou os retornos. Não há ociosidade de espaço. Você paga apenas pelo tempo utilizado, garantindo uma margem de lucro muito maior em cada atendimento.
              </p>
              <p>
                Para os profissionais que já possuem uma carteira de pacientes consolidada e atendem com maior frequência, oferecemos também <strong>planos mensais</strong> e pacotes por período, que reduzem significativamente o valor da hora locada, mantendo o excelente custo-benefício da estrutura de coworking.
              </p>
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Um Ambiente Acolhedor que Fideliza Pacientes</h2>
              <p>
                A jornada do paciente nutricional muitas vezes envolve quebra de paradigmas, reeducação alimentar e superação de barreiras emocionais ligadas à comida. Para que o paciente se sinta seguro em compartilhar sua rotina e suas dificuldades, o ambiente da consulta é fundamental.
              </p>
              <p>
                Diferente de clínicas frias e estritamente hospitalares, a Nexus proporciona um <strong>ambiente acolhedor e familiar</strong>. Desde a recepção calorosa até o conforto do consultório climatizado, cada detalhe foi pensado para que o paciente se sinta à vontade, o que facilita a adesão ao plano alimentar e aumenta as taxas de retorno.
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
              <Link href="/sala-psicologo-vila-clementino"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Sala para Psicólogo</a></Link>
              <Link href="/coworking-profissionais-saude"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Coworking para Profissionais da Saúde</a></Link>
              <Link href="/consultorio-por-hora"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Consultório por Hora</a></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
