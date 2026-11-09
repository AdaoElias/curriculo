import { FileText, GraduationCap, Workflow } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { highlights, profile } from "@/lib/content";

const highlightIcons = [Workflow, FileText, GraduationCap];

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="border-b border-border/70 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            id="about-title"
            eyebrow="Sobre"
            title="Tecnologia com didática, método e continuidade."
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <div className="space-y-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            <p>{profile.about}</p>
            <p>{profile.aboutSecondary}</p>
            <p className="font-medium text-foreground">
              O resultado é um perfil que transita entre a operação técnica e a
              gestão de pessoas, com foco em processos que continuam
              funcionando.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = highlightIcons[index] ?? Workflow;

            return (
              <Card
                key={item.title}
                className="gap-4 border-0 p-6 ring-1 ring-border/80 transition-shadow hover:shadow-md hover:shadow-primary/5"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
