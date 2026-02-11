
-- Create committee-photos bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('committee-photos', 'committee-photos', true);

-- Public read access
CREATE POLICY "Anyone can view committee photos"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'committee-photos');
