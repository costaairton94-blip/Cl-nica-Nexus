import { FormEvent, useState } from "react";
import SEOHead from "@/components/SEOHead";
import {
  Activity,
  ArrowRight,
  Bone,
  Brain,
  Check,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  ClipboardList,
  HeartHandshake,
  Home,
  Leaf,
  Menu,
  MessageCircle,
  Phone,
  Salad,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  Utensils,
  X,
} from "lucide-react";

const PROGRAM = {
  whatsappNumber: "5511932962026", // Atualizar caso o programa tenha um número dedicado.
  whatsappMessage:
    "Olá! Gostaria de saber mais sobre o Programa Nexus Cuidado Integral 60+ e realizar uma triagem para atendimento domiciliar.",
  email: "costadamorim@gmail.com", // Atualizar para o e-mail dedicado do programa, se houver.
  instagramUrl: "#", // Inserir a URL oficial do Instagram antes da publicação definitiva.
  serviceAreas: "Regiões de atendimento a confirmar na triagem.",
};

const HERO_IMAGE = "/images/cuidado-integral/hero-cuidado-domiciliar.jpeg";
const MARIANA_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at19.00.28_a4ffe766.jpeg";
const AIRTON_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(4)_24d83444.jpeg";

const faqs = [
  {
    question: "Todos os profissionais atendem o idoso?",
    answer:
      "Não necessariamente. Após a triagem e as avaliações iniciais, a equipe indica apenas os profissionais necessários para aquele momento de cuidado.",
  },
  {
    question: "As visitas acontecem no mesmo dia?",
    answer:
      "As avaliações podem ser organizadas em dias e horários diferentes, conforme a disponibilidade da família, do idoso e dos profissionais envolvidos.",
  },
  {
    question: "O programa substitui o médico que já acompanha o paciente?",
    answer:
      "Não. O programa pode atuar de forma complementar e, mediante autorização, considerar informações dos profissionais que já acompanham o idoso.",
  },
  {
    question: "Vocês atendem emergências?",
    answer:
      "Não. Os atendimentos são programados. Em situações urgentes, a família deve procurar um serviço de emergência ou ligar para o SAMU — 192.",
  },
  {
    question: "A família recebe algum documento?",
    answer:
      "Sim. Conforme a modalidade contratada, a família recebe avaliações, orientações, plano de cuidado e relatórios de evolução.",
  },
  {
    question: "Qual é o valor?",
    answer:
      "O investimento depende dos profissionais envolvidos, da localização e da frequência das visitas. Após a triagem, a equipe apresenta a proposta adequada.",
  },
  {
    question: "Em quais regiões vocês atendem?",
    answer: PROGRAM.serviceAreas,
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer:
      "Sim. A emissão de nota fiscal dos serviços prestados pode ser confirmada durante a triagem. A possibilidade de reembolso deve ser verificada diretamente com o plano de saúde.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://nexusespacosaude.com.br/cuidado-integral-60-mais#business",
      name: "Nexus Saúde — Cuidado Integral 60+",
      url: "https://nexusespacosaude.com.br/cuidado-integral-60-mais",
      image: "https://nexusespacosaude.com.br/images/cuidado-integral/hero-cuidado-domiciliar.jpeg",
      description:
        "Acompanhamento domiciliar multiprofissional e personalizado para idosos, com geriatria, nutrição, fisioterapia e ortopedia.",
      telephone: `+${PROGRAM.whatsappNumber}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Onze de Junho, 1070, Consultório 209",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "04041-002",
        addressCountry: "BR",
      },
      areaServed: "Regiões de atendimento a confirmar na triagem",
      availableService: {
        "@type": "MedicalTherapy",
        name: "Acompanhamento domiciliar multiprofissional programado",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

function buildWhatsAppUrl(extraMessage?: string) {
  const message = extraMessage
    ? `${PROGRAM.whatsappMessage}\n\n${extraMessage}`
    : PROGRAM.whatsappMessage;
  return `https://wa.me/${PROGRAM.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function WhatsAppButton({
  children,
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

export default function CuidadoIntegral60Mais() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Dados para triagem:",
      `Responsável: ${formData.get("responsavel")}`,
      `Idoso: ${formData.get("idoso")} — ${formData.get("idade")} anos`,
      `Bairro: ${formData.get("bairro")}`,
      `Telefone: ${formData.get("telefone")}`,
      `Principal necessidade: ${formData.get("necessidade")}`,
    ].join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const navLinks = [
    { href: "#programa", label: "O programa" },
    { href: "#para-quem-e", label: "Para quem é" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#equipe", label: "Equipe" },
    { href: "#duvidas", label: "Dúvidas" },
  ];

  return (
    <div className="min-h-screen bg-[#fbfaf5] text-[#344036] selection:bg-[#cad5bb] selection:text-[#243322]">
      <SEOHead
        title="Atendimento Domiciliar para Idosos | Nexus Saúde"
        description="Cuidado domiciliar integrado para idosos com geriatria, nutrição, fisioterapia e ortopedia. Avaliação personalizada e acompanhamento da família."
        canonical="https://nexusespacosaude.com.br/cuidado-integral-60-mais"
        ogImage="https://nexusespacosaude.com.br/images/cuidado-integral/hero-cuidado-domiciliar.jpeg"
        structuredData={schema}
      />

      <header className="sticky top-0 z-50 border-b border-[#dfe3d7] bg-[#fbfaf5]/95 backdrop-blur">
        <div className="container flex h-18 items-center justify-between gap-4 py-3 md:h-20">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Nexus Saúde — início">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#506548] text-[#fbfaf5] shadow-sm">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <strong className="font-serif text-xl font-semibold tracking-tight text-[#364632]">Nexus Saúde</strong>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#748167]">Cuidado Integral 60+</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação da página">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-[#52604e] transition-colors hover:text-[#31482d]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppButton className="hidden rounded-full bg-[#465b3d] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#344a2f] sm:inline-flex">
              Falar com a equipe
            </WhatsAppButton>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-[#465b3d] transition hover:bg-[#eef0e7] lg:hidden"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-[#dfe3d7] bg-[#fbfaf5] px-4 py-4 lg:hidden" aria-label="Navegação móvel">
            <div className="container flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-[#465b3d] hover:bg-[#eef0e7]"
                >
                  {link.label}
                </a>
              ))}
              <WhatsAppButton className="mt-3 rounded-lg bg-[#465b3d] px-4 py-3 text-center font-semibold text-white">
                Falar com a equipe
              </WhatsAppButton>
            </div>
          </nav>
        )}
      </header>

      <main id="inicio">
        <section className="relative overflow-hidden border-b border-[#e4e6dc] bg-[#f3f2e9] py-14 md:py-20 lg:py-24">
          <div className="pointer-events-none absolute -left-28 top-8 h-72 w-72 rounded-full bg-[#dce6cf]/70 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#e8dcc6]/70 blur-3xl" />
          <div className="container relative grid items-center gap-11 lg:grid-cols-[1.03fr_.97fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cbd6c0] bg-[#f9faf5] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#52664b]">
                <HeartHandshake className="h-4 w-4" /> Atendimento domiciliar programado
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-[#344632] sm:text-5xl lg:text-6xl">
                Cuidado integral para o idoso, <span className="text-[#617b55]">dentro de casa</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#52604e] md:text-xl">
                Geriatria, nutrição, fisioterapia e ortopedia trabalhando de forma integrada para preservar a saúde, a mobilidade e a autonomia de quem você ama.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-[#657060]">
                Avaliamos o idoso em seu ambiente real, identificamos suas necessidades e construímos um plano de cuidado personalizado, com acompanhamento próximo da família.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton className="inline-flex items-center justify-center gap-2 rounded-full bg-[#465b3d] px-6 py-4 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#344a2f]">
                  Solicitar uma triagem <ArrowRight className="h-4 w-4" />
                </WhatsAppButton>
                <a href="#programa" className="inline-flex items-center justify-center rounded-full border border-[#8a9b7e] bg-[#fbfaf5] px-6 py-4 font-semibold text-[#465b3d] transition hover:bg-[#eef0e7]">
                  Conhecer o programa
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3" aria-label="Diferenciais do programa">
                {["Atendimento domiciliar", "Equipe multiprofissional", "Plano de cuidado personalizado"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-2 text-sm font-medium text-[#53634e] shadow-sm ring-1 ring-[#dce2d5]">
                    <Check className="h-4 w-4 text-[#6d875d]" /> {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-3 rounded-[2rem] bg-[#dce6cf]" />
              <img
                src={HERO_IMAGE}
                alt="Pessoa idosa em casa durante avaliação de saúde com profissional e familiar"
                className="relative aspect-[4/3] w-full rounded-[1.6rem] object-cover shadow-xl"
                width={1200}
                height={800}
                loading="eager"
                decoding="sync"
              />
              <div className="absolute -bottom-5 left-5 max-w-[17rem] rounded-2xl border border-white/70 bg-[#fbfaf5]/95 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-semibold text-[#3d5136]">Um plano que considera a rotina da casa</p>
                <p className="mt-1 text-xs leading-relaxed text-[#697465]">Orientações organizadas para o idoso, familiares e cuidadores.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="programa" className="scroll-mt-24 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">O programa</p>
                <h2 className="mt-3 max-w-md font-serif text-3xl font-semibold leading-tight text-[#374a34] md:text-4xl">Cuidar da saúde do idoso exige olhar para o todo</h2>
              </div>
              <div className="max-w-2xl text-lg leading-relaxed text-[#596756]">
                <p>
                  Com o envelhecimento, alimentação, medicamentos, força muscular, equilíbrio, cognição, dores e doenças crônicas passam a se influenciar mutuamente. Quando cada aspecto é tratado de forma isolada, informações importantes podem se perder.
                </p>
                <p className="mt-4">
                  No <strong className="font-semibold text-[#40543a]">Nexus Cuidado Integral 60+</strong>, os profissionais compartilham as avaliações e organizam as prioridades em um único plano de cuidado, respeitando a realidade de cada pessoa e de sua família.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Stethoscope, title: "Saúde clínica", text: "Uma visão organizada sobre doenças crônicas, medicamentos, memória, humor e funcionalidade." },
                { icon: Salad, title: "Nutrição e massa muscular", text: "Atenção ao apetite, peso, hidratação, alimentação e preservação de força." },
                { icon: Activity, title: "Mobilidade e prevenção de quedas", text: "Avaliação de equilíbrio, marcha, transferências e segurança da rotina." },
                { icon: Bone, title: "Dor e saúde musculoesquelética", text: "Cuidado para dores, limitações articulares e condições que afetam os movimentos." },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#e2e5dc] bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf2e6] text-[#58724e]"><item.icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-[#40513b]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#687463]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="para-quem-e" className="scroll-mt-24 bg-[#edf0e7] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">Para quem é</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#374a34] md:text-4xl">Quando o acompanhamento integral pode ajudar?</h2>
              <p className="mt-4 leading-relaxed text-[#62705d]">A triagem acolhe o momento vivido pela família e ajuda a entender se um acompanhamento programado pode fazer sentido.</p>
            </div>
            <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Perda de peso ou redução do apetite",
                "Fraqueza e perda de massa muscular",
                "Quedas ou dificuldade para caminhar",
                "Dores articulares ou musculares",
                "Recuperação após internação",
                "Pós-operatório",
                "Múltiplas doenças e medicamentos",
                "Alterações de memória e comportamento",
                "Redução da independência",
                "Sobrecarga ou insegurança da família",
              ].map((item) => (
                <div key={item} className="flex min-h-28 flex-col justify-between rounded-xl bg-[#fbfaf5] p-5 shadow-sm ring-1 ring-[#dde3d5]">
                  <CircleCheck className="h-5 w-5 text-[#739062]" />
                  <p className="mt-4 text-sm font-medium leading-snug text-[#52614d]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-[#cfdbc5] bg-[#f7f8f2] px-6 py-5 text-center leading-relaxed text-[#51604c]">
              Não é necessário esperar uma situação grave. O programa também é indicado para idosos que desejam preservar sua independência e envelhecer com mais segurança.
            </p>
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-24 py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">Como funciona</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#374a34] md:text-4xl">Um cuidado organizado, do primeiro contato à reavaliação</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-5">
              {[
                ["01", "Triagem inicial", "A família conta o momento atual do idoso e as principais dificuldades."],
                ["02", "Avaliações domiciliares", "Os profissionais realizam avaliações individualizadas no ambiente em que o idoso vive."],
                ["03", "Discussão da equipe", "Os achados são compartilhados e as prioridades são definidas em conjunto."],
                ["04", "Plano Integrado de Cuidado", "A família recebe orientações, metas e um cronograma de acompanhamento."],
                ["05", "Acompanhamento e reavaliação", "A evolução é monitorada e o plano é ajustado conforme as necessidades."],
              ].map(([number, title, text]) => (
                <li key={number} className="relative rounded-2xl border border-[#e1e5da] bg-white p-6">
                  <span className="font-serif text-4xl font-semibold text-[#bdc9af]">{number}</span>
                  <h3 className="mt-7 font-semibold text-[#40513b]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#687463]">{text}</p>
                </li>
              ))}
            </ol>
            <WhatsAppButton className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#798e6c] bg-[#fbfaf5] px-6 py-3.5 font-semibold text-[#465b3d] transition hover:bg-[#edf0e7]">
              Quero entender qual acompanhamento é indicado <ArrowRight className="h-4 w-4" />
            </WhatsAppButton>
          </div>
        </section>

        <section className="border-y border-[#e0e4d8] bg-[#f8f7f1] py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">O que é avaliado</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#374a34] md:text-4xl">Diferentes olhares para uma mesma pessoa</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                { icon: Stethoscope, title: "Geriatria", text: "Avaliação clínica global, doenças crônicas, medicamentos, memória, humor, sono, fragilidade, funcionalidade e prevenção." },
                { icon: Utensils, title: "Nutrição gerontológica", text: "Estado nutricional, perda de peso, massa muscular, alimentação, hidratação, suplementação, funcionamento intestinal e orientação aos familiares e cuidadores." },
                { icon: Activity, title: "Fisioterapia", text: "Força, equilíbrio, marcha, transferências, risco de quedas, capacidade funcional, necessidade de dispositivos auxiliares e segurança do ambiente." },
                { icon: Bone, title: "Ortopedia", text: "Dores, limitações articulares, artrose, deformidades, quedas, fraturas, condições dos pés e tornozelos, pós-operatório e necessidade de investigação específica." },
              ].map((item) => (
                <article key={item.title} className="flex gap-5 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#e1e5da]">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8eee0] text-[#557048]"><item.icon className="h-5 w-5" /></span>
                  <div><h3 className="text-lg font-semibold text-[#40513b]">{item.title}</h3><p className="mt-2 leading-relaxed text-[#667261]">{item.text}</p></div>
                </article>
              ))}
            </div>
            <p className="mt-8 border-l-4 border-[#839a73] bg-[#eff2e8] px-5 py-4 leading-relaxed text-[#53614d]">
              A composição e a frequência do acompanhamento são definidas de acordo com as necessidades identificadas. Nem todos os pacientes precisam ser atendidos por todos os profissionais.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">O que a família recebe</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#374a34] md:text-4xl">Mais clareza para cuidar e decidir</h2>
              <p className="mt-5 leading-relaxed text-[#61705c]">A família deixa de receber orientações fragmentadas e passa a contar com uma direção clara, organizada e compatível com a realidade do idoso.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Avaliação individualizada", "Identificação de riscos", "Plano Integrado de Cuidado", "Metas de curto e médio prazo", "Orientações para familiares e cuidadores", "Cronograma de acompanhamento", "Comunicação organizada entre os profissionais", "Relatórios de evolução e reavaliações programadas"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-[#e1e5da] bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ebf0e4] text-[#68815b]"><Check className="h-4 w-4" /></span>
                  <p className="text-sm font-medium leading-snug text-[#53614e]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="equipe" className="scroll-mt-24 bg-[#e9eee0] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">Equipe</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#374a34] md:text-4xl">Uma equipe reunida em torno da mesma pessoa</h2>
              <p className="mt-4 leading-relaxed text-[#61705c]">Cada profissional atua dentro de sua área, compartilhando informações relevantes para que o cuidado seja mais organizado.</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <article className="overflow-hidden rounded-2xl bg-[#fbfaf5] shadow-sm ring-1 ring-[#dce2d4]">
                <img src={MARIANA_IMAGE} alt="Dra. Mariana Carlim D'Amorim, nutricionista" className="aspect-[4/3] w-full object-cover object-top" loading="lazy" />
                <div className="p-6"><h3 className="text-lg font-semibold text-[#40513b]">Dra. Mariana Carlim D&apos;Amorim</h3><p className="mt-1 text-sm font-medium text-[#718566]">Nutricionista especialista em Gerontologia</p><p className="mt-4 text-sm leading-relaxed text-[#667261]">Responsável pela avaliação nutricional, preservação da massa muscular, alimentação, suplementação e orientação aos familiares e cuidadores.</p><p className="mt-4 border-t border-[#e3e6dc] pt-4 text-xs leading-relaxed text-[#73806f]">Nutrição pela São Camilo; Residência Multiprofissional em Envelhecimento pela UNIFESP; Especialização em Nutrição Hospitalar pelo Einstein; CRN-3 65535.</p></div>
              </article>
              <article className="overflow-hidden rounded-2xl bg-[#fbfaf5] shadow-sm ring-1 ring-[#dce2d4]">
                <div className="flex aspect-[4/3] items-center justify-center bg-[#d8dfce] text-center text-sm text-[#65775d]"><div><UsersRound className="mx-auto h-8 w-8" /><span className="mt-2 block">Fotografia profissional<br />a inserir</span></div></div>
                <div className="p-6"><h3 className="text-lg font-semibold text-[#40513b]">Dra. Isabella <span className="text-[#819078]">[sobrenome a inserir]</span></h3><p className="mt-1 text-sm font-medium text-[#718566]">Médica geriatra</p><p className="mt-4 text-sm leading-relaxed text-[#667261]">Responsável pela avaliação clínica global, revisão de doenças e medicamentos, funcionalidade, cognição e definição das prioridades médicas do cuidado.</p><p className="mt-4 border-t border-[#e3e6dc] pt-4 text-xs text-[#73806f]">Formação e registro profissional a inserir antes da publicação definitiva.</p></div>
              </article>
              <article className="overflow-hidden rounded-2xl bg-[#fbfaf5] shadow-sm ring-1 ring-[#dce2d4]">
                <img src={AIRTON_IMAGE} alt="Dr. Airton Pereira da Costa, ortopedista e traumatologista" className="aspect-[4/3] w-full object-cover object-top" loading="lazy" />
                <div className="p-6"><h3 className="text-lg font-semibold text-[#40513b]">Dr. Airton Pereira da Costa</h3><p className="mt-1 text-sm font-medium text-[#718566]">Ortopedista e traumatologista</p><p className="mt-4 text-sm leading-relaxed text-[#667261]">Responsável pela avaliação das dores, limitações musculoesqueléticas, quedas, fraturas, deformidades e condições que interferem na mobilidade do idoso.</p><p className="mt-4 border-t border-[#e3e6dc] pt-4 text-xs text-[#73806f]">Atuação em cirurgia do pé e tornozelo. CRM-SP 231.393.</p></div>
              </article>
              <article className="overflow-hidden rounded-2xl bg-[#fbfaf5] shadow-sm ring-1 ring-[#dce2d4]">
                <div className="flex aspect-[4/3] items-center justify-center bg-[#d8dfce] text-center text-sm text-[#65775d]"><div><Activity className="mx-auto h-8 w-8" /><span className="mt-2 block">Fotografia profissional<br />a inserir</span></div></div>
                <div className="p-6"><h3 className="text-lg font-semibold text-[#40513b]">Fisioterapeuta <span className="text-[#819078]">[nome a inserir]</span></h3><p className="mt-1 text-sm font-medium text-[#718566]">Fisioterapeuta</p><p className="mt-4 text-sm leading-relaxed text-[#667261]">Responsável pela avaliação e recuperação da força, equilíbrio, marcha, transferências, mobilidade e prevenção de quedas.</p><p className="mt-4 border-t border-[#e3e6dc] pt-4 text-xs text-[#73806f]">Formação e CREFITO a inserir antes da publicação definitiva.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">Diferenciais</p><h2 className="mt-3 font-serif text-3xl font-semibold text-[#374a34] md:text-4xl">Por que um cuidado integrado faz diferença?</h2></div>
            <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Home, title: "Cuidado no ambiente real", text: "A equipe conhece a rotina, as dificuldades e as características da residência." },
                { icon: UsersRound, title: "Decisões compartilhadas", text: "Os profissionais analisam o caso em conjunto, respeitando os limites de cada especialidade." },
                { icon: HeartHandshake, title: "Participação da família", text: "Familiares e cuidadores recebem orientações claras para aplicar no cotidiano." },
                { icon: ClipboardList, title: "Acompanhamento por metas", text: "A evolução é acompanhada por aspectos como peso, força, mobilidade, dor e independência." },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#e0e4d8] bg-[#f9f9f4] p-6"><item.icon className="h-6 w-6 text-[#667f58]" /><h3 className="mt-5 font-semibold text-[#40513b]">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-[#687463]">{item.text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f0f1e9] py-16 md:py-24">
          <div className="container">
            <div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">Modalidades</p><h2 className="mt-3 font-serif text-3xl font-semibold text-[#374a34] md:text-4xl">Um acompanhamento adequado a cada momento</h2></div>
            <div className="mx-auto mt-11 grid max-w-5xl gap-5 md:grid-cols-3">
              {[
                ["Avaliação Integral", "Avaliações iniciais, discussão multiprofissional e elaboração do Plano Integrado de Cuidado."],
                ["Acompanhamento Integral", "Consultas e reavaliações programadas, acompanhamento das metas e orientação à família."],
                ["Programa Pós-Alta", "Acompanhamento após internação ou cirurgia, com foco na recuperação funcional, nutricional e na prevenção de novas complicações."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl bg-[#fbfaf5] p-7 text-left shadow-sm ring-1 ring-[#dfe4d7]"><span className="text-sm font-bold uppercase tracking-[.12em] text-[#7d9270]">Modalidade</span><h3 className="mt-4 text-xl font-semibold text-[#40513b]">{title}</h3><p className="mt-3 leading-relaxed text-[#667261]">{text}</p></article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-[#61705c]">O plano e o investimento são apresentados após a triagem, de acordo com a composição profissional e a frequência necessárias.</p>
            <div className="mt-7 text-center"><WhatsAppButton className="inline-flex items-center gap-2 rounded-full bg-[#465b3d] px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#344a2f]">Solicitar uma avaliação <ArrowRight className="h-4 w-4" /></WhatsAppButton></div>
          </div>
        </section>

        <section className="border-y border-[#efd7d2] bg-[#fff8f5] py-7">
          <div className="container flex max-w-5xl items-start gap-4 text-sm leading-relaxed text-[#765951]"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#a26a5a]" /><p><strong>Importante:</strong> o programa realiza atendimentos domiciliares programados. Não oferecemos serviço de emergência, pronto atendimento, assistência de enfermagem contínua ou acompanhamento 24 horas. Em situações de urgência, procure o serviço de emergência ou ligue para o SAMU — 192.</p></div>
        </section>

        <section id="duvidas" className="scroll-mt-24 py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">Dúvidas</p><h2 className="mt-3 font-serif text-3xl font-semibold text-[#374a34] md:text-4xl">Perguntas frequentes</h2></div>
            <div className="mt-10 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return <div key={faq.question} className="overflow-hidden rounded-xl border border-[#e0e4d9] bg-white"><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-[#45573f]" aria-expanded={isOpen}><span>{faq.question}</span>{isOpen ? <ChevronUp className="h-5 w-5 shrink-0" /> : <ChevronDown className="h-5 w-5 shrink-0" />}</button>{isOpen && <div className="border-t border-[#ebede7] px-5 py-5 leading-relaxed text-[#667261]">{faq.answer}</div>}</div>;
              })}
            </div>
          </div>
        </section>

        <section id="formulario" className="scroll-mt-24 bg-[#e8eee0] py-16 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#718566]">Triagem inicial</p><h2 className="mt-3 font-serif text-3xl font-semibold text-[#374a34] md:text-4xl">Vamos entender o momento da sua família</h2><p className="mt-5 leading-relaxed text-[#60705b]">Preencha os dados abaixo. Ao enviar, você será direcionado ao WhatsApp para conversar com a equipe e combinar a próxima etapa.</p><p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-[#6a7567]"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#6f875f]" />As informações serão utilizadas somente para contato e triagem do atendimento solicitado.</p></div>
            <form onSubmit={handleFormSubmit} className="rounded-2xl bg-[#fbfaf5] p-6 shadow-sm ring-1 ring-[#d9e0d1] sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2"><span className="text-sm font-semibold text-[#4b5d45]">Nome do responsável</span><input required name="responsavel" autoComplete="name" className="mt-2 w-full rounded-lg border border-[#ccd6c4] bg-white px-4 py-3 text-[#40513b] outline-none transition focus:border-[#718a63] focus:ring-2 focus:ring-[#d8e2cf]" /></label>
                <label><span className="text-sm font-semibold text-[#4b5d45]">Nome do idoso</span><input required name="idoso" className="mt-2 w-full rounded-lg border border-[#ccd6c4] bg-white px-4 py-3 text-[#40513b] outline-none transition focus:border-[#718a63] focus:ring-2 focus:ring-[#d8e2cf]" /></label>
                <label><span className="text-sm font-semibold text-[#4b5d45]">Idade do idoso</span><input required name="idade" type="number" min="60" max="120" inputMode="numeric" className="mt-2 w-full rounded-lg border border-[#ccd6c4] bg-white px-4 py-3 text-[#40513b] outline-none transition focus:border-[#718a63] focus:ring-2 focus:ring-[#d8e2cf]" /></label>
                <label><span className="text-sm font-semibold text-[#4b5d45]">Bairro</span><input required name="bairro" autoComplete="address-level3" className="mt-2 w-full rounded-lg border border-[#ccd6c4] bg-white px-4 py-3 text-[#40513b] outline-none transition focus:border-[#718a63] focus:ring-2 focus:ring-[#d8e2cf]" /></label>
                <label><span className="text-sm font-semibold text-[#4b5d45]">Telefone</span><input required name="telefone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(00) 00000-0000" className="mt-2 w-full rounded-lg border border-[#ccd6c4] bg-white px-4 py-3 text-[#40513b] outline-none transition focus:border-[#718a63] focus:ring-2 focus:ring-[#d8e2cf]" /></label>
                <label className="sm:col-span-2"><span className="text-sm font-semibold text-[#4b5d45]">Principal necessidade</span><textarea required name="necessidade" rows={4} placeholder="Conte brevemente o que motivou o contato." className="mt-2 w-full resize-y rounded-lg border border-[#ccd6c4] bg-white px-4 py-3 text-[#40513b] outline-none transition focus:border-[#718a63] focus:ring-2 focus:ring-[#d8e2cf]" /></label>
              </div>
              <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#64705f]"><input required type="checkbox" name="consentimento" className="mt-1 h-4 w-4 accent-[#52684a]" /><span>Autorizo o contato da Nexus Saúde para retorno sobre esta solicitação e o tratamento destes dados para fins de triagem, conforme a legislação aplicável.</span></label>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#465b3d] px-5 py-4 font-semibold text-white transition hover:bg-[#344a2f]">Enviar e falar pelo WhatsApp <MessageCircle className="h-4 w-4" /></button>
            </form>
          </div>
        </section>

        <section className="bg-[#4a6041] py-16 text-white md:py-20">
          <div className="container text-center"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d9e4cf]">Cuidado começa com uma conversa</p><h2 className="mx-auto mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight md:text-5xl">Sua família não precisa organizar esse cuidado sozinha</h2><p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#e5ecde]">Converse com a nossa equipe. Vamos entender o momento do idoso e orientar qual formato de acompanhamento pode fazer sentido para a família.</p><WhatsAppButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fbfaf5] px-6 py-4 font-semibold text-[#3e5336] shadow-sm transition hover:bg-[#e9efe2]">Falar com a equipe pelo WhatsApp <ArrowRight className="h-4 w-4" /></WhatsAppButton><p className="mt-5 text-sm text-[#d9e4cf]">Atendimento particular, mediante agendamento.</p></div>
        </section>
      </main>

      <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#4b9d68] text-white shadow-lg transition hover:scale-105 hover:bg-[#398157]" aria-label="Falar com a equipe pelo WhatsApp"><MessageCircle className="h-6 w-6" /></a>

      <footer className="bg-[#344432] py-12 text-[#e6ebdf]">
        <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div><div className="flex items-center gap-2"><Leaf className="h-5 w-5 text-[#b7c9aa]" /><strong className="font-serif text-xl">Nexus Saúde</strong></div><p className="mt-4 text-sm leading-relaxed text-[#cbd5c3]">Nexus Cuidado Integral 60+ — acompanhamento domiciliar programado e multiprofissional.</p></div>
          <div><h3 className="font-semibold">Contato</h3><ul className="mt-4 space-y-3 text-sm text-[#cbd5c3]"><li><a className="hover:text-white" href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp: (11) 93296-2026</a></li><li><a className="hover:text-white" href={`mailto:${PROGRAM.email}`}>{PROGRAM.email}</a></li><li><a className="hover:text-white" href="tel:+5511932962026"><Phone className="mr-1 inline h-3.5 w-3.5" />(11) 93296-2026</a></li></ul></div>
          <div><h3 className="font-semibold">Informações</h3><ul className="mt-4 space-y-3 text-sm text-[#cbd5c3]"><li>Rua Onze de Junho, 1070<br />Consultório 209 — São Paulo, SP</li><li>Áreas atendidas: a confirmar na triagem</li><li><a href={PROGRAM.instagramUrl} className="hover:text-white">Instagram</a></li></ul></div>
          <div><h3 className="font-semibold">Transparência</h3><p className="mt-4 text-sm leading-relaxed text-[#cbd5c3]">CNPJ, política de privacidade, termos de uso e registros profissionais devem ser inseridos antes da publicação definitiva.</p></div>
        </div>
        <div className="container mt-10 border-t border-white/15 pt-6 text-xs leading-relaxed text-[#c4cfbc]">As informações deste site são educativas e não substituem avaliação profissional. O programa não realiza atendimentos de urgência ou emergência.</div>
      </footer>
    </div>
  );
}
