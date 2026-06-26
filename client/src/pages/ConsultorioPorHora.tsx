import SEOHead from "@/components/SEOHead";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Wifi,
  Wind,
  Sparkles,
  CalendarDays,
  Building2,
  Users,
  X,
  ZoomIn,
  PhoneCall,
  MessageSquare,
  ClipboardList,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────────────────────
   IMAGENS REAIS DA NEXUS
───────────────────────────────────────────────────────────── */
const IMG = {
  hero:        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/jKRDVkQyaUtwCSgT.jpeg",
  fachada:     "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
  entrada:     "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/MMIQogZagwsminEA.jpeg",
  corredor:    "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(6)_3c43ebb1.jpeg",
  consul1:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
  consul2:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
  consul3:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(3)_2d30012a.jpeg",
  salaEspera:  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.25_86e235e1.jpeg",
};

const WA = "https://wa.me/5511932962026?text=Olá!%20Gostaria%20de%20alugar%20um%20consultório%20por%20hora%20na%20Nexus.";

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
───────────────────────────────────────────────────────────── */
export default function ConsultorioPorHora() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  /* ── Dados ── */
  const passos = [
    {
      num: "01",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Entre em Contato",
      desc: "Envie uma mensagem pelo WhatsApp ou preencha o formulário de contato. Nossa equipe responde rapidamente.",
    },
    {
      num: "02",
      icon: <CalendarDays className="w-6 h-6" />,
      title: "Escolha a Data e Horário",
      desc: "Informe os dias e horários desejados. Verificamos a disponibilidade e confirmamos a reserva em minutos.",
    },
    {
      num: "03",
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Confirme a Locação",
      desc: "Após a confirmação, o consultório já está reservado exclusivamente para você no período acordado.",
    },
    {
      num: "04",
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Chegue e Atenda",
      desc: "Tudo pronto. Consultório mobiliado, recepção preparada e ambiente climatizado. Comece a atender imediatamente.",
    },
  ];

  const especialidades = [
    "Clínica Geral", "Cardiologia", "Dermatologia", "Endocrinologia",
    "Neurologia", "Ortopedia", "Pediatria", "Psiquiatria",
    "Ginecologia", "Urologia", "Nutrição Clínica", "Psicologia",
    "Fonoaudiologia", "Fisioterapia", "Terapia Ocupacional", "Outras",
  ];

  const diferenciais = [
    { icon: <Users className="w-6 h-6" />,     title: "Recepção Profissional",        desc: "Estrutura de recepção elegante para acolher seus pacientes desde a chegada." },
    { icon: <Wifi className="w-6 h-6" />,      title: "Internet de Alta Velocidade",  desc: "Conexão estável para prontuários, laudos e telemedicina sem interrupções." },
    { icon: <Sparkles className="w-6 h-6" />,  title: "Limpeza Inclusa",              desc: "Higienização profissional incluída em todos os períodos de locação." },
    { icon: <Building2 className="w-6 h-6" />, title: "Consultórios Mobiliados",      desc: "Salas equipadas com mobiliário profissional de alto padrão. Zero adaptação." },
    { icon: <Wind className="w-6 h-6" />,      title: "Ambiente Climatizado",         desc: "Ar-condicionado em todos os ambientes para máximo conforto." },
    { icon: <MapPin className="w-6 h-6" />,    title: "Excelente Localização",        desc: "Vila Clementino, próximo à UNIFESP, Hospital São Paulo e 3 estações de metrô." },
    { icon: <Clock className="w-6 h-6" />,     title: "Flexibilidade Total",          desc: "Agende por hora, período ou mensalmente. Sem contratos longos ou multas." },
    { icon: <PhoneCall className="w-6 h-6" />, title: "Suporte Ágil",                 desc: "Atendimento rápido via WhatsApp para dúvidas e agendamentos." },
  ];

  const galeria = [
    { src: IMG.hero,       alt: "Recepção interna do consultório por hora Nexus São Paulo",          label: "Recepção" },
    { src: IMG.fachada,    alt: "Fachada do edifício Nexus consultório por hora Vila Clementino",    label: "Fachada" },
    { src: IMG.entrada,    alt: "Entrada do edifício Nexus aluguel de consultório São Paulo",        label: "Entrada" },
    { src: IMG.consul1,    alt: "Consultório moderno equipado para locação por hora em São Paulo",   label: "Consultório 1" },
    { src: IMG.consul2,    alt: "Sala de atendimento por hora Nexus Coworking São Paulo",            label: "Consultório 2" },
    { src: IMG.consul3,    alt: "Ambiente de consultório compartilhado Vila Clementino",             label: "Consultório 3" },
    { src: IMG.salaEspera, alt: "Sala de espera acolhedora consultório por hora Nexus",              label: "Sala de Espera" },
    { src: IMG.corredor,   alt: "Corredor e acesso aos consultórios por hora Nexus São Paulo",       label: "Corredor" },
  ];

  const planos = [
    {
      title: "Uso Eventual",
      price: "R$ 85",
      per: "/hora",
      desc: "Ideal para quem está iniciando ou precisa de total flexibilidade sem compromisso.",
      features: ["Locação por hora", "Sem frequência mínima", "Consultório equipado", "Recepção inclusa"],
      highlight: false,
    },
    {
      title: "Uso Recorrente",
      price: "R$ 75",
      per: "/hora",
      desc: "Melhor custo-benefício para quem atende com frequência moderada e quer economizar.",
      features: ["Locação recorrente", "Desconto de 12%", "Consultório equipado", "Recepção inclusa", "Agenda preferencial"],
      highlight: true,
    },
    {
      title: "Parceria Preferencial",
      price: "R$ 65",
      per: "/hora",
      desc: "Condição especial para profissionais com agenda frequente e volume regular de atendimentos.",
      features: ["Locação recorrente", "Desconto de 24%", "Consultório equipado", "Recepção inclusa", "Agenda prioritária", "Condições personalizadas"],
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "Quanto custa alugar um consultório por hora na Nexus?",
      a: "Os valores variam conforme o plano escolhido: Uso Eventual (R$ 85/h), Uso Recorrente (R$ 75/h) e Parceria Preferencial (R$ 65/h). Entre em contato para conhecer as condições detalhadas e escolher o plano mais adequado ao seu perfil.",
    },
    {
      q: "Como funciona o aluguel de consultório por hora?",
      a: "É simples: você entra em contato pelo WhatsApp ou formulário, informa os dias e horários desejados, confirmamos a disponibilidade e a reserva é feita. No dia agendado, você chega e já encontra tudo pronto para atender seus pacientes.",
    },
    {
      q: "Preciso assinar algum contrato de longo prazo?",
      a: "Não. O modelo de locação por hora da Nexus é completamente flexível. Você pode alugar apenas quando precisar, sem contratos longos, multas ou compromissos de frequência mínima.",
    },
    {
      q: "O consultório já está mobiliado e equipado?",
      a: "Sim. Todas as salas da Nexus são completamente mobiliadas com equipamentos profissionais de alto padrão. Você chega e começa a atender imediatamente, sem nenhuma adaptação ou investimento adicional.",
    },
    {
      q: "Posso alugar apenas algumas horas por semana?",
      a: "Sim. Você tem total liberdade para agendar apenas as horas que precisar, seja uma vez por semana, quinzenalmente ou conforme sua demanda. Não há obrigação de frequência mínima.",
    },
    {
      q: "Existe recepção para receber meus pacientes?",
      a: "Sim. O espaço conta com recepção profissional e elegante, preparada para acolher seus pacientes com qualidade e discrição, transmitindo credibilidade e conforto desde o primeiro contato.",
    },
    {
      q: "Quais profissionais podem alugar o consultório?",
      a: "Médicos de todas as especialidades, nutricionistas, psicólogos, fonoaudiólogos, fisioterapeutas, terapeutas ocupacionais e demais profissionais da saúde. O espaço é versátil e adequado para consultas, avaliações e retornos.",
    },
    {
      q: "Posso agendar com antecedência?",
      a: "Sim, e recomendamos! Você pode reservar seus horários com antecedência para garantir a disponibilidade nas datas desejadas. Entre em contato pelo WhatsApp para verificar os horários disponíveis.",
    },
    {
      q: "Há estacionamento disponível?",
      a: "Sim. O edifício dispõe de estacionamento e há diversas opções nas proximidades, facilitando o acesso tanto para os profissionais quanto para os pacientes.",
    },
    {
      q: "O ambiente possui acessibilidade?",
      a: "Sim. O edifício conta com infraestrutura completa de acessibilidade, incluindo elevadores, rampas e banheiros adaptados, garantindo conforto e segurança para todos os pacientes.",
    },
    {
      q: "É possível fazer locação por período (meio período ou dia inteiro)?",
      a: "Sim. Além da locação por hora, oferecemos opções de locação por período (manhã, tarde ou dia inteiro) e planos mensais com condições especiais para profissionais com agenda regular.",
    },
    {
      q: "Como funciona o cancelamento de uma reserva?",
      a: "Temos uma política de cancelamento flexível. Entre em contato pelo WhatsApp para informar sobre eventual cancelamento com a maior antecedência possível. Nossa equipe está sempre disponível para reorganizar sua agenda.",
    },
    {
      q: "Posso realizar procedimentos no consultório?",
      a: "As salas são adequadas para consultas, avaliações, retornos e procedimentos ambulatoriais de baixa complexidade. Entre em contato para verificar a adequação ao seu tipo de atendimento específico.",
    },
  ];

  return (
    <>
      <div className="min-h-screen overflow-x-hidden">

        {/* ══ BREADCRUMB ══════════════════════════════════════ */}
        <nav aria-label="Breadcrumb" className="bg-secondary border-b border-border">
          <div className="container py-3">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/coworking" className="hover:text-primary transition-colors">Coworking</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium" aria-current="page">Consultório por Hora em São Paulo</li>
            </ol>
          </div>
        </nav>

        {/* ══ HERO ════════════════════════════════════════════ */}
        <section
          className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden"
          aria-labelledby="hero-h1"
        >
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="container relative z-10 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Copy */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  Vila Clementino · São Paulo
                </div>

                <h1 id="hero-h1" className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Consultório por{" "}
                  <span className="text-primary">Hora</span>{" "}
                  em São Paulo
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Alugue um consultório totalmente equipado apenas pelo período que precisar, na Vila Clementino — sem contratos longos, sem burocracia, sem investimento inicial.
                </p>

                {/* Trust strip */}
                <div className="flex flex-wrap gap-5">
                  {[
                    "Pronto para atender",
                    "Sem contrato longo",
                    "Recepção inclusa",
                    "Localização premium",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {b}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contato">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-primary/30 transition-all w-full sm:w-auto">
                      Agendar Visita
                      <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                    </Button>
                  </Link>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-border hover:border-primary text-foreground hover:text-primary px-8 py-6 text-base rounded-xl transition-all font-medium"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.176l-.343.204-3.554-.932.95 3.469-.223.36a9.86 9.86 0 00-1.51 5.26c.001 5.45 4.436 9.884 9.888 9.884 2.64 0 5.122-1.03 6.988-2.898a9.825 9.825 0 002.893-6.994c-.003-5.45-4.437-9.884-9.885-9.884m8.413 18.297A11.815 11.815 0 0112.05 24C5.495 24 .06 18.565.06 12.012.06 9.348.938 6.78 2.62 4.66L.057 0l4.747 1.244A11.8 11.8 0 0112.05 0c6.554 0 11.89 5.435 11.893 12.012a11.82 11.82 0 01-3.48 8.282" />
                    </svg>
                    Falar pelo WhatsApp
                  </a>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative">
                <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={IMG.hero}
                    alt="Consultório por hora totalmente equipado na Nexus, Vila Clementino, São Paulo"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-background rounded-2xl p-5 shadow-xl border border-border">
                  <p className="text-xs text-muted-foreground mb-1">A partir de</p>
                  <p className="font-bold text-2xl text-foreground">R$ 65<span className="text-sm font-normal text-muted-foreground">/hora</span></p>
                  <p className="text-xs text-primary font-semibold mt-0.5">Sem contrato longo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ COMO FUNCIONA ═══════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="como-funciona-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Simples e rápido</span>
              <h2 id="como-funciona-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Como Funciona o Aluguel por Hora
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Em menos de 24 horas você já pode estar atendendo seus pacientes em um consultório premium na Vila Clementino.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connector line (desktop) */}
              <div aria-hidden="true" className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />

              {passos.map((p, i) => (
                <div key={i} className="relative flex flex-col items-center text-center space-y-4">
                  <div className="relative z-10 w-24 h-24 bg-secondary border-2 border-border rounded-2xl flex flex-col items-center justify-center shadow-md">
                    <span className="text-xs font-bold text-primary">{p.num}</span>
                    <div className="text-primary mt-1" aria-hidden="true">{p.icon}</div>
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Quem pode utilizar */}
            <div className="mt-24">
              <header className="text-center mb-12 space-y-3">
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">Para todos os profissionais</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Quem Pode Utilizar o Consultório por Hora?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  O espaço é ideal para profissionais da saúde de todas as especialidades que buscam flexibilidade e qualidade.
                </p>
              </header>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {especialidades.map((esp, i) => (
                  <div
                    key={i}
                    className="bg-secondary rounded-xl p-3 text-center border border-border hover:border-primary/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-8 h-8 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center mx-auto mb-2 transition-all" aria-hidden="true">
                      <Check className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="font-semibold text-xs text-foreground leading-tight">{esp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ DIFERENCIAIS ════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-secondary"
          aria-labelledby="diferenciais-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Infraestrutura completa</span>
              <h2 id="diferenciais-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Tudo Incluso na Locação por Hora
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Você paga apenas pelo tempo que usa — e recebe muito mais do que um simples espaço.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diferenciais.map((d, i) => (
                <article
                  key={i}
                  className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mb-5" aria-hidden="true">
                    {d.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PLANOS ══════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="planos-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Planos e valores</span>
              <h2 id="planos-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Escolha o Plano Ideal para Você
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quanto maior a recorrência, menor o custo por hora. Comece quando quiser e escale no seu ritmo.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {planos.map((p, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 border transition-all ${
                    p.highlight
                      ? "bg-primary text-white border-primary shadow-2xl scale-105"
                      : "bg-secondary border-border hover:shadow-xl"
                  }`}
                >
                  {p.highlight && (
                    <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Mais Popular
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${p.highlight ? "text-white" : "text-foreground"}`}>{p.title}</h3>
                  <div className="mb-3">
                    <span className={`text-5xl font-bold ${p.highlight ? "text-white" : "text-foreground"}`}>{p.price}</span>
                    <span className={`text-sm ml-1 ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>{p.per}</span>
                  </div>
                  <p className={`text-sm mb-6 leading-relaxed ${p.highlight ? "text-white/90" : "text-muted-foreground"}`}>{p.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Check className={`w-4 h-4 flex-shrink-0 ${p.highlight ? "text-white" : "text-primary"}`} aria-hidden="true" />
                        <span className={p.highlight ? "text-white" : "text-foreground"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all ${
                      p.highlight
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    Escolher este plano
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ GALERIA ═════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-secondary"
          aria-labelledby="galeria-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Fotos reais</span>
              <h2 id="galeria-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Conheça os Consultórios
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ambientes premium, prontos para atendimento imediato
              </p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galeria.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(img)}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`Ampliar: ${img.label}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-semibold">{img.label}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada"
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* ══ FAQ ═════════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="faq-h2"
        >
          <div className="container max-w-3xl">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Dúvidas frequentes</span>
              <h2 id="faq-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Perguntas Frequentes sobre Consultório por Hora
              </h2>
              <p className="text-lg text-muted-foreground">
                Tudo que você precisa saber antes de fazer sua primeira reserva
              </p>
            </header>

            <div className="space-y-3" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  role="listitem"
                  className="bg-secondary rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-secondary/80 transition-colors"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="font-semibold text-foreground leading-snug">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
                    }
                  </button>
                  {openFaq === i && (
                    <div id={`faq-answer-${i}`} className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ LINKAGEM INTERNA ════════════════════════════════ */}
        <section className="py-16 bg-secondary border-t border-border" aria-labelledby="links-consultorio-hora-h2">
          <div className="container">
            <header className="text-center mb-10 space-y-2">
              <h2 id="links-consultorio-hora-h2" className="text-2xl font-bold text-foreground">Explore Mais Opções</h2>
              <p className="text-muted-foreground">Conheça todos os serviços da Nexus Espaço Saúde</p>
            </header>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/aluguel-consultorio-sao-paulo", label: "Aluguel de Consultório em SP" },
                { href: "/coworking-medico",              label: "Coworking para Médicos" },
                { href: "/coworking-vila-clementino",     label: "Coworking na Vila Clementino" },
                { href: "/coworking-vila-mariana",         label: "Coworking na Vila Mariana" },
                { href: "/espaco",                        label: "Estrutura" },
                { href: "/contato",                       label: "Contato" },
              ].map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary text-foreground hover:text-primary px-5 py-3 rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow-md"
                >
                  {l.label}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA FINAL ═══════════════════════════════════════ */}
        <section
          className="relative py-28 md:py-40 bg-primary text-white overflow-hidden"
          aria-labelledby="cta-h2"
        >
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Clock className="w-4 h-4" aria-hidden="true" />
              Disponibilidade imediata
            </div>

            <h2 id="cta-h2" className="text-4xl md:text-5xl font-bold leading-tight">
              Reserve Seu Consultório Agora
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Não perca mais tempo sem um espaço adequado para atender seus pacientes. Na Nexus, você encontra um consultório premium, totalmente equipado e pronto para uso — pelo tempo exato que precisar.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
              <p className="font-bold text-lg mb-1">Nexus Espaço Saúde</p>
              <p className="text-white/80 text-sm">Rua Onze de Junho, 1070 — Consultório 209</p>
              <p className="text-white/80 text-sm">Vila Clementino, São Paulo – SP</p>
              <a href="tel:+5511932962026" className="block mt-3 text-white font-semibold hover:underline">
                (11) 93296-2026
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary hover:bg-white/90 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-white/20"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.176l-.343.204-3.554-.932.95 3.469-.223.36a9.86 9.86 0 00-1.51 5.26c.001 5.45 4.436 9.884 9.888 9.884 2.64 0 5.122-1.03 6.988-2.898a9.825 9.825 0 002.893-6.994c-.003-5.45-4.437-9.884-9.885-9.884m8.413 18.297A11.815 11.815 0 0112.05 24C5.495 24 .06 18.565.06 12.012.06 9.348.938 6.78 2.62 4.66L.057 0l4.747 1.244A11.8 11.8 0 0112.05 0c6.554 0 11.89 5.435 11.893 12.012a11.82 11.82 0 01-3.48 8.282" />
                </svg>
                Reservar pelo WhatsApp
              </a>
              <Link href="/contato">
                <button className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white hover:bg-white/10 px-8 py-5 rounded-xl font-bold text-base transition-all">
                  Agendar uma Visita
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* ══ SCHEMA.ORG JSON-LD ══════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "@id": "https://nexusespacosaude.com.br/consultorio-por-hora",
                "name": "Nexus — Consultório por Hora em São Paulo",
                "description": "Aluguel de consultório por hora em São Paulo, na Vila Clementino. Salas totalmente equipadas, recepção profissional e localização estratégica próxima à UNIFESP e Hospital São Paulo.",
                "url": "https://nexusespacosaude.com.br/consultorio-por-hora",
                "telephone": "+5511932962026",
                "email": "costadamorim@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua Onze de Junho, 1070, Consultório 209",
                  "addressLocality": "São Paulo",
                  "addressRegion": "SP",
                  "postalCode": "04041-002",
                  "addressCountry": "BR",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -23.599,
                  "longitude": -46.643,
                },
                "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/jKRDVkQyaUtwCSgT.jpeg",
                "priceRange": "R$ 65 – R$ 85/hora",
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "19:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "13:00" },
                ],
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://nexusespacosaude.com.br/" },
                  { "@type": "ListItem", "position": 2, "name": "Coworking", "item": "https://nexusespacosaude.com.br/coworking" },
                  { "@type": "ListItem", "position": 3, "name": "Consultório por Hora em São Paulo", "item": "https://nexusespacosaude.com.br/consultorio-por-hora" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
