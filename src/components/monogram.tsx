import { cn } from "@/lib/utils";

export function Monogram({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "lg";
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl bg-primary font-heading font-semibold tracking-tight text-primary-foreground",
        size === "lg" ? "size-16 text-2xl" : "size-10 text-sm",
        className,
      )}
    >
      AE
    </span>
  );
}
