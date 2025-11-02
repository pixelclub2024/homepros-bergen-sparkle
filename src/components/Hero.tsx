import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/80" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Find Trusted Home Service Pros in Bergen County
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Connect with vetted local professionals for all your home service needs
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search for a service..."
                className="pl-12 h-14 text-lg bg-background/95 backdrop-blur-sm border-2 focus:border-accent"
              />
            </div>
            <Button size="lg" className="h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              Search
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-primary-foreground/80 text-sm">Popular:</span>
            {["Plumbing", "Electrician", "Landscaping", "Roofing"].map((service) => (
              <button
                key={service}
                className="px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground text-sm hover:bg-background/30 transition-colors"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
