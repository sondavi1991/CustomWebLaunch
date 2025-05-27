import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, User, Mail, Building, MessageSquare, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  email: z.string()
    .email("Por favor, insira um e-mail válido")
    .min(1, "E-mail é obrigatório"),
  niche: z.string()
    .min(1, "Por favor, selecione seu nicho"),
  comment: z.string()
    .optional()
});

type FormData = z.infer<typeof formSchema>;

const nicheOptions = [
  { value: "e-commerce", label: "E-commerce" },
  { value: "servicos", label: "Serviços" },
  { value: "saude", label: "Saúde e Bem-estar" },
  { value: "educacao", label: "Educação" },
  { value: "tecnologia", label: "Tecnologia" },
  { value: "alimentacao", label: "Alimentação" },
  { value: "consultoria", label: "Consultoria" },
  { value: "imobiliario", label: "Imobiliário" },
  { value: "advocacia", label: "Advocacia" },
  { value: "outro", label: "Outro" }
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      niche: "",
      comment: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Create WhatsApp message
      const message = `🌟 *INTERESSE EM SITE SOB MEDIDA* 🌟

👤 *Nome:* ${data.fullName}
📧 *E-mail:* ${data.email}
🏢 *Nicho:* ${nicheOptions.find(option => option.value === data.niche)?.label || data.niche}

💬 *Comentário:*
${data.comment || 'Nenhum comentário adicional'}

---
Enviado através do site Site sob Medida`;

      // Show success toast
      toast({
        title: "Redirecionando para o WhatsApp...",
        description: "Você será redirecionado em instantes.",
      });

      // Wait a moment then redirect to WhatsApp
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/5516981894598?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset form after redirect
        form.reset();
      }, 1500);

    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">
                Seja o primeiro a saber
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Deixe seus dados e receba em primeira mão quando lançarmos
            </p>
          </motion.div>

          <motion.div
            className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Nome Completo */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center text-muted-foreground">
                        <User className="mr-2 text-primary" size={16} />
                        Nome Completo *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite seu nome completo"
                          className="bg-muted/50 border-border/50 focus:border-primary focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* E-mail */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center text-muted-foreground">
                        <Mail className="mr-2 text-primary" size={16} />
                        E-mail *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Digite seu melhor e-mail"
                          className="bg-muted/50 border-border/50 focus:border-primary focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Nicho */}
                <FormField
                  control={form.control}
                  name="niche"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center text-muted-foreground">
                        <Building className="mr-2 text-primary" size={16} />
                        Nicho do seu negócio *
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-muted/50 border-border/50 focus:border-primary focus:ring-primary">
                            <SelectValue placeholder="Selecione seu nicho" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {nicheOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Comentário */}
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center text-muted-foreground">
                        <MessageSquare className="mr-2 text-primary" size={16} />
                        Conte-nos mais sobre seu projeto
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva brevemente suas necessidades, objetivos ou qualquer informação relevante sobre seu projeto..."
                          className="bg-muted/50 border-border/50 focus:border-primary focus:ring-primary resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <SiWhatsapp className="mr-2 h-4 w-4" />
                      Enviar via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* WhatsApp Info */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm">
              Ao enviar, você será redirecionado para nosso WhatsApp para continuarmos a conversa
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2 text-green-400">
              <SiWhatsapp className="text-lg" />
              <span className="text-sm font-medium">+55 16 98189-4598</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
