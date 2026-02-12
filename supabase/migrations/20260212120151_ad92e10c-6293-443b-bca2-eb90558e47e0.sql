
-- Create public_documents table
CREATE TABLE public.public_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  filename TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.public_documents ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can view public documents"
  ON public.public_documents
  FOR SELECT
  USING (true);

-- Seed the documents in order
INSERT INTO public.public_documents (label, filename, display_order) VALUES
  ('Constitution', 'constitution.pdf', 1),
  ('By Laws', 'by-laws.pdf', 2),
  ('Code of Conduct', 'code-of-conduct.pdf', 3),
  ('Complaints Procedure', 'complaints-procedure.pdf', 4),
  ('Safety Policy', 'safety-policy.pdf', 5),
  ('Club Risk Assessment', 'club-risk-assessment.pdf', 6),
  ('Skydiving Specific Risk Assessment', 'skydiving-specific-risk-assessment.pdf', 7);
