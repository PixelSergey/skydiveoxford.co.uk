import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CloudBackground from "./CloudBackground";
import SkydiverAnimation from "./SkydiverAnimation";
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
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto w-full min-h-[80vh] flex flex-col justify-center pt-16 sm:pt-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-in-up leading-tight">
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
      <div className="relative z-10 px-6 sm:px-8 max-w-6xl mx-auto w-full py-8 sm:py-12 pb-16 sm:pb-24">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-6 sm:mb-8 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Large featured video placeholder */}
          <div className="col-span-2 row-span-2 aspect-video bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-primary-foreground/60 text-sm">Video</span>
            </div>
          </div>
          
          {/* Photo placeholders */}
          <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-primary-foreground/60 text-xs">Photo</span>
            </div>
          </div>
          
          <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-primary-foreground/60 text-xs">Photo</span>
            </div>
          </div>
          
          <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-primary-foreground/60 text-xs">Photo</span>
            </div>
          </div>
          
          <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-primary-foreground/60 text-xs">Photo</span>
            </div>
          </div>
          
          {/* Video placeholder */}
          <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-primary-foreground/60 text-xs">Video</span>
            </div>
          </div>
          
          <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-primary-foreground/60 text-xs">Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
