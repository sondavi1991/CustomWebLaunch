import { motion } from "framer-motion";
import { Rocket, CheckCircle, Palette, Smartphone, Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 py-20 lg:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
            <Rocket className="mr-2" size={16} />
            Em desenvolvimento
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-gray-400">
              Site sob Medida
            </span>
            <br />
            <span className="gradient-text">
              Em Breve
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Criamos sites personalizados e profissionais que transformam sua presença digital. 
            Aguarde o lançamento da nossa plataforma revolucionária.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <CheckCircle className="text-green-400" size={20} />
              <span>Design Responsivo</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <CheckCircle className="text-green-400" size={20} />
              <span>SEO Otimizado</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <CheckCircle className="text-green-400" size={20} />
              <span>Performance Máxima</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="relative">
          <motion.div
            className="absolute top-10 left-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center shadow-2xl">
              <Palette className="text-white text-xl" size={24} />
            </div>
          </motion.div>
          
          <motion.div
            className="absolute top-20 right-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="w-16 h-16 gradient-bg-secondary rounded-lg flex items-center justify-center shadow-2xl">
              <Smartphone className="text-white text-xl" size={24} />
            </div>
          </motion.div>
          

        </div>
      </div>
    </section>
  );
}
