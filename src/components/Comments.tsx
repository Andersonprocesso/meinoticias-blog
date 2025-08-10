import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { Heart, MessageCircle, Send } from "lucide-react";

interface Comment {
  id?: string;
  post_id: string;
  parent_id?: string | null;
  author_name?: string | null;
  content: string;
  likes_count?: number;
  created_at?: string;
}

const CommentItem = ({ comment, onReply, onLike }: { comment: Comment; onReply: (c: Comment) => void; onLike: (id: string) => void }) => {
  return (
    <div className="border border-border rounded-lg p-4 bg-card text-card-foreground">
      <div className="text-sm text-muted-foreground">{comment.author_name ?? "Anônimo"} • {new Date(comment.created_at || '').toLocaleString()}</div>
      <p className="mt-2 whitespace-pre-line">{comment.content}</p>
      <div className="mt-3 flex items-center gap-3">
        <button className="inline-flex items-center gap-1 text-sm text-primary" onClick={() => onReply(comment)}>
          <MessageCircle className="w-4 h-4" /> Responder
        </button>
        {comment.id && (
          <button className="inline-flex items-center gap-1 text-sm text-primary" onClick={() => onLike(comment.id!)}>
            <Heart className="w-4 h-4" /> Curtir ({comment.likes_count ?? 0})
          </button>
        )}
      </div>
    </div>
  );
};

const Comments = ({ postId }: { postId: string }) => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [replyTo, setReplyTo] = useState<Comment | null>(null);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("comments")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });
    setComments((data as Comment[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const submit = async () => {
    if (!content.trim()) return;
    const payload: Comment = {
      post_id: postId,
      content: content.trim(),
      author_name: author || null,
      parent_id: replyTo?.id || null,
    };
    const { error } = await supabase.from("comments").insert(payload);
    if (error) {
      toast({ title: "Erro", description: "Não foi possível enviar o comentário.", variant: "destructive" });
      return;
    }
    setContent("");
    setReplyTo(null);
    await load();
    toast({ title: "Comentário enviado" });
  };

  const like = async (id: string) => {
    if (localStorage.getItem(`liked_${id}`)) {
      toast({ title: "Você já curtiu este comentário" });
      return;
    }
    const { data } = await supabase.from("comments").select("likes_count").eq("id", id).maybeSingle();
    const likes = (data?.likes_count ?? 0) + 1;
    const { error } = await supabase.from("comments").update({ likes_count: likes }).eq("id", id);
    if (!error) {
      localStorage.setItem(`liked_${id}`, "1");
      setComments((prev) => prev.map((c) => (c.id === id ? { ...c, likes_count: likes } : c)));
    }
  };

  const tree = buildTree(comments);

  return (
    <div>
      <div className="space-y-4">
        {loading ? (
          <p className="text-muted-foreground">Carregando comentários...</p>
        ) : tree.length === 0 ? (
          <p className="text-muted-foreground">Seja o primeiro a comentar.</p>
        ) : (
          tree.map((c) => <CommentThread key={c.id || Math.random()} comment={c} onReply={setReplyTo} onLike={like} />)
        )}
      </div>

      <div className="mt-6 border-t border-border pt-6">
        {replyTo && (
          <div className="mb-3 text-sm text-muted-foreground">
            Respondendo a: <span className="font-medium">{replyTo.author_name || "Anônimo"}</span> — <button className="underline" onClick={() => setReplyTo(null)}>cancelar</button>
          </div>
        )}
        <div className="grid gap-3">
          <Input placeholder="Seu nome (opcional)" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <Textarea placeholder="Escreva um comentário" value={content} onChange={(e) => setContent(e.target.value)} rows={4} />
          <div>
            <Button onClick={submit} className="inline-flex items-center gap-2">
              <Send className="w-4 h-4" /> Enviar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommentThread = ({ comment, onReply, onLike }: { comment: any; onReply: (c: any) => void; onLike: (id: string) => void }) => {
  return (
    <div>
      <CommentItem comment={comment} onReply={onReply} onLike={onLike} />
      {comment.children?.length > 0 && (
        <div className="mt-3 ml-4 border-l border-border pl-4 space-y-3">
          {comment.children.map((child: any) => (
            <CommentThread key={child.id || Math.random()} comment={child} onReply={onReply} onLike={onLike} />)
          )}
        </div>
      )}
    </div>
  );
};

function buildTree(items: Comment[]) {
  const map = new Map<string, any>();
  const roots: any[] = [];
  for (const item of items) {
    map.set(item.id as string, { ...item, children: [] });
  }
  for (const item of items) {
    const node = map.get(item.id as string) || { ...item, children: [] };
    if (item.parent_id) {
      const parent = map.get(item.parent_id);
      if (parent) parent.children.push(node);
      else roots.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

export default Comments;
