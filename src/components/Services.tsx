import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Heart, Crown, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cortes & Estilização",
    description: "Cortes modernos e penteados exclusivos para realçar sua personalidade única",
    price: "A partir de R$ 80"
  },
  {
    icon: Palette,
    title: "Coloração Profissional",
    description: "Técnicas avançadas de coloração, mechas e tratamentos capilares premium",
    price: "A partir de R$ 150"
  },
  {
    icon: Sparkles,
    title: "Tratamentos Faciais",
    description: "Limpeza de pele, hidratação profunda e procedimentos anti-idade",
    price: "A partir de R$ 120"
  },
  {
    icon: Heart,
    title: "Manicure & Pedicure",
    description: "Cuidados completos para mãos e pés com produtos de alta qualidade",
    price: "A partir de R$ 45"
  },
  {
    icon: Crown,
    title: "Maquiagem Profissional",
    description: "Make para eventos especiais, casamentos e ensaios fotográficos",
    price: "A partir de R$ 200"
  },
  {
    icon: Zap,
    title: "Procedimentos Estéticos",
    description: "Microagulhamento, peeling químico e outros tratamentos renovadores",
    price: "A partir de R$ 180"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra uma gama completa de tratamentos de beleza personalizados para você
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="glass-card hover:bg-card/50 transition-all duration-300 border-glass-border group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="text-accent font-semibold text-lg mb-4">{service.price}</div>
                  <Button 
                    variant="outline" 
                    className="w-full glass border-glass-border hover:bg-glass text-foreground"
                  >
                    Agendar Agora
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="gradient-primary text-primary-foreground hover:opacity-90 rounded-full px-8 py-6 text-lg"
          >
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};