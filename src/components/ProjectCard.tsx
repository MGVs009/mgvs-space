import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  titleHighlight?: string;
  description?: string;
  comingSoon?: boolean;
  delay?: string;
}

const ProjectCard = ({ title, titleHighlight, description, comingSoon = false, delay = "" }: ProjectCardProps) => {
  return (
    <div className={`card-gradient rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:glow-accent ${delay}`}>
      <h3 className="text-lg md:text-xl font-bold font-display mb-4">
        «{titleHighlight ? (
          <>
            <span className="text-gradient line-through decoration-2">{titleHighlight}</span>
            {" "}{title.replace(titleHighlight, "")}
          </>
        ) : (
          title
        )}»
      </h3>
      
      {comingSoon ? (
        <p className="text-muted-foreground text-sm uppercase tracking-widest">
          Coming Soon...
        </p>
      ) : (
        <>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <button className="inline-flex items-center gap-2 text-primary text-sm hover:gap-3 transition-all duration-200">
            Click here to learn more
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
