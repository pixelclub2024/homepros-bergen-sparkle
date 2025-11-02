import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
        <ServiceCategories />
        <HowItWorks />
        <FeaturedServices />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
