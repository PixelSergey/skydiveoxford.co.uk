import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Users } from "lucide-react";
import skyBackground from "@/assets/sky-background.jpg";
import sergeyImage from "@/assets/sergey.jpg";
import daisyImage from "@/assets/daisy.jpeg";
import mariImage from "@/assets/mari.jpeg";
import miaImage from "@/assets/mia.jpeg";

const committeeMembers = [
  {
    role: "President",
    name: "Sergey Ichtchenko",
    details: "DPhil CS",
    email: "president@skydiveoxford.co.uk",
    image: sergeyImage,
    initials: "SI",
  },
  {
    role: "Vice President",
    name: "Daisy Pritzker",
    email: "vp@skydiveoxford.co.uk",
    image: daisyImage,
    initials: "DP",
  },
  {
    role: "Secretary",
    name: "Mari Managadze",
    email: "secretary@skydiveoxford.co.uk",
    image: mariImage,
    initials: "MM",
  },
  {
    role: "Treasurer",
    name: "Sophie Kendall",
    email: "treasurer@skydiveoxford.co.uk",
    image: null,
    initials: "SK",
  },
  {
    role: "Social Secretary",
    name: "Bob Sira",
    email: "social@skydiveoxford.co.uk",
    image: null,
    initials: "BS",
  },
  {
    role: "Welfare Officer",
    name: "Mia Yu",
    email: "welfare@skydiveoxford.co.uk",
    image: miaImage,
    initials: "MY",
  },
];

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
                <p className="text-foreground text-center">
                  For general questions and contacts, email{" "}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="inline-flex items-center space-x-2"
                  >
                    <a href="mailto:info@skydiveoxford.co.uk">
                      <Mail className="h-4 w-4" />
                      <span>info@skydiveoxford.co.uk</span>
                    </a>
                  </Button>
                </p>
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
                <div className="text-foreground text-center">
                  <span className="mr-2">Join us as a member:</span>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="inline-flex items-center space-x-2"
                  >
                    <a href="/members">
                      <Users className="h-4 w-4" />
                      <span>Membership form</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Committee Section */}
          <Card className="bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">👥 Committee</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {committeeMembers.map((member) => (
                  <div key={member.role} className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16 flex-shrink-0">
                      {member.image ? (
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      ) : null}
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-foreground">{member.role}</h3>
                      <p className="text-foreground">
                        {member.name}{member.details ? ` (${member.details})` : ""}
                      </p>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-blue-700 hover:text-blue-800 hover:underline break-all text-sm"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;