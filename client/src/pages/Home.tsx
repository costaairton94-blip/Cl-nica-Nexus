import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Building2, Clock, Wifi, Star, MapPin, Users, CheckCircle, ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
      alt: "Fachada do Nexus Espaço Saúde na Vila Clementino"
    },
    {
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/qkmBWYHQXhTpABJp.jpeg",
      alt: "Entrada do Nexus Espaço Saúde"
    },
    {
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/jKRDVkQyaUtwCSgT.jpeg",
      alt: "Recepção interna do Nexus Espaço Saúde"
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
      alt: "Consultório moderno Nexus"
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
      alt: "Ambiente de atendimento Nexus"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": "https://nexusespacosaude.com.br/",
      "name": "Nexus Espaço Saúde — Coworking para Profissionais de Saúde",
      "description": "Coworking médico com consultórios equipados, recepção profissional e localização estratégica na Vila Clementino, próximo à UNIFESP e Hospital São Paulo.",
      "url": "https://nexusespacosaude.com.br",
      "telephone": "+5511932962026",
      "email": "costadamorim@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Onze de Junho, 1070, Consultório 209",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "04041-002",
        "addressCountry": "BR"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": -23.599, "longitude": -46.643 },
      "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
      "priceRange": "R$",
      "sameAs": ["https://nexusespacosaude.com.br"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nexus Espaço Saúde",
      "url": "https://nexusespacosaude.com.br",
      "logo": "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.32.03_c74ce314.jpeg",
      "contactPoint": { "@type": "ContactPoint", "telephone": "+5511932962026", "contactType": "customer service", "availableLanguage": "Portuguese" }
    }
  ];

  const diferenciais = [
    { icon: Building2, title: "Consultórios Equipados", desc: "Mobiliados, climatizados e prontos para atendimento imediato. Sem obras, sem investimento inicial." },
    { icon: Users, title: "Recepção Profissional", desc: "Equipe treinada para recepcionar seus pacientes com excelência e cordialidade." },
    { icon: Wifi, title: "Internet de Alta Velocidade", desc: "Conexão estável e rápida para garantir que seus atendimentos e registros fluam sem interrupções." },
    { icon: Clock, title: "Flexibilidade Total", desc: "Alugue por hora, período ou mensalmente. Sem burocracia, sem fidelidade obrigatória." },
    { icon: MapPin, title: "Localização Estratégica", desc: "Vila Clementino, próximo à UNIFESP, Hospital São Paulo e 3 estações de metrô." },
    { icon: Star, title: "Ambiente Acolhedor", desc: "Limpeza inclusa, ar-condicionado, sala de espera aconchegante e um clima familiar que seus pacientes vão adorar." },
  ];

  const planos = [
    {
      nome: "Por Hora",
      preco: "A partir de R$ 85",
      periodo: "/hora",
      destaque: false,
      itens: ["Consultório equipado", "Recepção inclusa", "Internet inclusa", "Limpeza inclusa", "Sem fidelidade"],
    },
    {
      nome: "Por Período",
      preco: "A partir de R$ 75",
      periodo: "/hora",
      destaque: true,
      badge: "Mais popular",
      itens: ["Tudo do plano por hora", "Desconto por volume", "Horários fixos", "Prioridade na agenda", "Suporte dedicado"],
    },
    {
      nome: "Mensal",
      preco: "Sob consulta",
      periodo: "",
      destaque: false,
      itens: ["Uso ilimitado no período", "Melhor custo-benefício", "Consultório reservado", "Atendimento prioritário", "Condições especiais"],
    },
  ];

  const especialidades = [
    "Clínica Médica", "Ortopedia", "Psicologia", "Nutrição", "Fisioterapia",
    "Dermatologia", "Ginecologia", "Pediatria", "Cardiologia", "Neurologia",
    "Fonoaudiologia", "Terapia Ocupacional",
  ];

  const paginasSeo = [
    { href: "/coworking-medico", title: "Coworking para Médicos", desc: "Espaço acolhedor e preparado para médicos que valorizam o cuidado humano." },
    { href: "/consultorio-por-hora", title: "Consultório por Hora", desc: "Alugue apenas pelo período que precisar, sem compromisso." },
    { href: "/aluguel-consultorio-sao-paulo", title: "Aluguel de Consultório", desc: "Consultórios completos e mobiliados para profissionais de saúde." },
    { href: "/coworking-vila-clementino", title: "Coworking Vila Clementino", desc: "No coração do maior polo de saúde de São Paulo." },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Nexus Espaço Saúde | Coworking para Profissionais de Saúde em São Paulo"
        description="Consultórios equipados, recepção profissional e localização estratégica na Vila Clementino. Alugue por hora, período ou mensalmente. Próximo à UNIFESP e Hospital São Paulo."
        canonical="https://nexusespacosaude.com.br/"
        structuredData={structuredData}
      />

      {/* ── HERO ── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Coworking para Profissionais de Saúde · Vila Clementino
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Seu Consultório Pronto para Atender
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Consultórios completos, mobiliados e aconchegantes na Vila Clementino. Planos flexíveis por hora, período ou mensais — um ambiente familiar para você e seus pacientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/5511932962026?text=Olá! Gostaria de agendar uma visita ao espaço da Nexus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 text-base rounded-md font-semibold transition-colors"
                  aria-label="Agendar visita pelo WhatsApp"
                >
                  Agendar Visita
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <Link
                  href="/espaco"
                  className="inline-flex items-center justify-center border border-border hover:bg-secondary px-8 py-4 text-base rounded-md font-semibold transition-colors"
                >
                  Conhecer o Espaço
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Sem burocracia
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Sem obras
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Pronto para atender
                </div>
              </div>
            </div>

            {/* Carrossel de imagens */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg group">
              <div className="relative w-full h-full">
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
                  >
                    <img
                      src={slide.img}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding={idx === 0 ? "sync" : "async"}
                      width={600}
                      height={450}
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                aria-label="Imagem anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Próxima imagem"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ir para imagem ${idx + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Por Que Escolher a Nexus?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Um espaço pensado com carinho para você atender seus pacientes de forma acolhedora, flexível e sem burocracia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item, i) => (
              <div key={i} className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow border border-border">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANOS ── */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Planos Flexíveis
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Escolha o modelo que melhor se adapta à sua rotina de atendimentos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planos.map((plano, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border-2 flex flex-col relative ${
                  plano.destaque
                    ? "border-primary bg-primary text-white shadow-xl scale-105"
                    : "border-border bg-white hover:shadow-md transition-shadow"
                }`}
              >
                {plano.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow">
                    {plano.badge}
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${plano.destaque ? "text-white" : "text-foreground"}`}>
                  {plano.nome}
                </h3>
                <div className="mb-6">
                  <span className={`text-2xl font-bold ${plano.destaque ? "text-white" : "text-primary"}`}>
                    {plano.preco}
                  </span>
                  <span className={`text-sm ${plano.destaque ? "text-white/80" : "text-muted-foreground"}`}>
                    {plano.periodo}
                  </span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plano.itens.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${plano.destaque ? "text-white" : "text-primary"}`} />
                      <span className={plano.destaque ? "text-white" : "text-muted-foreground"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5511932962026?text=Olá! Tenho interesse no plano de coworking da Nexus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-colors text-sm ${
                    plano.destaque
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Saber Mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Para Quem É
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nosso espaço é ideal para profissionais de saúde de diversas especialidades que buscam um ambiente familiar, flexível e carinhoso para seus pacientes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {especialidades.map((esp, i) => (
              <span key={i} className="bg-background text-foreground border border-border px-4 py-2 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                {esp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCALIZAÇÃO ── */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Localização Estratégica
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Situado na <strong>Vila Clementino</strong>, o maior polo de saúde de São Paulo, a Nexus oferece acesso fácil para médicos e pacientes de toda a cidade.
              </p>
              <ul className="space-y-3">
                {[
                  "Próximo à UNIFESP e Hospital São Paulo",
                  "Hospital do Rim e AACD nas proximidades",
                  "Metrô Hospital São Paulo, Santa Cruz e AACD-Servidor",
                  "Fácil acesso por transporte público e carro",
                  "Rua Onze de Junho, 1070 — Consultório 209",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5511932962026?text=Olá! Gostaria de agendar uma visita ao espaço da Nexus."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Agendar Visita <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-80">
              <iframe
                title="Localização Nexus Espaço Saúde"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8!2d-46.643!3d-23.599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0x1!2sRua+Onze+de+Junho%2C+1070+-+Vila+Clementino%2C+S%C3%A3o+Paulo!5e0!3m2!1spt-BR!2sbr!4v1"
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

      {/* ── PÁGINAS SEO ── */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Soluções para Cada Necessidade
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conheça todas as nossas opções de coworking e aluguel de consultório.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paginasSeo.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-background hover:bg-primary/5 border border-border hover:border-primary rounded-xl p-6 transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                  Saiba mais <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pronto para Começar a Atender?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Agende uma visita gratuita e conheça pessoalmente o espaço da Nexus. Sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511932962026?text=Olá! Gostaria de agendar uma visita ao espaço da Nexus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-md font-bold text-base transition-colors"
            >
              Falar pelo WhatsApp
            </a>
            <a
              href="tel:+5511932962026"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold text-base transition-colors"
            >
              <Phone className="w-4 h-4" />
              (11) 93296-2026
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
