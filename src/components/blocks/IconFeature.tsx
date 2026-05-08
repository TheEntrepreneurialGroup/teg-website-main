import { Search, Briefcase, CheckSquare } from "lucide-react";

interface IconFeatureProps {
  icon: "search-people" | "briefcase" | "checklist";
  title: string;
  subtitle: string;
}

export function IconFeature({ icon, title, subtitle }: IconFeatureProps) {
  const iconMap = {
    "search-people": Search,
    briefcase: Briefcase,
    checklist: CheckSquare,
  };

  const Icon = iconMap[icon];

  return (
    <div className="flex flex-col items-center text-center gap-3 p-6 w-max lg:max-w-[33.333%] md:max-w-[50%]">
      <Icon className="w-16 h-16" strokeWidth={1.5} />
      <div>
        <h3 className="text-xl font-normal mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
