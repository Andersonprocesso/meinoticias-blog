import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const NewsletterForm = ({ inline = false }: { inline?: boolean }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Email inválido", description: "Digite um email válido.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("subscribers").insert({ email });
      if (error) throw error;
      toast({ title: "Inscrição realizada", description: "Você receberá novidades em seu email." });
      setEmail("");
    } catch (e: any) {
      const msg = e?.message?.includes("duplicate") ? "Este email já está inscrito." : "Não foi possível inscrever agora.";
      toast({ title: "Erro", description: msg, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={inline ? "flex gap-2" : "flex flex-col sm:flex-row gap-4 max-w-md mx-auto"}>
      {!inline && <Mail className="sr-only" />}
      <Input
        type="email"
        placeholder="Seu melhor email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubscribe();
        }}
        className="flex-1"
      />
      <Button onClick={handleSubscribe} disabled={loading} variant="hero" className="px-6">
        {loading ? "Enviando..." : "Assinar"}
      </Button>
    </div>
  );
};

export default NewsletterForm;
