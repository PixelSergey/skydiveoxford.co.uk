-- Create gallery_items table to store media metadata
CREATE TABLE public.gallery_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL UNIQUE,
  caption TEXT NOT NULL,
  display_order INTEGER NOT NULL,
  media_type TEXT NOT NULL DEFAULT 'image',
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view gallery items (public gallery)
CREATE POLICY "Anyone can view gallery items"
  ON public.gallery_items
  FOR SELECT
  USING (true);

-- Insert initial data based on the files in the media bucket
INSERT INTO public.gallery_items (filename, caption, display_order, media_type, is_featured) VALUES
  ('MiaL2P.mp4', 'Mia''s Level 2 Progression Jump', 1, 'video', true),
  ('beautifulview.heic', 'Breathtaking view from above', 2, 'image', false),
  ('bob.heic', 'Bob ready for takeoff', 3, 'image', false),
  ('bobwalking.heic', 'Bob walking to the plane', 4, 'image', false),
  ('daisy-sergey.HEIC', 'Daisy and Sergey post-jump', 5, 'image', false),
  ('groundschool.heic', 'Ground school training session', 6, 'image', false),
  ('jumpcomplete.heic', 'Successful jump complete!', 7, 'image', false),
  ('landing.mp4', 'Perfect landing sequence', 8, 'video', false),
  ('lvl1done.heic', 'Level 1 complete - celebrating!', 9, 'image', false),
  ('melika.heic', 'Melika''s first solo jump', 10, 'image', false),
  ('miayay.heic', 'Mia celebrating after her jump', 11, 'image', false),
  ('parachutegs.heic', 'Parachute ground school practice', 12, 'image', false),
  ('readytofly.mov', 'Ready to fly!', 13, 'video', false),
  ('rodin.heic', 'Rodin in freefall', 14, 'image', false),
  ('sergey-haotian.heic', 'Sergey and Haotian duo jump', 15, 'image', false),
  ('sky.heic', 'Blue skies above', 16, 'image', false),
  ('walkingtoplane.mov', 'Walking to the aircraft', 17, 'video', false);