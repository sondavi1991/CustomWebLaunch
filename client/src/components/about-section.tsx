import { motion } from "framer-motion";
import { Rocket, PaintbrushVertical, Settings } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Performance",
    description: "Sites ultra-rápidos com otimização avançada e tecnologias modernas para máxima performance.",
    gradient: "gradient-bg"
  },
  {
    icon: PaintbrushVertical,
    title: "Design Único",
    description: "Designs personalizados que refletem a identidade da sua marca com estética moderna e profissional.",
    gradient: "gradient-bg-secondary"
  },
  {
    icon: Settings,
    title: "Funcionalidade",
    description: "Recursos avançados e integração completa para todas as necessidades do seu negócio digital.",
    gradient: "gradient-bg-accent"
  }
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">
              O que estamos preparando
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma completa para criação de sites personalizados com tecnologia de ponta
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className={`w-16 h-16 ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="text-white text-2xl" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
