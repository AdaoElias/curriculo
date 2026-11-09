import { UsersRound } from "lucide-react";

import { ContentIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { behavioralSkills, skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="competencias"
      aria-labelledby="skills-title"
      className="border-b border-border/70 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          id="skills-title"
          eyebrow="Competências"
          title="Conhecimento técnico com visão de processo."
          description="Ferramentas, sistemas e métodos que uso para manter a operação funcionando e as pessoas preparadas."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="gap-4 border-0 p-6 ring-1 ring-border/80 transition-shadow hover:shadow-md hover:shadow-primary/5"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <ContentIcon name={group.icon} className="size-5" />
              </span>
              <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="h-auto px-2.5 py-1 font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 flex flex-col gap-5 border-0 bg-secondary/60 p-6 ring-1 ring-primary/10 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-primary/10">
              <UsersRound className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                Competências comportamentais
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                A base para liderar equipes, ensinar com clareza e entregar com
                consistência.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:max-w-md sm:justify-end">
            {behavioralSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-white">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
