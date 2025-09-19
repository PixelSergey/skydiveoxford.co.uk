import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Intro days", href: "/intro" },
    { name: "About skydiving", href: "/about" },
    { name: "Membership", href: "/members" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-lg sm:text-xl font-semibold text-primary-foreground truncate hover:text-primary transition-colors duration-200"
          >
            Oxford Skydiving Club
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-primary-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://instagram.com/skydiveoxford" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary-foreground transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary-foreground transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://instagram.com/skydiveoxford" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary-foreground transition-colors duration-200 py-2 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;