import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <nav className="hidden md:flex gap-8 text-xs tracking-[0.15em] font-medium uppercase text-muted-foreground">
            <Link href="/" className={cn("hover:text-foreground transition-colors", location === "/" && "text-foreground")}>Home</Link>
            <Link href="/projects" className={cn("hover:text-foreground transition-colors", location.startsWith("/project") && "text-foreground")}>Portfolio</Link>
          </nav>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/">
              <h1 className="text-2xl font-serif tracking-widest uppercase cursor-pointer">Studio Elite</h1>
            </Link>
          </div>

          <nav className="hidden md:flex gap-8 text-xs tracking-[0.15em] font-medium uppercase text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          
          {/* Mobile Menu Placeholder - keeping it simple for now */}
          <button className="md:hidden text-foreground">
             Menu
          </button>
        </div>
      </header>

      <main className="pt-20">
        {children}
      </main>

      <footer className="bg-secondary/30 py-16 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-serif tracking-widest uppercase mb-8">Studio Elite</h2>
          <div className="flex justify-center gap-8 mb-8 text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">Pinterest</a>
            <a href="#" className="hover:text-foreground">Email</a>
          </div>
          <p className="text-xs text-muted-foreground/60 tracking-wider">© 2026 Studio Elite Interiors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
