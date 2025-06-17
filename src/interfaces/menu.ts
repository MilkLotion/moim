import type { LucideIcon } from "lucide-react";

export interface SidebarMenuSection {
  label: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  iconDirection?: "left" | "right";
  path: string;
}
