import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/espaco", label: "O Espaço" },
    { href: "/equipe", label: "Equipe" },
    { href: "/servicos", label: "Serviços" },
    { href: "/coworking", label: "Coworking" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.32.03_c74ce314.jpeg" 
              alt="Nexus Saúde Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="/contato" className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium transition-colors">
              Agendar Consulta
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block py-2 text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <a href="/contato" className="block w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md font-medium text-center transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Agendar Consulta
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511932962026"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40"
        title="Abrir WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.176l-.013 1.39 1.327 1.327c.086-1.165.664-2.256 1.482-3.023l1.99-1.87zm0 0"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border mt-20">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441484870/6aKp98sGzwMcbVPqZn5kmm/WhatsAppImage2026-03-15at18.32.03_c74ce314.jpeg" 
                alt="Nexus Saúde Logo" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Saúde especializada com acolhimento. Ortopedia, traumatologia e nutrição clínica em um único espaço.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <a href="tel:+5511932962026" className="text-sm text-muted-foreground hover:text-primary transition-colors">(11) 93296-2026</a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <a href="mailto:costadamorim@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">costadamorim@gmail.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    Rua Onze de Junho, 1070<br />
                    Consultório 209<br />
                    São Paulo, SP
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Horários</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>[Inserir horário de atendimento]</p>
                <p className="text-xs text-muted-foreground/70">
                  Agende sua consulta pelo WhatsApp ou formulário de contato
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2026 Clínica Nexus Saúde. Todos os direitos reservados.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="text-sm">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
