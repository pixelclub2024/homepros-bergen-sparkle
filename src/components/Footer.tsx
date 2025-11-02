import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">BC</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Bergen County Services</h3>
                <p className="text-xs text-primary-foreground/80">Your Local Home Experts</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Connecting Bergen County homeowners with trusted local service professionals since 2024.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Pool Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Electrician</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Plumber</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Landscaping</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">View All</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">List Your Business</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Serving all of Bergen County, NJ
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Bergen County Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
