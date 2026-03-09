import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ProductCard } from "../components/ProductCard";
import { products, categories } from "../data/products";
import { ArrowRight, Truck, Shield, Headphones } from "lucide-react";

export function HomePage() {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Build Your Dream PC
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Premium components, competitive prices, and expert support for your perfect build.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Warranty Protection</h3>
                <p className="text-sm text-gray-600">Full manufacturer warranties</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Headphones className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Expert Support</h3>
                <p className="text-sm text-gray-600">24/7 customer service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products">
              <Button variant="ghost">
                View All <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Help Building Your PC?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Our experts are here to help you choose the perfect components for your needs.
          </p>
          <Button size="lg" variant="secondary">
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  );
}
