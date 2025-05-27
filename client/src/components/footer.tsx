import { Code } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Code className="text-white text-sm" size={16} />
            </div>
            <span className="text-lg font-bold gradient-text">
              Site sob Medida
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://wa.me/5516997112388" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-green-400 transition-colors duration-300"
            >
              <SiWhatsapp className="text-xl" />
            </a>
            <span className="text-muted-foreground text-sm">© 2025 Site sob Medida.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
