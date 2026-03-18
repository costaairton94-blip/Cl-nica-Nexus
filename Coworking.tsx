import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design: Minimalismo Médico Contemporâneo - Versão Comercial
 * - Foco em conversão e apresentação premium do espaço
 * - Cards elegantes para planos
 * - Galeria visual destacada
 * - CTAs estratégicos distribuídos
 */

export default function Coworking() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quais profissionais podem alugar as salas?",
      answer: "Profissionais da saúde como médicos, nutricionistas, psicólogos, fonoaudiólogos, fisioterapeutas, terapeutas ocupacionais e outros especialistas da área da saúde."
    },
    {
      question: "O espaço já está pronto para atendimento?",
      answer: "Sim! Todas as salas são mobiliadas, equipadas e preparadas para atendimento imediato. Você chega e começa a atender sem necessidade de adaptações."
    },
    {
      question: "Posso alugar por hora?",
      answer: "Sim! Oferecemos plano avulso com aluguel por hora, ideal para quem está começando ou precisa de flexibilidade."
    },
    {
      question: "Existem planos para uso recorrente?",
      answer: "Sim! Temos dois planos recorrentes com valores diferenciados: intermediário (R$ 75/h) e preferencial (R$ 65/h) para profissionais com agenda frequente."
    },
    {
      question: "Posso agendar uma visita antes de fechar?",
      answer: "Claro! Recomendamos conhecer o espaço pessoalmente. Entre em contato conosco via WhatsApp ou formulário para agendar sua visita."
    },
    {
      question: "Como funciona a reserva?",
      answer: "Você pode agendar seus horários conforme sua necessidade. Entre em contato para conhecer as condições de reserva e disponibilidade."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary">
                Nexus Coworking em Saúde
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Salas Prontas para Atendimento em um Espaço Premium
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Estrutura completa, ambiente acolhedor e planos flexíveis para profissionais que desejam atender com excelência
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contato">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base">
                  Agendar Visita
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/5511932962026?text=Olá! Gostaria de conhecer mais sobre o aluguel de salas na Nexus Coworking." target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-8 py-6 text-base">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      </section>

      {/* Space Presentation */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Espaço Pensado para Você
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Clínica Nexus Coworking foi pensada para profissionais da saúde que desejam unir praticidade, sofisticação e credibilidade em um só lugar.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Oferecemos salas preparadas para atendimento, em um ambiente elegante, acolhedor e funcional, ideal para proporcionar uma excelente experiência tanto ao profissional quanto ao paciente.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Localização Premium</p>
                    <p className="text-sm text-muted-foreground">Edifício de alto padrão com fácil acesso</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Estrutura Completa</p>
                    <p className="text-sm text-muted-foreground">Salas mobiliadas e prontas para uso imediato</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ambiente Profissional</p>
                    <p className="text-sm text-muted-foreground">Recepção elegante e ambientação sofisticada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(6)_3c43ebb1.jpeg" 
                alt="Entrada da Clínica Nexus Coworking" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Diferenciais Nexus Coworking
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para atender com excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Salas Mobiliadas",
                description: "Todas as salas possuem móveis e equipamentos profissionais prontos para uso"
              },
              {
                title: "Ambiente Moderno",
                description: "Ambientação sofisticada que transmite profissionalismo e confiança"
              },
              {
                title: "Recepção Profissional",
                description: "Estrutura de recepção elegante para receber seus pacientes"
              },
              {
                title: "Flexibilidade de Horários",
                description: "Agende conforme sua necessidade, sem compromissos rígidos"
              },
              {
                title: "Múltiplas Especialidades",
                description: "Ideal para médicos, nutricionistas, psicólogos e outros profissionais"
              },
              {
                title: "Locação Avulsa ou Recorrente",
                description: "Escolha entre uso eventual ou planos recorrentes com desconto"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conheça Nosso Espaço
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fotos reais do ambiente, consultórios e ambientação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.23_86e235e1.jpeg",
                alt: "Fachada do Prédio"
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(5)_2d30012a.jpeg",
                alt: "Recepção Interior"
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(3)_519093bd.jpeg",
                alt: "Consultório Moderno"
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
                alt: "Consultório 2"
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
                alt: "Consultório 3"
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.25_86e235e1.jpeg",
                alt: "Sala de Espera"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Valores */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Planos e Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano que melhor se adequa ao seu atendimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Uso Eventual",
                price: "R$ 85",
                period: "/hora",
                description: "Ideal para quem está começando ou precisa de flexibilidade",
                features: [
                  "Locação por hora",
                  "Sem compromisso de frequência",
                  "Salas prontas para uso",
                  "Ambiente profissional"
                ],
                highlight: false
              },
              {
                title: "Uso Recorrente",
                price: "R$ 75",
                period: "/hora",
                description: "Melhor custo-benefício para quem atende com frequência moderada",
                features: [
                  "Locação recorrente",
                  "Desconto de 12%",
                  "Salas prontas para uso",
                  "Ambiente profissional",
                  "Agenda preferencial"
                ],
                highlight: true
              },
              {
                title: "Parceria Preferencial",
                price: "R$ 65",
                period: "/hora",
                description: "Condição especial para profissionais com agenda recorrente",
                features: [
                  "Locação recorrente",
                  "Desconto de 24%",
                  "Salas prontas para uso",
                  "Ambiente profissional",
                  "Agenda prioritária",
                  "Condições personalizadas"
                ],
                highlight: false
              }
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-lg p-8 border transition-all ${
                  plan.highlight 
                    ? "bg-primary text-white border-primary shadow-lg scale-105" 
                    : "bg-background border-border hover:shadow-lg"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-foreground"}`}>
                  {plan.title}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlight ? "text-white/80" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-white/90" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-primary"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={plan.highlight ? "w-full bg-white text-primary hover:bg-white/90" : "w-full"}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  Solicitar Informações
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            Planos sujeitos à disponibilidade e formato de parceria. Consulte conosco para conhecer as condições personalizadas.
          </p>
        </div>
      </section>

      {/* Oferta Atrativa */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Atenda em um Espaço que Valoriza Sua Imagem Profissional
          </h2>
          
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Tenha a estrutura de um espaço premium sem os custos e a complexidade de manter um consultório próprio. Na Nexus Coworking, você encontra praticidade, elegância e flexibilidade para focar no que realmente importa: o cuidado com seus pacientes.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-lg p-8 max-w-2xl mx-auto border border-white/20">
            <p className="text-lg font-semibold mb-4">
              ✨ Oferta Especial
            </p>
            <p className="text-base opacity-90">
              Converse conosco para conhecer as condições especiais para parceiros recorrentes e possibilidades de valores diferenciados conforme volume.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://wa.me/5511932962026?text=Olá! Gostaria de conhecer as condições especiais para parceiros recorrentes." target="_blank" rel="noopener noreferrer">
              <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-base">
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link href="/contato">
              <Button className="bg-white/20 hover:bg-white/30 text-white px-8 py-6 text-base border border-white/30">
                Solicitar Informações
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Esclareça suas dúvidas sobre o aluguel de salas
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Vamos Encontrar o Plano Ideal para Seu Atendimento
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e conheça todas as possibilidades. Estamos prontos para recebê-lo!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contato">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base">
                Agendar Visita
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/5511932962026?text=Olá! Gostaria de agendar uma visita ao espaço de coworking." target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="px-8 py-6 text-base">
                Falar no WhatsApp
              </Button>
            </a>
            <Link href="/contato">
              <Button variant="outline" className="px-8 py-6 text-base">
                Solicitar Informações
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
