
-- Create committee_members table
CREATE TABLE public.committee_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL,
  name TEXT NOT NULL,
  details TEXT,
  email TEXT NOT NULL,
  photo_filename TEXT,
  initials TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.committee_members ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can view committee members"
  ON public.committee_members
  FOR SELECT
  USING (true);

-- Insert existing committee members
INSERT INTO public.committee_members (role, name, details, email, photo_filename, initials, display_order) VALUES
  ('President', 'Sergey Ichtchenko', 'DPhil CS', 'president@skydiveoxford.co.uk', 'sergey.jpg', 'SI', 1),
  ('Vice President', 'Daisy Pritzker', NULL, 'vp@skydiveoxford.co.uk', 'daisy.jpeg', 'DP', 2),
  ('Secretary', 'Mari Managadze', NULL, 'secretary@skydiveoxford.co.uk', 'mari.jpeg', 'MM', 3),
  ('Treasurer', 'Sophie Kendall', NULL, 'treasurer@skydiveoxford.co.uk', 'sophie.png', 'SK', 4),
  ('Social Secretary', 'Bob Sira', NULL, 'social@skydiveoxford.co.uk', 'bob.png', 'BS', 5),
  ('Welfare Officer', 'Mia Yu', NULL, 'welfare@skydiveoxford.co.uk', 'mia.jpeg', 'MY', 6);
