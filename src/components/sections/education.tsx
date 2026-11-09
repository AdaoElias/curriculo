import { BookOpen, Languages } from "lucide-react";

import { ContentIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { courses, education, languages } from "@/lib/content";

export function Education() {
  return (
    <section
      id="formacao"
      aria-labelledby="education-title"
      className="border-b border-border/70 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          id="education-title"
          eyebrow="Formação"
          title="Aprendizado contínuo, aplicado na prática."
          description="Formação técnica em tecnologia, graduação em andamento e especializações que sustentam a atuação em suporte, infraestrutura e educação."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Formação acadêmica
            </h3>
            <div className="mt-4 space-y-4">
              {education.map((item) => (
                <Card
                  key={item.title}
                  className="gap-4 border-0 p-6 ring-1 ring-border/80"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                      <ContentIcon name={item.icon} className="size-5" />
                    </span>
                    {item.current ? (
                      <Badge variant="secondary" className="font-medium">
                        Em andamento
                      </Badge>
                    ) : null}
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Cursos e especializações
              </h3>
              <Card className="mt-4 gap-0 divide-y divide-border border-0 p-0 ring-1 ring-border/80">
                {courses.map((course) => (
                  <div
                    key={course}
                    className="flex items-start gap-3 px-5 py-3.5 first:pt-5 last:pb-5"
                  >
                    <BookOpen
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {course}
                    </span>
                  </div>
                ))}
              </Card>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                <Languages className="size-3.5" aria-hidden="true" />
                Idiomas
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {languages.map((language) => (
                  <Card
                    key={language.name}
                    className="gap-1 border-0 p-5 ring-1 ring-border/80"
                  >
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {language.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language.level}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
