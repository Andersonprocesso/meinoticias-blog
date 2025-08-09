import { Search, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogHeader = () => {
  return (
    <header className="bg-background sticky top-0 z-50 backdrop-blur-sm border-b border-border/50">
      {/* Top quick links bar */}
      <div className="bg-primary text-primary-foreground/90">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <nav className="hidden md:flex items-center gap-4">
            <span className="opacity-80">Links rápidos:</span>
            <a href="#" className="hover:underline">Sobre</a>
            <a href="#" className="hover:underline">Contato</a>
            <a href="#" className="hover:underline">Fórum</a>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" href="#" className="opacity-90 hover:opacity-100"><Facebook className="w-4 h-4" /></a>
            <a aria-label="Instagram" href="#" className="opacity-90 hover:opacity-100"><Instagram className="w-4 h-4" /></a>
            <a aria-label="LinkedIn" href="#" className="opacity-90 hover:opacity-100"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary">
              MEI Digital
            </h1>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Todas
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Impostos
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Dicas
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Notícias
              </Button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar posts..."
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline">
              Assinar Newsletter
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;