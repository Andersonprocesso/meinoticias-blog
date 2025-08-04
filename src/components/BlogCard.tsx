import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  featured?: boolean;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  author, 
  category, 
  image,
  featured = false 
}: BlogCardProps) => {
  return (
    <Card className={`card-shadow overflow-hidden group cursor-pointer ${
      featured ? 'col-span-full lg:col-span-2' : ''
    }`}>
      <div className={`relative ${featured ? 'h-64 md:h-80' : 'h-48'} overflow-hidden`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-primary font-semibold">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          {title}
        </h3>
        
        <p className={`text-muted-foreground mb-4 line-clamp-3 ${
          featured ? 'text-lg' : 'text-base'
        }`}>
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;