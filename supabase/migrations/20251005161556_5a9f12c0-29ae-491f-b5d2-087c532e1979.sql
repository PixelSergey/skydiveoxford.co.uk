-- Create intro_days table
CREATE TABLE public.intro_days (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date TEXT NOT NULL,
  link TEXT NOT NULL,
  state TEXT NOT NULL CHECK (state IN ('active', 'not yet active', 'sold out')),
  total_places INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  display_order INTEGER NOT NULL
);

-- Enable RLS
ALTER TABLE public.intro_days ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (intro days are public information)
CREATE POLICY "Anyone can view intro days"
  ON public.intro_days
  FOR SELECT
  USING (true);

-- Insert existing intro days data
INSERT INTO public.intro_days (date, link, state, total_places, display_order) VALUES
  ('MT Friday week 0, 10.10.2025', 'https://luma.com/xq53gl9n', 'active', 2, 1),
  ('MT Friday week 2, 24.10.2025', '#', 'not yet active', 4, 2),
  ('MT Friday week 3, 31.10.2025', '#', 'not yet active', 4, 3);