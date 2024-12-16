import CountUp from "react-countup";
import { LucideIcon } from "lucide-react";

interface KeyResult {
  icon: LucideIcon;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

interface KeyResultsProps {
  results: KeyResult[];
}

export default function KeyResults({ results }: KeyResultsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {results.map((result, index) => {
        const Icon = result.icon;
        return (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-200"
          >
            <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <div className="text-3xl font-bold text-gray-800">
              {result.prefix}
              <CountUp end={result.value} duration={2} />
              {result.suffix}
            </div>
            <div className="text-sm text-gray-600 mt-2">{result.label}</div>
          </div>
        );
      })}
    </div>
  );
}
