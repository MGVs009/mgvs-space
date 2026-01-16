import CubeLogo from "./CubeLogo";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-8 pb-16">
      <div className="text-center animate-fade-in">
        <CubeLogo className="mx-auto mb-6" />
        
        <h1 className="text-4xl md:text-5xl font-bold font-display tracking-wide mb-2">
          MGVs
        </h1>
        <p className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-12">
          Mentoring & Growing Visionaries
        </p>
      </div>

      <div className="text-center animate-fade-in-delay-1">
        <h2 className="hero-title uppercase">
          Everyone is too{" "}
          <span className="text-gradient">different</span>
          {" "}for the
        </h2>
        <h2 className="hero-title uppercase">
          world not to{" "}
          <span className="text-gradient">adapt</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
