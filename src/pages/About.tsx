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
            <nav>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <button 
                    onClick={() => document.getElementById('learn-to-skydive')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground hover:text-foreground/80 transition-colors underline"
                  >
                    How do I learn to skydive?
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('is-skydiving-safe')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground hover:text-foreground/80 transition-colors underline"
                  >
                    Is skydiving safe?
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('is-skydiving-expensive')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground hover:text-foreground/80 transition-colors underline"
                  >
                    Is skydiving expensive?
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground hover:text-foreground/80 transition-colors underline"
                  >
                    FAQs
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* How do I learn to skydive? */}
          <section id="learn-to-skydive" className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">How do I learn to skydive?</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="mb-4">
                  At the Oxford Skydiving Club, we use the Accelerated Freefall (AFF) course program to teach you to skydive safely and efficiently.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">1. Ground School</h3>
                <p className="mb-4">
                  When you sign up for a Friday intro day, you will get to go to the dropzone (the airport where we skydive) for a full-day theory course and get introduced to how skydiving works from the ground up.
                  You will cover how to jump out of the plane, how to control your body in freefall, and how to deploy and fly the parachute yourself.
                  Then, you will go through all of the emergency drills to get you prepared for anything that could ever go wrong while skydiving.
                  You will also practice all of these skills on the ground with a dummy parachute and airplane.
                  After the ground school, you will be fully ready for your first jump!
                </p>
                <p className="mb-4">
                  <i>Note: the ground school is always on a Friday and is a full-day commitment.</i>
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">2. AFF Level 1</h3>
                <p className="mb-4">
                  Either on the weekend following your ground school or on the week afterwards, you will get do your first solo jump.
                  Get ready, 'cause this is going to be the most exciting day of your life!
                </p>
                <p className="mb-4">
                  The jump will be from 13,000 feet, and you will have two instructors holding onto you from either side.
                  At 5000 feet, you will deploy your own parachute.
                  From then on, you will be flying on your own all the way until landing, using the training you got during your ground school.
                  There will also be a third instructor telling you what to do while flying the parachute using a radio placed in your helmet.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">3. AFF Levels 2 and 3</h3>
                <p className="mb-4">
                  These levels are going to be the same as the AFF Level 1, with you doing more drills during the freefall phase to test your awareness and stability.
                  The instructors will gradually give you more freedom and let go of you if you are stable.
                  You will still have an instructor talking to you on the radio until you land.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">4. AFF Levels 4 and 5</h3>
                <p className="mb-4">
                  You will now be accompanied by only one instructor, who will let go of you after exiting the airplane and let you do drills under their supervision.
                  You will learn to turn left and right in a stable way.
                  From these levels onward, you are "freed" from the radio and can fly the canopy on your own.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">5. AFF Levels 6 and 7</h3>
                <p className="mb-4">
                  Now, you're already pretty skilled, and will get to have some fun in the air!
                  You will get to exit the airplane on your own, and learn to do backflips, tracks, and dive exits.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">6. AFF Level 8</h3>
                <p className="mb-4">
                  Normally, you will jump from 13,000 feet, but on this jump you will get to go lower and do a so-called "Hop-and-Pop" from only 5,000 feet simulating an aircraft emergency.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">7. Consolidation jumps</h3>
                <p className="mb-4">
                  That's the end of your training!
                  Now, you only have to do 10 jumps on your own in order to get your license.
                  You will still need to do your pre-jump checks with an instructor, but now you can choose what to do on your own and go experience the real freedom of the air.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">A license</h3>
                <p className="mb-4">
                  Congrats, now you've got your license!
                  The fun doesn't end here, though: now you can go onto advanced courses and learn to do Formation Skydiving (jumping with friends), advanced canopy training, learn to be a jumpmaster, and many other things.
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
                  Modern skydiving is super duper safe! Here's some facts about how we got here:
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Safety Statistics</h3>
                <p className="mb-4">
                  For the last 20 years, the fatality rate in skydiving has been around 0.7 per 100,000 jumps.
                  Light injuries, such as spraining an ankle, occur at a rate of less than 1 in 2500 jumps.
                </p>
                <p className="mb-4">
                  This means that you're more likely to die driving a car or being struck by lightning than jumping out of a plane!
                  Remember this quote: "Once you've driven to the airport, the most dangerous part of your skydiving day is already done".
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">What if my parachute doesn't open?</h3>
                <p className="mb-4">
                  When skydiving, you always have two parachutes: the main and the reserve.
                  Most routine opening problems (line twists, closed end cells, slider remaining up) can be dealt with easily by yourself, and you will learn to do so in ground school.
                  However, if you have a full parachute malfunction, you will always be able to cut away your main canopy and deploy your reserve canopy using two emergency handles on the front of your parachute.
                  You will train to do this and other emergency drills very thoroughly during your ground school.
                </p>
                <p className="mb-4">
                  During your training, your parachutes will be packed by professional packers, making any malfunctions very unlikely.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">What if my reserve doesn't open?</h3>
                <p className="mb-4">
                  This is almost impossible: reserve parachutes are packed in a special way by a professional parachute rigger that ensures their opening.
                  When you deploy your reserve, a large spring pushes the parachute out into the airflow, making it open way quicker and more reliably than your main.
                  There have been no double malfunctions for solo parachutists in the UK for the last 20 years.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">What if I faint?</h3>
                <p className="mb-4">
                  If you faint or are otherwise unable to open your parachute, there is a final safety feature: the Automatic Activation Device (AAD).
                  This is a small explosive placed in your parachute that will physically open your reserve parachute if you do not do it yourself in time.
                  The CYPRES AAD devices we use have never failed since they were invented in 1991.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Other safety details:</h3>
                <p> Here are some other facts which make skydiving as safe as it is: </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Training: before you are allowed to jump, you will need to pass all the relevant theoretical and practical tests as well as malfunction drills during your ground school</li>
                  <li>Gear and packing: all of the gear is thoroughly inspected by professional riggers and packed by professional packers. The gear is high-quality and designed with student jumpers in mind</li>
                  <li>Instructors: your instructors have to have hundreds (if not thousands) of jumps and are both able to open your parachute and save you if anything goes wrong</li>
                  <li>Safety checks: before your jump, your gear will be thorougly checked three times - once before you put it on, again when you have equipped it, and one final time in the airplane before your jump</li>
                </ul>
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