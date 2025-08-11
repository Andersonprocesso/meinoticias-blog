import { createClient } from "@supabase/supabase-js";

// Lovable Supabase integration: URL and anon key may be injected at runtime
const supabaseUrl = (window as any).__SUPABASE_URL__ || (import.meta as any).env?.VITE_SUPABASE_URL;
const supabaseAnonKey = (window as any).__SUPABASE_ANON_KEY__ || (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase URL/Key not found. The app will run in read-only mode with local data. Connect Supabase via the green button in Lovable."
  );
}

function makeNoopClient() {
  const NO_CFG_MSG = "Supabase not configured";
  const chain: any = {
    select: () => chain,
    eq: () => chain,
    order: async () => ({ data: [], error: null }),
    maybeSingle: async () => ({ data: null, error: null }),
  };
  const tableOps: any = {
    select: () => chain,
    insert: async () => ({ error: new Error(NO_CFG_MSG) }),
    update: async () => ({ error: new Error(NO_CFG_MSG) }),
    upsert: async () => ({ error: new Error(NO_CFG_MSG) }),
    eq: () => chain,
    order: async () => ({ data: [], error: null }),
  };
  return {
    from: () => tableOps,
    channel: () => ({
      on: () => ({ subscribe: () => ({ unsubscribe() {} }) }),
      subscribe: () => ({ unsubscribe() {} }),
    }),
    removeChannel: () => {},
  } as any;
}

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (makeNoopClient() as any);

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
