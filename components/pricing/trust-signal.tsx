import { type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface TrustSignalProps {
  icon: string;
  title: string;
  description: string;
}

export function TrustSignal({ icon, title, description }: TrustSignalProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon;

  return (
    <div>
      <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
