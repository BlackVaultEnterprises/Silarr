import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, path }) => (
            <Link 
              href={path} 
              key={path}
              className="text-foreground hover:text-primary transition-colors font-inter text-sm"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="inline-block">
            <Button 
              className="bg-primary hover:bg-primary/90 text-foreground font-poppins font-semibold px-5 py-2 
                      transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
            >
              Get Your Cash Offer
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="bg-secondary absolute top-full left-0 right-0 shadow-xl rounded-b-lg overflow-hidden md:hidden">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map(({ label, path }) => (
              <Link 
                href={path} 
                key={path}
                className="text-foreground hover:text-primary transition-colors font-inter text-sm px-4 py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins text-sm font-semibold px-5 py-3 rounded-md text-center transition-all duration-300 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Your Cash Offer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
