import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="glass-card p-8 md:p-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-primary w-8 h-8 mr-3" />
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Estética </span>
              <span className="text-primary">Beleza.com</span>
            </h1>
            <Sparkles className="text-primary w-8 h-8 ml-3" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Transforme sua beleza natural em arte. 
            <br />
            <span className="text-accent">Experiência única em cuidados estéticos</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 animate-pulse-glow rounded-full px-8 py-6 text-lg font-semibold">
              Agendar Consulta
            </Button>
            <Button variant="outline" size="lg" className="glass border-glass-border text-foreground hover:bg-glass rounded-full px-8 py-6 text-lg">
              Conhecer Serviços
            </Button>
          </div>
          
          <div className="flex items-center justify-center mt-8 gap-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-accent fill-accent w-5 h-5" />)}
            <span className="text-muted-foreground ml-2">Avaliação 5 estrelas</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 glass rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 glass rounded-full animate-pulse delay-500"></div>
    </section>;
};