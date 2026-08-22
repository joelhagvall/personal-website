import { AnimatedCard } from "@/components/AnimatedCard";
import { TECH_STACK, type TechStackItem } from "@/data/tech-stack";
import { HOME_CONTENT } from "@/data/content";

function TechIcon({ tech }: { tech: TechStackItem }) {
  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${tech.name} (opens in new tab)`}
      className="w-16 h-16 p-3 flex items-center justify-center hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
    >
      <img
        src={tech.icon}
        alt={`${tech.name} logo`}
        className={`w-full h-full ${"rounded" in tech && tech.rounded ? "rounded" : ""}`}
      />
    </a>
  );
}

export function TechStackCard() {
  return (
    <AnimatedCard as="section" aria-labelledby="tech-stack-heading" className="col-span-full md:col-span-2">
      <h2 id="tech-stack-heading" className="text-2xl font-semibold mb-4">
        {HOME_CONTENT.techStack.heading}
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4" role="list" aria-label="Technologies">
          {TECH_STACK.map((tech) => (
            <div key={tech.name} role="listitem">
              <TechIcon tech={tech} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
}
