import { Award, Check } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { achievements, experiences } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="border-b border-border/70 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          id="experience-title"
          eyebrow="Trajetória"
          title="Experiência profissional"
          description="Uma trajetória que une administração, educação e tecnologia — sempre com foco em organização, treinamento e resultados duradouros."
        />

        <div className="mt-12 space-y-10">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="grid gap-5 lg:grid-cols-[13.5rem_1fr] lg:gap-10"
            >
              <div className="lg:pt-1">
                <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                  {experience.company}
                </h3>
                <Badge variant="outline" className="mt-2 text-muted-foreground">
                  {experience.area}
                </Badge>
              </div>

              <div className="relative space-y-4 border-l border-border pl-6 lg:pl-8">
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-[5px] size-2.5 rounded-full bg-primary ring-4 ring-background"
                />

                {experience.roles.map((role) => (
                  <Card
                    key={role.title}
                    className="gap-0 border-0 p-6 ring-1 ring-border/80 transition-shadow hover:shadow-md hover:shadow-primary/5"
                  >
                    <h4 className="font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {role.title}
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {role.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Card className="relative mt-12 gap-0 overflow-hidden border-0 bg-primary p-6 text-primary-foreground ring-0 sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-16 size-64 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -top-12 -right-8 size-48 rounded-full border border-white/10"
          />
          <div className="relative flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <Award className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                Conquistas profissionais
              </h3>
              <p className="text-sm text-white/70">
                Entregas que geraram resultado e continuidade.
              </p>
            </div>
          </div>

          <ul className="relative mt-6 grid gap-3 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <li
                key={achievement}
                className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-white/70">
                  0{index + 1}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  {achievement}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
