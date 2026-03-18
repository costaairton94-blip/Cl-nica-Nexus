import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/**
 * Design: Minimalismo Médico Contemporâneo
 * - Cards elegantes para serviços
 * - Estrutura editável
 * - CTAs claros
 */

export default function Services() {
  const services = [
    {
      icon: "🏥",
      title: "Consulta Médica Especializada",
      description: "Atendimento em ortopedia e traumatologia com expertise e dedicação. Diagnóstico preciso e plano de tratamento personalizado."
    },
    {
      icon: "🥗",
      title: "Consulta Nutricional",
      description: "Acompanhamento nutricional personalizado e integral. Orientações adaptadas às suas necessidades e objetivos de saúde."
    },
    {
      icon: "📋",
      title: "Acompanhamento Clínico",
      description: "Seguimento contínuo e monitoramento de sua evolução. Ajustes no plano de tratamento conforme necessário."
    },
    {
      icon: "🔍",
      title: "Avaliação Individualizada",
      description: "Avaliação completa e detalhada de sua condição de saúde. Análise profunda para melhor compreensão do quadro clínico."
    },
    {
      icon: "🔄",
      title: "Retornos e Seguimento",
      description: "Acompanhamento de retorno para verificar evolução e resultados. Continuidade do cuidado e suporte profissional."
    },
    {
      icon: "💡",
      title: "Orientações Personalizadas",
      description: "Orientações claras e personalizadas para sua saúde. Educação em saúde e prevenção de complicações."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Nossos Serviços
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Oferecemos atendimento especializado e personalizado para sua saúde integral
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow space-y-4 group"
              >
                <div className="text-5xl group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <Link href="/contato">
                  <a className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm pt-2">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Sobre Nossos Atendimentos
          </h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Consulta Médica Especializada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecemos atendimento em ortopedia e traumatologia com foco em cirurgia do pé e tornozelo. Cada consulta inclui avaliação completa, diagnóstico preciso e plano de tratamento personalizado.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Consulta Nutricional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acompanhamento nutricional personalizado com foco em saúde integral. Especialmente para idosos e pacientes com necessidades nutricionais específicas, oferecemos orientações claras e adaptadas.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Acompanhamento Clínico Contínuo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seguimento contínuo para monitorar sua evolução e ajustar o plano de tratamento conforme necessário. Estamos comprometidos com sua saúde a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Por Que Escolher a Nexus Saúde
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-foreground">Profissionais Experientes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Equipe com formação de excelência e experiência clínica sólida
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-foreground">Atendimento Humanizado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Escuta atenta e cuidado integral com cada paciente
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-foreground">Ambiente Acolhedor</h3>
              <p className="text-muted-foreground leading-relaxed">
                Espaço moderno e confortável para sua tranquilidade
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-foreground">Localização Privilegiada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vila Clementino, São Paulo - fácil acesso
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-foreground">Atendimento Integral</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ortopedia e nutrição em um único espaço
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-foreground">Compromisso com Qualidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicação contínua à excelência e inovação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Comece Seu Acompanhamento Hoje
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Agende sua consulta e experimente atendimento de excelência
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
