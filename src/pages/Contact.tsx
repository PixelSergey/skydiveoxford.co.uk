import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8 text-center">
            Contact Us
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-primary-foreground mb-4">
                Get in Touch
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Email:</strong> info@oxfordskydiving.co.uk
                </p>
                <p>
                  <strong>Phone:</strong> +44 1234 567890
                </p>
                <p>
                  <strong>Address:</strong><br />
                  Oxford Skydiving Club<br />
                  Hinton-in-the-Hedges Airfield<br />
                  Brackley, Northamptonshire<br />
                  NN13 5NS
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary-foreground mb-4">
                Opening Hours
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Sunday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Weekdays:</strong> By appointment only</p>
              </div>
              
              <h2 className="text-2xl font-semibold text-primary-foreground mb-4 mt-8">
                Follow Us
              </h2>
              <p className="text-muted-foreground">
                Stay updated with our latest jumps and events on Instagram!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;