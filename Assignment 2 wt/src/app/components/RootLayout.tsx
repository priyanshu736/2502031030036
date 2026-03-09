import { Outlet, Link, useNavigate } from "react-router";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { getCartItemCount } from "../data/cart";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { categories } from "../data/products";

export function RootLayout() {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Update cart count on mount and when storage changes
    const updateCount = () => setCartCount(getCartItemCount());
    updateCount();
    
    window.addEventListener('storage', updateCount);
    window.addEventListener('cart-updated', updateCount);
    
    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('cart-updated', updateCount);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                PC
              </div>
              <span className="font-bold text-xl">PC Parts Shop</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/products" className="text-sm hover:text-blue-600 transition-colors">
                All Products
              </Link>
              <Link to="/products/gpu" className="text-sm hover:text-blue-600 transition-colors">
                Graphics Cards
              </Link>
              <Link to="/products/cpu" className="text-sm hover:text-blue-600 transition-colors">
                Processors
              </Link>
              <Link to="/products/motherboard" className="text-sm hover:text-blue-600 transition-colors">
                Motherboards
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden lg:flex items-center relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-9 w-64"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    // Could implement search functionality
                  }
                }}
              />
            </div>

            {/* Cart Button */}
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/products" className="text-lg hover:text-blue-600 transition-colors">
                    All Products
                  </Link>
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      to={`/products/${category.id}`}
                      className="text-lg hover:text-blue-600 transition-colors"
                    >
                      {category.icon} {category.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                Your trusted source for high-quality PC components and accessories.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/products" className="hover:text-blue-600">All Products</Link></li>
                <li><Link to="/products/gpu" className="hover:text-blue-600">Graphics Cards</Link></li>
                <li><Link to="/products/cpu" className="hover:text-blue-600">Processors</Link></li>
                <li><Link to="/products/motherboard" className="hover:text-blue-600">Motherboards</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Shipping Info</a></li>
                <li><a href="#" className="hover:text-blue-600">Returns</a></li>
                <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe for updates and exclusive offers.
              </p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            © 2026 PC Parts Shop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
