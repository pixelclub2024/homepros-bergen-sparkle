import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone } from "lucide-react";

const featured = [
  {
    name: "Elite Pool Solutions",
    category: "Pool Service",
    rating: 4.9,
    reviews: 127,
    location: "Paramus, NJ",
    description: "Professional pool maintenance, cleaning, and repair services",
  },
  {
    name: "Bergen Electric Pro",
    category: "Electrician",
    rating: 5.0,
    reviews: 89,
    location: "Hackensack, NJ",
    description: "Licensed electricians for residential and commercial projects",
  },
  {
    name: "GreenScape Masters",
    category: "Landscaping",
    rating: 4.8,
    reviews: 156,
    location: "Ridgewood, NJ",
    description: "Full-service landscaping, design, and maintenance",
  },
  {
    name: "Summit Roofing",
    category: "Roofing",
    rating: 4.9,
    reviews: 93,
    location: "Fair Lawn, NJ",
    description: "Expert roof installation, repair, and replacement",
  },
];

const FeaturedServices = () => {
  return (
    <section id="featured" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Service Providers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highly-rated professionals trusted by Bergen County homeowners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((provider, index) => (
            <Card
              key={provider.name}
              className="p-6 bg-gradient-card border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{provider.name}</h3>
                    <p className="text-sm text-secondary font-medium">{provider.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">{provider.rating}</span>
                  <span className="text-sm text-muted-foreground">({provider.reviews})</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{provider.description}</p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {provider.location}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" className="flex-1 bg-secondary hover:bg-secondary/90">
                  <Phone className="w-4 h-4 mr-1" />
                  Contact
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
