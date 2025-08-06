import { Clock, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";

const BlogSidebar = () => {
  // Último post (mais recente por data)
  const latestPost = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  // Posts mais populares (simulando por tempo de leitura e categoria)
  const popularPosts = blogPosts
    .filter(post => post.id !== latestPost?.id)
    .sort((a, b) => {
      // Simulando popularidade: posts de "Impostos" têm prioridade, depois por tempo de leitura
      const aScore = (a.category === "Impostos" ? 100 : 0) + parseInt(a.readTime);
      const bScore = (b.category === "Impostos" ? 100 : 0) + parseInt(b.readTime);
      return bScore - aScore;
    })
    .slice(0, 3);

  return (
    <aside className="w-80 space-y-6 sticky top-6">
      {/* Último Post */}
      <Card className="border-primary/20 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-primary">
            <Calendar className="h-5 w-5" />
            Último Post
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {latestPost && (
            <div className="space-y-3">
              <img 
                src={latestPost.image} 
                alt={latestPost.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div>
                <Badge variant="secondary" className="mb-2">
                  {latestPost.category}
                </Badge>
                <h3 className="font-semibold text-sm leading-tight mb-2 line-clamp-2">
                  {latestPost.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {latestPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {latestPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {latestPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Posts Mais Populares */}
      <Card className="border-accent/20 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-accent-foreground">
            <TrendingUp className="h-5 w-5" />
            Posts Mais Populares
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={post.id} className="flex gap-3 pb-4 border-b border-border/50 last:border-0 last:pb-0">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <Badge variant="outline" className="mb-1 text-xs">
                  {post.category}
                </Badge>
                <h4 className="text-sm font-medium leading-tight line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* CTA Newsletter */}
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30">
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-primary mb-2">
            📧 Newsletter MEI
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Receba as últimas notícias e dicas para MEI direto no seu email
          </p>
          <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            Assinar Newsletter
          </button>
        </CardContent>
      </Card>
    </aside>
  );
};

export default BlogSidebar;