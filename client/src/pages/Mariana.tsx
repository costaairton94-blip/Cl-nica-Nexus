import { Link } from "wouter";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Mariana() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Photo */}
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at19.00.28_a4ffe766.jpeg"
                alt="Mariana Carlim D'Amorim"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Mariana Carlim D'Amorim
                </h1>
                <p className="text-xl text-primary font-semibold mb-1">
                  Nutricionista Clínica
                </p>
                <p className="text-base text-muted-foreground">
                  Especialista em Gerontologia | CRN-3 65535
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg p-6 border border-border space-y-3">
                <h3 className="font-bold text-foreground text-base mb-3">Contato</h3>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:nutricionista.marianacarlim@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                    nutricionista.marianacarlim@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+5511982010263" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    (11) 98201-0263
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
                <a href="https://wa.me/5511982010263" target="_blank" rel="noopener noreferrer">
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
              Atuar como Nutricionista Clínica, oferecendo atendimento individualizado, baseado em evidências e focado na promoção da saúde e qualidade de vida dos pacientes.
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
                  title: "Graduação em Nutrição",
                  institution: "Centro Universitário São Camilo",
                  period: "2017 – 2020"
                },
                {
                  title: "Pós-graduação em Nutrição Hospitalar",
                  institution: "Instituto Israelita de Ensino e Pesquisa Albert Einstein",
                  period: "2021"
                },
                {
                  title: "Pós-graduação em Nutrição Esportiva e Estética",
                  institution: "Plenitude Educação",
                  period: "2022 – 2023"
                },
                {
                  title: "Residência Multiprofissional em Envelhecimento",
                  institution: "Universidade Federal de São Paulo (UNIFESP)",
                  period: "2022 – 2024"
                },
                {
                  title: "Pós-graduação em Gestão de Clínicas e Consultórios",
                  institution: "Anhanguera",
                  period: "Em andamento (2026)"
                }
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-5 py-1">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                  <p className="text-xs text-primary font-medium mt-0.5">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiência Profissional */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Experiência Profissional
            </h2>
            <div className="space-y-8">

              {/* Consultório Particular */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="font-bold text-foreground text-lg">Consultório Particular</h3>
                  <span className="text-xs bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full w-fit">Atual</span>
                </div>
                <p className="text-sm text-primary font-medium mb-3">Nutricionista Clínica</p>
                <ul className="space-y-2">
                  {[
                    "Atendimento individualizado a pacientes com diferentes perfis nutricionais, incluindo idosos, atletas e indivíduos com condições clínicas específicas.",
                    "Desenvolvimento de estratégias nutricionais personalizadas para otimizar a saúde, desempenho e bem-estar.",
                    "Atendimentos presenciais e por telemedicina, garantindo acesso a um suporte nutricional eficiente e baseado em evidências."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instituto Toniolo */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="font-bold text-foreground text-lg">Instituto Toniolo</h3>
                  <span className="text-xs bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full w-fit">Atual</span>
                </div>
                <p className="text-sm text-primary font-medium mb-3">Nutricionista Clínica</p>
                <ul className="space-y-2">
                  {[
                    "Atendimento individualizado a pacientes com diferentes perfis nutricionais, incluindo idosos, atletas e indivíduos com condições clínicas específicas.",
                    "Elaboração de planos alimentares adaptados à rotina familiar, visando maior adesão e melhores resultados clínicos.",
                    "Monitoramento contínuo e ajustes das estratégias nutricionais conforme a evolução do paciente."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Anhanguera Educacional */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="font-bold text-foreground text-lg">Anhanguera Educacional</h3>
                  <span className="text-xs bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full w-fit">Atual</span>
                </div>
                <p className="text-sm text-primary font-medium mb-3">Nutricionista Tutora</p>
                <ul className="space-y-2">
                  {[
                    "Atuação como mediadora pedagógica na formação acadêmica de estudantes de Nutrição, oferecendo suporte técnico-científico e orientação prática.",
                    "Participação ativa no processo de ensino-aprendizagem, auxiliando na construção de raciocínio clínico e pensamento crítico.",
                    "Colaboração com a equipe docente na atualização de conteúdos e metodologias educacionais, promovendo a excelência no ensino superior."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Residencial Toniolo Memory Care */}
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Residencial Toniolo Memory Care</h3>
                <p className="text-sm text-primary font-medium mb-3">Nutricionista Clínica</p>
                <ul className="space-y-2">
                  {[
                    "Responsável técnica pelo serviço de nutrição e gestão da Unidade de Alimentação e Nutrição.",
                    "Avaliação nutricional detalhada e elaboração de cardápios personalizados, considerando o estado clínico e as necessidades individuais dos residentes.",
                    "Acompanhamento da terapia nutricional enteral, com ajustes contínuos conforme a evolução dos pacientes.",
                    "Suporte e orientação a cuidadores e familiares, promovendo uma alimentação segura e eficaz.",
                    "Atuação interdisciplinar com a equipe de saúde para garantir um atendimento integrado e de alta qualidade."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AME IDOSO */}
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Ambulatório de Especialidades Médicas (AME IDOSO)</h3>
                <p className="text-sm text-primary font-medium mb-3">Nutricionista Clínica e Preceptora em Nutrição — Residência Multiprofissional de Envelhecimento UNIFESP</p>
                <ul className="space-y-2">
                  {[
                    "Atendimento nutricional especializado a pacientes idosos, com foco na promoção da saúde, prevenção de doenças e reabilitação.",
                    "Elaboração de planos alimentares individualizados, considerando condições de saúde, preferências e adesão dos pacientes.",
                    "Monitoramento e ajuste contínuo da conduta nutricional para melhorar a qualidade de vida dos pacientes.",
                    "Suporte e educação nutricional para familiares, visando a continuidade do tratamento fora do ambiente ambulatorial.",
                    "Preceptoria dos Residentes de Nutrição do Programa de Residência Multiprofissional em Envelhecimento — UNIFESP."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hospital São Paulo - Ambulatório */}
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Ambulatório de Especialidades Médicas do Hospital São Paulo</h3>
                <p className="text-sm text-primary font-medium mb-3">Nutricionista Clínica</p>
                <ul className="space-y-2">
                  {[
                    "Atendimento nutricional especializado para pacientes idosos, com foco no manejo de doenças crônicas como diabetes, hipertensão e dislipidemia.",
                    "Desenvolvimento de estratégias para otimizar a adesão alimentar e melhorar a qualidade de vida dos pacientes.",
                    "Trabalho em conjunto com equipe multiprofissional para oferecer um cuidado integrado e personalizado."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hospital São Paulo */}
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Hospital São Paulo</h3>
                <p className="text-sm text-primary font-medium mb-3">Nutricionista Especializada em Idosos</p>
                <ul className="space-y-2">
                  {[
                    "Atendimento nutricional a pacientes hospitalizados, incluindo enfermarias, UTI e cuidados paliativos.",
                    "Planejamento e ajuste de terapia nutricional enteral e parenteral, conforme a necessidade clínica do paciente.",
                    "Atuação em equipe multiprofissional para oferecer um atendimento mais abrangente e humanizado."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* PADI */}
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Programa de Assistência Domiciliar ao Idoso (PADI)</h3>
                <p className="text-sm text-primary font-medium mb-3">Nutricionista Domiciliar</p>
                <ul className="space-y-2">
                  {[
                    "Atendimento domiciliar a pacientes idosos, oferecendo suporte nutricional e estratégias para reabilitação.",
                    "Coordenação do cuidado junto à equipe multidisciplinar, promovendo um atendimento eficiente e centrado no paciente."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Estágios Curriculares */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Estágios Curriculares
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Hospital Moriah – Unidade de Alimentação e Nutrição",
                "Instituto do Câncer do Estado de São Paulo – Saúde Coletiva",
                "Instituto Brasileiro de Controle do Câncer – Nutrição Clínica",
                "Academia Max – Nutrição Esportiva",
                "Hospital Israelita Albert Einstein – Nutrição Hospitalar",
                "Centro de Traumato-Ortopedia do Esporte (CETE) – Nutrição na Medicina Esportiva"
              ].map((item, idx) => (
                <div key={idx} className="bg-secondary rounded-lg p-4 border border-border flex gap-3 items-start">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Atividades Extracurriculares */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Atividades Extracurriculares
            </h2>
            <ul className="space-y-3">
              {[
                "Participação no SARC-DAY, estudo multicêntrico sobre sarcopenia em idosos hospitalizados.",
                "Participação no XXIII Congresso Brasileiro de Geriatria e Gerontologia (2023).",
                "Preceptora de Nutrição em Gerontologia – UNIFESP (2025)."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
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
                  <li>🇺🇸 Inglês — Fluente</li>
                  <li>🇪🇸 Espanhol — Intermediário</li>
                </ul>
              </div>
              <div className="bg-secondary rounded-lg p-5 border border-border">
                <h4 className="font-bold text-foreground mb-2">Softwares</h4>
                <p className="text-sm text-muted-foreground">
                  Tasy, Brand, MV, Dietbox, Dietian, AvaNutri, Webdiet, Pacote Office
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
            Agende sua Consulta com Mariana
          </h2>
          <p className="text-muted-foreground mb-8">
            Atendimento presencial e por telemedicina disponível
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
              href="https://wa.me/5511982010263"
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
