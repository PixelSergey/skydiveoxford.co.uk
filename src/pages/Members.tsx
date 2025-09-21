import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import QRCode from "react-qr-code";
import skyBackground from "@/assets/sky-background.jpg";

const Members = () => {
  const applicationFormUrl = "https://forms.gle/nwSbX9bQR3d72QuYA";
  
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
          
          {/* Membership Application Section */}
          <Card className="mb-8 bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">📝 Membership Application</h2>
               <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Left side - Text and Button */}
                <div className="max-w-md space-y-4">
                  <p className="text-foreground">
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
                        href={applicationFormUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-4 w-4" />
                        <span>Application form</span>
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Right side - QR Code */}
                <div className="flex flex-col items-center justify-center space-y-2 md:min-h-[120px]">
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <QRCode
                      size={128}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      value={applicationFormUrl}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Scan to apply</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Membership Benefits Section */}
          <Card className="bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">⭐ Membership Benefits</h2>
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
        </div>
      </main>
    </div>
  );
};

export default Members;