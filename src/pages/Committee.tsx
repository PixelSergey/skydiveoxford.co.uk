import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import skyBackground from "@/assets/sky-background.jpg";

const STORAGE_BASE_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/committee-photos`;
const DOCS_BASE_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/admin-documents`;

const Committee = () => {
  const { data: committeeMembers = [], isLoading: membersLoading } = useQuery({
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

  const { data: documents = [], isLoading: docsLoading } = useQuery({
    queryKey: ["public-documents"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("public_documents")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

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
              {membersLoading ? (
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
                          className="text-primary hover:text-primary/80 hover:underline break-all text-sm"
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

          {/* Documents Section */}
          <Card className="bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">📄 Documents</h2>
              {docsLoading ? (
                <p className="text-foreground text-center">Loading...</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <Button
                      key={doc.id}
                      asChild
                      variant="outline"
                      className="h-auto py-4 px-6 justify-start gap-3 text-left"
                    >
                      <a
                        href={`${DOCS_BASE_URL}/${doc.filename}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <FileDown className="h-5 w-5 flex-shrink-0" />
                        <span className="whitespace-normal">{doc.label}</span>
                      </a>
                    </Button>
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

export default Committee;
