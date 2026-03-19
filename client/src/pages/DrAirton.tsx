import { Link } from "wouter";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DrAirton() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Photo */}
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(4)_24d83444.jpeg"
                alt="Dr. Airton Pereira da Costa"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Dr. Airton Pereira da Costa
                </h1>
                <p className="text-xl text-primary font-semibold mb-1">
                  Ortopedista e Traumatologista
                </p>
                <p className="text-base text-muted-foreground">
                  Especialista em Cirurgia do Pé e Tornozelo | CRM-SP 231.393
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg p-6 border border-border space-y-3">
                <h3 className="font-bold text-foreground text-base mb-3">Contato</h3>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:airtoncosta@live.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    airtoncosta@live.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+5511976923530" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    (11) 97692-3530
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Rua Borges Lagoa, 933 — Vila Clementino, São Paulo, SP
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/contato">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-5">
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="https://wa.me/5511976923530" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-5">
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl space-y-14">

          {/* Objetivo */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 pb-2 border-b border-border">
              Objetivo
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser médico Ortopedista e Traumatologista especialista em medicina e cirurgia do pé e tornozelo, com domínio da propedêutica clínica, compreensão da fisiopatologia e etiologia, além de treinamento teórico, prático e cirúrgico pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-UNIFESP). Oferecer um cuidado seguro, humano e eficiente, exercendo a medicina com excelência e realização profissional.
            </p>
          </div>

          {/* Formação Acadêmica */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Formação Acadêmica
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "Graduação em Medicina",
                  institution: "Universidade para o Desenvolvimento do Estado e da Região do Pantanal (Uniderp) / Santa Casa de Campo Grande – MS"
                },
                {
                  title: "Residência Médica em Ortopedia e Traumatologia",
                  institution: "Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-UNIFESP)"
                },
                {
                  title: "Subespecialidade em Cirurgia do Pé e Tornozelo",
                  institution: "Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-UNIFESP)"
                }
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-5 py-1">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiência Acadêmica */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Experiência Acadêmica
            </h2>
            <div className="space-y-8">

              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">
                  Uniderp / Santa Casa de Campo Grande – MS
                </h3>
                <p className="text-sm text-primary font-medium mb-3">Internato Médico</p>
                <ul className="space-y-2">
                  {[
                    "Medicina de Urgência e Emergência — UPAs, SAMU (360h)",
                    "Saúde Materno-Infantil — Ginecologia, Obstetrícia, Pediatria e Neonatologia (220h)",
                    "Saúde do Adulto — Clínica Médica e Cirurgia (220h)",
                    "Saúde Mental — Psiquiatria e CAPS (240h)",
                    "Estágio Regional — Clínica Médica, Cirurgia e Pronto Atendimento no interior do estado (240h)",
                    "Atenção Básica — Unidades Básicas de Saúde da Família (560h)",
                    "Ambulatórios de Especialidades Médicas — Clínica Médica, Cirurgia e subespecialidades (200h)",
                    "Saúde do Adulto — Clínica Médica, Cirurgia, Ortopedia e Anestesiologia (320h)",
                    "Saúde Materno-Infantil — Ginecologia, Obstetrícia, Pediatria e Neonatologia (320h)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">
                  Hospital Santa Casa — Associação Beneficente de Campo Grande
                </h3>
                <p className="text-sm text-primary font-medium mb-3">Estágio Extracurricular em Urgência e Emergência (594h)</p>
                <ul className="space-y-2">
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    Membro da Liga de Urgência, Emergência e Trauma da UNIDERP (LET)
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Qualificação e Atividades Acadêmicas */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Qualificação e Atividades Acadêmicas
            </h2>

            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-3">Mentoria</h3>
              <ul className="space-y-2">
                <li className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  Palestras e oficinas de "Atendimento ao Politraumatizado" promovidas pelo Curso de Medicina da Universidade Estadual de Mato Grosso do Sul (UEMS)
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-3">Cursos e Treinamentos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Curso AO Trauma Blended Course – Basic Principles of Fracture Management",
                  "XII Curso Teórico-Prático de Fixação Externa "Dr. Hilário Boatto" (15h)",
                  "Curso de Capacitação em Segurança do Paciente – 5ª Edição (60h) — Hospital São Paulo / UNIFESP",
                  "Curso de Ética Médica para Residentes — UNIFESP",
                  "Medicina Transfusional – Uma Visão Atualizada (20h) — EPM/Hospital São Paulo UNIFESP",
                  "Webinar – Lesões do Tendão Calcâneo – Aquiles — SBOT",
                  "Curso de Ética Médica Continuada — CRM/MS (18h)",
                  "Desafios Clínicos e Urgências da Oftalmologia — Hospital de Olhos de MS (36h)"
                ].map((item, idx) => (
                  <div key={idx} className="bg-secondary rounded-lg p-4 border border-border flex gap-3 items-start">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-3">Congressos e Simpósios</h3>
              <ul className="space-y-2">
                {[
                  "30º Congresso de Ortopedia e Traumatologia do Estado de São Paulo (COTESP) — 22h",
                  "56º Congresso Brasileiro de Ortopedia e Traumatologia — SBOT (18h 30min)"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Trabalhos Voluntários</h3>
              <ul className="space-y-2">
                {[
                  "Médico Voluntário do Exército Brasileiro — 3° BaVEx",
                  "1° Treinamento de Atendimento Pré-Hospitalar Tático (APHT) — Exército Brasileiro / Ministério da Defesa"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Atividades Científicas */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Atividades Científicas
            </h2>
            <div className="space-y-5">
              <div className="border-l-4 border-primary pl-5 py-1">
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wide text-primary mb-1">Trabalho Finalizado</h3>
                <p className="font-semibold text-foreground">
                  "Análise Comparativa entre os Tratamentos para as Fraturas do Antebraço em Crianças: Uma Revisão Sistemática e Meta-Análise"
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Aprovado para publicação na <em>Revista Acta Ortopédica Brasileira</em> — Orientador: Dr. Eiffel Tsuyoshi Dobashi
                </p>
              </div>
              <div className="border-l-4 border-border pl-5 py-1">
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wide text-muted-foreground mb-1">Em Andamento</h3>
                <p className="font-semibold text-foreground">
                  "A Relação das Fraturas Expostas da Tíbia no Paciente Pediátrico: Avaliação dos Desfechos Clínicos"
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Aprovado na Plataforma Brasil — Orientadores: Dr. Eiffel Tsuyoshi Dobashi e Dr. Luiz Fernando Cocco
                </p>
              </div>
            </div>
          </div>

          {/* Competências e Habilidades */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Competências e Habilidades
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-secondary rounded-lg p-5 border border-border">
                <h4 className="font-bold text-foreground mb-2">Idiomas</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>🇧🇷 Português — Nativo</li>
                  <li>🇺🇸 Inglês — Intermediário</li>
                  <li>🇪🇸 Espanhol — Intermediário</li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-5 border border-border">
                <h4 className="font-bold text-foreground mb-2">Informática</h4>
                <p className="text-sm text-muted-foreground">
                  Pacote Office (Word, PowerPoint, Excel) e plataforma Windows
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Agende sua Consulta com Dr. Airton
          </h2>
          <p className="text-muted-foreground mb-8">
            Ortopedia, Traumatologia e Cirurgia do Pé e Tornozelo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-semibold transition-colors"
            >
              Agendar Consulta
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://wa.me/5511976923530"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-semibold transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
