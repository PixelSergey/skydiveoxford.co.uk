import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import skyBackground from "@/assets/sky-background.jpg";
import sergeyImage from "@/assets/sergey.jpg";

const Contact = () => {
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
            Contact
          </h1>
          
          {/* Oxford Skydiving Club Section */}
          <Card className="mb-8 bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Oxford Skydiving Club</h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  For general questions and contacts, email{" "}
                  <a 
                    href="mailto:info@skydiveoxford.co.uk" 
                    className="text-primary hover:underline font-medium"
                  >
                    info@skydiveoxford.co.uk
                  </a>
                </p>
                <p className="text-foreground">
                  Follow us on{" "}
                  <a 
                    href="https://instagram.com/skydiveoxford" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    @skydiveoxford
                  </a>{" "}
                  on Instagram
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Committee Section */}
          <Card className="bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Committee</h2>
              <div className="grid gap-6">
                {/* President */}
                <div className="flex items-center space-x-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={sergeyImage} alt="Sergey Ichtchenko" />
                    <AvatarFallback>SI</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">President</h3>
                    <p className="text-lg text-foreground">Sergey Ichtchenko</p>
                    <a 
                      href="mailto:president@skydiveoxford.co.uk" 
                      className="text-primary hover:underline"
                    >
                      president@skydiveoxford.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;