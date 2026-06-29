import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Wind, Wifi, Users, Building2, Stethoscope, CalendarDays, Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMG = {
  hero: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
  consul1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
  consul2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
  recepcao: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/MMIQogZagwsminEA.jpeg"
};

export default function ConsultorioMedicoVilaClementino() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "O consultório atende as normas da vigilância sanitária para médicos?",
      a: "Sim. Nossos consultórios foram projetados e equipados seguindo rigorosamente todas as normas e exigências da Vigilância Sanitária (ANVISA), garantindo total segurança para a prática médica e para os pacientes.",
    },
    {
      q: "Como funciona a locação de consultório por hora?",
      a: "Na locação por hora, você agenda a sala através do nosso sistema ou WhatsApp apenas nos horários em que tiver pacientes marcados. Você paga somente pelas horas efetivamente utilizadas, sem mensalidades fixas.",
    },
    {
      q: "Quais são as vantagens do plano mensal?",
      a: "O plano mensal é ideal para médicos com agenda consolidada. Ele oferece um bloco fixo de horas ou períodos exclusivos com um custo-benefício significativamente melhor do que a locação avulsa, além de prioridade na escolha das salas e horários.",
    },
    {
      q: "Existe serviço de recepção e agendamento?",
      a: "A Nexus oferece serviço completo de recepção. Nossa equipe recebe seus pacientes com cordialidade, orienta sobre o preenchimento de fichas e os acomoda na sala de espera até o momento da consulta. O agendamento da sala é feito diretamente conosco.",
    },
    {
      q: "O prédio possui estacionamento para mim e meus pacientes?",
      a: "Sim. O edifício onde a Nexus está localizada conta com serviço de valet e estacionamento rotativo, oferecendo conforto e segurança para você e seus pacientes, especialmente aqueles com mobilidade reduzida.",
    },
    {
      q: "Qual a proximidade com o Hospital São Paulo e UNIFESP?",
      a: "Estamos a poucos passos do Hospital São Paulo e do campus da UNIFESP, além de estarmos muito próximos ao Hospital do Rim e AACD. É a localização mais estratégica para médicos que atuam ou estudam nessas instituições.",
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Nexus Espaço Saúde - Consultório Médico Vila Clementino",
        "image": IMG.hero,
        "@id": "https://nexusespacosaude.com.br/consultorio-medico-vila-clementino",
        "url": "https://nexusespacosaude.com.br/consultorio-medico-vila-clementino",
        "telephone": "+5511932962026",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Onze de Junho, 1070 - Consultório 209",
          "addressLocality": "Vila Clementino",
          "addressRegion": "SP",
          "postalCode": "04041-003",
          "addressCountry": "BR"
        },
        "description": "Aluguel de consultório médico na Vila Clementino. Estrutura completa, recepção, próximo ao Hospital São Paulo e UNIFESP. Locação por hora, período ou mensal."
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
        title="Consultório Médico na Vila Clementino | Aluguel por Hora e Mensal"
        description="Aluguel de consultório médico na Vila Clementino. Estrutura completa, recepção, próximo ao Hospital São Paulo e UNIFESP. Locação por hora, período ou mensal."
        canonical="https://nexusespacosaude.com.br/consultorio-medico-vila-clementino"
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
                  Para Médicos de Todas as Especialidades
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Consultório Médico na <span className="text-primary">Vila Clementino</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A infraestrutura que você e seus pacientes merecem. Aluguel flexível por hora, período ou mensal no maior polo de saúde de São Paulo.
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
                <img src={IMG.hero} alt="Consultório Médico Vila Clementino" className="rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* TEXTO SEO 1 */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-muted-foreground">
              <p>
                A Vila Clementino é reconhecida nacionalmente como o maior e mais importante polo de saúde de São Paulo. Concentrando instituições de peso como o Hospital São Paulo, a UNIFESP, o Hospital do Rim e a AACD, a região atrai diariamente milhares de pacientes em busca de atendimento médico de excelência.
              </p>
              <p>
                Para o médico que deseja estabelecer ou expandir sua clínica particular, ter um <strong>consultório médico na Vila Clementino</strong> não é apenas uma questão de conveniência, mas uma decisão estratégica que confere autoridade e facilita a captação de pacientes que já circulam pela região.
              </p>
              <p>
                No entanto, montar um consultório próprio envolve altos investimentos iniciais (reforma, mobiliário, equipamentos) e custos fixos mensais expressivos (aluguel, condomínio, recepcionista, limpeza, internet). É para solucionar esse desafio que a Nexus Espaço Saúde oferece a locação de consultórios totalmente equipados e prontos para uso.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Locação Flexível: Por Hora, Período ou Mensal</h2>
              <p>
                A rotina médica é dinâmica. Muitos profissionais dividem seu tempo entre plantões em hospitais, cirurgias, docência e o atendimento em clínica privada. Por isso, oferecemos modelos de locação que se adaptam exatamente à sua realidade:
              </p>
              <ul>
                <li><strong>Consultório por Hora:</strong> Ideal para quem está começando o consultório particular ou tem uma demanda pontual de pacientes. Você paga apenas pelo tempo que a sala for utilizada.</li>
                <li><strong>Consultório por Período:</strong> Para médicos que já concentram seus atendimentos em blocos específicos (ex: todas as terças-feiras de manhã). Oferece um valor por hora mais atrativo.</li>
                <li><strong>Consultório Mensal:</strong> A solução perfeita para quem tem uma agenda cheia e precisa de exclusividade de horários, garantindo o melhor custo-benefício e a estabilidade de um consultório próprio sem as dores de cabeça da gestão do espaço.</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Estrutura Completa e Recepção Profissional</h2>
              <p>
                A experiência do paciente começa muito antes de ele entrar na sala de consulta. Começa na facilidade de chegar ao local, no estacionamento, e principalmente no atendimento da recepção.
              </p>
              <p>
                Na Nexus, oferecemos uma <strong>estrutura completa</strong>. Nossas salas são mobiliadas com bom gosto e ergonomia, contando com maca, mesa de atendimento, cadeiras confortáveis para o paciente e acompanhante, pia para higienização das mãos, ar-condicionado e internet de alta velocidade.
              </p>
              <p>
                Nossa equipe de recepção é treinada para receber seus pacientes com a máxima cordialidade, discrição e profissionalismo, garantindo que eles se sintam acolhidos e bem cuidados desde o primeiro momento.
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
              <Link href="/consultorio-metro-santa-cruz"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Próximo ao Metrô Santa Cruz</a></Link>
              <Link href="/coworking-profissionais-saude"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Coworking para Profissionais da Saúde</a></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
