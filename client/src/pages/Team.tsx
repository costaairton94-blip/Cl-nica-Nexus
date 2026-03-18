import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/**
 * Design: Minimalismo Médico Contemporâneo
 * - Apresentação dos profissionais com fotos e mini bios
 * - Links para páginas individuais
 */

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Nossa Equipe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Profissionais com formação de excelência e dedicação ao cuidado integral
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Dr. Airton */}
            <div className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(4)_24d83444.jpeg" 
                  alt="Dr. Airton Pereira da Costa" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-2">
                    Dr. Airton Pereira da Costa
                  </h2>
                  <p className="text-xl text-primary font-semibold">
                    Ortopedista e Traumatologista
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Especialista em Cirurgia do Pé e Tornozelo
                  </p>
                </div>

                <div className="bg-secondary rounded-lg p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Dados Profissionais</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>CRM-SP:</strong> 231.393</li>
                    <li><strong>RQE:</strong> 139.939</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Com formação de excelência e especialização em cirurgia do pé e tornozelo, o Dr. Airton oferece atendimento especializado e humanizado. Sua dedicação à ortopedia e traumatologia reflete em cada consulta.
                </p>

                <Link href="/dr-airton">
                  <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                    Ver Currículo Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mariana */}
            <div className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at19.00.28_a4ffe766.jpeg" 
                  alt="Mariana Carlim D'Amorim" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-2">
                    Mariana Carlim D'Amorim
                  </h2>
                  <p className="text-xl text-primary font-semibold">
                    Nutricionista Clínica
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Especialista em Gerontologia
                  </p>
                </div>

                <div className="bg-secondary rounded-lg p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Dados Profissionais</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>CRN-3:</strong> 65535</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Com formação sólida em nutrição clínica e especialização em gerontologia, Mariana oferece acompanhamento nutricional personalizado. Sua dedicação aos idosos e pacientes com necessidades nutricionais específicas reflete em atendimento de qualidade.
                </p>

                <Link href="/mariana">
                  <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                    Ver Currículo Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-foreground">Excelência</h3>
              <p className="text-muted-foreground text-sm">
                Comprometimento com a qualidade em cada atendimento e procedimento
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-foreground">Humanidade</h3>
              <p className="text-muted-foreground text-sm">
                Atendimento acolhedor que respeita a individualidade de cada paciente
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-foreground">Dedicação</h3>
              <p className="text-muted-foreground text-sm">
                Profissionais comprometidos com sua saúde e bem-estar integral
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Conheça Nossa Equipe Pessoalmente
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Agende uma consulta e experimente o atendimento de excelência da Clínica Nexus Saúde
          </p>
          <a href="/contato" className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-primary px-8 py-6 text-base rounded-md font-medium transition-colors">
            Agendar Consulta
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
