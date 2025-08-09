import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import Newsletter from "@/components/Newsletter";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const Post = () => {
  const { id } = useParams<{ id: string }>();

  const post = useMemo(() => blogPosts.find((p) => p.id === id), [id]);

  useEffect(() => {
    if (!post) return;
    const title = `${post.title} — MEI Digital Blog`;
    const desc = post.excerpt?.slice(0, 155) ?? "Artigo do MEI Digital Blog";

    document.title = title;

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
  }, [post]);

  if (!post) return <NotFound />;

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    image: post.image,
    articleSection: post.category,
    mainEntityOfPage: window.location.href,
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <main className="container mx-auto px-4 py-6">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        <article className="max-w-3xl mx-auto">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{post.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                {post.category}
              </Badge>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
            </div>
          </header>

          <figure className="mb-6 rounded-lg overflow-hidden border border-border bg-card">
            <img
              src={post.image}
              alt={`Imagem do artigo: ${post.title}`}
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </figure>

          <section className="text-base md:text-lg leading-relaxed text-foreground/90 whitespace-pre-line">
            {post.content}
          </section>
        </article>
      </main>

      <Newsletter />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </div>
  );
};

export default Post;
