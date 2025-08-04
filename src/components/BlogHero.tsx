import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-blog.jpg";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      
      <div className="relative container mx-auto text-center text-white z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Notícias e Dicas <br />
          para <span className="text-yellow-300">MEI</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Mantenha-se atualizado com as últimas novidades, mudanças na legislação e dicas práticas 
          para microempreendedores individuais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            Explorar Posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
            Assinar Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;