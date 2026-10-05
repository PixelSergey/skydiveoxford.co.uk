import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CloudBackground from "./CloudBackground";
import Gallery from "./Gallery";
import skyBackground from "@/assets/sky-background.jpg";
import whatsappLogo from "@/assets/whatsapp-logo.svg";
import instagramLogo from "@/assets/instagram-logo.svg";
import jediLogo from "@/assets/jedi-logo.png";
import aon2Logo from "@/assets/aon2-2.png";
import skydiveHeroPhoto from "@/assets/skydive-hero-photo.jpg";

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

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-3xl mx-auto w-full flex flex-col items-center pt-28 sm:pt-32">
        <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl font-bold italic tracking-tight text-foreground leading-[1.05] animate-fade-in-up">
          Oxford Skydiving Club
        </h1>

        <p className="mt-4 sm:mt-5 text-base sm:text-xl text-foreground/70 max-w-md sm:max-w-xl animate-fade-in-up">
          The most extreme sports society in Oxford
        </p>

        {/* Primary actions */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-sm sm:max-w-lg animate-fade-in-up">
          <Button
            size="lg"
            onClick={() => navigate("/intro")}
            className="h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Intro days
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/members")}
            className="h-12 rounded-full border-foreground/10 bg-background/80 text-foreground hover:bg-background text-base font-semibold shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
          >
            Join the club for free
          </Button>
        </div>

        {/* Community links */}
        <div className="mt-3 grid grid-cols-2 gap-3 w-full max-w-sm sm:max-w-lg animate-fade-in-up">
          <a
            href="https://chat.whatsapp.com/GsVGYHq90fK0yeLDmINVEv"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 inline-flex items-center justify-center gap-2 rounded-full bg-background/60 border border-foreground/10 backdrop-blur-md text-sm font-medium text-foreground hover:bg-background/90 transition-all duration-300 hover:-translate-y-0.5"
          >
            <img src={whatsappLogo} alt="" className="h-4 w-4" />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Join the WhatsApp group</span>
          </a>
          <a
            href="https://www.instagram.com/oxfordskydiving/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 inline-flex items-center justify-center gap-2 rounded-full bg-background/60 border border-foreground/10 backdrop-blur-md text-sm font-medium text-foreground hover:bg-background/90 transition-all duration-300 hover:-translate-y-0.5"
          >
            <img src={instagramLogo} alt="" className="h-4 w-4" />
            <span className="sm:hidden">Instagram</span>
            <span className="hidden sm:inline">Follow us on Instagram</span>
          </a>
        </div>
      </div>

      {/* Full-width featured photo with gradient fade top & bottom — sits behind the buttons */}
      <div className="relative z-0 w-full -mt-20 sm:-mt-36 pointer-events-none">
        <img
          src={skydiveHeroPhoto}
          alt="Skydiver in freefall above the Oxfordshire countryside"
          className="w-full h-[70vw] min-h-[340px] sm:h-auto sm:min-h-0 max-h-[760px] object-cover object-center"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
          }}
        />
      </div>

      {/* Gallery Section */}
      <Gallery />

      {/* Sponsors Section - Bottom of Page */}
      <div id="sponsors" className="relative z-10 px-6 sm:px-8 max-w-4xl mx-auto w-full py-12 sm:py-16 scroll-mt-20">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60 text-center mb-6 sm:mb-8">
          In collaboration with
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            { href: "https://www.aon2.co.uk/", logo: aon2Logo, name: "AON2", desc: "AO(N²) – Advanced Skydiving Technology" },
            { href: "https://jediairwear.com/", logo: jediLogo, name: "Jedi Air Wear", desc: "Jedi Air Wear – Custom-made skydiving suits" },
          ].map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-background/70 border border-foreground/10 backdrop-blur-md p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-background p-2">
                <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain" />
              </div>
              <p className="text-sm sm:text-base text-left text-foreground/80 group-hover:text-foreground transition-colors">
                {s.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
