import { Code } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-10 py-6">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
              <Code className="text-white text-lg" size={20} />
            </div>
            <span className="text-xl font-bold gradient-text">
              Site sob Medida
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#sobre" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contato
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
