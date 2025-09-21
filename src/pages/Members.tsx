import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import skyBackground from "@/assets/sky-background.jpg";

const Members = () => {
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
            Membership
          </h1>
          
          {/* Membership Benefits Section */}
          <Card className="mb-8 bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">🪂 Membership Benefits</h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  As a member of the Oxford Skydiving Club, you will get the following:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Access to skydiving intro days</li>
                  <li>Access to the group chat</li>
                  <li>A subscription to the mailing list</li>
                  <li>To be a part of the coolest society in Oxford!</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Membership Application Section */}
          <Card className="bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">📝 Membership Application</h2>
              <div className="space-y-6">
                <p className="text-foreground text-center">
                  Memberships for the 2025-2026 academic year are currently free. You must be a current student or a member of faculty at the University of Oxford to apply. Apply to be a member by filling out this form:
                </p>
                <div className="flex justify-center">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex items-center space-x-2"
                  >
                    <a 
                      href="https://forms.gle/nwSbX9bQR3d72QuYA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Application form</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Members;