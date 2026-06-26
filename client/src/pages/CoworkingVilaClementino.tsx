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
  Train,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────────────────────
   IMAGENS REAIS DA NEXUS
───────────────────────────────────────────────────────────── */
const IMG = {
  hero:        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
  entrada:     "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/MMIQogZagwsminEA.jpeg",
  recepcao:    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/jKRDVkQyaUtwCSgT.jpeg",
  corredor:    "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(6)_3c43ebb1.jpeg",
  consul1:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
  consul2:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
  consul3:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(3)_2d30012a.jpeg",
  salaEspera:  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.25_86e235e1.jpeg",
  detalhe:     "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24_c9760ae6.jpeg",
  recepcaoPred:"https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(5)_1cd4ab55.jpeg",
};

const WA = "https://wa.me/5511932962026?text=Olá!%20Gostaria%20de%20conhecer%20o%20coworking%20da%20Nexus%20na%20Vila%20Clementino.";

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */
export default function CoworkingVilaClementino() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ── Dados ── */
  const motivosVilaClementino = [
    { icon: <Heart className="w-6 h-6" />,    title: "Maior Polo de Saúde do Brasil",     desc: "A Vila Clementino concentra a maior densidade de hospitais, clínicas e centros de pesquisa médica do país, atraindo pacientes de todo o Brasil." },
    { icon: <Building2 className="w-6 h-6" />, title: "Presença da UNIFESP",               desc: "A Universidade Federal de São Paulo está no coração do bairro, gerando um fluxo constante de pacientes, pesquisadores e profissionais da saúde." },
    { icon: <Train className="w-6 h-6" />,     title: "Fácil Acesso por Metrô",            desc: "Três estações de metrô a poucos minutos: Hospital São Paulo, Santa Cruz e AACD-Servidor. Seus pacientes chegam sem complicações." },
    { icon: <Star className="w-6 h-6" />,      title: "Região Consolidada para Atendimento Particular", desc: "Pacientes da Vila Clementino e arredores já buscam atendimento particular na região. Você estará exatamente onde eles procuram." },
    { icon: <Shield className="w-6 h-6" />,    title: "Infraestrutura Completa",           desc: "Bancos, farmácias, restaurantes, estacionamentos e serviços essenciais ao redor. Tudo que você e seus pacientes precisam está por perto." },
    { icon: <MapPin className="w-6 h-6" />,    title: "Localização Estratégica",           desc: "Fácil acesso pelas principais avenidas de São Paulo, com boa visibilidade e posicionamento para atrair novos pacientes organicamente." },
  ];

  const diferenciais = [
    { icon: <Building2 className="w-6 h-6" />,    title: "Consultórios Mobiliados",       desc: "Salas completamente equipadas com mobiliário profissional de alto padrão. Chegue e atenda sem nenhuma adaptação." },
    { icon: <Users className="w-6 h-6" />,        title: "Recepção Preparada",            desc: "Estrutura de recepção elegante para acolher seus pacientes com qualidade e discrição desde o primeiro contato." },
    { icon: <Wind className="w-6 h-6" />,         title: "Ambiente Climatizado",          desc: "Ar-condicionado em todos os ambientes para conforto de profissionais e pacientes durante todo o atendimento." },
    { icon: <Wifi className="w-6 h-6" />,         title: "Internet Rápida",               desc: "Conexão estável e de alta velocidade para prontuários eletrônicos, laudos online e telemedicina." },
    { icon: <Sparkles className="w-6 h-6" />,     title: "Limpeza Inclusa",               desc: "Higienização profissional e rigorosa incluída em todos os planos, sem custo adicional." },
    { icon: <CalendarDays className="w-6 h-6" />, title: "Flexibilidade de Horários",     desc: "Agende os dias e horários que desejar, sem compromisso de frequência mínima." },
    { icon: <Clock className="w-6 h-6" />,        title: "Locação por Hora, Período ou Mensal", desc: "Escolha o modelo ideal para o seu volume de atendimentos. Pague apenas pelo que usar." },
    { icon: <MapPin className="w-6 h-6" />,       title: "Excelente Localização",         desc: "No coração da Vila Clementino, próximo aos maiores hospitais e com acesso fácil por metrô." },
  ];

  const profissionais = [
    { emoji: "🩺", title: "Médicos",                  sub: "Todas as especialidades" },
    { emoji: "🧠", title: "Psicólogos",               sub: "Clínica e avaliação" },
    { emoji: "🥗", title: "Nutricionistas",           sub: "Clínica e esportiva" },
    { emoji: "🦷", title: "Dentistas",                sub: "Clínica e especialidades" },
    { emoji: "🦴", title: "Fisioterapeutas",          sub: "Ortopédica e neurológica" },
    { emoji: "🗣️", title: "Fonoaudiólogos",           sub: "Clínica e voz" },
    { emoji: "🤝", title: "Terapeutas Ocupacionais", sub: "Reabilitação" },
    { emoji: "➕", title: "Outros Profissionais",     sub: "Da área da saúde" },
  ];

  const galeria = [
    { src: IMG.hero,        alt: "Fachada do edifício Nexus coworking Vila Clementino São Paulo",             label: "Fachada" },
    { src: IMG.entrada,     alt: "Entrada do prédio Nexus coworking médico Vila Clementino",                  label: "Entrada" },
    { src: IMG.recepcao,    alt: "Recepção interna Nexus coworking profissionais saúde Vila Clementino",      label: "Recepção" },
    { src: IMG.recepcaoPred,alt: "Recepção do prédio Nexus consultório Vila Clementino São Paulo",            label: "Recepção do Prédio" },
    { src: IMG.consul1,     alt: "Consultório mobiliado coworking Vila Clementino Nexus",                     label: "Consultório 1" },
    { src: IMG.consul2,     alt: "Sala de atendimento coworking médico Vila Clementino",                      label: "Consultório 2" },
    { src: IMG.consul3,     alt: "Ambiente consultório coworking saúde Vila Clementino São Paulo",            label: "Consultório 3" },
    { src: IMG.salaEspera,  alt: "Sala de espera acolhedora coworking Vila Clementino Nexus",                 label: "Sala de Espera" },
    { src: IMG.corredor,    alt: "Corredor de acesso consultórios coworking Vila Clementino",                 label: "Corredor" },
    { src: IMG.detalhe,     alt: "Detalhes da ambientação premium Nexus coworking Vila Clementino",           label: "Detalhes" },
  ];

  const faqs = [
    {
      q: "Qual é a localização exata da Nexus na Vila Clementino?",
      a: "A Nexus está localizada na Rua Onze de Junho, 1070 — Consultório 209, Vila Clementino, São Paulo. O endereço fica no coração do maior polo de saúde da América Latina, próximo à UNIFESP, Hospital São Paulo, Hospital do Rim e AACD.",
    },
    {
      q: "Qual metrô fica mais perto da Nexus?",
      a: "A Nexus tem acesso facilitado por três estações de metrô: Estação Hospital São Paulo (Linha 5 – Lilás), Estação Santa Cruz (Linha 2 – Verde) e Estação AACD-Servidor (Linha 5 – Lilás). Todas a poucos minutos a pé ou de transporte.",
    },
    {
      q: "Existe estacionamento próximo à Nexus?",
      a: "Sim. O edifício dispõe de estacionamento próprio e há diversas opções de estacionamento nas proximidades, facilitando o acesso tanto para os profissionais quanto para os pacientes que chegam de carro.",
    },
    {
      q: "O consultório já está mobiliado?",
      a: "Sim. Todos os consultórios da Nexus são completamente mobiliados com equipamentos profissionais de alto padrão. Você chega ao espaço e começa a atender seus pacientes imediatamente, sem nenhuma adaptação ou investimento adicional.",
    },
    {
      q: "Posso alugar apenas um período ou uma hora?",
      a: "Sim. A Nexus oferece total flexibilidade: você pode alugar por hora, por período (manhã, tarde ou noite) ou mensalmente. Não há obrigação de frequência mínima. Você paga apenas pelo que usar.",
    },
    {
      q: "Há recepção para receber meus pacientes?",
      a: "Sim. O espaço conta com recepção profissional e elegante, preparada para acolher seus pacientes com qualidade e discrição, transmitindo credibilidade desde o primeiro contato.",
    },
    {
      q: "Como funciona o agendamento do consultório?",
      a: "O agendamento é simples e pode ser feito via WhatsApp ou pelo formulário de contato do site. Nossa equipe confirma a disponibilidade e você já pode programar seus atendimentos com antecedência.",
    },
    {
      q: "Por que a Vila Clementino é uma boa região para atender pacientes?",
      a: "A Vila Clementino é o maior polo de saúde da América Latina. A presença da UNIFESP, Hospital São Paulo, Hospital do Rim e AACD atrai pacientes de toda a cidade e do interior do estado. É uma região consolidada para atendimento particular, com alta demanda e público qualificado.",
    },
    {
      q: "Quais profissionais podem utilizar o coworking na Vila Clementino?",
      a: "Médicos de todas as especialidades, psicólogos, nutricionistas, fisioterapeutas, dentistas, fonoaudiólogos, terapeutas ocupacionais e outros profissionais da área da saúde. O espaço é versátil e adequado para consultas, avaliações e retornos.",
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
      q: "O ambiente possui acessibilidade para pacientes com mobilidade reduzida?",
      a: "Sim. O edifício conta com infraestrutura completa de acessibilidade, incluindo elevadores, rampas e banheiros adaptados, garantindo conforto e segurança para todos os pacientes.",
    },
    {
      q: "Preciso assinar contrato de longo prazo?",
      a: "Não. O modelo da Nexus é totalmente flexível. Você pode alugar por hora, por período ou mensalmente, sem contratos longos, multas ou obrigações de frequência mínima. Comece quando quiser e ajuste conforme sua demanda.",
    },
    {
      q: "Posso agendar uma visita antes de fechar o contrato?",
      a: "Sim, e recomendamos! Agende uma visita pelo WhatsApp para conhecer pessoalmente o espaço, os consultórios e a recepção. Tenha certeza de que a Nexus é o ambiente ideal para os seus atendimentos na Vila Clementino.",
    },
    {
      q: "Qual é a diferença entre coworking médico e consultório próprio?",
      a: "No coworking médico da Nexus, você tem toda a infraestrutura de um consultório próprio — mobiliado, climatizado, com recepção e limpeza — sem o investimento inicial de R$ 50.000 a R$ 200.000, sem obras e sem contratos longos. É a solução ideal para quem quer atender com qualidade e flexibilidade na Vila Clementino.",
    },
  ];

  const linksInternos = [
    { href: "/coworking-medico",              label: "Coworking para Médicos" },
    { href: "/consultorio-por-hora",          label: "Consultório por Hora" },
    { href: "/aluguel-consultorio-sao-paulo", label: "Aluguel de Consultório" },
    { href: "/coworking-vila-mariana",        label: "Coworking na Vila Mariana" },
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
              <li className="text-foreground font-medium" aria-current="page">Coworking na Vila Clementino</li>
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
                  Coworking para Profissionais da Saúde na{" "}
                  <span className="text-primary">Vila Clementino</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Consultórios completos, mobiliados e prontos para atendimento em uma das principais regiões de saúde de São Paulo.
                </p>

                {/* Social proof strip */}
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: <Heart className="w-4 h-4 text-primary" />,  text: "Polo de saúde nº 1 do Brasil" },
                    { icon: <Train className="w-4 h-4 text-primary" />,  text: "3 estações de metrô" },
                    { icon: <Shield className="w-4 h-4 text-primary" />, text: "Sem burocracia" },
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
                    alt="Fachada do edifício Nexus — coworking para profissionais da saúde na Vila Clementino, São Paulo"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-background rounded-2xl p-5 shadow-xl border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Localização</p>
                  <p className="font-bold text-foreground">Vila Clementino</p>
                  <p className="text-xs text-primary font-semibold mt-0.5">Polo de Saúde nº 1 do Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ POR QUE VILA CLEMENTINO ═════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="vila-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">A melhor localização</span>
              <h2 id="vila-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Por Que Escolher a Vila Clementino?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A Vila Clementino não é apenas um bairro — é o epicentro da medicina de excelência em São Paulo. Atender aqui significa estar onde os pacientes já buscam saúde.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {motivosVilaClementino.map((m, i) => (
                <article
                  key={i}
                  className="group bg-secondary rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mb-5" aria-hidden="true">
                    {m.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
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
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest">Onde estamos</span>
                  <h2 id="localizacao-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                    No Centro do Polo de Saúde de São Paulo
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A Nexus está estrategicamente posicionada na Vila Clementino, a poucos metros dos maiores hospitais e centros médicos do Brasil. Seus pacientes chegam com facilidade — de metrô, carro ou a pé.
                  </p>
                </header>

                <div className="space-y-3">
                  {[
                    { label: "Hospital São Paulo (UNIFESP)",   sub: "Hospital universitário de referência nacional", icon: "🏥" },
                    { label: "UNIFESP",                        sub: "Universidade Federal de São Paulo", icon: "🎓" },
                    { label: "Hospital do Rim",                sub: "Referência em nefrologia e transplantes", icon: "🏥" },
                    { label: "AACD",                           sub: "Assistência à Criança Deficiente", icon: "🏥" },
                    { label: "Hospital Paulista",              sub: "Referência em otorrinolaringologia", icon: "🏥" },
                    { label: "Metrô Hospital São Paulo",       sub: "Linha 5 – Lilás, acesso direto", icon: "🚇" },
                    { label: "Metrô Santa Cruz",               sub: "Linha 2 – Verde, a poucos minutos", icon: "🚇" },
                    { label: "Metrô AACD-Servidor",            sub: "Linha 5 – Lilás, acesso facilitado", icon: "🚇" },
                  ].map((loc, i) => (
                    <div key={i} className="flex items-start gap-4 bg-background rounded-xl p-4 border border-border">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-base" aria-hidden="true">
                        {loc.icon}
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
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[560px] sticky top-24">
                <iframe
                  title="Localização da Nexus — coworking na Vila Clementino, São Paulo"
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

        {/* ══ DIFERENCIAIS ════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="diferenciais-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Infraestrutura premium</span>
              <h2 id="diferenciais-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Diferenciais da Nexus
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tudo que você precisa para atender com excelência na Vila Clementino, sem burocracia e sem investimento inicial.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diferenciais.map((d, i) => (
                <article
                  key={i}
                  className="group bg-secondary rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
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

        {/* ══ GALERIA ═════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-secondary"
          aria-labelledby="galeria-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Fotos reais</span>
              <h2 id="galeria-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Conheça o Espaço
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recepção, consultórios, entrada, corredores, fachada e detalhes — tudo pensado para profissionais da saúde
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

        {/* ══ PARA QUEM É ═════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="para-quem-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Para todos os profissionais</span>
              <h2 id="para-quem-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Para Quem é o Coworking na Vila Clementino?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                O espaço da Nexus é ideal para profissionais da saúde que buscam qualidade, praticidade e localização estratégica no maior polo médico de São Paulo.
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

        {/* ══ FAQ ═════════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-secondary"
          aria-labelledby="faq-h2"
        >
          <div className="container max-w-3xl">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Dúvidas frequentes</span>
              <h2 id="faq-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Tudo que você precisa saber sobre o coworking na Vila Clementino
              </p>
            </header>

            <div className="space-y-3" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  role="listitem"
                  className="bg-background rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-secondary/50 transition-colors"
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
          className="py-16 bg-background border-t border-border"
          aria-labelledby="links-vila-h2"
        >
          <div className="container">
            <header className="text-center mb-10 space-y-2">
              <h2 id="links-vila-h2" className="text-2xl font-bold text-foreground">Explore Mais Opções</h2>
              <p className="text-muted-foreground">Conheça todos os serviços da Nexus Espaço Saúde</p>
            </header>
            <div className="flex flex-wrap justify-center gap-4">
              {linksInternos.map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  className="inline-flex items-center gap-2 bg-secondary border border-border hover:border-primary text-foreground hover:text-primary px-5 py-3 rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow-md"
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
              Conheça a Nexus na Vila Clementino
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Agende uma visita e descubra um espaço pensado para profissionais da saúde que desejam atender em uma das regiões médicas mais valorizadas de São Paulo.
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
                "@id": "https://nexusespacosaude.com.br/coworking-vila-clementino",
                "name": "Nexus — Coworking para Profissionais da Saúde na Vila Clementino",
                "description": "Coworking médico na Vila Clementino, São Paulo. Consultórios mobiliados, recepção profissional e localização estratégica próxima à UNIFESP, Hospital São Paulo, Hospital do Rim e AACD.",
                "url": "https://nexusespacosaude.com.br/coworking-vila-clementino",
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
                "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
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
                  { "@type": "ListItem", "position": 3, "name": "Coworking na Vila Clementino", "item": "https://nexusespacosaude.com.br/coworking-vila-clementino" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
