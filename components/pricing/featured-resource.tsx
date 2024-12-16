import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

interface FeaturedResourceProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export function FeaturedResource({
  icon: Icon,
  title,
  description,
  benefits,
}: FeaturedResourceProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-4 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
