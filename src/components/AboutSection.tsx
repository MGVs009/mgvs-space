import { Search } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary flex items-center justify-center">
              <Search className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
              About us
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              We're MGVs, a non-profit founded by a group of Portuguese teenagers who believe education should be 
              open and truly work for everyone. Our goal is to promote accessibility, both in learning and in physical 
              access to tools and resources, and to explore how technology can help create a more inclusive and 
              adapted society. We want to break barriers, open opportunities, and build a future where anyone, 
              anywhere, can learn in their own way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
