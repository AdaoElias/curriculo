import { ContentIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { featuredProjects, otherProjects } from "@/lib/content";

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="border-b border-border/70 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          id="projects-title"
          eyebrow="Projetos"
          title="Ideias que viraram soluções."
          description="Projetos pessoais e acadêmicos que colocam em prática a experiência em sistemas, gestão e experiência do usuário."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group h-full gap-0 border-0 p-6 ring-1 ring-border/80 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ContentIcon name={project.icon} className="size-5" />
                </span>
                <span className="font-mono text-xs font-medium text-muted-foreground">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
                {project.category}
              </p>
              <h3 className="mt-1 font-heading text-lg font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 gap-0 border-0 p-6 ring-1 ring-border/80 sm:p-7">
          <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
            Outros projetos
          </h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {otherProjects.map((project) => (
              <div key={project.title} className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                  <ContentIcon name={project.icon} className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {project.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
