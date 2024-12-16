import { CheckCircle } from "lucide-react";

interface TimelineEvent {
  title: string;
  description: string;
}

interface ImplementationTimelineProps {
  events: TimelineEvent[];
}

export default function ImplementationTimeline({
  events,
}: ImplementationTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
      {events.map((event, index) => (
        <div key={index} className="mb-8 flex items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
