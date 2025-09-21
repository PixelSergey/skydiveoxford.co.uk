import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Button } from "@/components/ui/button";
import { CircleArrowDown } from "lucide-react";
import skyBackground from "@/assets/sky-background.jpg";

const Intro = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${skyBackground})`,
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Animated cloud elements */}
      <CloudBackground />
      
      <main className="relative z-10 pt-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-12 text-center">
            Intro Days
          </h1>
          
          {/* Next Intro Day Section */}
          <section className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Next Intro Day</h2>
              <p className="text-xl text-foreground mb-6">Friday, December 15th, 2024</p>
              <Button variant="outline" size="lg" className="mb-6 px-8 py-4 text-lg">
                <CircleArrowDown className="mr-2 h-5 w-5" />
                Sign up now
              </Button>
              <p className="text-sm text-muted-foreground">
                Please read the information below before signing up to the intro day
              </p>
            </div>
          </section>

          {/* About Intro Days Section */}
          <section className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">About Intro Days</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What is an intro day?</h3>
                  <p className="text-foreground">
                    An intro day is a full-day ground school course where you'll learn everything you need to know before your first skydive. 
                    It covers theory, safety procedures, emergency drills, and hands-on practice with equipment.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">When are intro days held?</h3>
                  <p className="text-foreground">
                    Intro days are typically held on Fridays at the dropzone. They run from 9 AM to 5 PM, so make sure you have the whole day available.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What should I bring?</h3>
                  <p className="text-foreground">
                    Just bring yourself, comfortable clothes, and enthusiasm! All equipment and training materials are provided. 
                    We recommend wearing closed-toe shoes and layers as the weather can change.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Do I need any prior experience?</h3>
                  <p className="text-foreground">
                    Not at all! The intro day is designed for complete beginners. Our experienced instructors will guide you through everything step by step.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What happens after the intro day?</h3>
                  <p className="text-foreground">
                    After completing your intro day, you'll be ready for your first AFF Level 1 jump, which can typically be scheduled for the following weekend.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">How much does it cost?</h3>
                  <p className="text-foreground">
                    The intro day is included in your AFF Level 1 package, which costs £380 total. This covers both the ground school and your first solo jump.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Intro;