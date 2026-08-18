/*
  # Create leads table for contact form submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `company` (text)
      - `phone` (text)
      - `service_interest` (text) - Which service they're interested in
      - `marketplace` (text) - Which marketplace they want to sell on
      - `business_model` (text) - Private Label, White Label, Dropshipping, Wholesale
      - `budget` (text) - Estimated budget range
      - `message` (text) - Additional details
      - `status` (text, default 'new') - new, contacted, qualified, converted, lost
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on `leads` table
    - No public access - leads are inserted via edge function
    - Admin access only for viewing/managing leads

  3. Notes
    - All submissions go through edge function for spam protection
    - Email and name are required fields
    - Status tracking for lead management pipeline
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  phone text DEFAULT '',
  service_interest text DEFAULT '',
  marketplace text DEFAULT '',
  business_model text DEFAULT '',
  budget text DEFAULT '',
  message text DEFAULT '',
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- No policies needed - edge function handles inserts with service role
-- Admin dashboard would need separate auth setup