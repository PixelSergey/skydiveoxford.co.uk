import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Button } from "@/components/ui/button";
import skyBackground from "@/assets/sky-background.jpg";
import parachuteIcon from "@/assets/parachute.png";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const Intro = () => {
  const { data: introDays, isLoading } = useQuery({
    queryKey: ['intro-days'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('intro_days')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data;
    }
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
            Intro Days
          </h1>
          
          {/* Beginners' Info Session Section */}
          <section className="mb-12">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">Beginners' info session</h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-foreground">Date:</span>
                  <span className="text-foreground">MT Tuesday week 1, 14.10.2025</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-foreground">Location:</span>
                  <span className="text-foreground">Doctorow Hall, St Edmund Hall College</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Welcome to the freshers' information session! Find out more about skydiving, how it all works, and try on a real parachute here. Signups are optional but encouraged.
                </p>
                <div className="pt-2">
                  <a href="#signup">
                    <Button variant="default" size="lg">
                      Sign up to the info session
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Next Intro Days Section */}
          <section className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Next intro days</h2>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Please read the information below before signing up to the intro day
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {isLoading ? (
                   <div className="col-span-full text-center py-8">
                     <p className="text-muted-foreground">Loading intro days...</p>
                   </div>
                 ) : introDays && introDays.length > 0 ? (
                   introDays.map((introDay) => (
                     <div key={introDay.id} className="text-center p-6 bg-background/50 rounded-lg border border-border/30">
                       <p className="text-xl text-foreground mb-4">{introDay.date}</p>
                         {introDay.state === "active" ? (
                           <a 
                             href={introDay.link} 
                             target="_blank" 
                             rel="noopener noreferrer"
                           >
                             <Button variant="outline" size="lg" className="px-8 py-4 text-lg mb-3 whitespace-normal h-auto min-h-11">
                               <img src={parachuteIcon} alt="Parachute" className="mr-2 h-5 w-5" />
                               Sign up now
                             </Button>
                           </a>
                         ) : introDay.state === "not yet active" ? (
                           <Button variant="outline" size="lg" className="px-8 py-4 text-lg opacity-50 cursor-not-allowed mb-3 whitespace-normal h-auto min-h-11" disabled>
                             <span className="mr-2">⏳</span>
                             Signups not available yet
                           </Button>
                         ) : (
                           <Button variant="outline" size="lg" className="px-8 py-4 text-lg opacity-50 cursor-not-allowed mb-3 whitespace-normal h-auto min-h-11" disabled>
                             <span className="mr-2">❌</span>
                             Sold out
                           </Button>
                         )}
                       <p className="text-sm text-muted-foreground">
                         Total places available: {introDay.total_places}
                       </p>
                     </div>
                   ))
                 ) : (
                   <div className="col-span-full text-center py-8">
                     <p className="text-muted-foreground">No intro days scheduled yet.</p>
                   </div>
                 )}
               </div>
            </div>
          </section>

          {/* About Intro Days Section */}
          <section className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">About Intro Days</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">How do the intro days work?</h3>
                  <p className="text-foreground">
                    Intro days are a 2-part course which culminate in your first solo jump!
                    The first part is a full-day ground school on a Friday, where you will learn everything you need and complete all the practical drills.
                    The second part, held on a separate day, will be your first skydive out of an airplane with 2 instructors by your side.
                  </p>
                  <p className="text-foreground">
                    For more information on training, see the <a href="/about" className="text-primary-foreground hover:text-primary-foreground/80 underline underline-offset-4 transition-colors font-medium">About Skydiving</a> page.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What is the schedule like?</h3>
                  <p className="text-foreground">
                    Here is a typical schedule for a Friday groundschool.
                    Note that the times here are approximate: the groundschools typically end earlier, but may stretch for some reason.
                    It's not recommended to book anything else for the same day or you may miss it.
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>07:30 a.m. - Leave Oxford by car</li>
                    <li>08:30 a.m. - Groundschool at Hinton starts</li>
                    <li>12 p.m. - Break for lunch</li>
                    <li>5 p.m. - Groundschool ends</li>
                    <li>6 p.m. - Back in Oxford</li>
                  </ul>
                  <p className="text-foreground">
                    Once you are done with the groundschool, you can come back any day for your first jump.
                    It takes about 45 minutes per direction to drive to hinton, and you can expect to spend a few hours briefing, jumping, and debriefing your AFF jumps each time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What should I bring?</h3>
                  <p className="text-foreground">
                    Sporty clothes and good shoes (any sneakers will do, but shoes with ankle support are ideal) are required.
                    All of the gear is provided by the dropzone.
                    You can also bring some food and water, but there is a cafe at the dropzone if you want to get lunch there.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Do I need any prior experience?</h3>
                  <p className="text-foreground">
                    Not at all! The intro day is designed for complete beginners.
                    The Friday groundschool will teach you everything you need to know about parachuting from the ground up.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">How much does it cost?</h3>
                  <p className="text-foreground">
                    The total cost for the AFF Level 1 is £400.
                    You will need to pay a £220 deposit via a bank transfer when you book the course, and then pay the remaining £180 on the day of the groundschool.
                  </p>
                  <p className="text-foreground">
                    This price includes the groundschool, all exams and drills, your first real skydive, as well as transportation to and from the airfield.
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