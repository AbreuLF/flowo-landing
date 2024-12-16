import { Play } from "lucide-react";
import Image from "next/image";

interface VideoTestimonialProps {
  videoUrl: string;
  thumbnailUrl: string;
  clientName: string;
  clientRole: string;
}

export default function VideoTestimonial({
  videoUrl,
  thumbnailUrl,
  clientName,
  clientRole,
}: VideoTestimonialProps) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <Image
        src={thumbnailUrl}
        alt={`Depoimento de ${clientName}`}
        className="w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <a
          href={videoUrl}
          className="text-white hover:text-primary transition-colors"
        >
          <Play className="w-16 h-16" />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
        <p className="font-semibold">{clientName}</p>
        <p className="text-sm">{clientRole}</p>
      </div>
    </div>
  );
}
