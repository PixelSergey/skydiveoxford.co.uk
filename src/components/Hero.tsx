import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CloudBackground from "./CloudBackground";
import SkydiverAnimation from "./SkydiverAnimation";
import Gallery from "./Gallery";
import skyBackground from "@/assets/sky-background.jpg";
import whatsappLogo from "@/assets/whatsapp-logo.svg";
import instagramLogo from "@/assets/instagram-logo.svg";
import jediLogo from "@/assets/jedi-logo.png";
import aon2Logo from "@/assets/aon2-2.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center">
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

      {/* Main Content - Full Screen */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto w-full min-h-[60vh] flex flex-col justify-center pt-16 sm:pt-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold italic text-primary-foreground mb-4 sm:mb-6 animate-fade-in-up leading-tight">
          Oxford Skydiving Club
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 animate-fade-in-up max-w-2xl mx-auto font-light px-2">
          The most extreme sports society in Oxford
        </p>

        <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center animate-fade-in-up px-2">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/intro")}
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Intro days
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/members")}
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Join the club for free
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://chat.whatsapp.com/DQ6C1tD0nqz5g17SwcAqYw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img src={whatsappLogo} alt="WhatsApp" className="mr-2 h-5 w-5" />
                Join the WhatsApp group
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://www.instagram.com/oxfordskydiving/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img src={instagramLogo} alt="Instagram" className="mr-2 h-5 w-5" />
                Follow us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Sponsors Section - Below Fold */}
      <div className="relative z-10 mt-1 sm:mt-2 px-6 sm:px-8 max-w-5xl mx-auto w-full py-3 sm:py-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-2 sm:mb-3 text-center">
          In collaboration with
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-12 sm:gap-16">
          <a
            href="https://www.aon2.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105 group"
          >
            <img
              src={aon2Logo}
              alt="AON2"
              className="h-16 sm:h-20 w-auto object-contain bg-white/90 rounded-lg p-3 mb-2"
            />
            <p className="text-primary-foreground/80 text-sm sm:text-base text-center max-w-[200px] group-hover:text-primary-foreground transition-colors">
              AO(N²) - Advanced Skydiving Technology
            </p>
          </a>
          <a
            href="https://jediairwear.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105 group"
          >
            <img
              src={jediLogo}
              alt="Jedi Air Wear"
              className="h-16 sm:h-20 w-auto object-contain bg-white/90 rounded-lg p-3 mb-2"
            />
            <p className="text-primary-foreground/80 text-sm sm:text-base text-center max-w-[200px] group-hover:text-primary-foreground transition-colors">
              Jedi Air Wear - Custom made Skydiving suits
            </p>
          </a>
        </div>
      </div>

      {/* Gallery Section */}
      <Gallery />
    </section>
  );
};

export default Hero;
