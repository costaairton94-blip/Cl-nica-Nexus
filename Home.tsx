import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Design: Minimalismo Médico Contemporâneo
 * - Hero assimétrico com carrossel dinâmico à direita
 * - Whitespace generoso
 * - Tipografia Poppins (títulos) + Inter (corpo)
 * - Verde menta como cor primária
 */

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(6)_3c43ebb1.jpeg",
      alt: "Entrada da Clínica Nexus Saúde"
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(3)_2d30012a.jpeg",
      alt: "Recepção Interior"
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg",
      alt: "Consultório Moderno"
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg",
      alt: "Consultório 2"
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.25_86e235e1.jpeg",
      alt: "Sala de Espera"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary">
                  TESTE - Bem-vindo à Clínica Nexus Saúde
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Saúde Especializada com Acolhimento
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Atendimento de excelência em ortopedia e nutrição clínica. Profissionais dedicados a transformar sua saúde com expertise e humanidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/contato" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-md font-medium transition-colors">
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a href="/espaco" className="inline-flex items-center justify-center border border-border hover:bg-secondary px-8 py-6 text-base rounded-md font-medium transition-colors">
                  Conhecer Espaço
                </a>
              </div>


            </div>

            {/* Right Image Carousel */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg group">
              {/* Slides */}
              <div className="relative w-full h-full">
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      idx === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide.img}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conheça Nossa Equipe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais com formação de excelência dedicados ao seu bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Dr. Airton */}
            <div className="group">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(4)_24d83444.jpeg" 
                  alt="Dr. Airton Pereira da Costa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">Dr. Airton Pereira da Costa</h3>
                <p className="text-primary font-semibold">Ortopedista e Traumatologista</p>
                <p className="text-sm text-muted-foreground">
                  Especialista em Cirurgia do Pé e Tornozelo | CRM-SP 231.393
                </p>
                <a href="/dr-airton" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm pt-2 cursor-pointer">
                  Ver Currículo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Mariana */}
            <div className="group">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at19.00.28_a4ffe766.jpeg" 
                  alt="Mariana Carlim D'Amorim" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">Mariana Carlim D'Amorim</h3>
                <p className="text-primary font-semibold">Nutricionista Clínica</p>
                <p className="text-sm text-muted-foreground">
                  Especialista em Gerontologia | CRN-3 65535
                </p>
                <a href="/mariana" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm pt-2 cursor-pointer">
                  Ver Currículo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O Que Nossos Pacientes Dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Avaliações e depoimentos de clientes satisfeitos com nosso atendimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Gabriel Santos",
                role: "Paciente",
                text: "Ótimo atendimento, gostei muito da nutricionista Mariana. Muito atenciosa, sempre pensando no melhor e de acordo com as expectativas e preferências do paciente!",
                rating: 5
              },
              {
                name: "Rafaella Viotto",
                role: "Paciente",
                text: "Ótima experiência! A clínica é organizada, pontual e conta com uma equipe muito atenciosa. Atendimento de qualidade desde a recepção até os profissionais de saúde. Recomendo!",
                rating: 5
              },
              {
                name: "Alex Calil",
                role: "Local Guide",
                text: "Clínica maravilhosa! Ótimos profissionais, faço consultas de nutrição e ortopedia lá e tenho um carinho enorme com os profissionais, ambiente muito agradável. Clínica muito confiável!",
                rating: 5
              },
              {
                name: "Vivian Kotait",
                role: "Local Guide",
                text: "Estou aqui pra falar sobre o atendimento da nutricionista Mariana. Exemplar!!! Parabéns!!! Muito bom ser atendida por uma profissional competente, atenciosa e dedicada.",
                rating: 5
              },
              {
                name: "Wania Carlim",
                role: "Paciente",
                text: "Recomendo o ortopedista Dr. Airton Costa. Excelente médico, atencioso e muito detalhista durante a consulta. Melhorei muito da minha lesão no tornozelo. Há meses sofria com muitas dores.",
                rating: 5
              },
              {
                name: "Rafaella Alvarenga",
                role: "Paciente",
                text: "Só tenho elogios à clínica. Mariana profissional de nutrição e Airton de ortopedia são ótimos profissionais! O atendimento é humanizado, os profissionais são extremamente dedicados e o cuidado com o paciente é visível em cada detalhe.",
                rating: 5
              },
              {
                name: "Giulia Amorim",
                role: "Paciente",
                text: "Passei com a nutri e com o ortopedista, ambos resolveram meus problemas, super indico! Atendimento ótimo.",
                rating: 5
              },
              {
                name: "Maria Cecilia",
                role: "Paciente",
                text: "Clínica super completa!! Espaço incrível para coworking, só elogios. Mariana nutricionista profissional excepcional",
                rating: 5
              },
              {
                name: "Chafic Kotait",
                role: "Paciente",
                text: "São extremamente competentes, atendimento espetacular. Recomendo muuuuito",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos atendimento especializado em ortopedia e nutrição clínica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consulta Ortopédica",
                description: "Avaliação e tratamento de problemas musculoesqueléticos com especialista em cirurgia do pé e tornozelo"
              },
              {
                title: "Cirurgias Especializadas",
                description: "Procedimentos cirúrgicos em pé e tornozelo com técnicas modernas e segurança"
              },
              {
                title: "Nutrição Clínica",
                description: "Acompanhamento nutricional personalizado com foco em saúde integral e bem-estar"
              },
              {
                title: "Nutrição Geriátrica",
                description: "Especialização em nutrição para idosos com necessidades específicas"
              },
              {
                title: "Avaliação Física",
                description: "Avaliação completa do estado físico e funcional do paciente"
              },
              {
                title: "Plano Nutricional",
                description: "Desenvolvimento de plano alimentar personalizado conforme necessidade individual"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-secondary rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto para Cuidar da Sua Saúde?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Entre em contato agora e agende sua consulta com nossos especialistas
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
