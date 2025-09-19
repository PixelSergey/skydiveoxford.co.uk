import { Button } from "@/components/ui/button";
import CloudBackground from "./CloudBackground";
import skyBackground from "@/assets/sky-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${skyBackground})`,
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/10" />
      
      {/* Animated cloud elements */}
      <CloudBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
          Oxford Skydiving Club
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up max-w-2xl mx-auto font-light">
          Join the most extreme sports society at the University of Oxford
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary-foreground/30 hover:border-primary-foreground/50 px-8 py-4 text-lg font-semibold shadow-sky hover:shadow-elevation transition-all duration-300 hover:scale-105"
          >
            Learn to Skydive
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Join the Oxford Skydiving Club for free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;