/*
  # Create contact requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
      - `status` (text, default: 'new')

  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for inserting new requests
    - Add policy for admins to read all requests
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new contact requests
CREATE POLICY "Anyone can create contact requests"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admins) can view contact requests
CREATE POLICY "Only authenticated users can view contact requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);