import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { CopyEmail } from "@/components/copy-email";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-8%] size-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.10),_transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 left-[-10%] size-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,0.18),_transparent_65%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              id="contact-title"
              eyebrow="Contato"
              title="Vamos conversar sobre o próximo desafio?"
              description="Estou à disposição para conversar sobre suporte, infraestrutura, docência, coordenação pedagógica e projetos de tecnologia."
              tone="dark"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 gap-2 bg-white px-5 text-sm text-primary hover:bg-white/90",
                )}
              >
                <Mail aria-hidden="true" />
                Enviar e-mail
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 gap-2 border-white/25 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white",
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
                  "h-11 gap-2 border-white/25 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white",
                )}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <Card className="gap-0 border-0 bg-white/[0.06] p-6 ring-1 ring-white/15 backdrop-blur sm:p-7">
            <h3 className="font-heading text-base font-semibold tracking-tight text-white">
              Canais diretos
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Escolha o canal que preferir para iniciar a conversa.
            </p>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-white/[0.05] p-3 ring-1 ring-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="mt-0.5 block py-0.5 break-all text-sm font-medium text-white transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <CopyEmail email={profile.email} />
                </div>
              </div>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl bg-white/[0.05] p-3 ring-1 ring-white/10 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                  <LinkedInIcon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase">
                    LinkedIn
                  </p>
                  <p className="mt-0.5 text-sm font-medium break-all text-white">
                    linkedin.com/in/adao-elias
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 size-4 shrink-0 text-white/40 transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl bg-white/[0.05] p-3 ring-1 ring-white/10 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                  <GitHubIcon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase">
                    GitHub
                  </p>
                  <p className="mt-0.5 text-sm font-medium break-all text-white">
                    github.com/AdaoElias
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 size-4 shrink-0 text-white/40 transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
