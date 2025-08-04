import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogHeader = () => {
  return (
    <header className="bg-background border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
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