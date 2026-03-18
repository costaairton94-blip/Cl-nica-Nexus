import { Link } from "wouter";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design: Minimalismo Médico Contemporâneo
 * - Galeria de fotos grande e elegante
 * - Texto institucional sobre estrutura
 * - Destaques visuais em layout sofisticado
 */

export default function Space() {
  const galleryItems = [
    {
      title: "Recepção Interior",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(3)_2d30012a.jpeg"
    },
    {
      title: "Consultório 1",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(1)_21ee0bb7.jpeg"
    },
    {
      title: "Consultório 2",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(2)_519093bd.jpeg"
    },
    {
      title: "Sala de Espera",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.25_86e235e1.jpeg"
    },
    {
      title: "Recepção do Consultório",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24_c9760ae6.jpeg"
    },
    {
      title: "Entrada Consultório",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(6)_3c43ebb1.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Conheça Nosso Espaço
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ambiente moderno, acolhedor e estruturado para oferecer a melhor experiência em saúde
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="container">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.23_37e94606.jpeg" 
              alt="Fachada da Clínica Nexus Saúde" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Space */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Estrutura Premium para Sua Saúde
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Localizada na Vila Clementino, em São Paulo, nossa clínica oferece consultórios modernos, equipados e preparados para atendimento de excelência. Cada detalhe foi pensado para proporcionar conforto e segurança aos nossos pacientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com ambiente acolhedor, tecnologia de ponta e profissionais dedicados, criamos um espaço onde a saúde é tratada com a seriedade e humanidade que merece.
              </p>
              <Link href="/contato">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                  Agendar Visita
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.31.24(5)_1cd4ab55.jpeg" 
                alt="Recepção do Prédio" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Galeria do Espaço
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-end">
                  <p className="font-semibold text-white p-4">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Destaques da Clínica
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-foreground">Consultórios Modernos</h3>
              <p className="text-muted-foreground text-sm">
                Equipados com tecnologia de ponta para diagnóstico e tratamento de qualidade
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-foreground">Ambiente Acolhedor</h3>
              <p className="text-muted-foreground text-sm">
                Design pensado para conforto e bem-estar dos pacientes
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-foreground">Localização Privilegiada</h3>
              <p className="text-muted-foreground text-sm">
                Vila Clementino, São Paulo - fácil acesso e estacionamento
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-foreground">Profissionais Dedicados</h3>
              <p className="text-muted-foreground text-sm">
                Equipe especializada comprometida com sua saúde
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Localização</h3>
              <p className="text-muted-foreground text-sm">
                Vila Clementino<br />
                São Paulo, SP
              </p>
            </div>

            <div className="space-y-4">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Horários</h3>
              <p className="text-muted-foreground text-sm">
                [Inserir horário de atendimento]
              </p>
            </div>

            <div className="space-y-4">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Equipe</h3>
              <p className="text-muted-foreground text-sm">
                Especialistas dedicados à sua saúde
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Agende uma Visita
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Conheça pessoalmente nosso espaço e experimente o atendimento de excelência
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
