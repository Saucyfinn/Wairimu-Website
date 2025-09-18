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
  const youtubeUrl = `https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&autoplay=0&playsinline=1`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full max-h-full w-screen h-screen p-0 border-0 bg-black">
        <div className="relative w-full h-full bg-black">
          {/* Close button - Mobile optimized */}
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-black/70 hover:bg-black/90 text-white min-h-[48px] min-w-[48px] rounded-full touch-target"
            data-testid="close-video-modal"
            aria-label="Close video"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
          
          {/* Video container with proper mobile handling */}
          <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
            {/* YouTube iframe */}
            <iframe
              src={youtubeUrl}
              title={title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full max-w-none border-0 rounded-lg"
              style={{ aspectRatio: '16/9' }}
              data-testid="youtube-video-iframe"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}