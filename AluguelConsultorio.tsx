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
  Star,
  Shield,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────────────────────
   IMAGENS REAIS DA NEXUS
───────────────────────────────────────────────────────────── */
const IMG = {
  hero:        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/MMIQogZagwsminEA.jpeg",
  fachada:     "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
  recepcao:    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/jKRDVkQyaUtwCSgT.jpeg",
  corredor:    "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(6)_3c43ebb1.jpeg",
  consul1:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
  consul2:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
  consul3:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(3)_2d30012a.jpeg",
  salaEspera:  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.25_86e235e1.jpeg",
  detalhe:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24_c9760ae6.jpeg",
  recepcaoPred:"https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(5)_1cd4ab55.jpeg",
};

const WA = "https://wa.me/5511932962026?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20aluguel%20de%20consultório%20na%20Nexus.";

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */
export default function AluguelConsultorio() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ── Dados ── */
  const vantagens = [
    { icon: <TrendingDown className="w-6 h-6" />, title: "Zero Investimento Inicial",   desc: "Esqueça os R$ 50.000 a R$ 200.000 necessários para montar um consultório do zero. Na Nexus, você começa a atender no mesmo dia." },
    { icon: <Shield className="w-6 h-6" />,       title: "Sem Risco Financeiro",        desc: "Sem contratos de locação longos, sem obras, sem compra de equipamentos. Você paga apenas pelo que usa." },
    { icon: <Clock className="w-6 h-6" />,        title: "Flexibilidade Real",          desc: "Atenda quando quiser: por hora, período ou mensalmente. Adapte o espaço ao seu volume de pacientes." },
    { icon: <Star className="w-6 h-6" />,         title: "Infraestrutura Pronta",       desc: "Recepção, limpeza, internet e climatização já incluídos. Você foca no atendimento, nós cuidamos do resto." },
  ];

  const beneficios = [
    { icon: <Building2 className="w-6 h-6" />,    title: "Consultórios Equipados",      desc: "Salas completamente mobiliadas com equipamentos profissionais de alto padrão. Chegue e atenda." },
    { icon: <Users className="w-6 h-6" />,        title: "Recepção Profissional",       desc: "Estrutura de recepção elegante para acolher seus pacientes com qualidade e discrição." },
    { icon: <Wind className="w-6 h-6" />,         title: "Ambiente Climatizado",        desc: "Ar-condicionado em todos os ambientes para conforto de profissionais e pacientes." },
    { icon: <Wifi className="w-6 h-6" />,         title: "Internet de Alta Velocidade", desc: "Conexão estável para prontuários eletrônicos, laudos online e telemedicina." },
    { icon: <Sparkles className="w-6 h-6" />,     title: "Limpeza Inclusa",             desc: "Higienização profissional e rigorosa incluída em todos os planos, sem custo adicional." },
    { icon: <MapPin className="w-6 h-6" />,       title: "Excelente Localização",       desc: "Vila Clementino, no coração do maior polo de saúde da América Latina." },
    { icon: <CalendarDays className="w-6 h-6" />, title: "Flexibilidade de Horários",   desc: "Agende os dias e horários que desejar, sem compromisso de frequência mínima." },
    { icon: <Clock className="w-6 h-6" />,        title: "Planos por Hora, Período ou Mensal", desc: "Escolha o modelo ideal para o seu volume de atendimentos e orçamento." },
  ];

  const profissionais = [
    { emoji: "🩺", title: "Médicos",                   sub: "Todas as especialidades" },
    { emoji: "🧠", title: "Psicólogos",                sub: "Clínica e avaliação" },
    { emoji: "🥗", title: "Nutricionistas",            sub: "Clínica e esportiva" },
    { emoji: "🦴", title: "Fisioterapeutas",           sub: "Ortopédica e neurológica" },
    { emoji: "🦷", title: "Dentistas",                 sub: "Clínica e especialidades" },
    { emoji: "🗣️", title: "Fonoaudiólogos",            sub: "Clínica e voz" },
    { emoji: "🤝", title: "Terapeutas Ocupacionais",  sub: "Reabilitação" },
    { emoji: "➕", title: "Outros Profissionais",      sub: "Da área da saúde" },
  ];

  const galeria = [
    { src: IMG.hero,        alt: "Entrada do edifício Nexus aluguel de consultório Vila Clementino São Paulo",   label: "Entrada" },
    { src: IMG.fachada,     alt: "Fachada do prédio Nexus aluguel consultório São Paulo",                        label: "Fachada" },
    { src: IMG.recepcao,    alt: "Recepção interna Nexus aluguel de consultório médico São Paulo",               label: "Recepção" },
    { src: IMG.recepcaoPred,alt: "Recepção do prédio Nexus consultório para aluguel Vila Clementino",            label: "Recepção do Prédio" },
    { src: IMG.consul1,     alt: "Consultório mobiliado para aluguel em São Paulo",                              label: "Consultório 1" },
    { src: IMG.consul2,     alt: "Sala de atendimento para aluguel Nexus São Paulo",                             label: "Consultório 2" },
    { src: IMG.consul3,     alt: "Ambiente de consultório para locação Vila Clementino",                         label: "Consultório 3" },
    { src: IMG.salaEspera,  alt: "Sala de espera acolhedora Nexus aluguel consultório",                          label: "Sala de Espera" },
    { src: IMG.corredor,    alt: "Corredor e acesso aos consultórios para aluguel Nexus São Paulo",              label: "Corredor" },
    { src: IMG.detalhe,     alt: "Detalhes da ambientação premium Nexus consultório aluguel",                    label: "Detalhes" },
  ];

  const comparativo = [
    { criterio: "Investimento inicial",  proprio: "R$ 50.000 a R$ 200.000+",    nexus: "Zero" },
    { criterio: "Custos mensais fixos",  proprio: "R$ 5.000 a R$ 15.000+",      nexus: "Apenas o que usar" },
    { criterio: "Flexibilidade",         proprio: "Contrato de 12 a 36 meses",  nexus: "Por hora, período ou mês" },
    { criterio: "Infraestrutura",        proprio: "Você monta e mantém",         nexus: "Pronta e inclusa" },
    { criterio: "Manutenção",            proprio: "Responsabilidade sua",        nexus: "Totalmente inclusa" },
    { criterio: "Recepção",              proprio: "Custo adicional",             nexus: "Inclusa" },
    { criterio: "Limpeza",               proprio: "Custo adicional",             nexus: "Inclusa" },
  ];

  const faqs = [
    {
      q: "Quanto custa alugar um consultório na Nexus?",
      a: "Os valores variam conforme o plano: Uso Eventual (R$ 85/h), Uso Recorrente (R$ 75/h) e Parceria Preferencial (R$ 65/h). Também oferecemos planos por período e mensais com condições especiais. Entre em contato para conhecer a opção mais adequada ao seu perfil.",
    },
    {
      q: "O consultório já está mobiliado?",
      a: "Sim. Todos os consultórios da Nexus são completamente mobiliados com equipamentos profissionais de alto padrão. Você chega ao espaço e começa a atender seus pacientes imediatamente, sem nenhuma adaptação ou investimento adicional.",
    },
    {
      q: "Preciso assinar contrato de longo prazo?",
      a: "Não. O modelo da Nexus é totalmente flexível. Você pode alugar por hora, por período ou mensalmente, sem contratos longos, multas ou obrigações de frequência mínima. Comece quando quiser e ajuste conforme sua demanda.",
    },
    {
      q: "Quais profissionais podem alugar o consultório?",
      a: "Médicos de todas as especialidades, psicólogos, nutricionistas, fisioterapeutas, dentistas, fonoaudiólogos, terapeutas ocupacionais e outros profissionais da área da saúde. O espaço é versátil e adequado para consultas, avaliações e retornos.",
    },
    {
      q: "Como funciona o agendamento?",
      a: "O agendamento é simples e pode ser feito via WhatsApp ou pelo formulário de contato do site. Nossa equipe confirma a disponibilidade e você já pode programar seus atendimentos com antecedência.",
    },
    {
      q: "Existe recepção para receber meus pacientes?",
      a: "Sim. O espaço conta com recepção profissional e elegante, preparada para acolher seus pacientes com qualidade e discrição, transmitindo credibilidade desde o primeiro contato.",
    },
    {
      q: "A limpeza está inclusa no aluguel?",
      a: "Sim. A higienização profissional e rigorosa está incluída em todos os planos de locação, sem nenhum custo adicional.",
    },
    {
      q: "Há internet disponível no consultório?",
      a: "Sim. O espaço conta com internet de alta velocidade e conexão estável, ideal para prontuários eletrônicos, laudos online e telemedicina.",
    },
    {
      q: "Qual é a localização exata da Nexus?",
      a: "A Nexus está localizada na Rua Onze de Junho, 1070 — Consultório 209, Vila Clementino, São Paulo. Próxima à UNIFESP, Hospital São Paulo, Hospital do Rim, AACD e às estações de metrô Hospital São Paulo, Santa Cruz e AACD-Servidor.",
    },
    {
      q: "Há estacionamento disponível?",
      a: "Sim. O edifício dispõe de estacionamento e há diversas opções nas proximidades, facilitando o acesso tanto para os profissionais quanto para os pacientes.",
    },
    {
      q: "O ambiente possui acessibilidade para pacientes com mobilidade reduzida?",
      a: "Sim. O edifício conta com infraestrutura completa de acessibilidade, incluindo elevadores, rampas e banheiros adaptados, garantindo conforto e segurança para todos os pacientes.",
    },
    {
      q: "Posso agendar uma visita antes de fechar o contrato?",
      a: "Sim, e recomendamos! Agende uma visita pelo WhatsApp para conhecer pessoalmente o espaço, os consultórios e a recepção. Tenha certeza de que a Nexus é o ambiente ideal para os seus atendimentos.",
    },
    {
      q: "É possível fazer locação mensal?",
      a: "Sim. Além da locação por hora, a Nexus oferece planos recorrentes com condições especiais para profissionais que atendem com frequência regular. Quanto maior a recorrência, melhor o custo por hora.",
    },
  ];

  const linksInternos = [
    { href: "/coworking-medico",             label: "Coworking para Médicos" },
    { href: "/consultorio-por-hora",          label: "Consultório por Hora" },
    { href: "/coworking-vila-clementino",     label: "Coworking na Vila Clementino" },
    { href: "/coworking-vila-mariana",         label: "Coworking na Vila Mariana" },
    { href: "/espaco",                        label: "Estrutura" },
    { href: "/contato",                       label: "Contato" },
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
              <li className="text-foreground font-medium" aria-current="page">Aluguel de Consultório em São Paulo</li>
            </ol>
          </div>
        </nav>

        {/* ══ HERO ════════════════════════════════════════════ */}
        <section
          className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden"
          aria-labelledby="hero-h1"
        >
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
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
                  Aluguel de{" "}
                  <span className="text-primary">Consultório</span>{" "}
                  em São Paulo
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Consultórios completos, mobiliados e prontos para atendimento, com planos flexíveis para profissionais da saúde na Vila Clementino.
                </p>

                {/* Social proof strip */}
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: <Star className="w-4 h-4 text-yellow-500" />,    text: "Ambiente premium" },
                    { icon: <Shield className="w-4 h-4 text-primary" />,     text: "Sem burocracia" },
                    { icon: <TrendingDown className="w-4 h-4 text-primary" />, text: "Custo reduzido" },
                  ].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      {b.icon}
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contato">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-primary/30 transition-all w-full sm:w-auto">
                      Agendar uma Visita
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
                    alt="Entrada do edifício Nexus — aluguel de consultório na Vila Clementino, São Paulo"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-background rounded-2xl p-5 shadow-xl border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Localização</p>
                  <p className="font-bold text-foreground">Vila Clementino</p>
                  <p className="text-xs text-primary font-semibold mt-0.5">Próximo à UNIFESP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ POR QUE ALUGAR ══════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="por-que-h2"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <header className="space-y-3">
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest">A escolha inteligente</span>
                  <h2 id="por-que-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                    Por Que Alugar um Consultório?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Montar um consultório próprio exige investimento alto, tempo e burocracia. O aluguel de consultório na Nexus elimina todos esses obstáculos e coloca você atendendo seus pacientes com rapidez, qualidade e muito menos custo.
                  </p>
                </header>
                <p className="text-muted-foreground leading-relaxed">
                  Profissionais que estão iniciando o atendimento particular, que desejam expandir para uma nova região ou que simplesmente buscam mais flexibilidade encontram no modelo de aluguel de consultório a solução ideal. Sem obras, sem compra de móveis, sem contratos longos — apenas você e seus pacientes.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  Saiba mais pelo WhatsApp <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {vantagens.map((v, i) => (
                  <article key={i} className="bg-secondary rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mb-4" aria-hidden="true">
                      {v.icon}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ BENEFÍCIOS ══════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-secondary"
          aria-labelledby="beneficios-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Tudo incluso</span>
              <h2 id="beneficios-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                O Que Está Incluso no Aluguel
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Infraestrutura completa, ambiente premium e total flexibilidade — para que você se concentre apenas nos seus pacientes.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((d, i) => (
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

        {/* ══ PARA QUEM É ═════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="para-quem-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Para todos os profissionais</span>
              <h2 id="para-quem-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Para Quem é o Aluguel de Consultório?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                O espaço da Nexus é ideal para profissionais da saúde que buscam qualidade, praticidade e localização estratégica em São Paulo.
              </p>
            </header>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {profissionais.map((p, i) => (
                <article
                  key={i}
                  className="group bg-secondary rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{p.emoji}</div>
                  <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.sub}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ LOCALIZAÇÃO ═════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-secondary"
          aria-labelledby="localizacao-h2"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Copy */}
              <div className="space-y-8">
                <header className="space-y-3">
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest">Localização estratégica</span>
                  <h2 id="localizacao-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                    No Coração do Maior Polo de Saúde da América Latina
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A Nexus está localizada na Vila Clementino, bairro que concentra os maiores hospitais e centros de pesquisa médica do Brasil. Seus pacientes chegam com facilidade — de carro, metrô ou a pé.
                  </p>
                </header>

                <div className="space-y-3">
                  {[
                    { label: "Hospital São Paulo (UNIFESP)",   sub: "Hospital universitário de referência nacional" },
                    { label: "UNIFESP",                        sub: "Universidade Federal de São Paulo" },
                    { label: "Hospital do Rim",                sub: "Referência em nefrologia e transplantes" },
                    { label: "AACD",                           sub: "Associação de Assistência à Criança Deficiente" },
                    { label: "Metrô Hospital São Paulo",       sub: "Linha 5 – Lilás, acesso direto" },
                    { label: "Metrô Santa Cruz",               sub: "Linha 2 – Verde, a poucos minutos" },
                    { label: "Metrô AACD-Servidor",            sub: "Linha 5 – Lilás, acesso facilitado" },
                  ].map((loc, i) => (
                    <div key={i} className="flex items-start gap-4 bg-background rounded-xl p-4 border border-border">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mt-0.5" aria-hidden="true">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{loc.label}</p>
                        <p className="text-xs text-muted-foreground">{loc.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <address className="not-italic bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <p className="text-sm font-bold text-foreground mb-1">📍 Endereço</p>
                  <p className="text-sm text-muted-foreground">
                    Rua Onze de Junho, 1070 — Consultório 209<br />
                    Vila Clementino, São Paulo – SP
                  </p>
                </address>
              </div>

              {/* Mapa */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[520px] sticky top-24">
                <iframe
                  title="Localização da Nexus — aluguel de consultório na Vila Clementino, São Paulo"
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

        {/* ══ GALERIA ═════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="galeria-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Fotos reais</span>
              <h2 id="galeria-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Conheça o Espaço
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ambiente premium, recepção elegante e consultórios prontos para o seu atendimento
              </p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
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
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
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
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">{lightbox.alt}</p>
          </div>
        )}

        {/* ══ COMPARATIVO ═════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-secondary"
          aria-labelledby="comparativo-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Análise comparativa</span>
              <h2 id="comparativo-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Montar Consultório Próprio × Alugar na Nexus
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Veja por que profissionais de saúde em todo o Brasil estão escolhendo o aluguel de consultório
              </p>
            </header>

            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-xl">
              <div className="grid grid-cols-3 bg-primary text-white text-sm font-bold">
                <div className="p-5">Critério</div>
                <div className="p-5 text-center border-l border-white/20">Consultório Próprio</div>
                <div className="p-5 text-center border-l border-white/20">Aluguel Nexus</div>
              </div>
              {comparativo.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-t border-border text-sm ${i % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}
                >
                  <div className="p-5 font-semibold text-foreground">{row.criterio}</div>
                  <div className="p-5 text-muted-foreground text-center border-l border-border flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" aria-hidden="true" />
                    {row.proprio}
                  </div>
                  <div className="p-5 font-bold text-primary text-center border-l border-border flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    {row.nexus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ═════════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="faq-h2"
        >
          <div className="container max-w-3xl">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Dúvidas frequentes</span>
              <h2 id="faq-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Tudo que você precisa saber sobre o aluguel de consultório na Nexus
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
        <section
          className="py-16 bg-secondary border-t border-border"
          aria-labelledby="links-h2"
        >
          <div className="container">
            <header className="text-center mb-10 space-y-2">
              <h2 id="links-h2" className="text-2xl font-bold text-foreground">Explore Mais Opções</h2>
              <p className="text-muted-foreground">Conheça todos os serviços da Nexus Espaço Saúde</p>
            </header>
            <div className="flex flex-wrap justify-center gap-4">
              {linksInternos.map((l, i) => (
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
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
            <h2 id="cta-h2" className="text-4xl md:text-5xl font-bold leading-tight">
              Pronto para Começar a Atender?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Conheça pessoalmente a estrutura da Nexus Clínica e Coworking. Um espaço moderno, acolhedor e preparado para oferecer a melhor experiência aos seus pacientes — sem burocracia, sem investimento inicial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary hover:bg-white/90 px-8 py-5 rounded-xl font-bold text-base transition-all shadow-xl hover:shadow-2xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.176l-.343.204-3.554-.932.95 3.469-.223.36a9.86 9.86 0 00-1.51 5.26c.001 5.45 4.436 9.884 9.888 9.884 2.64 0 5.122-1.03 6.988-2.898a9.825 9.825 0 002.893-6.994c-.003-5.45-4.437-9.884-9.885-9.884m8.413 18.297A11.815 11.815 0 0112.05 24C5.495 24 .06 18.565.06 12.012.06 9.348.938 6.78 2.62 4.66L.057 0l4.747 1.244A11.8 11.8 0 0112.05 0c6.554 0 11.89 5.435 11.893 12.012a11.82 11.82 0 01-3.48 8.282" />
                </svg>
                Falar pelo WhatsApp
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
                "@id": "https://nexusespacosaude.com.br/aluguel-consultorio-sao-paulo",
                "name": "Nexus — Aluguel de Consultório em São Paulo",
                "description": "Aluguel de consultório médico em São Paulo, na Vila Clementino. Consultórios mobiliados, recepção profissional e localização estratégica próxima à UNIFESP e Hospital São Paulo.",
                "url": "https://nexusespacosaude.com.br/aluguel-consultorio-sao-paulo",
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
                "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/MMIQogZagwsminEA.jpeg",
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
                  { "@type": "ListItem", "position": 3, "name": "Aluguel de Consultório em São Paulo", "item": "https://nexusespacosaude.com.br/aluguel-consultorio-sao-paulo" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
