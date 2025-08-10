import { Search, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import NewsletterForm from "./NewsletterForm";

const BlogHeader = () => {
  return (
    <header className="bg-background sticky top-0 z-50 backdrop-blur-sm border-b border-border/50">
      {/* Top quick links bar */}
      <div className="bg-primary text-primary-foreground/90">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <div />
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579003003519" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100"><Facebook className="w-4 h-4" /></a>
            <a aria-label="Instagram" href="#" className="opacity-90 hover:opacity-100"><Instagram className="w-4 h-4" /></a>
            <a aria-label="LinkedIn" href="#" className="opacity-90 hover:opacity-100"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center gap-3" aria-label="Ir para a página inicial">
              <img
                src="/lovable-uploads/8d7a378f-b9d9-4e93-87a7-e799b0a089fb.png"
                alt="Logo MEI Notícias"
                className="h-8 w-8 rounded-sm"
                loading="eager"
                decoding="async"
              />
              <h1 className="text-2xl font-bold text-primary">MEI Notícias</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link to="/" className="text-foreground hover:text-primary">Home</Link>
              <Link to="/" className="text-foreground hover:text-primary">Todas</Link>
              {Array.from(new Set(blogPosts.map((p) => p.category))).map((cat) => (
                <Link key={cat} to={`/?category=${encodeURIComponent(cat)}`} className="text-foreground hover:text-primary">
                  {cat}
                </Link>
              ))}
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Assinar Newsletter</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Assinar Newsletter</DialogTitle>
                </DialogHeader>
                <NewsletterForm inline />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;