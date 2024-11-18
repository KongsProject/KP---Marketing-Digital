import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-secondary tracking-wide hover:scale-105 transition-transform duration-300">
            KP Marketing Digital
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-secondary transition-colors">
              Início
            </Link>
            <a href="#marketing-areas" className="text-white hover:text-secondary transition-colors">
              Áreas
            </a>
            <a href="#marketing-stats" className="text-white hover:text-secondary transition-colors">
              Estatísticas
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};