"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Menu } from "lucide-react";

import { Monogram } from "@/components/monogram";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation, profile } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Monogram className="size-9 transition-transform group-hover:-rotate-3" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
              Adão Elias
            </span>
            <span className="mt-1 text-[11px] font-medium tracking-wide text-muted-foreground">
              Técnico de TI
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contato"
            className={cn(
              buttonVariants({ size: "sm" }),
              "h-9 gap-1.5 px-4 text-sm",
            )}
          >
            Contato
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="size-11 md:hidden"
                aria-label="Abrir menu de navegação"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-[86vw] max-w-sm gap-0">
            <SheetHeader className="border-b border-border/70 px-5 py-5">
              <SheetTitle className="flex items-center gap-3">
                <Monogram className="size-9" />
                <span className="flex flex-col text-left">
                  <span className="font-heading text-sm font-semibold">
                    Adão Elias
                  </span>
                  <span className="text-xs font-normal text-muted-foreground">
                    Navegação
                  </span>
                </span>
              </SheetTitle>
              <SheetDescription className="sr-only">
                Menu de navegação do currículo de Adão Elias.
              </SheetDescription>
            </SheetHeader>

            <nav
              aria-label="Navegação mobile"
              className="flex flex-1 flex-col gap-1 p-4"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="border-t border-border/70 p-4">
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ size: "lg" }), "h-10 w-full")}
              >
                <Mail aria-hidden="true" />
                Enviar e-mail
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
