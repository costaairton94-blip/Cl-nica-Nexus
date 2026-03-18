import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design: Minimalismo Médico Contemporâneo
 * - Foto profissional em destaque
 * - Currículo estruturado
 * - CTAs para agendamento
 */

export default function Mariana() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at19.00.28_a4ffe766.jpeg" 
                alt="Mariana Carlim D'Amorim" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                  Mariana Carlim D'Amorim
                </h1>
                <p className="text-2xl text-primary font-semibold mb-2">
                  Nutricionista Clínica
                </p>
                <p className="text-lg text-muted-foreground">
                  Especialista em Gerontologia
                </p>
              </div>

              {/* Professional Data */}
              <div className="bg-white rounded-lg p-6 border border-border space-y-4">
                <h3 className="font-bold text-foreground text-lg">Dados Profissionais</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">CRN-3</p>
                    <p className="font-bold text-foreground">65535</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Link href="/contato">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6">
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="https://wa.me/5511932962026" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6">
                    Falar no WhatsApp
                  </Button>
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
              Mariana Carlim D'Amorim é nutricionista clínica com especialização em gerontologia. Dedicada ao atendimento personalizado e integral, oferece acompanhamento nutricional de qualidade, com foco especial em saúde do idoso e bem-estar geral.
            </p>
          </div>

          {/* Formation */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Formação Acadêmica</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-bold text-foreground">Graduação em Nutrição</h3>
                <p className="text-muted-foreground text-sm">[Inserir instituição]</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-bold text-foreground">Especialização em Gerontologia</h3>
                <p className="text-muted-foreground text-sm">Especialista em nutrição para idosos e saúde integral</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-bold text-foreground">Residência em Nutrição Clínica</h3>
                <p className="text-muted-foreground text-sm">Experiência em atendimento ambulatorial e clínico</p>
              </div>
            </div>
          </div>

          {/* Specialization */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Especialização</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Nutrição Clínica</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Gerontologia</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Nutrição para Idosos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Atendimento Ambulatorial</span>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Experiência Clínica</h2>
            <p className="text-muted-foreground leading-relaxed">
              Com formação sólida em nutrição clínica e especialização em gerontologia, Mariana oferece acompanhamento nutricional personalizado e integral. Sua experiência com idosos e pacientes em diferentes condições clínicas reflete em atendimento de qualidade e resultados significativos.
            </p>
          </div>

          {/* Areas of Practice */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Áreas de Atuação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Nutrição Clínica",
                "Gerontologia",
                "Nutrição para Idosos",
                "Atendimento Ambulatorial",
                "Acompanhamento Nutricional",
                "Orientações Personalizadas"
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
                  <h4 className="font-semibold text-foreground">Especialização em Gerontologia</h4>
                  <p className="text-sm text-muted-foreground">Expertise em nutrição para idosos e saúde integral</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground">Atendimento Personalizado</h4>
                  <p className="text-sm text-muted-foreground">Acompanhamento individualizado e adaptado às necessidades</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground">Visão Integral de Saúde</h4>
                  <p className="text-sm text-muted-foreground">Nutrição como ferramenta de bem-estar e qualidade de vida</p>
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
            <a href="/contato" className="block w-full bg-primary hover:bg-primary/90 text-white py-6 px-4 rounded-md font-medium text-center transition-colors">
              Agendar Consulta
            </a>
            <a href="https://wa.me/5511932962026" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white py-6 px-4 rounded-md font-medium text-center transition-colors">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
