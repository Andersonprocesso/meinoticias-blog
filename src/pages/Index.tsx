import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const filteredPosts = selectedCategory
    ? blogPosts.filter((p) => p.category === selectedCategory)
    : blogPosts;

  const featuredPost =
    filteredPosts.find((post) => post.featured) ?? filteredPosts[0];

  const regularPosts = featuredPost
    ? filteredPosts.filter((post) => post.id !== featuredPost.id)
    : filteredPosts;

  const heroSidePosts = regularPosts.slice(0, 2);
  const articleGridPosts = regularPosts.slice(2, 6);

  // Category counts (for footer) based on all posts to keep consistency
  const categoryCounts = blogPosts.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});
  const categories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);

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
                {featuredPost && <BlogCard {...featuredPost} featured />}
              </div>
              <div className="space-y-6">
                {heroSidePosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
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
                  <BlogCard key={post.id} {...post} />
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
