import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { getZapierWebhookUrl, setZapierWebhookUrl } from "@/lib/zapier";

const AdminSettings = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const saved = getZapierWebhookUrl();
    if (saved) setUrl(saved);
  }, []);

useEffect(() => {
  document.title = "Configurações — MEI Digital";
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
}, []);

const save = () => {
    if (!url.startsWith("https://hooks.zapier.com/hooks/catch/")) {
      toast({ title: "URL inválida", description: "Cole a URL do Webhook do Zapier.", variant: "destructive" });
      return;
    }
    setZapierWebhookUrl(url);
    toast({ title: "Salvo", description: "Webhook do Zapier armazenado com sucesso." });
  };

  return (
    <main className="container mx-auto px-4 py-10 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Configurações</h1>
      <p className="text-muted-foreground mb-6">Cole sua URL de Webhook do Zapier para dispararmos notificações quando novos posts forem publicados.</p>
      <div className="flex gap-2">
        <Input placeholder="https://hooks.zapier.com/hooks/catch/..." value={url} onChange={(e) => setUrl(e.target.value)} />
        <Button onClick={save}>Salvar</Button>
      </div>
    </main>
  );
};

export default AdminSettings;
