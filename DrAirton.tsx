import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Phone, Mail } from "lucide-react";

/**
 * Design: Minimalismo Médico Contemporâneo
 * - Foto profissional em destaque
 * - Currículo estruturado
 * - CTAs para agendamento
 */

export default function DrAirton() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(4)_24d83444.jpeg" 
                alt="Dr. Airton Pereira da Costa" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                  Dr. Airton Pereira da Costa
                </h1>
                <p className="text-2xl text-primary font-semibold mb-2">
                  Ortopedista e Traumatologista
                </p>
                <p className="text-lg text-muted-foreground">
                  Especialista em Cirurgia do Pé e Tornozelo
                </p>
              </div>

              {/* Professional Data */}
              <div className="bg-white rounded-lg p-6 border border-border space-y-4">
                <h3 className="font-bold text-foreground text-lg">Dados Profissionais</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">CRM-SP</p>
                    <p className="font-bold text-foreground">231.393</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">RQE</p>
                    <p className="font-bold text-foreground">139.939</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <a href="/contato" className="block w-full bg-primary hover:bg-primary/90 text-white py-6 px-4 rounded-md font-medium text-center transition-colors">
                  Agendar Consulta
                </a>
                <a href="https://wa.me/5511932962026" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white py-6 px-4 rounded-md font-medium text-center transition-colors">
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          {/* Presentation */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Apresentação</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Airton Pereira da Costa é médico Ortopedista e Traumatologista, com atuação dedicada às doenças e lesões do pé e tornozelo. Graduado em Medicina pela Uniderp/Santa Casa de Campo Grande, realizou Residência Médica em Ortopedia e Traumatologia pela Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-UNIFESP) e é especialista em Pé e Tornozelo pela Escola Paulista de Medicina/UNIFESP. Sua formação é complementada por participação ativa em cursos, congressos e atividades científicas na área ortopédica, com foco em oferecer um atendimento técnico, individualizado, seguro e humanizado.
            </p>
          </div>

          {/* Formation */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Formação Acadêmica</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-bold text-foreground">Graduação em Medicina</h3>
                <p className="text-muted-foreground text-sm">Uniderp/Santa Casa de Campo Grande</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-bold text-foreground">Residência Médica em Ortopedia e Traumatologia</h3>
                <p className="text-muted-foreground text-sm">Escola Paulista de Medicina da Universidade Federal de São Paulo (EPM-UNIFESP)</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-bold text-foreground">Especialização em Pé e Tornozelo</h3>
                <p className="text-muted-foreground text-sm">Escola Paulista de Medicina/UNIFESP</p>
              </div>
            </div>
          </div>

          {/* Specialization */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Especialização</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Ortopedia e Traumatologia</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Especialista em Pé e Tornozelo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Doenças e lesões do pé e tornozelo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Participação ativa em cursos e congressos científicos</span>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Formação Complementar</h2>
            <p className="text-muted-foreground leading-relaxed">
              Participação ativa em cursos, congressos e atividades científicas na área ortopédica. O Dr. Airton mantém-se constantemente atualizado com as mais recentes técnicas e avanços na especialidade, garantindo atendimento de excelência aos seus pacientes.
            </p>
          </div>

          {/* Areas of Practice */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Áreas de Atuação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Ortopedia Geral",
                "Traumatologia",
                "Cirurgia do Pé",
                "Cirurgia do Tornozelo",
                "Atendimento de Traumas",
                "Avaliação Especializada"
              ].map((area, idx) => (
                <div key={idx} className="bg-secondary rounded-lg p-4 border border-border">
                  <p className="font-semibold text-foreground">{area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Differentials */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Diferenciais do Atendimento</h2>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground">Atendimento Técnico e Seguro</h4>
                  <p className="text-sm text-muted-foreground">Aplicação de técnicas modernas com rigor científico</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground">Atendimento Individualizado</h4>
                  <p className="text-sm text-muted-foreground">Abordagem personalizada para cada paciente</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground">Atendimento Humanizado</h4>
                  <p className="text-sm text-muted-foreground">Escuta atenta e cuidado integral com o paciente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/contato">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6">
                Agendar Consulta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/5511932962026" target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-lg font-semibold cursor-pointer transition-colors text-center">
                Falar no WhatsApp
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
