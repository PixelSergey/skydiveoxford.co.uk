import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import skyBackground from "@/assets/sky-background.jpg";

const STORAGE_BASE_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/media/committee`;

const Contact = () => {
  const { data: committeeMembers = [], isLoading } = useQuery({
    queryKey: ["committee-members"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("committee_members")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

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
              {isLoading ? (
                <p className="text-foreground text-center">Loading...</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {committeeMembers.map((member) => (
                    <div key={member.id} className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16 flex-shrink-0">
                        {member.photo_filename ? (
                          <AvatarImage
                            src={`${STORAGE_BASE_URL}/${member.photo_filename}`}
                            alt={member.name}
                            className="object-cover"
                          />
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
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
