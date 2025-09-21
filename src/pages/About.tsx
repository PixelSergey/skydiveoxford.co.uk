import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import skyBackground from "@/assets/sky-background.jpg";

const About = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8 text-center">
            About Skydiving
          </h1>
          
          {/* Table of Contents */}
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 mb-12 border border-border/50">
            <h2 className="text-xl font-semibold text-foreground mb-4">On this page...</h2>
            <nav className="space-y-2">
              <button 
                onClick={() => document.getElementById('learn-to-skydive')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-left text-primary hover:text-primary/80 transition-colors"
              >
                How do I learn to skydive?
              </button>
              <button 
                onClick={() => document.getElementById('is-skydiving-safe')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-left text-primary hover:text-primary/80 transition-colors"
              >
                Is skydiving safe?
              </button>
              <button 
                onClick={() => document.getElementById('is-skydiving-expensive')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-left text-primary hover:text-primary/80 transition-colors"
              >
                Is skydiving expensive?
              </button>
              <button 
                onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-left text-primary hover:text-primary/80 transition-colors"
              >
                FAQs
              </button>
            </nav>
          </div>

          {/* How do I learn to skydive? */}
          <section id="learn-to-skydive" className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">How do I learn to skydive?</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="mb-4">
                  Learning to skydive is an exciting journey that typically begins with a tandem jump - your first step into the world of freefall. Here's the typical progression:
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">1. Tandem Skydiving</h3>
                <p className="mb-4">
                  Your first jump will likely be a tandem skydive, where you're securely attached to an experienced instructor. This allows you to experience freefall and landing with minimal training requirements.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">2. Accelerated Freefall (AFF)</h3>
                <p className="mb-4">
                  If you want to pursue solo skydiving, the AFF program is the most popular training method. You'll complete ground school and then make supervised solo jumps with instructors flying alongside you.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">3. License Progression</h3>
                <p>
                  After completing your training, you'll work toward different license levels (A, B, C, D) that allow you to participate in more advanced skydiving activities and jump at different drop zones worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Is skydiving safe? */}
          <section id="is-skydiving-safe" className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">Is skydiving safe?</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="mb-4">
                  Modern skydiving is remarkably safe when proper procedures are followed and quality equipment is used. Here are the key safety facts:
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Safety Statistics</h3>
                <p className="mb-4">
                  According to the United States Parachute Association (USPA), the fatality rate for skydiving is approximately 0.39 per 100,000 jumps. To put this in perspective, you're statistically more likely to be struck by lightning.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Safety Measures</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Rigorous equipment inspection and maintenance protocols</li>
                  <li>Mandatory reserve parachutes packed by certified riggers</li>
                  <li>Automatic Activation Devices (AADs) that deploy reserves automatically</li>
                  <li>Comprehensive training programs and instructor certification</li>
                  <li>Weather monitoring and jump restrictions</li>
                </ul>
                <p>
                  The key to safe skydiving is choosing a reputable drop zone with certified instructors and well-maintained equipment.
                </p>
              </div>
            </div>
          </section>

          {/* Is skydiving expensive? */}
          <section id="is-skydiving-expensive" className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">Is skydiving expensive?</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="mb-4">
                  The cost of skydiving varies depending on your level of involvement and location. Here's a breakdown of typical expenses:
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Getting Started</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Tandem Jump:</strong> £200-400 per jump</li>
                  <li><strong>AFF Course:</strong> £1,200-2,000 for complete training</li>
                  <li><strong>Equipment Rental:</strong> £30-50 per jump while learning</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-3">Licensed Skydiver Costs</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Jump Tickets:</strong> £25-35 per jump</li>
                  <li><strong>Equipment Purchase:</strong> £3,000-8,000 for complete gear</li>
                  <li><strong>Annual Expenses:</strong> £500-2,000+ depending on jump frequency</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-3">Ways to Save Money</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Join a club or group for discounted rates</li>
                  <li>Buy used equipment in good condition</li>
                  <li>Jump frequently to take advantage of bulk pricing</li>
                  <li>Consider used gear maintenance and training</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What's the minimum age to skydive?</h3>
                  <p className="text-foreground">In the UK, the minimum age is 16 with parental consent, or 18 without. Some drop zones may have different age restrictions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What happens if the parachute doesn't open?</h3>
                  <p className="text-foreground">Every skydiver wears two parachutes - a main and a reserve. If the main parachute malfunctions, the reserve parachute is deployed. Additionally, an Automatic Activation Device (AAD) will automatically deploy the reserve at a predetermined altitude.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Can I skydive if I'm afraid of heights?</h3>
                  <p className="text-foreground">Many people with a fear of heights successfully skydive. The experience of freefall is quite different from standing on a tall building, as you don't have the same visual reference points.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What's the weather like for skydiving?</h3>
                  <p className="text-foreground">Skydiving requires good weather conditions - clear skies, low winds, and good visibility. Jumps are cancelled in rain, high winds, or low cloud cover for safety reasons.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">How long does the whole experience take?</h3>
                  <p className="text-foreground">For a tandem jump, expect to spend 2-4 hours at the drop zone, including training, gearing up, the plane ride, and the jump itself. The freefall typically lasts 45-60 seconds, followed by a 5-7 minute parachute ride.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;