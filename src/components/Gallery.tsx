import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface GalleryItem {
  id: string;
  filename: string;
  caption: string;
  display_order: number;
  media_type: string;
  is_featured: boolean;
}

const STORAGE_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/media`;

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const { data: galleryItems, isLoading, error } = useQuery({
    queryKey: ["gallery-items"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery_items")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as GalleryItem[];
    },
  });

  const isVideo = (filename: string) => {
    const ext = filename.toLowerCase().split('.').pop();
    return ['mp4', 'mov', 'webm', 'avi'].includes(ext || '');
  };

  const getMediaUrl = (filename: string) => `${STORAGE_URL}/${filename}`;

  if (isLoading) {
    return (
      <div className="relative z-10 px-6 sm:px-8 max-w-6xl mx-auto w-full py-8 sm:py-12 pb-16 sm:pb-24">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-6 sm:mb-8 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col animate-pulse">
              <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl" />
              <div className="h-4 bg-white/10 rounded mt-2 w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative z-10 px-6 sm:px-8 max-w-6xl mx-auto w-full py-8 sm:py-12 pb-16 sm:pb-24">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-6 sm:mb-8 text-center">
          Gallery
        </h2>
        <p className="text-primary-foreground/60 text-center">Unable to load gallery</p>
      </div>
    );
  }

  return (
    <div className="relative z-10 px-6 sm:px-8 max-w-6xl mx-auto w-full py-8 sm:py-12 pb-16 sm:pb-24">
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-6 sm:mb-8 text-center">
        Gallery
      </h2>
      <div className="flex flex-col gap-6 sm:gap-8">
        {galleryItems?.map((item, index) => {
          // Check if this is a featured item
          if (item.is_featured) {
            return (
              <div key={item.id} className="flex flex-col -mx-6 sm:-mx-8" style={{ width: 'calc(100% + 3rem)' }}>
                <div className="w-full aspect-video bg-black overflow-hidden">
                  {isVideo(item.filename) ? (
                    <video
                      src={getMediaUrl(item.filename)}
                      className="w-full h-full object-contain"
                      controls
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={getMediaUrl(item.filename)}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <p className="text-primary-foreground/80 text-sm mt-2 text-center px-6">{item.caption}</p>
              </div>
            );
          }

          // For regular items, group them into a grid
          // Check if this is the first non-featured item after a featured item or start
          const prevItem = index > 0 ? galleryItems[index - 1] : null;
          const isFirstInGroup = !prevItem || prevItem.is_featured;

          // Collect consecutive non-featured items for this grid
          if (isFirstInGroup) {
            const gridItems: GalleryItem[] = [];
            for (let i = index; i < galleryItems.length; i++) {
              if (galleryItems[i].is_featured) break;
              gridItems.push(galleryItems[i]);
            }

            return (
              <div key={`grid-${item.id}`} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {gridItems.map((gridItem) => (
                  <div key={gridItem.id} className="flex flex-col">
                    <div 
                      className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 overflow-hidden transition-all duration-300 hover:bg-white/30 hover:scale-[1.02] cursor-pointer"
                      onClick={() => setSelectedItem(gridItem)}
                    >
                      {isVideo(gridItem.filename) ? (
                        <video
                          src={getMediaUrl(gridItem.filename)}
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={getMediaUrl(gridItem.filename)}
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
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto p-0 bg-black/90 border-none overflow-hidden">
          {selectedItem && (
            <div className="flex flex-col items-center">
              {isVideo(selectedItem.filename) ? (
                <video
                  src={getMediaUrl(selectedItem.filename)}
                  className="max-w-full max-h-[80vh] object-contain"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={getMediaUrl(selectedItem.filename)}
                  alt={selectedItem.caption}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
              <p className="text-white/80 text-sm py-3 px-4 text-center">{selectedItem.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
