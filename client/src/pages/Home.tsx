import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/o7re9pwUy5yEm9Cf6vPWLJ/WhatsAppImage2026-03-15at18.31.23_d192afda.jpeg",
    alt: "Entrada da Clínica Nexus Saúde"
  },
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/o7re9pwUy5yEm9Cf6vPWLJ/WhatsAppImage2026-03-15at18.31.24(1 )_e7c88a84.jpeg",
    alt: "Recepção Interior"
  },
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/o7re9pwUy5yEm9Cf6vPWLJ/WhatsAppImage2026-03-15at18.31.24(2 )_325b6d54.jpeg",
    alt: "Consultório Moderno"
  },
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/o7re9pwUy5yEm9Cf6vPWLJ/WhatsAppImage2026-03-15at18.31.24(5 )_0a011d81.jpeg",
    alt: "Consultório 2"
  },
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/o7re9pwUy5yEm9Cf6vPWLJ/WhatsAppImage2026-03-15at18.31.24(6 )_a3ab4cfc.jpeg",
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
                  Bem-vindo à Clínica Nexus Saúde
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/o7re9pwUy5yEm9Cf6vPWLJ/dr_airton_a1f9b392.jpg" 
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/o7re9pwUy5yEm9Cf6vPWLJ/WhatsAppImage2026-03-15at19.00.28_a4ffe766.jpeg" 
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
                text: "Estou aqui pra falar sobre o atendimento da nutricionista Mariana. Exemplar!!! Parabéns!!! Muito bom ser atendida por uma profissional competente, atenciosa e dedicada. Indicarei pra outras pessoas...",
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
                text: "Só tenho elogios à clínica. Mariana profissional de nutrição e Airton de ortopedia são ótimos profissionais! O atendimento é humanizado, os profissionais são extremamente dedicados e o cuidado com o paciente é visível em cada detalhe. Me senti acolhida e confiante com o tratamento proposto. Indico de olhos fechados!",
                rating: 5
              },
              {
                name: "Giulia Amorim",
                role: "Paciente",
                text: "Experiência incrível! Fui muito bem atendida, desde a recepção até o consultório. Dr. Airton é um profissional exemplar, muito atencioso e competente. Voltarei com certeza!",
                rating: 5
              },
              {
                name: "Maria Cecilia",
                role: "Paciente",
                text: "Adorei! Ambiente acolhedor, equipe atenciosa e profissionais de primeira qualidade. Recomendo para todos que buscam um atendimento humanizado e de excelência.",
                rating: 5
              },
              {
                name: "Chafic Kotait",
                role: "Paciente",
                text: "Excelente atendimento! Dr. Airton é muito competente e atencioso. Senti-me bem cuidado e confiante com o tratamento. Clínica muito profissional!",
                rating: 5
              }
            ].map((testimonial, idx ) => (
              <div key={idx} className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-primary">{testimonial.role}</p>
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
              Oferecemos uma gama completa de serviços de saúde especializados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Ortopedia Especializada",
                desc: "Tratamento completo de problemas ortopédicos com foco em cirurgia do pé e tornozelo"
              },
              {
                title: "Nutrição Clínica",
                desc: "Acompanhamento nutricional personalizado para otimizar sua saúde e bem-estar"
              },
              {
                title: "Avaliação Completa",
                desc: "Diagnóstico preciso com tecnologia de ponta e análise detalhada do seu caso"
              },
              {
                title: "Acompanhamento Contínuo",
                desc: "Suporte integral durante todo o processo de tratamento e recuperação"
              }
            ].map((service, idx) => (
              <div key={idx} className="group p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg group-hover:shadow-primary/10">
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
