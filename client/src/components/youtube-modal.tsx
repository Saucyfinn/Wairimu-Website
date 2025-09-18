import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface YouTubeModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title?: string;
}

export default function YouTubeModal({ isOpen, onClose, videoId, title = "Property Video" }: YouTubeModalProps) {
  const youtubeUrl = `https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&autoplay=0`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full max-h-full w-screen h-screen p-0 border-0">
        <div className="relative w-full h-full bg-black">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white"
            data-testid="close-video-modal"
          >
            <X className="h-6 w-6" />
          </Button>
          
          {/* YouTube iframe */}
          <iframe
            src={youtubeUrl}
            title={title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
            data-testid="youtube-video-iframe"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}