import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary">
                  Bem-vindo à Nexus Espaço Saúde
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Saúde Especializada com Acolhimento
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
                Atendimento de excelência em ortopedia e nutrição clínica. Profissionais dedicados a transformar sua saúde com expertise e humanidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-4 text-base rounded-md font-medium transition-colors w-full sm:w-auto"
                >
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="/espaco"
                  className="inline-flex items-center justify-center border border-border hover:bg-secondary px-6 py-4 text-base rounded-md font-medium transition-colors w-full sm:w-auto"
                >
                  Conhecer Espaço
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex gap-6 pt-6 border-t border-border justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <div className="font-bold text-2xl text-foreground">2+</div>
                  <p className="text-sm text-muted-foreground">Especialistas</p>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-bold text-2xl text-foreground">❤️</div>
                  <p className="text-sm text-muted-foreground">Atendimento Humanizado</p>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-bold text-2xl text-foreground">100%</div>
                  <p className="text-sm text-muted-foreground">Dedicação</p>
                </div>
              </div>
            </div>

            {/* Right Image Carousel */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg group">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? "bg-white w-8" : "w-2 bg-white/50 hover:bg-white/75"
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
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Conheça Nossa Equipe
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais com formação de excelência dedicados ao seu bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {/* Dr. Airton */}
            <div className="group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-5 shadow-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(4)_24d83444.jpeg"
                  alt="Dr. Airton Pereira da Costa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Dr. Airton Pereira da Costa</h3>
                <p className="text-primary font-semibold">Ortopedista e Traumatologista</p>
                <p className="text-sm text-muted-foreground">
                  Especialista em Cirurgia do Pé e Tornozelo | CRM-SP 231.393
                </p>
                <a href="/dr-airton" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm pt-1">
                  Ver Currículo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Mariana */}
            <div className="group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-5 shadow-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at19.00.28_a4ffe766.jpeg"
                  alt="Mariana Carlim D'Amorim"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Mariana Carlim D'Amorim</h3>
                <p className="text-primary font-semibold">Nutricionista Clínica</p>
                <p className="text-sm text-muted-foreground">
                  Especialista em Gerontologia | CRN-3 65535
                </p>
                <a href="/mariana" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm pt-1">
                  Ver Currículo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              O Que Nossos Pacientes Dizem
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Avaliações e depoimentos de clientes satisfeitos com nosso atendimento
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Mariana & Airton",
                role: "Paciente",
                text: "Mariana profissional de nutrição e Airton de ortopedia, excelentes profissionais. Muito atencioso, cuidado com o paciente.",
                rating: 5
              },
              {
                name: "Ítalo Santos",
                role: "Paciente",
                text: "Ótimo atendimento. Gostei muito da nutricionista Mariana. Muito atencioso e de acordo com as preferências do paciente.",
                rating: 5
              },
              {
                name: "Rafael Motta",
                role: "Paciente",
                text: "Ótima clínica e organizada, pontual e conta com uma equipe muito atenciosa. Recomendo!",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-secondary rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
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
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos atendimento especializado em ortopedia e nutrição clínica
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Consulta Ortopédica",
                desc: "Avaliação e tratamento de problemas musculoesqueléticos com especialista em cirurgia do pé e tornozelo"
              },
              {
                title: "Cirurgias Especializadas",
                desc: "Procedimentos cirúrgicos em pé e tornozelo com técnicas modernas e segurança"
              },
              {
                title: "Nutrição Clínica",
                desc: "Acompanhamento nutricional personalizado com foco em saúde integral e bem-estar"
              },
              {
                title: "Nutrição Geriátrica",
                desc: "Especialização em nutrição para idosos com necessidades específicas"
              },
              {
                title: "Avaliação Física",
                desc: "Avaliação completa do estado físico e funcional do paciente"
              },
              {
                title: "Plano Nutricional",
                desc: "Desenvolvimento de plano alimentar personalizado conforme necessidade individual"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-background rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para Cuidar da Sua Saúde?
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e agende sua consulta com nossos especialistas
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-md font-semibold transition-colors text-base"
          >
            Agendar Consulta
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
