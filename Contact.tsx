import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

/**
 * Design: Minimalismo Médico Contemporâneo
 * - Formulário de contato funcional
 * - Informações de contato claras
 * - CTAs para WhatsApp e agendamento
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    professional: "dr-airton",
    serviceType: "consulta",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Show success message
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      professional: "dr-airton",
      serviceType: "consulta",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Estamos aqui para responder suas dúvidas e agendar sua consulta
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-secondary rounded-lg p-8 border border-border text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Telefone</h3>
              <a href="https://wa.me/5511932962026" className="text-primary hover:text-primary/80 font-semibold text-sm">(11) 93296-2026</a>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">E-mail</h3>
              <a href="mailto:costadamorim@gmail.com" className="text-primary hover:text-primary/80 font-semibold text-sm">costadamorim@gmail.com</a>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Localização</h3>
              <p className="text-muted-foreground text-sm">Vila Clementino<br />São Paulo, SP</p>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Horários</h3>
              <p className="text-muted-foreground text-sm">Seg-Sex: 08:00-19:00<br />Sáb: 09:00-13:00<br />Dom: Fechado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Formulário de Contato</h2>
                <p className="text-muted-foreground">Preencha o formulário abaixo e entraremos em contato em breve</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Profissional Desejado
                  </label>
                  <select
                    name="professional"
                    value={formData.professional}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="dr-airton">Dr. Airton Pereira da Costa</option>
                    <option value="mariana">Mariana Carlim D'Amorim</option>
                    <option value="qualquer">Qualquer um</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Tipo de Atendimento
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="consulta">Consulta Especializada</option>
                    <option value="retorno">Retorno</option>
                    <option value="acompanhamento">Acompanhamento</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Conte-nos sobre sua situação..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* WhatsApp & Map */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Fale Conosco no WhatsApp</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Prefere conversar pelo WhatsApp? Clique no botão abaixo e envie uma mensagem. Responderemos em breve!
                </p>
                <a
                  href="https://wa.me/5511932962026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-base rounded-lg font-semibold cursor-pointer transition-colors inline-block">
                    Abrir WhatsApp
                  </div>
                </a>
              </div>

              {/* Location Address */}
              <div className="bg-white rounded-lg p-6 border border-border space-y-3">
                <h3 className="font-bold text-foreground text-lg">Nossa Localização</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Rua Onze de Junho, 1070</p>
                  <p>Consultório 209</p>
                  <p>São Paulo, SP</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-80 rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890!2d-46.6234567!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8d5c5c5c5%3A0x1234567890abcdef!2sClínica%20Nexus%20Saúde!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg p-6 border border-border space-y-4">
                <h3 className="font-bold text-foreground text-lg">Horários de Funcionamento</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda-feira:</span>
                    <span className="font-semibold">08:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Terça-feira:</span>
                    <span className="font-semibold">08:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quarta-feira:</span>
                    <span className="font-semibold">08:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quinta-feira:</span>
                    <span className="font-semibold">08:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sexta-feira:</span>
                    <span className="font-semibold">08:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-semibold">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-semibold">Fechado</span>
                  </div>
                  <p className="text-xs text-muted-foreground/70 pt-4 border-t border-border">
                    No momento não aceitamos convênios. Atendimento particular.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">Como agendar uma consulta?</h3>
              <p className="text-muted-foreground text-sm">
                Você pode agendar através do formulário de contato, WhatsApp ou ligando diretamente. Responderemos em breve com as opções de horário disponíveis.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">Qual é o tempo de espera para uma consulta?</h3>
              <p className="text-muted-foreground text-sm">
                Procuramos oferecer agendamentos com a maior brevidade possível. O tempo de espera varia conforme a disponibilidade do profissional.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">Vocês aceitam convênios?</h3>
              <p className="text-muted-foreground text-sm">
                No momento, a Clínica Nexus Saúde oferece atendimento particular. Aceitamos pagamento direto. Entre em contato para conhecer nossas opções de pagamento.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">É possível fazer consulta online?</h3>
              <p className="text-muted-foreground text-sm">
                [Inserir informação sobre consultas online, se disponível]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto para Agendar?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Entre em contato agora mesmo e comece sua jornada rumo ao bem-estar integral
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://wa.me/5511932962026" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-base">
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
