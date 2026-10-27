import { useState } from "react";
import { galleryItems, type GalleryEntry } from "@/content";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryEntry | null>(null);

  if (galleryItems.length === 0) return null;

  return (
    <div id="gallery" className="relative z-10 px-6 sm:px-8 max-w-6xl mx-auto w-full py-8 sm:py-12 pb-16 sm:pb-24 scroll-mt-20">
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-6 sm:mb-8 text-center">
        Gallery
      </h2>
      <div className="flex flex-col gap-6 sm:gap-8">
        {galleryItems.map((item, index) => {
          // Check if this is a featured item
          if (item.featured) {
            return (
              <div key={item.file} className="flex flex-col items-center">
                <div className="w-full max-w-[75%] aspect-video bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 overflow-hidden">
                  {item.isVideo ? (
                    <video
                      src={item.url}
                      className="w-full h-full object-contain bg-black"
                      controls
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <p className="text-primary-foreground/80 text-sm mt-2 text-center">{item.caption}</p>
              </div>
            );
          }

          // For regular items, group them into a grid
          // Check if this is the first non-featured item after a featured item or start
          const prevItem = index > 0 ? galleryItems[index - 1] : null;
          const isFirstInGroup = !prevItem || prevItem.featured;

          // Collect consecutive non-featured items for this grid
          if (isFirstInGroup) {
            const gridItems: GalleryEntry[] = [];
            for (let i = index; i < galleryItems.length; i++) {
              if (galleryItems[i].featured) break;
              gridItems.push(galleryItems[i]);
            }

            return (
              <div key={`grid-${item.file}`} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {gridItems.map((gridItem) => (
                  <div key={gridItem.file} className="flex flex-col">
                    <div 
                      className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 overflow-hidden transition-all duration-300 hover:bg-white/30 hover:scale-[1.02] cursor-pointer"
                      onClick={() => setSelectedItem(gridItem)}
                    >
                      {gridItem.isVideo ? (
                        <video
                          src={gridItem.url}
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={gridItem.url}
                          alt={gridItem.caption}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <p className="text-primary-foreground/80 text-sm mt-2 text-center">{gridItem.caption}</p>
                  </div>
                ))}
              </div>
            );
          }

          // Skip items that are part of a grid already rendered
          return null;
        })}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="fixed left-0 top-0 z-50 grid h-[100dvh] w-full max-w-none translate-x-0 translate-y-0 gap-0 overflow-hidden border-none bg-black/95 p-0 sm:left-[50%] sm:top-[50%] sm:h-[90vh] sm:w-[90vw] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-lg">
          {selectedItem && (
            <div className="flex h-full w-full flex-col items-center">
              <div className="relative min-h-0 w-full flex-1">
                {selectedItem.isVideo ? (
                  <video
                    src={selectedItem.url}
                    className="absolute inset-0 h-full w-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.caption}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                )}
              </div>
              <p className="w-full px-4 py-2 text-center text-xs text-white/70 sm:py-3 sm:text-sm">
                {selectedItem.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
