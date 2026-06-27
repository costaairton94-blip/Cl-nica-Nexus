import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "",
    planType: "hora",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      specialty: "",
      planType: "hora",
      message: ""
    });
  };

  return (
    <>
      <SEOHead
        title="Contato e Agendamento de Visita | Nexus Espaço Saúde — Coworking"
        description="Entre em contato com a Nexus Espaço Saúde. Agende uma visita ao coworking médico na Vila Clementino, São Paulo. WhatsApp: (11) 93296-2026."
        canonical="https://nexusespacosaude.com.br/contato"
      />
      <div className="min-h-screen">

        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-secondary">
          <div className="container space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Agende uma visita ao nosso espaço ou tire suas dúvidas sobre os planos de coworking
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-secondary rounded-lg p-8 border border-border text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Telefone / WhatsApp</h3>
                <a href="https://wa.me/5511932962026" className="text-primary hover:text-primary/80 font-semibold text-sm">
                  (11) 93296-2026
                </a>
              </div>

              <div className="bg-secondary rounded-lg p-8 border border-border text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">E-mail</h3>
                <a href="mailto:costadamorim@gmail.com" className="text-primary hover:text-primary/80 font-semibold text-sm">
                  costadamorim@gmail.com
                </a>
              </div>

              <div className="bg-secondary rounded-lg p-8 border border-border text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Localização</h3>
                <p className="text-muted-foreground text-sm">Vila Clementino<br />São Paulo, SP</p>
              </div>

              <div className="bg-secondary rounded-lg p-8 border border-border text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Disponibilidade</h3>
                <p className="text-muted-foreground text-sm">Seg-Sex: 08:00–19:00<br />Sáb: 09:00–13:00</p>
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
                  <p className="text-muted-foreground">Preencha o formulário e entraremos em contato em breve</p>
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
                      Telefone / WhatsApp *
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
                      Especialidade / Profissão
                    </label>
                    <input
                      type="text"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ex.: Médico, Psicólogo, Nutricionista..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Plano de Interesse
                    </label>
                    <select
                      name="planType"
                      value={formData.planType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="hora">Por Hora</option>
                      <option value="periodo">Por Período</option>
                      <option value="mensal">Mensal</option>
                      <option value="duvida">Tenho dúvidas / Quero saber mais</option>
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
                      placeholder="Conte-nos sobre sua necessidade ou dúvida..."
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
                    href="https://wa.me/5511932962026?text=Olá! Gostaria de saber mais sobre o coworking da Nexus."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <div className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-base rounded-lg font-semibold cursor-pointer transition-colors inline-block">
                      Abrir WhatsApp — (11) 93296-2026
                    </div>
                  </a>
                </div>

                {/* Location Address */}
                <div className="bg-white rounded-lg p-6 border border-border space-y-3">
                  <h3 className="font-bold text-foreground text-lg">Nossa Localização</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Rua Onze de Junho, 1070</p>
                    <p>Consultório 209 — Vila Clementino</p>
                    <p>São Paulo, SP</p>
                  </div>
                </div>

                {/* Map */}
                <div className="relative h-80 rounded-lg overflow-hidden border border-border">
                  <iframe
                    title="Localização Nexus Espaço Saúde"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8!2d-46.643!3d-23.599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0x1!2sRua+Onze+de+Junho%2C+1070+-+Vila+Clementino%2C+S%C3%A3o+Paulo!5e0!3m2!1spt-BR!2sbr!4v1"
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
                      <span>Segunda a Sexta:</span>
                      <span className="font-semibold">08:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span className="font-semibold">09:00 – 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="font-semibold">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32">
          <div className="container max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Como agendar uma visita ao espaço?</h3>
                <p className="text-muted-foreground text-sm">
                  Você pode agendar pelo formulário acima, pelo WhatsApp (11) 93296-2026 ou ligando diretamente. Responderemos em breve para confirmar o horário.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Quais itens estão inclusos no aluguel?</h3>
                <p className="text-muted-foreground text-sm">
                  Todos os planos incluem consultório mobiliado com carinho, recepção acolhedora, internet estável e limpeza. Sem custos extras ou surpresas.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Preciso assinar contrato de longo prazo?</h3>
                <p className="text-muted-foreground text-sm">
                  Não. Oferecemos planos por hora, por período e mensais. Você escolhe o modelo que melhor se adapta à sua rotina, sem fidelidade obrigatória.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">O espaço é acessível para pacientes com mobilidade reduzida?</h3>
                <p className="text-muted-foreground text-sm">
                  Sim. O prédio conta com elevador e acesso adaptado para garantir conforto a todos os pacientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-primary text-white">
          <div className="container text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para Agendar sua Visita?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Conheça pessoalmente o espaço da Nexus e sinta o clima acolhedor que preparamos para você e seus pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/5511932962026?text=Olá! Gostaria de agendar uma visita ao espaço da Nexus."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-bold">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
