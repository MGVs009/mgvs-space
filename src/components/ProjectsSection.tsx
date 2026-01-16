import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          Our Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProjectCard
            title="The Wheel Willchair"
            titleHighlight="Wheel"
            description="The 'WillChair' project began as a challenge proposed by one of our robotics teachers, who has limited mobility and uses a wheelchair. He asked us to develop a rear camera system for his wheelchair to assist with navigation. We enthusiastically accepted the challenge and decided to go further: we designed modular upgrades for the wheelchair, including a built-in speaker and independent internet connectivity."
            delay="animate-fade-in"
          />
          
          <ProjectCard
            title="Our approach to cognitive evaluation"
            titleHighlight="Our"
            description="This project began from our frustration with the imprecision of traditional IQ tests, we wanted an open, mathematically sound model, one that includes creativity, practical skills, neurodivergence, and above all, social adversity, inspired by the Multidimensional Human Development Index, we designed a flexible cognitive index, one that adjusts for educational inequality and systemic context."
            delay="animate-fade-in-delay-1"
          />
          
          <ProjectCard
            title="3xpr3ssionist"
            comingSoon
            delay="animate-fade-in-delay-2"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
