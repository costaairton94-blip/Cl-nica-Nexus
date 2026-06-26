import { useState } from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Página SEO Premium – Coworking para Médicos em São Paulo
 * Otimizada para: coworking médico São Paulo, consultório por hora, Vila Clementino
 */

const IMAGES = {
  fachada: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
  entradaExterna: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/MMIQogZagwsminEA.jpeg",
  recepcaoInterna: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/jKRDVkQyaUtwCSgT.jpeg",
  recepcaoPredio: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(5)_1cd4ab55.jpeg",
  consultorio1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
  consultorio2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
  consultorio3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(3)_2d30012a.jpeg",
  salaEspera: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.25_86e235e1.jpeg",
  corredor: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(6)_3c43ebb1.jpeg",
  detalhe: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24_c9760ae6.jpeg",
};

export default function CoworkingMedicos() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const diferenciais = [
    { icon: <Building2 className="w-6 h-6" />, title: "Consultórios Mobiliados", desc: "Salas completamente equipadas, prontas para atendimento imediato" },
    { icon: <Users className="w-6 h-6" />, title: "Recepção Profissional", desc: "Estrutura de recepção elegante para acolher seus pacientes" },
    { icon: <Wind className="w-6 h-6" />, title: "Ambiente Climatizado", desc: "Ar-condicionado em todos os ambientes para máximo conforto" },
    { icon: <Wifi className="w-6 h-6" />, title: "Internet de Alta Velocidade", desc: "Conexão estável e rápida para laudos, prontuários e telemedicina" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Limpeza Inclusa", desc: "Higienização profissional incluída em todos os planos" },
    { icon: <Clock className="w-6 h-6" />, title: "Flexibilidade de Horários", desc: "Agende conforme sua agenda, sem compromissos rígidos" },
    { icon: <CalendarDays className="w-6 h-6" />, title: "Locação por Hora, Período ou Mensal", desc: "Escolha o modelo que melhor se adapta ao seu volume de atendimentos" },
    { icon: <MapPin className="w-6 h-6" />, title: "Excelente Localização", desc: "Vila Clementino, próximo à UNIFESP e Hospital São Paulo" },
  ];

  const especialidades = [
    "Médicos", "Cirurgiões", "Psiquiatras", "Dermatologistas",
    "Ortopedistas", "Cardiologistas", "Endocrinologistas", "Pediatras",
    "Neurologistas", "Outras Especialidades",
  ];

  const galeria = [
    { src: IMAGES.fachada, alt: "Fachada do edifício Nexus Coworking Médico Vila Clementino São Paulo", label: "Fachada" },
    { src: IMAGES.entradaExterna, alt: "Entrada externa do edifício Nexus Coworking para médicos São Paulo", label: "Entrada" },
    { src: IMAGES.recepcaoInterna, alt: "Recepção interna do consultório Nexus Coworking médico", label: "Recepção" },
    { src: IMAGES.recepcaoPredio, alt: "Recepção do prédio Nexus Coworking Vila Clementino", label: "Recepção do Prédio" },
    { src: IMAGES.consultorio1, alt: "Consultório moderno equipado para médicos em São Paulo", label: "Consultório 1" },
    { src: IMAGES.consultorio2, alt: "Sala de atendimento médico Nexus Coworking São Paulo", label: "Consultório 2" },
    { src: IMAGES.consultorio3, alt: "Ambiente de consultório médico Vila Clementino", label: "Consultório 3" },
    { src: IMAGES.salaEspera, alt: "Sala de espera acolhedora Nexus Coworking médico", label: "Sala de Espera" },
    { src: IMAGES.corredor, alt: "Corredor e acesso aos consultórios Nexus São Paulo", label: "Corredor" },
    { src: IMAGES.detalhe, alt: "Detalhes da ambientação premium Nexus Coworking", label: "Detalhes" },
  ];

  const comparacao = [
    { item: "Investimento inicial", proprio: "R$ 50.000 – R$ 200.000+", nexus: "Zero" },
    { item: "Custos fixos mensais", proprio: "R$ 5.000 – R$ 15.000+", nexus: "Apenas o que usar" },
    { item: "Flexibilidade", proprio: "Contrato de 12–36 meses", nexus: "Por hora, período ou mês" },
    { item: "Infraestrutura", proprio: "Você monta e mantém", nexus: "Pronta e inclusa" },
    { item: "Recepção", proprio: "Custo adicional", nexus: "Inclusa" },
    { item: "Localização", proprio: "Depende do imóvel", nexus: "Vila Clementino – estratégica" },
    { item: "Manutenção", proprio: "Responsabilidade sua", nexus: "Totalmente inclusa" },
  ];

  const faqs = [
    {
      question: "Quanto custa alugar um consultório por hora na Nexus?",
      answer: "Os valores variam conforme o plano escolhido: Uso Eventual (R$ 85/h), Uso Recorrente (R$ 75/h) e Parceria Preferencial (R$ 65/h). Entre em contato para conhecer as condições detalhadas.",
    },
    {
      question: "Posso atender apenas alguns dias da semana?",
      answer: "Sim! Oferecemos total flexibilidade. Você pode agendar os dias e horários que melhor se encaixam na sua agenda, sem compromisso de frequência mínima.",
    },
    {
      question: "O consultório já está mobiliado e equipado?",
      answer: "Sim. Todas as salas são completamente mobiliadas e equipadas para atendimento imediato. Você chega e começa a atender seus pacientes sem nenhuma adaptação.",
    },
    {
      question: "Existe recepção para receber meus pacientes?",
      answer: "Sim. O espaço conta com recepção profissional e elegante, preparada para acolher seus pacientes com qualidade.",
    },
    {
      question: "Há estacionamento próximo?",
      answer: "Sim. O edifício dispõe de estacionamento e há opções adicionais nas proximidades, facilitando o acesso tanto para profissionais quanto para pacientes.",
    },
    {
      question: "É possível fazer locação mensal?",
      answer: "Sim! Além da locação por hora, oferecemos planos recorrentes com condições especiais para profissionais que atendem com frequência regular.",
    },
    {
      question: "Como funciona o agendamento?",
      answer: "O agendamento é simples e pode ser feito via WhatsApp ou formulário de contato. Nossa equipe confirma a disponibilidade e você já pode começar a atender.",
    },
    {
      question: "O ambiente possui acessibilidade?",
      answer: "Sim. O edifício conta com infraestrutura de acessibilidade, incluindo elevadores e rampas, garantindo conforto e segurança para todos os pacientes.",
    },
  ];

  return (
    <>
      {/* SEO Meta via Helmet-like approach using document title */}
      {/* Schema.org e Open Graph são injetados via index.html ou SSR */}

      <div className="min-h-screen">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
          {/* Background decorative */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  <MapPin className="w-4 h-4" />
                  Vila Clementino · São Paulo
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Coworking para{" "}
                  <span className="text-primary">Médicos</span>{" "}
                  em São Paulo
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Consultórios modernos, totalmente equipados e prontos para atendimento, em localização estratégica na Vila Clementino — próximo à UNIFESP e ao Hospital São Paulo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/espaco">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                      Conhecer o Espaço
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/5511932962026?text=Olá! Gostaria de saber mais sobre o coworking para médicos na Nexus."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="px-8 py-6 text-base rounded-xl border-2 hover:bg-primary/5 transition-all">
                      Falar pelo WhatsApp
                    </Button>
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-6 pt-4">
                  {["Pronto para atender", "Sem burocracia", "Planos flexíveis"].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero image */}
              <div className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={IMAGES.fachada}
                    alt="Fachada do edifício Nexus Coworking para médicos em São Paulo Vila Clementino"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-xl border border-border">
                  <p className="text-xs text-muted-foreground">Localização</p>
                  <p className="font-bold text-foreground text-sm">Vila Clementino, SP</p>
                  <p className="text-xs text-primary">Próximo à UNIFESP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS ─────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-background" aria-labelledby="diferenciais-heading">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Por que escolher a Nexus</span>
              <h2 id="diferenciais-heading" className="text-4xl md:text-5xl font-bold text-foreground">
                Tudo que Você Precisa para Atender com Excelência
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Infraestrutura completa, ambiente premium e total flexibilidade para profissionais da saúde
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diferenciais.map((d, i) => (
                <div
                  key={i}
                  className="group bg-secondary rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mb-4">
                    {d.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARA QUEM É ──────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-secondary" aria-labelledby="especialidades-heading">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Especialidades atendidas</span>
              <h2 id="especialidades-heading" className="text-4xl md:text-5xl font-bold text-foreground">
                Para Quem é o Coworking Nexus?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Espaço ideal para médicos e profissionais da saúde de todas as especialidades
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {especialidades.map((esp, i) => (
                <div
                  key={i}
                  className="bg-background rounded-xl p-4 text-center border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300">
                    <Check className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-semibold text-sm text-foreground">{esp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCALIZAÇÃO ──────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-background" aria-labelledby="localizacao-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest">Localização estratégica</span>
                  <h2 id="localizacao-heading" className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                    No Coração da Saúde em São Paulo
                  </h2>
                  <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                    Localizada na Vila Clementino, a Nexus está inserida no maior polo de saúde da América Latina, com acesso privilegiado aos principais hospitais e universidades médicas do país.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: <Building2 className="w-5 h-5" />, label: "Próximo à UNIFESP", desc: "Universidade Federal de São Paulo" },
                    { icon: <Building2 className="w-5 h-5" />, label: "Próximo ao Hospital São Paulo", desc: "Hospital universitário de referência" },
                    { icon: <MapPin className="w-5 h-5" />, label: "Metrô Hospital São Paulo", desc: "Linha 5 – Lilás" },
                    { icon: <MapPin className="w-5 h-5" />, label: "Metrô Santa Cruz", desc: "Linha 2 – Verde" },
                    { icon: <MapPin className="w-5 h-5" />, label: "Metrô AACD-Servidor", desc: "Linha 5 – Lilás" },
                  ].map((loc, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-secondary border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        {loc.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{loc.label}</p>
                        <p className="text-xs text-muted-foreground">{loc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-foreground">📍 Endereço</p>
                  <p className="text-sm text-muted-foreground mt-1">Rua Onze de Junho, 1070 — Consultório 209<br />Vila Clementino, São Paulo – SP</p>
                </div>
              </div>

              {/* Mapa integrado */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[480px]">
                <iframe
                  title="Mapa Nexus Coworking Médico Vila Clementino São Paulo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0!2d-46.6400!3d-23.5990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0x1234567890abcdef!2sRua%20Onze%20de%20Junho%2C%201070%20-%20Vila%20Clementino%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Mapa de localização da Nexus Coworking em Vila Clementino, São Paulo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── GALERIA ──────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-secondary" aria-labelledby="galeria-heading">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Fotos reais</span>
              <h2 id="galeria-heading" className="text-4xl md:text-5xl font-bold text-foreground">
                Conheça o Espaço
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ambiente premium, recepção elegante e consultórios prontos para atendimento
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galeria.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxImg(img.src)}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={`Ampliar imagem: ${img.label}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-xs font-semibold">{img.label}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da imagem"
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setLightboxImg(null)}
              aria-label="Fechar visualização"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImg}
              alt="Imagem ampliada do espaço Nexus Coworking"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* ── COMPARAÇÃO ───────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-background" aria-labelledby="comparacao-heading">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Vantagens</span>
              <h2 id="comparacao-heading" className="text-4xl md:text-5xl font-bold text-foreground">
                Consultório Próprio × Coworking Nexus
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Veja por que cada vez mais médicos escolhem o modelo de coworking para seus atendimentos
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-3 bg-primary text-white">
                <div className="p-4 font-semibold text-sm">Critério</div>
                <div className="p-4 font-semibold text-sm text-center border-l border-white/20">Consultório Próprio</div>
                <div className="p-4 font-semibold text-sm text-center border-l border-white/20">Coworking Nexus</div>
              </div>
              {/* Rows */}
              {comparacao.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-background" : "bg-secondary"} border-t border-border`}
                >
                  <div className="p-4 text-sm font-medium text-foreground">{row.item}</div>
                  <div className="p-4 text-sm text-muted-foreground text-center border-l border-border flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    {row.proprio}
                  </div>
                  <div className="p-4 text-sm font-semibold text-primary text-center border-l border-border flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    {row.nexus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-secondary" aria-labelledby="faq-heading">
          <div className="container max-w-3xl">
            <div className="text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Dúvidas frequentes</span>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-foreground">
                Perguntas Frequentes sobre Coworking Médico
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-background rounded-xl border border-border overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                    aria-expanded={expandedFaq === i}
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    {expandedFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden" aria-labelledby="cta-heading">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="container relative z-10 text-center space-y-8 max-w-3xl mx-auto">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold leading-tight">
              Pronto para Começar Seus Atendimentos?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Conheça a estrutura da Nexus Clínica e Coworking e encontre um espaço moderno, acolhedor e preparado para oferecer a melhor experiência aos seus pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/5511932962026?text=Olá! Gostaria de agendar uma visita ao coworking médico da Nexus."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg hover:shadow-xl"
              >
                {/* WhatsApp icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.176l-.343.204-3.554-.932.950 3.469-.223.36a9.86 9.86 0 00-1.51 5.26c.001 5.45 4.436 9.884 9.888 9.884 2.64 0 5.122-1.03 6.988-2.898a9.825 9.825 0 002.893-6.994c-.003-5.45-4.437-9.884-9.885-9.884m8.413 18.297A11.815 11.815 0 0112.05 24C5.495 24 .06 18.565.06 12.012.06 9.348.938 6.78 2.62 4.66L.057 0l4.747 1.244A11.8 11.8 0 0112.05 0c6.554 0 11.89 5.435 11.893 12.012a11.82 11.82 0 01-3.48 8.282" />
                </svg>
                Falar pelo WhatsApp
              </a>
              <Link href="/contato">
                <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-base transition-all">
                  Agendar uma Visita
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://nexusespacosaude.com.br/coworking-medico",
                "name": "Nexus Coworking para Médicos",
                "description": "Coworking médico em São Paulo com consultórios modernos, totalmente equipados e prontos para atendimento na Vila Clementino.",
                "url": "https://nexusespacosaude.com.br/coworking-medico",
                "telephone": "+5511932962026",
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
                  "longitude": -46.64,
                },
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "19:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "13:00" },
                ],
                "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663441484870/oPxUKNpLAdSSGXes.jpeg",
                "priceRange": "R$ 65 – R$ 85/hora",
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                  "@type": "Question",
                  "name": f.question,
                  "acceptedAnswer": { "@type": "Answer", "text": f.answer },
                })),
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://nexusespacosaude.com.br/" },
                  { "@type": "ListItem", "position": 2, "name": "Coworking Médico São Paulo", "item": "https://nexusespacosaude.com.br/coworking-medico" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
