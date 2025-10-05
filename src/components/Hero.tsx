import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CloudBackground from "./CloudBackground";
import SkydiverAnimation from "./SkydiverAnimation";
import skyBackground from "@/assets/sky-background.jpg";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const Hero = () => {
  const navigate = useNavigate();

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
      
      {/* Animated skydivers */}
      <SkydiverAnimation />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-in-up leading-tight">
          Oxford Skydiving Club
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 animate-fade-in-up max-w-2xl mx-auto font-light px-2">
          The university's most extreme sports society
        </p>
        
        <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center animate-fade-in-up px-2">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/intro')}
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Learn to skydive
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/members')}
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Join the club for free
            </Button>
          </div>
          
          <Button 
            size="lg" 
            variant="outline"
            asChild
            className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <a href="https://chat.whatsapp.com/DQ6C1tD0nqz5g17SwcAqYw" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <img src={whatsappLogo} alt="WhatsApp" className="mr-2 h-5 w-5" />
              Join the WhatsApp group
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;