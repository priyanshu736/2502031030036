import { useState, useMemo } from "react";
import { useParams } from "react-router";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { Label } from "../components/ui/label";

export function ProductsPage() {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // Filter products by category if specified
  const filteredProducts = useMemo(() => {
    let filtered = category 
      ? products.filter(p => p.category === category)
      : products;

    // Apply price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort products
    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "rating":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case "name":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [category, sortBy, priceRange]);

  const currentCategory = categories.find(c => c.id === category);
  const pageTitle = currentCategory ? currentCategory.name : "All Products";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{pageTitle}</h1>
        <p className="text-gray-600">{filteredProducts.length} products found</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 space-y-6">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-bold mb-4">Filters</h3>
            
            {/* Categories */}
            <div className="mb-6">
              <Label className="mb-3 block">Category</Label>
              <div className="space-y-2">
                <Button
                  variant={!category ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => window.location.href = '/products'}
                >
                  All Products
                </Button>
                {categories.map(cat => (
                  <Button
                    key={cat.id}
                    variant={category === cat.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => window.location.href = `/products/${cat.id}`}
                  >
                    {cat.icon} {cat.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <Label className="mb-3 block">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </Label>
              <Slider
                min={0}
                max={2000}
                step={50}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Label>Sort by:</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
              <Button 
                className="mt-4"
                onClick={() => {
                  setPriceRange([0, 2000]);
                  setSortBy("featured");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
