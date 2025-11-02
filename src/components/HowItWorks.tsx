import { Card } from "@/components/ui/card";
import { Search, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Service",
    description: "Browse our categories or search for the specific home service you need",
    step: "01",
  },
  {
    icon: Users,
    title: "Compare Providers",
    description: "Review vetted professionals, ratings, and services offered in your area",
    step: "02",
  },
  {
    icon: CheckCircle,
    title: "Get Connected",
    description: "Contact your chosen provider directly and schedule your service",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding the right home service professional has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="relative p-8 bg-gradient-card border-border hover:shadow-medium transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-medium">
                {step.step}
              </div>
              <div className="flex flex-col items-center text-center pt-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
