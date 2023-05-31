import { createClient } from "@supabase/supabase-js";

const supabaseUrl ="https://uzyvgtamixvkwxeklhpz.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6eXZndGFtaXh2a3d4ZWtsaHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4Nzc4OTQsImV4cCI6MjAwMDQ1Mzg5NH0.MRwjrW03JISwsY0p4T_FrlsKzSi9tOzvoaVJjxOdXFk"; 

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


