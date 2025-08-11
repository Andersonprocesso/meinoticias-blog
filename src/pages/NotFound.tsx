import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    document.title = "Página não encontrada — MEI Digital";
    const ensureMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!m) {
        m = document.createElement("meta");
        m.name = name;
        document.head.appendChild(m);
      }
      m.content = content;
    };
    ensureMeta("robots", "noindex, nofollow");
    ensureMeta("googlebot", "noindex, nofollow");
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <article className="text-center max-w-xl px-6">
        <h1 className="text-4xl font-bold mb-3 text-foreground">404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Página não encontrada. O conteúdo que você procura pode ter sido movido ou não existe mais.
        </p>
        <a href="/" className="text-primary underline">
          Voltar para a página inicial
        </a>
      </article>
    </main>
  );
};

export default NotFound;
