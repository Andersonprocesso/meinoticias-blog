import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { blogPosts } from "@/data/blogPosts";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { triggerNewPostWebhook } from "@/lib/zapier";

export type PostRecord = typeof blogPosts[number];

const Index = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const { data: dbPosts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await supabase.from("posts").select("*").order("date", { ascending: false });
      return (data as any[]) || [];
    },
  });

  // Fallback para dados locais se não houver dados no banco
  const posts: PostRecord[] = (dbPosts && dbPosts.length > 0 ? dbPosts : blogPosts) as any;

  const filteredPosts = selectedCategory
    ? posts.filter((p) => p.category === selectedCategory)
    : posts;

  const featuredPost = filteredPosts.find((post) => post.featured) ?? filteredPosts[0];

  const regularPosts = featuredPost
    ? filteredPosts.filter((post) => post.id !== featuredPost.id)
    : filteredPosts;

  const heroSidePosts = regularPosts.slice(0, 2);
  const articleGridPosts = regularPosts.slice(2, 6);

  // Contagem de categorias com base nos posts em uso (consistência topo/rodapé)
  const categoryCounts = posts.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});
  const categories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);

  // Migração automática inicial (insere dados locais se a tabela estiver vazia)
  useEffect(() => {
    const migrate = async () => {
      try {
        if ((dbPosts?.length ?? 0) === 0 && blogPosts.length > 0 && !localStorage.getItem("postsSeeded")) {
          const rows = blogPosts.map((p) => ({ ...p }));
          const { error } = await supabase.from("posts").upsert(rows, { onConflict: "id" });
          if (!error) {
            localStorage.setItem("postsSeeded", "1");
          }
        }
      } catch (e) {
        // silencioso: tabela pode não existir ainda
      }
    };
    migrate();

    // Realtime: dispara webhook no Zapier para novos posts
    const channel = supabase
      .channel("posts_insert_channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "posts" },
        (payload: any) => {
          const p = payload.new;
          triggerNewPostWebhook({
            id: p.id,
            title: p.title,
            excerpt: p.excerpt,
            url: `${window.location.origin}/post/${p.id}`,
            image: p.image,
            category: p.category,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [dbPosts]);

  useEffect(() => {
    document.title = "MEI Digital Blog — Notícias e Dicas para MEI";
    const desc = "Acompanhe notícias, legislação e dicas práticas para MEI no MEI Digital Blog.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <div className="container mx-auto px-4 py-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            MEI Digital Blog — Notícias e Dicas para MEI
          </h1>
          <p className="text-muted-foreground mt-2">
            Atualizações, legislação e insights para microempreendedores.
          </p>
        </header>

        {filteredPosts.length === 0 ? (
          <section className="py-16 text-center text-muted-foreground">
            <p>Nenhum post encontrado para a categoria selecionada.</p>
          </section>
        ) : (
          <>
            {/* Hero: 1 destaque + 2 laterais */}
            <section aria-label="Destaques" className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                {featuredPost && <BlogCard {...(featuredPost as any)} featured />}
              </div>
              <div className="space-y-6">
                {heroSidePosts.map((post) => (
                  <BlogCard key={post.id} {...(post as any)} />
                ))}
              </div>
            </section>

            {/* Artigos */}
            <section className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-foreground">Artigos</h2>
                <Link to="/" className="text-primary hover:underline text-sm">Ver todos</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {articleGridPosts.map((post) => (
                  <BlogCard key={post.id} {...(post as any)} />
                ))}
              </div>
            </section>
          </>
        )}

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Categorias</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map(([cat, count]) => (
              <article key={cat} className="border border-border rounded-lg p-4 bg-card text-card-foreground">
                <h3 className="font-semibold">
                  <Link to={`/?category=${encodeURIComponent(cat)}`} className="hover:text-primary">{cat}</Link>
                </h3>
                <p className="text-sm text-muted-foreground">{count} artigos</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Newsletter />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">MEI Digital</h3>
          <p className="text-primary-foreground/80 mb-6">
            Seu parceiro na jornada do microempreendedorismo
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {categories.map(([cat]) => (
              <Link key={cat} to={`/?category=${encodeURIComponent(cat)}`} className="hover:text-yellow-300 transition-colors">
                {cat}
              </Link>
            ))}
          </div>
          <p className="text-primary-foreground/60 text-sm mt-6">
            © 2025 MEI Digital. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
