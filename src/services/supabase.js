import { createClient } from "@supabase/supabase-js";

//https://supabase.com/dashboard/project/gbnfgbnpgktqkdboczvv/settings/api

const supabaseUrl = "https://gbnfgbnpgktqkdboczvv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibmZnYm5wZ2t0cWtkYm9jenZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MjY0OTAsImV4cCI6MjAzNzMwMjQ5MH0.7oX9To9FBHK0Rk4E-KbLS0bZLDLNUJyyLZnPfSu1oU4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
