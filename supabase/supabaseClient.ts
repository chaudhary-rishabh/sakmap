import { createClient, SupabaseClient } from '@supabase/supabase-js';

console.log("supdatabase_key:-",process.env.NEXT_PUBLIC_SUPABASE_URL, ", anon_key:-",process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY )
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_KEY as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);