import { createClient } from '@supabase/supabase-js';

// ============================================================
// STORE BRAND ASSETS — adjust filenames here if needed
// ============================================================
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const STORAGE_BASE_URL = SUPABASE_URL
  ? `${SUPABASE_URL}/storage/v1/object/public/anh-iphone/`
  : '';

export const LOGO_URL = '/logo.png';
export const HERO_URL = STORAGE_BASE_URL ? `${STORAGE_BASE_URL}hero.png` : '';

let supabase = null;

export function getSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      '[Kim store] Thiếu biến môi trường Supabase. Hãy thiết lập NEXT_PUBLIC_SUPABASE_URL và NEXT_PUBLIC_SUPABASE_ANON_KEY trong .env.local'
    );
  }
  
  if (!supabase) {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  
  return supabase;
}

export default getSupabase;
