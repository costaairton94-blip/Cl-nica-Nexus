import SEOHead from "@/components/SEOHead";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
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
  TrendingUp,
  Heart,
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

const WA = "https://wa.me/5511932962026?text=Olá!%20Gostaria%20de%20conhecer%20o%20coworking%20da%20Nexus%20próximo%20à%20Vila%20Mariana.";

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */
export default function CoworkingVilaMariana() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ── Dados ── */
  const motivosVilaMariana = [
    { icon: <TrendingUp className="w-6 h-6" />,  title: "Região Altamente Valorizada",          desc: "A Vila Mariana é um dos bairros mais procurados de São Paulo para atendimento particular. Pacientes com alto poder aquisitivo e perfil exigente vivem e trabalham na região." },
    { icon: <Heart className="w-6 h-6" />,       title: "Grande Concentração de Clínicas",      desc: "A região já conta com forte presença de consultórios e clínicas particulares, o que confirma a demanda consolidada por atendimento médico e multiprofissional." },
    { icon: <Building2 className="w-6 h-6" />,   title: "Proximidade com a UNIFESP",            desc: "A Universidade Federal de São Paulo está a poucos minutos da Vila Mariana, gerando um fluxo constante de pacientes e profissionais da saúde na região." },
    { icon: <Train className="w-6 h-6" />,       title: "Acesso Fácil por Metrô",               desc: "A Estação Vila Mariana (Linha 2 – Verde) conecta o bairro ao restante da cidade. Seus pacientes chegam com praticidade e sem dificuldades de deslocamento." },
    { icon: <Star className="w-6 h-6" />,        title: "Infraestrutura Completa",              desc: "Farmácias, laboratórios, bancos, restaurantes e estacionamentos ao redor. Tudo que você e seus pacientes precisam está disponível nas proximidades." },
    { icon: <Shield className="w-6 h-6" />,      title: "Perfil Ideal para Atendimento Particular", desc: "A Vila Mariana reúne um público com perfil ideal para atendimento particular: adultos, profissionais, famílias e idosos que valorizam qualidade e comodidade." },
  ];

  const diferenciais = [
    { icon: <Building2 className="w-6 h-6" />,    title: "Consultórios Aconchegantes",              desc: "Salas mobiliadas com carinho e prontas para atendimento. Chegue e comece a receber seus pacientes num clima familiar." },
    { icon: <Users className="w-6 h-6" />,        title: "Recepção Calorosa",                desc: "Ambiente de recepção preparado com carinho, transmitindo conforto e acolhimento desde o primeiro contato com seus pacientes." },
    { icon: <Wind className="w-6 h-6" />,         title: "Ambiente Climatizado",                 desc: "Ar-condicionado em todos os ambientes para garantir conforto durante todo o atendimento, em qualquer época do ano." },
    { icon: <Wifi className="w-6 h-6" />,         title: "Internet de Alta Velocidade",          desc: "Conexão estável e rápida para garantir que seus atendimentos e comunicação fluam sem interrupções." },
    { icon: <Sparkles className="w-6 h-6" />,     title: "Limpeza Inclusa",                      desc: "Higienização profissional e rigorosa incluída em todos os planos, sem custo adicional. Ambiente sempre bem cuidado." },
    { icon: <CalendarDays className="w-6 h-6" />, title: "Flexibilidade de Horários",            desc: "Você escolhe os dias e horários. Sem obrigação de frequência mínima. Adapte o espaço ao seu ritmo de atendimentos." },
    { icon: <Clock className="w-6 h-6" />,        title: "Locação por Hora ou Período",          desc: "Alugue apenas o tempo que precisar — por hora ou por período (manhã, tarde ou noite). Pague somente pelo que usar." },
    { icon: <MapPin className="w-6 h-6" />,       title: "Planos Mensais Disponíveis",           desc: "Para quem atende com regularidade, oferecemos planos mensais com condições especiais e custo por hora reduzido." },
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
    { src: IMG.hero,        alt: "Entrada do edifício Nexus coworking próximo à Vila Mariana São Paulo",          label: "Entrada" },
    { src: IMG.fachada,     alt: "Fachada do prédio Nexus coworking médico próximo Vila Mariana",                 label: "Fachada" },
    { src: IMG.recepcao,    alt: "Recepção interna Nexus coworking profissionais saúde Vila Mariana",             label: "Recepção" },
    { src: IMG.recepcaoPred,alt: "Recepção do prédio Nexus consultório próximo Vila Mariana São Paulo",           label: "Recepção do Prédio" },
    { src: IMG.consul1,     alt: "Consultório mobiliado coworking próximo à Vila Mariana",                        label: "Consultório 1" },
    { src: IMG.consul2,     alt: "Sala de atendimento coworking médico Vila Mariana São Paulo",                   label: "Consultório 2" },
    { src: IMG.consul3,     alt: "Ambiente consultório coworking saúde próximo Vila Mariana",                     label: "Consultório 3" },
    { src: IMG.salaEspera,  alt: "Sala de espera acolhedora coworking Vila Mariana Nexus",                        label: "Sala de Espera" },
    { src: IMG.corredor,    alt: "Corredor de acesso consultórios Nexus próximo Vila Mariana",                    label: "Corredor" },
    { src: IMG.detalhe,     alt: "Detalhes da ambientação acolhedora Nexus coworking Vila Mariana",                  label: "Detalhes" },
  ];

  const faqs = [
    {
      q: "A Nexus fica na Vila Mariana?",
      a: "A Nexus está localizada na Rua Onze de Junho, 1070 — Consultório 209, na Vila Clementino, bairro vizinho e diretamente conectado à Vila Mariana. A distância entre os dois bairros é mínima, com acesso fácil a pé, de carro ou de metrô.",
    },
    {
      q: "Qual metrô fica mais perto para quem vem da Vila Mariana?",
      a: "Para quem vem da Vila Mariana, a estação mais conveniente é a Estação Vila Mariana (Linha 2 – Verde). Além dela, as estações Hospital São Paulo e Santa Cruz (Linha 5 – Lilás e Linha 2 – Verde) também oferecem acesso rápido à Nexus.",
    },
    {
      q: "Quanto tempo leva da Vila Mariana até a Nexus?",
      a: "A Nexus está a menos de 10 minutos da Vila Mariana, seja de carro, metrô ou a pé. A proximidade entre os bairros torna o deslocamento extremamente prático para profissionais e pacientes.",
    },
    {
      q: "Por que atender pacientes da Vila Mariana na Nexus?",
      a: "A Vila Mariana concentra um público com excelente perfil para atendimento particular. Ao se instalar na Nexus — a poucos minutos do bairro — você oferece praticidade aos seus pacientes, com todo o conforto de um consultório acolhedor sem o custo de montar um espaço próprio.",
    },
    {
      q: "O consultório já está mobiliado?",
      a: "Sim. Todos os consultórios da Nexus são completamente mobiliados com muito carinho. Você chega ao espaço e começa a atender seus pacientes num clima familiar imediatamente, sem nenhuma adaptação ou investimento adicional.",
    },
    {
      q: "Posso alugar apenas por hora?",
      a: "Sim. A Nexus oferece locação por hora, por período (manhã, tarde ou noite) e planos mensais. Você escolhe o modelo que melhor se adapta ao seu volume de atendimentos e ao seu orçamento.",
    },
    {
      q: "Há recepção para receber meus pacientes?",
      a: "Sim. O espaço conta com recepção calorosa e bem cuidada, preparada para acolher seus pacientes com atenção e carinho desde o primeiro contato.",
    },
    {
      q: "Como funciona o agendamento do consultório?",
      a: "O agendamento é simples e pode ser feito via WhatsApp ou pelo formulário de contato do site. Nossa equipe confirma a disponibilidade e você já pode programar seus atendimentos com antecedência.",
    },
    {
      q: "Quais profissionais podem utilizar o coworking?",
      a: "Médicos de todas as especialidades, psicólogos, nutricionistas, fisioterapeutas, dentistas, fonoaudiólogos, terapeutas ocupacionais e outros profissionais da área da saúde. O espaço é versátil e adequado para consultas, avaliações e retornos.",
    },
    {
      q: "A limpeza está inclusa no aluguel?",
      a: "Sim. A higienização profissional e rigorosa está incluída em todos os planos de locação, sem nenhum custo adicional.",
    },
    {
      q: "Há internet disponível no consultório?",
      a: "Sim. O espaço conta com internet de alta velocidade e conexão estável, ideal para garantir que seus atendimentos e comunicação fluam sem interrupções.",
    },
    {
      q: "O ambiente possui acessibilidade para pacientes com mobilidade reduzida?",
      a: "Sim. O edifício conta com infraestrutura completa de acessibilidade, incluindo elevadores, rampas e banheiros adaptados, garantindo conforto e segurança para todos os pacientes.",
    },
    {
      q: "Preciso assinar contrato de longo prazo?",
      a: "Não. O modelo da Nexus é totalmente flexível. Você pode alugar por hora, por período ou mensalmente, sem contratos longos, multas ou obrigações de frequência mínima.",
    },
    {
      q: "Existe estacionamento próximo à Nexus?",
      a: "Sim. O edifício dispõe de estacionamento próprio e há diversas opções de estacionamento nas proximidades, facilitando o acesso para profissionais e pacientes que chegam de carro.",
    },
    {
      q: "Posso agendar uma visita antes de fechar o contrato?",
      a: "Sim, e recomendamos! Agende uma visita pelo WhatsApp para conhecer pessoalmente o espaço, os consultórios e a recepção. Veja com seus próprios olhos por que a Nexus é a melhor opção para quem atende pacientes da Vila Mariana.",
    },
  ];

  const linksInternos = [
    { href: "/coworking-vila-clementino",     label: "Coworking na Vila Clementino" },
    { href: "/coworking-medico",              label: "Coworking para Médicos" },
    { href: "/consultorio-por-hora",          label: "Consultório por Hora" },
    { href: "/aluguel-consultorio-sao-paulo", label: "Aluguel de Consultório" },
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
              <li className="text-foreground font-medium" aria-current="page">Coworking na Vila Mariana</li>
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
                  Próximo à Vila Mariana · São Paulo
                </div>

                <h1 id="hero-h1" className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Coworking para Profissionais da Saúde na{" "}
                  <span className="text-primary">Vila Mariana</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Consultórios completos, mobiliados e prontos para atendimento, em uma das regiões mais valorizadas de São Paulo para profissionais da saúde.
                </p>

                {/* Social proof strip */}
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: <Train className="w-4 h-4 text-primary" />,      text: "Metrô Vila Mariana" },
                    { icon: <TrendingUp className="w-4 h-4 text-primary" />, text: "Região valorizada" },
                    { icon: <Shield className="w-4 h-4 text-primary" />,     text: "Sem burocracia" },
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
                    alt="Entrada do edifício Nexus — coworking para profissionais da saúde próximo à Vila Mariana, São Paulo"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-background rounded-2xl p-5 shadow-xl border border-border">
                  <p className="text-xs text-muted-foreground mb-1">A menos de 10 minutos da</p>
                  <p className="font-bold text-foreground">Vila Mariana</p>
                  <p className="text-xs text-primary font-semibold mt-0.5">Acesso fácil por metrô</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ POR QUE VILA MARIANA ════════════════════════════ */}
        <section
          className="py-24 md:py-32 bg-background"
          aria-labelledby="vila-mariana-h2"
        >
          <div className="container">
            <header className="text-center mb-16 space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">A escolha certa</span>
              <h2 id="vila-mariana-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                Por Que Atender na Vila Mariana?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A Vila Mariana reúne um dos perfis de público mais favoráveis ao atendimento particular em São Paulo. Profissionais que atendem nessa região encontram pacientes exigentes, fiéis e dispostos a investir em saúde de qualidade.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {motivosVilaMariana.map((m, i) => (
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
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest">Fácil de chegar</span>
                  <h2 id="localizacao-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                    A Menos de 10 Minutos da Vila Mariana
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A Nexus fica na Vila Clementino, bairro vizinho à Vila Mariana. Seus pacientes chegam com facilidade pela <strong>Estação Santa Cruz (Linha 2 – Verde)</strong>, de carro ou a pé — sem grandes deslocamentos.
                  </p>
                </header>

                <div className="space-y-3">
                  {[
                    { label: "Metrô Santa Cruz",               sub: "Linha 2 – Verde · conexão direta com a Vila Mariana", icon: "🚇" },
                    { label: "Metrô Hospital São Paulo",       sub: "Linha 5 – Lilás · a 5 minutos a pé", icon: "🚇" },
                    { label: "Metrô AACD-Servidor",            sub: "Linha 5 – Lilás · a 10 minutos", icon: "🚇" },
                    { label: "Hospital São Paulo (UNIFESP)",   sub: "Hospital universitário de referência, ao lado", icon: "🏥" },
                    { label: "Hospital do Rim e AACD",          sub: "Nas proximidades imediatas", icon: "🏥" },
                    { label: "Estacionamento no prédio",        sub: "Para quem vem de carro, sem preocupação", icon: "🚗" },
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
                    Vila Clementino, São Paulo – SP<br />
                    <span className="text-primary font-medium">A menos de 10 minutos da Vila Mariana</span>
                  </p>
                </address>
              </div>

              {/* Mapa */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[560px] sticky top-24">
                <iframe
                  title="Localização da Nexus — coworking próximo à Vila Mariana, São Paulo"
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
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Infraestrutura completa</span>
              <h2 id="diferenciais-h2" className="text-4xl md:text-5xl font-bold text-foreground">
                O Que a Nexus Oferece
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tudo que você precisa para atender com excelência pacientes da Vila Mariana e região, sem burocracia e sem investimento inicial.
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
                Ambiente aconchegante, recepção calorosa e consultórios prontos para receber seus pacientes da Vila Mariana
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
                Para Quem é o Coworking?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                O espaço da Nexus é ideal para profissionais da saúde que atendem ou desejam atender pacientes da Vila Mariana e região sul de São Paulo.
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
                Tudo que você precisa saber sobre o coworking próximo à Vila Mariana
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
          aria-labelledby="links-vila-mariana-h2"
        >
          <div className="container">
            <header className="text-center mb-10 space-y-2">
              <h2 id="links-vila-mariana-h2" className="text-2xl font-bold text-foreground">Explore Mais Opções</h2>
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
              Conheça a Nexus Clínica e Coworking
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Agende uma visita e descubra uma estrutura completa para atender seus pacientes, a poucos minutos da Vila Mariana.
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
                "@id": "https://nexusespacosaude.com.br/coworking-vila-mariana",
                "name": "Nexus — Coworking para Profissionais da Saúde próximo à Vila Mariana",
                "description": "Coworking médico próximo à Vila Mariana, São Paulo. Consultórios mobiliados, recepção profissional e localização estratégica a menos de 10 minutos da Vila Mariana, próximo à UNIFESP e Hospital São Paulo.",
                "url": "https://nexusespacosaude.com.br/coworking-vila-mariana",
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
                  { "@type": "ListItem", "position": 3, "name": "Coworking na Vila Mariana", "item": "https://nexusespacosaude.com.br/coworking-vila-mariana" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
