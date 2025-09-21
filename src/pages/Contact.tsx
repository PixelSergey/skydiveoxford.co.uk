import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
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
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">🪂 Oxford Skydiving Club</h2>
              <div className="space-y-4">
                <div className="text-foreground text-center space-y-4">
                  <p>For general questions and contacts:</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="inline-flex items-center space-x-2"
                  >
                    <a href="mailto:info@skydiveoxford.co.uk">
                      <span>info@skydiveoxford.co.uk</span>
                    </a>
                  </Button>
                </div>
                <div className="text-foreground text-center">
                  <span className="mr-2">Follow us on Instagram:</span>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="inline-flex items-center space-x-2"
                  >
                    <a 
                      href="https://instagram.com/skydiveoxford" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>@skydiveoxford</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Committee Section */}
          <Card className="mb-8 bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">👥 Committee</h2>
              <div className="grid gap-6">
                {/* President */}
                <div className="flex items-center space-x-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={sergeyImage} alt="Sergey Ichtchenko" />
                    <AvatarFallback>SI</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">President</h3>
                    <p className="text-lg text-foreground">Sergey Ichtchenko</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="inline-flex items-center"
                    >
                      <a href="mailto:president@skydiveoxford.co.uk">
                        <span>president@skydiveoxford.co.uk</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Membership Section */}
          <Card className="bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <p className="text-lg text-foreground">Join the club:</p>
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="inline-flex items-center"
                >
                  <a href="/members">
                    <span>Membership form</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;