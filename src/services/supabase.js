import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ozypwcjazsftxptuudhg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eXB3Y2phenNmdHhwdHV1ZGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNTQyNzQsImV4cCI6MjA2NTgzMDI3NH0.DGA3wLXfk1SbpvXyNw2Y_W-s7S8fZq5jBMCM3w2PhUY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
