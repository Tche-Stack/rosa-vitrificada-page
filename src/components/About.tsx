import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, number: "500+", label: "Clientes Satisfeitas" },
  { icon: Award, number: "10+", label: "Anos de Experiência" },
  { icon: Clock, number: "98%", label: "Pontualidade" },
  { icon: Heart, number: "100%", label: "Dedicação" }
];

export const About = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
              Sobre Nossa Estética
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Na <span className="text-accent font-semibold">estética beleza.com</span>, 
                acreditamos que cada pessoa possui uma beleza única que merece ser realçada 
                com carinho e profissionalismo.
              </p>
              <p>
                Nossa equipe de especialistas está sempre atualizada com as mais modernas 
                técnicas e tendências do mercado de beleza, garantindo resultados excepcionais 
                e uma experiência inesquecível.
              </p>
              <p>
                Utilizamos apenas produtos premium e equipamentos de última geração, 
                proporcionando tratamentos seguros e eficazes em um ambiente acolhedor 
                e sofisticado.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="glass-card text-center p-6 hover:bg-card/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mx-auto gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};