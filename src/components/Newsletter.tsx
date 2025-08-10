import { Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <Mail className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Torne-se um Assinante
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Receba as últimas notícias, atualizações e dicas exclusivas para MEI diretamente no seu email.
            Mantenha-se atualizado com as melhores práticas para o seu negócio.
          </p>
        </div>
        <NewsletterForm />
        <p className="text-sm text-muted-foreground mt-4">
          Sem spam. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
