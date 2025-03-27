"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

interface NavbarProps {
  items?: NavItem[];
  logo?: React.ReactNode;
}

export default function Navbar({
  items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  logo = <Logo />,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 relative group">
            {logo}
            <span className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "relative font-medium transition-colors",
                  scrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary",
                  activeIndex === index && "text-primary",
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(-1)}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300",
                    activeIndex === index && "scale-x-100",
                  )}
                ></span>
              </Link>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground relative group overflow-hidden">
              <span className="relative z-10 flex items-center">
                Get Started
                <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent/90 to-accent w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-md transition-colors duration-200",
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10",
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-md pt-20 px-4 transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none",
        )}
      >
        <nav className="flex flex-col space-y-6">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-foreground hover:text-primary text-xl font-medium transition-colors relative group"
              onClick={() => setIsOpen(false)}
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-4 relative group overflow-hidden"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10 flex items-center justify-center">
              Get Started
              <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent/90 to-accent w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </Button>
        </nav>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-8 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center font-bold text-2xl">
      <span className="text-primary relative">
        non
        <span className="absolute inset-0 bg-primary/20 blur-sm rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </span>
      <span className="text-accent relative">
        neuron
        <span className="absolute inset-0 bg-accent/20 blur-sm rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </span>
    </div>
  );
}
