import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">BC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Bergen County Services</h1>
              <p className="text-xs text-muted-foreground">Your Local Home Experts</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#featured" className="text-foreground hover:text-primary transition-colors">
              Featured
            </a>
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              List Your Business
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in-up">
            <a
              href="#services"
              className="block text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block text-foreground hover:text-primary transition-colors py-2"
            >
              How It Works
            </a>
            <a
              href="#featured"
              className="block text-foreground hover:text-primary transition-colors py-2"
            >
              Featured
            </a>
            <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
              List Your Business
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
