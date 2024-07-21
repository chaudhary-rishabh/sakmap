import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL_KEY as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
