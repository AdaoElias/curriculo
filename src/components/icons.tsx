import {
  Activity,
  Car,
  ClipboardList,
  Download,
  FileSpreadsheet,
  GraduationCap,
  HeartPulse,
  Monitor,
  Music,
  Network,
  PenTool,
  School,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  car: Car,
  "clipboard-list": ClipboardList,
  download: Download,
  "file-spreadsheet": FileSpreadsheet,
  "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse,
  monitor: Monitor,
  music: Music,
  network: Network,
  "pen-tool": PenTool,
  school: School,
  sparkles: Sparkles,
  users: Users,
  wrench: Wrench,
};

export function ContentIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Sparkles;

  return <Icon className={className} aria-hidden="true" />;
}
