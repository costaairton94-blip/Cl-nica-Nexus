import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Wind, Wifi, Users, Building2, Brain, CalendarDays, Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMG = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
  consul1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
  consul2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(6)_3c43ebb1.jpeg",
  consul3: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/jKRDVkQyaUtwCSgT.jpeg",
  salaEspera: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.25_86e235e1.jpeg",
  corredor: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/MMIQogZagwsminEA.jpeg",
  detalhe: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg"
};

export default function SalaPsicologo() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const diferenciais = [
    { icon: <Wind className="w-6 h-6" />,      title: "Ambiente Silencioso",          desc: "Consultórios projetados para oferecer privacidade e silêncio, essenciais para o atendimento psicológico." },
    { icon: <Building2 className="w-6 h-6" />, title: "Salas Aconchegantes",          desc: "Decoração neutra e acolhedora, com poltronas confortáveis para psicólogo e paciente." },
    { icon: <Users className="w-6 h-6" />,     title: "Recepção Calorosa",            desc: "Seus pacientes são recebidos com carinho e atenção desde a chegada à clínica." },
    { icon: <Wifi className="w-6 h-6" />,      title: "Internet Rápida",              desc: "Conexão estável para quem realiza atendimentos híbridos ou online." },
    { icon: <MapPin className="w-6 h-6" />,    title: "Fácil de Chegar",              desc: "A 5 min do Metrô Hospital São Paulo, próximo ao AACD-Servidor e Santa Cruz." },
    { icon: <Clock className="w-6 h-6" />,     title: "Flexibilidade Total",          desc: "Alugue por hora, período ou mensalmente, conforme a demanda da sua agenda." },
  ];

  const faqs = [
    {
      q: "As salas são adequadas para atendimento psicológico?",
      a: "Sim. Nossas salas foram pensadas para garantir conforto, privacidade e silêncio. Elas contam com poltronas confortáveis, iluminação adequada e ambiente climatizado, criando o clima perfeito para a escuta clínica.",
    },
    {
      q: "Como funciona a locação por hora?",
      a: "Na locação avulsa (por hora), você agenda o consultório apenas quando tem paciente marcado. Não há taxa de adesão nem exigência de frequência mínima. É a opção ideal para quem está iniciando na clínica ou atendendo poucos pacientes presenciais.",
    },
    {
      q: "Há planos para quem atende vários dias na semana?",
      a: "Sim. Oferecemos planos recorrentes (por período ou mensal) com valores reduzidos por hora. Quanto maior o seu volume de atendimentos, melhor o custo-benefício.",
    },
    {
      q: "A clínica possui recepção para meus pacientes?",
      a: "Sim. Contamos com uma recepção calorosa e bem cuidada. Seus pacientes serão acolhidos com atenção enquanto aguardam o horário da sessão.",
    },
    {
      q: "Qual é a estação de metrô mais próxima?",
      a: "A Nexus fica a apenas 5 minutos a pé da Estação Hospital São Paulo (Linha 5 – Lilás). Também estamos muito próximos das estações AACD-Servidor e Santa Cruz, facilitando muito o acesso.",
    },
    {
      q: "Posso atender online do consultório?",
      a: "Com certeza. Oferecemos internet de alta velocidade e estabilidade em todas as salas, permitindo que você realize suas sessões online com total segurança.",
    }
  ];

  // Schema.org para LocalBusiness + FAQ
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Nexus Espaço Saúde - Sala para Psicólogo",
        "image": IMG.hero,
        "@id": "https://nexusespacosaude.com.br/sala-psicologo-vila-clementino",
        "url": "https://nexusespacosaude.com.br/sala-psicologo-vila-clementino",
        "telephone": "+5511932962026",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Onze de Junho, 1070 - Consultório 209",
          "addressLocality": "Vila Clementino",
          "addressRegion": "SP",
          "postalCode": "04041-003",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.5990,
          "longitude": -46.6430
        },
        "description": "Aluguel de sala para psicólogo na Vila Clementino, São Paulo. Consultório por hora, ambiente silencioso e acolhedor, próximo ao Metrô Hospital São Paulo."
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
        title="Sala para Psicólogo na Vila Clementino | Consultório por Hora | Nexus Espaço Saúde"
        description="Aluguel de sala para psicólogo na Vila Clementino, São Paulo. Consultório por hora, ambiente silencioso e acolhedor, próximo ao Metrô Hospital São Paulo."
        canonical="https://nexusespacosaude.com.br/sala-psicologo-vila-clementino"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen pt-20">
        {/* HERO */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                  <Brain className="w-4 h-4" />
                  Psicologia Clínica
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Sala para Psicólogo na <span className="text-primary">Vila Clementino</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Consultórios silenciosos, confortáveis e acolhedores. Aluguel por hora, período ou mensal a 5 minutos do Metrô Hospital São Paulo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="https://wa.me/5511932962026?text=Olá! Gostaria de saber mais sobre o aluguel de salas para psicólogos na Nexus." target="_blank" rel="noopener noreferrer">
                    <Button className="w-full sm:w-auto text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
                      Falar no WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <Link href="/contato">
                    <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 h-auto bg-background/50 backdrop-blur">
                      Agendar Visita
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
                <img 
                  src={IMG.hero} 
                  alt="Sala para psicólogo na Vila Clementino - Nexus Espaço Saúde" 
                  className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO TEXT (SEO) */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-muted-foreground">
              <p>
                A busca por uma <strong>sala para psicólogo na Vila Clementino</strong> que ofereça o ambiente ideal para a escuta clínica não precisa ser complicada. Na Nexus Espaço Saúde, entendemos que o espaço de atendimento é uma extensão do cuidado que você oferece aos seus pacientes.
              </p>
              <p>
                A prática da psicologia exige um ambiente seguro, onde o paciente se sinta à vontade para falar e o profissional tenha tranquilidade para ouvir. Por isso, nossos consultórios foram cuidadosamente preparados para garantir privacidade, silêncio e um clima extremamente acolhedor.
              </p>
              <p>
                Localizada no coração do maior polo de saúde de São Paulo, a Nexus oferece não apenas uma sala, mas uma infraestrutura completa para que você possa focar exclusivamente no que importa: o atendimento ao seu paciente.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="py-24 bg-secondary">
          <div className="container">
            <header className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Por Que Escolher a Nexus para seus Atendimentos?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Diferenciais pensados especificamente para a prática da psicologia clínica.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diferenciais.map((item, idx) => (
                <div key={idx} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEXTO SEO LONGO 1 */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground mb-6">O Ambiente Ideal para a Prática Psicológica</h2>
              <p>
                Quando um paciente entra em um consultório de psicologia, o ambiente ao seu redor desempenha um papel fundamental em como ele se sente. Um espaço frio, impessoal ou barulhento pode gerar resistência, enquanto um ambiente aconchegante, silencioso e bem cuidado favorece o relaxamento e a abertura emocional.
              </p>
              <p>
                Na Nexus, nossas <strong>salas para psicólogos</strong> foram projetadas com foco nesses detalhes. A iluminação é ajustável, permitindo criar um clima mais intimista. O mobiliário inclui poltronas confortáveis, posicionadas para facilitar o contato visual sem invadir o espaço pessoal. E, o mais importante, a acústica do espaço garante que as sessões ocorram com total privacidade, respeitando o sigilo ético da profissão.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Consultório por Hora: Flexibilidade para sua Carreira</h3>
              <p>
                Sabemos que muitos psicólogos, especialmente no início da carreira ou aqueles que dividem o tempo entre o consultório e outras atividades (como hospitais, escolas ou empresas), não precisam de uma sala em tempo integral. Manter um consultório próprio envolve custos fixos altos — aluguel, condomínio, IPTU, internet, limpeza, recepcionista —, o que pode inviabilizar o atendimento particular.
              </p>
              <p>
                O modelo de <strong>consultório por hora</strong> da Nexus resolve esse problema. Você paga apenas pelo tempo que utilizar. Se você tem dois pacientes na semana, pagará apenas por essas duas horas. Se a sua demanda crescer, você pode aumentar as horas ou migrar para um plano por período (manhã, tarde ou noite) ou mensal, garantindo que o custo do espaço acompanhe o crescimento da sua clínica.
              </p>
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section className="py-24 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <header className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                    Fácil de Chegar para Você e Seus Pacientes
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A localização do consultório é um fator decisivo para a adesão do paciente à terapia. A Nexus fica no coração da Vila Clementino.
                  </p>
                </header>

                <div className="space-y-4">
                  {[
                    "A 5 minutos a pé do Metrô Hospital São Paulo (Linha 5 - Lilás)",
                    "A 10 minutos das estações AACD-Servidor e Santa Cruz",
                    "Próximo à UNIFESP, Hospital São Paulo e Hospital do Rim",
                    "Estacionamento no próprio prédio para quem vem de carro",
                    "Região segura e com excelente infraestrutura"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-background rounded-xl p-4 border border-border">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <p className="font-semibold text-foreground text-sm pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[500px]">
                <iframe
                  title="Localização Nexus Espaço Saúde"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4!2d-46.6430!3d-23.5990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0x1!2sRua%20Onze%20de%20Junho%2C%201070%20-%20Vila%20Clementino%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TEXTO SEO LONGO 2 */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground mb-6">Atendimento Presencial e Online (Híbrido)</h2>
              <p>
                A pandemia transformou a prática da psicologia, consolidando o atendimento online como uma modalidade viável e eficaz. Hoje, muitos psicólogos trabalham em um modelo híbrido, alternando entre sessões presenciais e virtuais.
              </p>
              <p>
                Para atender a essa nova realidade, nossas <strong>salas para psicólogos na Vila Clementino</strong> são equipadas com internet de alta velocidade e estabilidade. Você pode agendar seu consultório na Nexus e, no mesmo dia, atender pacientes presencialmente e realizar sessões online com outros pacientes que moram longe ou preferem o formato digital. Tudo isso sem se preocupar com quedas de conexão ou ruídos externos atrapalhando a sessão.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">A Importância de Estar Próximo a Grandes Centros Médicos</h3>
              <p>
                Estar localizado próximo a instituições como a <strong>UNIFESP, Hospital São Paulo, Hospital do Rim e AACD</strong> traz diversas vantagens. Muitos pacientes que frequentam esses hospitais buscam suporte psicológico na mesma região, facilitando a logística de seus tratamentos.
              </p>
              <p>
                Além disso, a proximidade com o meio acadêmico e hospitalar favorece o networking com outros profissionais da saúde, como médicos, psiquiatras e nutricionistas, abrindo portas para indicações mútuas e trabalho multidisciplinar.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Tudo Pronto para Você Começar</h3>
              <p>
                Na Nexus, você não precisa se preocupar com a gestão do espaço. Nós cuidamos da limpeza, da manutenção, da reposição de insumos (como água, café e papel), do pagamento de contas (luz, internet, condomínio) e do agendamento das salas. Sua única preocupação será receber seu paciente com o acolhimento e a excelência que a psicologia exige.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-secondary">
          <div className="container max-w-3xl">
            <header className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Dúvidas Frequentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Tudo o que você precisa saber sobre o aluguel de sala para psicólogo na Nexus.
              </p>
            </header>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-left text-lg pr-8">{faq.q}</h3>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed border-t border-border">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Explore Outras Soluções da Nexus</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/coworking-medico">
                <a className="px-6 py-3 bg-secondary hover:bg-primary hover:text-white text-foreground rounded-full transition-colors text-sm font-medium">
                  Coworking Médico
                </a>
              </Link>
              <Link href="/coworking-vila-clementino">
                <a className="px-6 py-3 bg-secondary hover:bg-primary hover:text-white text-foreground rounded-full transition-colors text-sm font-medium">
                  Coworking na Vila Clementino
                </a>
              </Link>
              <Link href="/consultorio-por-hora">
                <a className="px-6 py-3 bg-secondary hover:bg-primary hover:text-white text-foreground rounded-full transition-colors text-sm font-medium">
                  Consultório por Hora
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="container max-w-4xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Traga Seus Pacientes para a Nexus
            </h2>
            <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
              Agende uma visita e conheça o espaço perfeito para os seus atendimentos psicológicos na Vila Clementino.
            </p>
            <div className="pt-8">
              <a href="https://wa.me/5511932962026?text=Olá! Gostaria de agendar uma visita para conhecer as salas para psicólogos." target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-primary hover:bg-white/90 text-xl px-10 py-8 h-auto rounded-full shadow-2xl hover:scale-105 transition-all">
                  <PhoneCall className="w-6 h-6 mr-3" />
                  Agendar Visita via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
