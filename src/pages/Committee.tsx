import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { committeeMembers, documents } from "@/content";
import skyBackground from "@/assets/sky-background.jpg";

const Committee = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${skyBackground})` }}
      />
      <div className="absolute inset-0 bg-background/20" />
      <CloudBackground />
      
      <main className="relative z-10 pt-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-12 text-center">
            Committee
          </h1>
          
          {/* Committee Section */}
          <Card className="mb-8 bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">👥 Committee</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {committeeMembers.map((member) => (
                  <div key={member.role} className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16 flex-shrink-0">
                      {member.photoUrl ? (
                        <AvatarImage
                          src={member.photoUrl}
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
                        className="text-foreground hover:text-primary hover:underline break-all text-sm font-medium"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Documents Section */}
          {documents.length > 0 && (
            <Card className="bg-background/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-8 text-center">📄 Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <Button
                      key={doc.file}
                      asChild
                      variant="outline"
                      className="h-auto py-4 px-6 justify-start gap-3 text-left"
                    >
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={doc.file}
                      >
                        <FileDown className="h-5 w-5 flex-shrink-0" />
                        <span className="whitespace-normal">{doc.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Committee;
