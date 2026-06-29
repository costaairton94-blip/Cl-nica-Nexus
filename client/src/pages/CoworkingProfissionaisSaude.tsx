import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Building2, HeartPulse, Clock, Users, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMG = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
};

export default function CoworkingProfissionaisSaude() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "O que é um coworking para profissionais da saúde?",
      a: "É um espaço compartilhado onde médicos, psicólogos, nutricionistas e outros profissionais alugam consultórios totalmente equipados por hora, período ou mês. Você compartilha a infraestrutura (recepção, limpeza, internet) e reduz drasticamente seus custos fixos.",
    },
    {
      q: "Quais profissionais podem atender na Nexus?",
      a: "Nossa estrutura atende perfeitamente médicos de diversas especialidades, psicólogos, nutricionistas, fonoaudiólogos, fisierapeutas (avaliação clínica) e demais profissionais da saúde que necessitem de um consultório padrão ANVISA.",
    },
    {
      q: "Preciso pagar mensalidade se não tiver pacientes?",
      a: "Não no plano por hora. No modelo de locação avulsa, você agenda e paga apenas pelas horas que efetivamente utilizar. Se não houver atendimentos na semana, seu custo com o espaço será zero.",
    },
    {
      q: "A clínica possui alvará da Vigilância Sanitária?",
      a: "Sim, a Nexus Espaço Saúde possui todas as licenças e alvarás necessários (ANVISA, Prefeitura, Bombeiros), garantindo que você atue dentro da total legalidade.",
    },
    {
      q: "Como é feito o agendamento das salas?",
      a: "O agendamento é feito de forma rápida e prática via sistema online ou WhatsApp. Você visualiza a disponibilidade em tempo real e reserva a sala que melhor atende à sua necessidade.",
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Nexus Espaço Saúde - Coworking para Profissionais da Saúde",
        "image": IMG.hero,
        "@id": "https://nexusespacosaude.com.br/coworking-profissionais-saude",
        "url": "https://nexusespacosaude.com.br/coworking-profissionais-saude",
        "telephone": "+5511932962026",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Onze de Junho, 1070 - Consultório 209",
          "addressLocality": "Vila Clementino",
          "addressRegion": "SP",
          "postalCode": "04041-003",
          "addressCountry": "BR"
        },
        "description": "O melhor coworking para profissionais da saúde na Vila Clementino. Consultórios para médicos, psicólogos e nutricionistas com aluguel flexível."
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
        title="Coworking para Profissionais da Saúde | Nexus Espaço Saúde"
        description="O melhor coworking para profissionais da saúde na Vila Clementino. Consultórios para médicos, psicólogos e nutricionistas com aluguel flexível."
        canonical="https://nexusespacosaude.com.br/coworking-profissionais-saude"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen pt-20">
        {/* HERO */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                  <HeartPulse className="w-4 h-4" />
                  Guia Completo: O Futuro da Clínica Privada
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Coworking para <span className="text-primary">Profissionais da Saúde</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Tudo o que você precisa saber sobre como otimizar seus custos, escalar sua agenda e oferecer a melhor experiência aos seus pacientes.
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
                <img src={IMG.hero} alt="Coworking Saúde" className="rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* ÍNDICE */}
        <section className="py-12 bg-secondary/50 border-y border-border">
          <div className="container max-w-4xl">
            <h2 className="text-xl font-bold mb-6">Neste guia, você vai ler sobre:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li><a href="#o-que-e" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4"/> O que é um coworking de saúde?</a></li>
              <li><a href="#vantagens" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Vantagens Financeiras e Operacionais</a></li>
              <li><a href="#comparativo" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Consultório Próprio vs. Coworking</a></li>
              <li><a href="#para-quem" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Para quais especialidades é indicado?</a></li>
              <li><a href="#localizacao" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4"/> A importância da Localização</a></li>
            </ul>
          </div>
        </section>

        {/* CONTEÚDO PRINCIPAL */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-muted-foreground">
              
              <h2 id="o-que-e" className="text-3xl font-bold text-foreground mt-12 mb-6">O que é um Coworking para Profissionais da Saúde?</h2>
              <p>
                O modelo de coworking revolucionou o mundo corporativo na última década, permitindo que empresas e freelancers compartilhassem espaços de trabalho para reduzir custos e fomentar o networking. Nos últimos anos, esse conceito foi adaptado e aprimorado para atender a uma das áreas mais exigentes do mercado: a saúde.
              </p>
              <p>
                Um <strong>coworking para profissionais da saúde</strong> (também chamado de clínica compartilhada) é um espaço que oferece consultórios totalmente mobiliados e equipados para locação flexível. Diferente de um escritório comum, esses espaços são projetados seguindo as rigorosas normas da Vigilância Sanitária (ANVISA), garantindo que médicos, psicólogos, nutricionistas e terapeutas possam exercer suas atividades com total segurança legal e estrutural.
              </p>

              <h2 id="vantagens" className="text-3xl font-bold text-foreground mt-12 mb-6">Vantagens Financeiras e Operacionais</h2>
              <p>
                Manter um consultório particular tradicional é caro e burocrático. O profissional precisa lidar com aluguel, IPTU, condomínio, contas de consumo (água, luz, internet), folha de pagamento da recepcionista, serviços de limpeza, manutenção de equipamentos e taxas de licenciamento.
              </p>
              <p>
                Ao optar por um coworking de saúde como a Nexus, você transforma dezenas de boletos mensais em uma única fatura — ou melhor, você paga apenas pelo que usar. Se você atende 10 horas por semana, pagará apenas por essas 10 horas. Se tirar férias de 15 dias, seu custo com o espaço naquele período será zero. Essa eficiência financeira permite que profissionais em início de carreira viabilizem seus atendimentos particulares e que profissionais experientes aumentem significativamente suas margens de lucro.
              </p>

              <h2 id="comparativo" className="text-3xl font-bold text-foreground mt-12 mb-6">Comparativo: Consultório Próprio vs. Coworking</h2>
              
              <div className="not-prose my-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="p-4 border-b border-border font-bold text-foreground">Característica</th>
                      <th className="p-4 border-b border-border font-bold text-foreground">Consultório Próprio</th>
                      <th className="p-4 border-b border-border font-bold text-primary">Coworking Nexus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Investimento Inicial</td>
                      <td className="p-4 border-b border-border text-red-500">Alto (reforma, mobília, licenças)</td>
                      <td className="p-4 border-b border-border text-green-600 font-semibold">Zero</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Custos Fixos</td>
                      <td className="p-4 border-b border-border text-red-500">Altos (mesmo sem pacientes)</td>
                      <td className="p-4 border-b border-border text-green-600 font-semibold">Variáveis (paga se usar)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Gestão do Espaço</td>
                      <td className="p-4 border-b border-border text-red-500">Responsabilidade do profissional</td>
                      <td className="p-4 border-b border-border text-green-600 font-semibold">100% gerenciado pela Nexus</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Recepção e Limpeza</td>
                      <td className="p-4 border-b border-border text-red-500">Contratação própria (CLT)</td>
                      <td className="p-4 border-b border-border text-green-600 font-semibold">Inclusas no valor da hora</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Flexibilidade</td>
                      <td className="p-4 border-b border-border text-red-500">Rígida (contratos de 30+ meses)</td>
                      <td className="p-4 border-b border-border text-green-600 font-semibold">Total (sem fidelidade)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="para-quem" className="text-3xl font-bold text-foreground mt-12 mb-6">Para quais especialidades o coworking é indicado?</h2>
              <p>
                A versatilidade das salas da Nexus permite o atendimento de praticamente todas as especialidades clínicas que não exijam centro cirúrgico ou equipamentos pesados inamovíveis. Nossos principais parceiros incluem:
              </p>
              <ul>
                <li><strong>Médicos:</strong> Clínicos gerais, psiquiatras, endocrinologistas, dermatologistas (clínica), pediatras, cardiologistas, neurologistas, entre outros.</li>
                <li><strong>Psicólogos e Psicanalistas:</strong> Que buscam salas silenciosas e acolhedoras para a escuta clínica.</li>
                <li><strong>Nutricionistas:</strong> Que necessitam de espaço para anamnese e equipamentos de bioimpedância.</li>
                <li><strong>Fonoaudiólogos:</strong> Que exigem conforto acústico para terapias de linguagem e voz.</li>
              </ul>

              <h2 id="localizacao" className="text-3xl font-bold text-foreground mt-12 mb-6">A Importância da Localização Estratégica</h2>
              <p>
                Na área da saúde, a localização do seu consultório diz muito sobre o seu posicionamento no mercado. A Nexus está localizada na <strong>Vila Clementino</strong>, o epicentro médico de São Paulo.
              </p>
              <p>
                Estar a poucos minutos do Hospital São Paulo, da UNIFESP e das estações de metrô Santa Cruz e Hospital São Paulo não apenas facilita a vida do seu paciente, mas insere você em um ecossistema de saúde vibrante. A proximidade com grandes hospitais facilita o encaminhamento de pacientes e o networking com colegas de outras áreas, criando um ciclo virtuoso de crescimento para a sua clínica particular.
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
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Navegue por nossas soluções específicas</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/sala-psicologo-vila-clementino"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Sala para Psicólogo</a></Link>
              <Link href="/sala-nutricionista-vila-clementino"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Sala para Nutricionista</a></Link>
              <Link href="/sala-fonoaudiologo-vila-clementino"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Sala para Fonoaudiólogo</a></Link>
              <Link href="/consultorio-medico-vila-clementino"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Consultório Médico</a></Link>
              <Link href="/consultorio-hospital-sao-paulo"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Próximo ao Hospital São Paulo</a></Link>
              <Link href="/consultorio-metro-santa-cruz"><a className="px-6 py-3 bg-secondary rounded-full text-sm">Próximo ao Metrô Santa Cruz</a></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
