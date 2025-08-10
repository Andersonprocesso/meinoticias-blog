import { createClient } from "@supabase/supabase-js";

// Lovable Supabase integration: URL and anon key may be injected at runtime
const supabaseUrl = (window as any).__SUPABASE_URL__ || (import.meta as any).env?.VITE_SUPABASE_URL;
const supabaseAnonKey = (window as any).__SUPABASE_ANON_KEY__ || (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase URL/Key not found. Ensure Lovable Supabase integration is connected.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Tables = {
  posts: {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    author: string;
    category: string;
    image: string;
    featured?: boolean | null;
    created_at?: string;
  };
  subscribers: {
    id?: string;
    email: string;
    created_at?: string;
  };
  comments: {
    id?: string;
    post_id: string;
    parent_id?: string | null;
    author_name?: string | null;
    content: string;
    likes_count?: number;
    created_at?: string;
  };
  comment_likes: {
    id?: string;
    comment_id: string;
    user_token?: string | null;
    created_at?: string;
  };
};
