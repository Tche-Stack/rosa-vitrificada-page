import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos prontas para cuidar da sua beleza
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rua da Beleza, 123 - Centro<br />
                  São Paulo - SP, 01234-567
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  Telefone & WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  (11) 99999-9999<br />
                  (11) 3333-4444
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-1">
                  <p><strong>Segunda a Sexta:</strong> 9h às 19h</p>
                  <p><strong>Sábado:</strong> 9h às 17h</p>
                  <p><strong>Domingo:</strong> Fechado</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <Card className="glass-card p-8 text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Agende sua consulta
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Entre em contato conosco e descubra como podemos realçar sua beleza natural. 
                  Atendimento personalizado e resultados incríveis te aguardam!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full gradient-primary text-primary-foreground hover:opacity-90 rounded-full py-6 text-lg animate-pulse-glow"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ligar Agora
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full glass border-glass-border text-foreground hover:bg-glass rounded-full py-6 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar E-mail
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full glass border-glass-border text-foreground hover:bg-glass rounded-full py-6 text-lg"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Seguir no Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};