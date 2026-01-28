import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

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

  const featuredItem = galleryItems?.find(item => item.is_featured);
  const regularItems = galleryItems?.filter(item => !item.is_featured) || [];

  return (
    <div className="relative z-10 px-6 sm:px-8 max-w-6xl mx-auto w-full py-8 sm:py-12 pb-16 sm:pb-24">
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-6 sm:mb-8 text-center">
        Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Featured item - large */}
        {featuredItem && (
          <div className="col-span-2 sm:col-span-3 lg:col-span-4 flex flex-col">
            <div className="flex-1 aspect-video bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 overflow-hidden transition-all duration-300 hover:bg-white/30 hover:scale-[1.02]">
              {isVideo(featuredItem.filename) ? (
                <video
                  src={getMediaUrl(featuredItem.filename)}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                />
              ) : (
                <img
                  src={getMediaUrl(featuredItem.filename)}
                  alt={featuredItem.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
            <p className="text-primary-foreground/80 text-sm mt-2 text-center">{featuredItem.caption}</p>
          </div>
        )}

        {/* Regular items */}
        {regularItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl border-2 border-primary-foreground/20 overflow-hidden transition-all duration-300 hover:bg-white/30 hover:scale-[1.02]">
              {isVideo(item.filename) ? (
                <video
                  src={getMediaUrl(item.filename)}
                  className="w-full h-full object-cover"
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
            <p className="text-primary-foreground/80 text-sm mt-2 text-center">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
