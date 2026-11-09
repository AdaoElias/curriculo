import { ArrowRight, MapPin } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Monogram } from "@/components/monogram";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border/70"
    >
      <div className="bg-hero-grid absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-10%] size-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(15,118,110,0.16),_transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 left-[-12%] size-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(15,76,92,0.10),_transparent_65%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-16 pb-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="animate-rise">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              <span className="inline-flex items-center gap-2">
                <span
                  className="size-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {profile.shortHeadline}
              </span>
              <span
                className="hidden h-3 w-px bg-border sm:block"
                aria-hidden="true"
              />
              <span className="inline-flex items-center gap-1.5 font-medium tracking-normal text-muted-foreground normal-case">
                <MapPin className="size-3.5" aria-hidden="true" />
                {profile.location}
              </span>
            </p>

            <h1
              id="hero-title"
              className="mt-5 font-heading text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              Adão <span className="text-primary">Elias</span>
            </h1>

            <p className="mt-4 max-w-xl text-lg font-medium text-pretty text-foreground/90 sm:text-xl">
              {profile.headline}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 gap-2 px-5 text-sm",
                )}
              >
                Falar por e-mail
                <ArrowRight aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 gap-2 px-5 text-sm",
                )}
              >
                <LinkedInIcon className="size-4" />
                Ver LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 gap-2 px-5 text-sm",
                )}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs leading-snug font-medium text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-rise rise-delay-2">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
              />
              <Card className="gap-0 overflow-hidden border-0 bg-white/85 p-0 shadow-xl shadow-primary/5 ring-1 ring-primary/10 backdrop-blur">
                <div className="relative overflow-hidden bg-primary px-6 py-7 text-primary-foreground">
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-12 size-44 rounded-full border border-white/10"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -top-8 -right-6 size-32 rounded-full border border-white/10"
                  />
                  <Monogram
                    size="lg"
                    className="bg-white/10 ring-1 ring-white/20 backdrop-blur"
                  />
                  <p className="mt-5 font-heading text-lg font-semibold tracking-tight">
                    Perfil profissional
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Tecnologia, processos e educação.
                  </p>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-secondary text-primary">
                      <MapPin className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                        Localização
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {profile.location}
                      </p>
                    </div>
                  </div>

                  <Separator className="my-5" />

                  <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Áreas de atuação
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {profile.actingAreas.map((area) => (
                      <Badge
                        key={area}
                        variant="secondary"
                        className="h-auto px-2.5 py-1 font-medium"
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-secondary/70 p-4 ring-1 ring-primary/5">
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                      Formação em andamento
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Análise e Desenvolvimento de Sistemas
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Conclusão prevista para novembro de 2026
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
