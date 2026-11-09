import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
          align === "center" && "justify-center",
          tone === "light" ? "text-accent" : "text-white/70",
        )}
      >
        <span
          className={cn(
            "h-px w-6",
            tone === "light" ? "bg-accent" : "bg-white/50",
          )}
          aria-hidden="true"
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          tone === "light" ? "text-foreground" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-pretty sm:text-lg",
            tone === "light" ? "text-muted-foreground" : "text-white/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
