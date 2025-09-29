import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="font-bold text-2xl">JD</div>
          <span className="text-xs text-muted-foreground hidden sm:inline">KING OF TRAINERS</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ml-8">
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Men</a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Women</a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Kids</a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Collections</a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Sports</a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Brands</a>
          <a href="#" className="text-sm font-medium text-destructive">Sale</a>
        </nav>

        {/* Search and actions */}
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search Nike, adidas, Jordan, Asics..."
              className="w-64 pl-10"
            />
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;