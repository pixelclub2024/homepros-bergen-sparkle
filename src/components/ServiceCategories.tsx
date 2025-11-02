import { Card } from "@/components/ui/card";
import {
  Waves,
  Zap,
  Wrench,
  TreePine,
  Axe,
  Construction,
  Home,
  Wind,
  Sparkles,
  Plus,
} from "lucide-react";

const services = [
  { name: "Pool Service", icon: Waves, color: "text-blue-500" },
  { name: "Electrician", icon: Zap, color: "text-yellow-500" },
  { name: "Plumber", icon: Wrench, color: "text-blue-600" },
  { name: "Landscaping", icon: TreePine, color: "text-green-600" },
  { name: "Tree Removal", icon: Axe, color: "text-amber-700" },
  { name: "Driveway Paving", icon: Construction, color: "text-gray-600" },
  { name: "Roofing", icon: Home, color: "text-red-600" },
  { name: "Gutter Cleaning", icon: Wind, color: "text-slate-600" },
  { name: "Power Washing", icon: Sparkles, color: "text-cyan-500" },
  { name: "More Services", icon: Plus, color: "text-muted-foreground" },
];

const ServiceCategories = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the right professional for your home improvement and maintenance needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className="group cursor-pointer hover:shadow-medium transition-all duration-300 bg-gradient-card border-border hover:border-primary/50 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-6 flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
