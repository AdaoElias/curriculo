import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Monogram } from "@/components/monogram";
import { navigation, profile } from "@/lib/content";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="bg-brand-dark text-white/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a
            href="#inicio"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
          >
            <Monogram className="size-9 bg-white/10 ring-1 ring-white/15" />
            <span>
              <span className="block font-heading text-sm font-semibold text-white">
                {profile.displayName}
              </span>
              <span className="mt-0.5 block text-xs">
                {profile.shortHeadline}
              </span>
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <nav
              aria-label="Navegação do rodapé"
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-sm py-1.5 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Adão Elias"
                className="flex size-9 items-center justify-center rounded-lg text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <GitHubIcon className="size-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Adão Elias"
                className="flex size-9 items-center justify-center rounded-lg text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Todos os direitos reservados.
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
