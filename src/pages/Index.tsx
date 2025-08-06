import BlogHeader from "@/components/BlogHeader";
import BlogHero from "@/components/BlogHero";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import Newsletter from "@/components/Newsletter";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BlogHero />
      
      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1">
            {/* Featured Post Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Post em Destaque
              </h2>
              {featuredPost && (
                <div className="max-w-4xl mx-auto">
                  <BlogCard {...featuredPost} />
                </div>
              )}
            </section>

            {/* Recent Posts Section */}
            <section className="py-16 px-6 bg-secondary/30 rounded-2xl">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Últimos Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>

      <Newsletter />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">MEI Digital</h3>
          <p className="text-primary-foreground/80 mb-6">
            Seu parceiro na jornada do microempreendedorismo
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="hover:text-yellow-300 transition-colors">Sobre</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Contato</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Política de Privacidade</a>
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
