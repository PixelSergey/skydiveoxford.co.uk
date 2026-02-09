import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import skyBackground from "@/assets/sky-background.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
                    onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground hover:text-foreground/80 transition-colors underline"
                  >
                    FAQs
                  </button>
                </li>
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
              </ul>
            </nav>
          </div>

          {/* FAQs */}
          <section id="faqs" className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Is skydiving awesome?</h3>
                  <p className="text-foreground">Hell yeah it is 🔥🔥🔥</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Do I have to do any tandem jumps?</h3>
                  <p className="text-foreground">
                    Nope! At our club, you will start jumping on your own from day 1.
                    Tandem jumps (where you are strapped to an instructor) are usually one-off experiences for tourists, you won't actually learn very much by doing one.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Where do we skydive?</h3>
                  <p className="text-foreground">
                    Usually, we will go to Skydive Hinton, which is a parachuting club and airfield around 45 minutes away by car from Oxford.
                    We can also visit other dropzones around the UK, and go on international trips outside of term time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">How many jumps do I need to get my licence?</h3>
                  <p className="text-foreground">
                    The minimum number of jumps for the AFF course is 18.
                    These contain 8 AFF "levels" where you jump with one or two instructors, followed by 10 "consolidation jumps" where you jump fully solo under supervision.
                    You may have to do more jumps if you end up having to re-do a certain AFF level.
                    However, the more frequently you jump, the better your muscle memory will be and the more likely you are to pass the jumps!
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">How long does it take to get my licence?</h3>
                  <p className="text-foreground">
                    This depends on your motivation and availability.
                    Usually, people will complete the AFF in 2-3 months.
                    However, it's also possible to complete in a week if you're super motivated and the weather cooperates!
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Can I get videos for my instagram?</h3>
                  <p className="text-foreground">
                    Your instructor will film your whole training course with their camera and send the videos to you!
                    (You won't be able to bring your own camera until you have 200 jumps and a C licence)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Are there any health and weight requirements?</h3>
                  <p className="text-foreground">
                    The maximum weight for all courses is 95 kilograms (15 stone).
                    Otherwise, being generally healthy should be enough!
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What are the parachutes like?</h3>
                  <p className="text-foreground">
                    Skydivers always use modern sports parachutes: they're fully controllable, and you can land gently and smoothly with them.
                    Nothing like those big round military parachutes that you see in movies!
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Am I insured?</h3>
                  <p className="text-foreground">
                    When signing up for your intro day, you will automatically get a British Skydiving membership which includes insurance for third party legal liability and critical injury.
                    If you want, you may get your own insurance to also cover other personal accidents, but this is not necessary and most people find the British Skydiving insurance to be enough.
                    Find out more about your cover{" "}
                    <a
                      href="https://britishskydiving.org/insurance-travel/"
                      className="text-primary-foreground hover:text-primary-foreground/80 underline underline-offset-4 transition-colors font-medium"
                    >
                      here
                    </a>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Do I have to go frequently?</h3>
                  <p className="text-foreground">
                    Once you do your first jump, it is recommended that you do the next level at most one month afterwards.
                    If you take a break that's longer than one month but less than 3 months, you will have to do some revision before your next jump (which isn't that big of a deal).
                    However, if your break is 3 months or longer, you may have to attend a refresher ground school, which is more difficult to do.
                    Of course, if you don't end up liking skydiving (which has never happened to our knowledge!) you can always quit with the amazing knowledge that you have jumped out of an aeroplane totally on your own!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How do I learn to skydive? */}
          <section id="learn-to-skydive" className="mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">How do I learn to skydive?</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="mb-4">
                  At the Oxford Skydiving Club, we use the Accelerated Freefall (AFF) course programme to teach you to skydive safely and efficiently.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">1. Ground School</h3>
                <p className="mb-4">
                  When you sign up for a Friday intro day, you will get to go to the dropzone (the airport where we skydive) for a full-day theory course and get introduced to how skydiving works from the ground up.
                  You will cover how to jump out of the plane, how to control your body in freefall, and how to deploy and fly the parachute yourself.
                  Then, you will go through all of the emergency drills to get you prepared for anything that could ever go wrong while skydiving.
                  You will also practise all of these skills on the ground with a dummy parachute and aeroplane.
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
                  You will now be accompanied by only one instructor, who will let go of you after exiting the aeroplane and let you do drills under their supervision.
                  You will learn to turn left and right in a stable way.
                  From these levels onward, you are "freed" from the radio and can fly the canopy on your own.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">5. AFF Levels 6 and 7</h3>
                <p className="mb-4">
                  Now, you're already pretty skilled, and will get to have some fun in the air!
                  You will get to exit the aeroplane on your own, and learn to do backflips, tracks, and dive exits.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">6. AFF Level 8</h3>
                <p className="mb-4">
                  Normally, you will jump from 13,000 feet, but on this jump you will get to go lower and do a so-called "Hop-and-Pop" from only 5,000 feet simulating an aircraft emergency.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">7. Consolidation jumps</h3>
                <p className="mb-4">
                  That's the end of your training!
                  Now, you only have to do 10 jumps on your own in order to get your licence.
                  You will still need to do your pre-jump checks with an instructor, but now you can choose what to do on your own and go experience the real freedom of the air.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">A-licence</h3>
                <p className="mb-4">
                  Congrats, now you've got your licence!
                  The fun doesn't end here, though: now you can go onto advanced courses and learn to do Formation Skydiving (jumping with friends), Freeflying (doing acrobatics in the air), advanced canopy training, learn to be a jumpmaster, and many other things.
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
                  Modern skydiving is super duper safe! Here are some safety facts that you might find interesting:
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Safety Statistics</h3>
                <p className="mb-4">
                  For the last 20 years, the fatality rate in skydiving has been around 0.7 per 100,000 jumps.
                  Light injuries, such as spraining an ankle, occur at a rate of less than 1 in 2500 jumps.
                </p>
                <p className="mb-6">
                  This means that you're more likely to die driving a car or being struck by lightning than jumping out of a plane!
                </p>
                <blockquote className="border-l-4 border-primary/50 bg-card/40 backdrop-blur-sm p-6 my-6 italic text-lg">
                  <p className="text-foreground mb-2">
                    "Once you've driven to the airport, the most dangerous part of your skydiving day is already done" <br/>
                    — Conventional skydiver wisdom
                  </p>
                </blockquote>
                <h3 className="text-xl font-semibold mt-6 mb-3">What if my parachute doesn't open?</h3>
                <p className="mb-4">
                  When skydiving, you always have two parachutes: the main and the reserve.
                  Most routine opening problems (line twists, closed end cells, slider remaining up) can be dealt with easily by yourself, and you will learn to do so in ground school.
                  However, if you have a full parachute malfunction, you will always be able to cut away your main canopy and deploy your reserve canopy using two emergency handles on the front of your parachute.
                  You will also train to do this and other emergency drills very thoroughly during your ground school.
                </p>
                <p className="mb-4">
                  During your training, your parachutes will be packed by professional packers, making any malfunctions very unlikely.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">How reliable is the reserve parachute?</h3>
                <p className="mb-4">
                  Reserves are extremely reliable, and they will always save you if you have a main parachute malfunction.
                  Reserve parachutes are packed in a special way by professional parachute riggers that ensures their opening correctly every time.
                  When you deploy your reserve, a large spring pushes the parachute out into the airflow, making it open way quicker and more reliably than your main.
                  There have been no double malfunctions for solo parachutists in the UK for the last 20 years.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">What if I faint?</h3>
                <p className="mb-4">
                  Your instructors will open your parachute for you.
                  Also, even if everything goes wrong, there is a final safety feature: the Automatic Activation Device (AAD).
                  This is a small explosive placed in your rig that will physically open your reserve parachute if you do not do it yourself in time.
                  The CYPRES AAD devices we use have never failed since they were invented in 1991.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Other safety details:</h3>
                <p>Here are some other facts which show why skydiving as safe as it is:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Training: before you are allowed to jump, you will need to pass all the relevant theoretical and practical tests as well as malfunction drills during your ground school</li>
                  <li>Gear and packing: all of the gear is thoroughly inspected by professional riggers and packed by professional packers. The gear is high-quality and designed with student jumpers in mind</li>
                  <li>Instructors: your instructors have to have hundreds (if not thousands) of jumps and are both able to open your parachute and save you if anything goes wrong</li>
                  <li>Safety checks: before your jump, your gear will be thoroughly checked three times - once before you put it on, again when you have equipped it, and one final time in the aeroplane before your jump</li>
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
                  Unfortunately, yes.
                  Skydiving is actually relatively affordable once you have a licence, but getting your licence in the first place is quite expensive. 
                  Here are the approximate prices for skydiving:
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Licensed Skydiver Costs</h3>
                <div className="overflow-x-auto mb-6 rounded-lg border-2 border-border bg-card/60 backdrop-blur-sm md:w-3/4 mx-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b-2 border-border bg-foreground/10">
                        <TableHead className="text-foreground text-base font-black italic" style={{ fontFamily: "'Roboto', sans-serif" }}>Item</TableHead>
                        <TableHead className="text-foreground text-base text-right font-black italic" style={{ fontFamily: "'Roboto', sans-serif" }}>Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-b-2 border-border/50">
                        <TableCell className="text-foreground text-base">Regular jump ticket</TableCell>
                        <TableCell className="text-foreground text-base text-right">£30 per jump</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-foreground text-base">Gear rental (including repack)</TableCell>
                        <TableCell className="text-foreground text-base text-right">£20 per jump</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-3">Training costs</h3>
                <p className="mb-4">
                  Each AFF level is one jump.
                </p>
                <div className="overflow-x-auto mb-6 rounded-lg border-2 border-border bg-card/60 backdrop-blur-sm md:w-3/4 mx-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b-2 border-border bg-foreground/10">
                        <TableHead className="text-foreground text-base font-black italic" style={{ fontFamily: "'Roboto', sans-serif" }}>Stage</TableHead>
                        <TableHead className="text-foreground text-base text-right font-black italic" style={{ fontFamily: "'Roboto', sans-serif" }}>Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-b-2 border-border/50">
                        <TableCell className="text-foreground text-base">AFF Level 1 (ground school + first jump)</TableCell>
                        <TableCell className="text-foreground text-base text-right">£400</TableCell>
                      </TableRow>
                      <TableRow className="border-b-2 border-border/50">
                        <TableCell className="text-foreground text-base">AFF levels 2 and 3</TableCell>
                        <TableCell className="text-foreground text-base text-right">£230 each</TableCell>
                      </TableRow>
                      <TableRow className="border-b-2 border-border/50">
                        <TableCell className="text-foreground text-base">AFF levels 4, 5, 6, and 7</TableCell>
                        <TableCell className="text-foreground text-base text-right">£140 each</TableCell>
                      </TableRow>
                      <TableRow className="border-b-2 border-border/50">
                        <TableCell className="text-foreground text-base">AFF level 8</TableCell>
                        <TableCell className="text-foreground text-base text-right">£100</TableCell>
                      </TableRow>
                      <TableRow className="border-b-2 border-border/50">
                        <TableCell className="text-foreground text-base">10 consolidation jumps</TableCell>
                        <TableCell className="text-foreground text-base text-right">£60 each</TableCell>
                      </TableRow>
                      <TableRow className="border-t-2 border-foreground/30 bg-foreground/10">
                        <TableCell className="text-foreground text-base font-black italic" style={{ fontFamily: "'Roboto', sans-serif" }}>Total cost to get your A-licence</TableCell>
                        <TableCell className="text-foreground text-base text-right font-black italic" style={{ fontFamily: "'Roboto', sans-serif" }}>~£2100</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <p className="mb-4">
                  To get an A-licence with no prior experience, you must complete all 8 AFF levels and 10 solo consolidation jumps.
                  You do not pay them all at once, but each jump is charged separately on the day.
                  After this, you will be a licensed skydiver and will be able to jump on your own with the "Licensed Skydiver" pricing.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Own gear</h3>
                <p className="mb-4">
                  After you get your licence, you may also consider getting your own gear.
                  Basic gear like altimeters and helmets will cost you around £100-£400 each.
                  A full parachuting rig will set you back around £2000-£8000 depending on the make and model.
                  However, the Oxford Skydiving Club is planning on getting rigs that university students will be able to use for free!
                  You can always keep renting gear until you feel ready to purchase your own.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default About;
