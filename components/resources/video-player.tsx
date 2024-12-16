import { useState } from "react";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export function VideoPlayer({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoPlayerProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            playing={isReady}
            onReady={() => setIsReady(true)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
