import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Orange Push Pop",
    price: 12.00,
    originalPrice: 700.00,
    rating: 5,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1595475038665-8cd6d43c9bf4?w=300&h=300&fit=crop&crop=center",
    badge: "Hybrid",
    badgeColor: "bg-green-500"
  },
  {
    id: 2,
    name: "Master OG",
    price: 13.00,
    originalPrice: 775.00,
    rating: 5,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center",
    badge: "Indica",
    badgeColor: "bg-purple-500"
  },
  {
    id: 3,
    name: "Nebula Greenhouse",
    price: 10.00,
    originalPrice: 575.00,
    rating: 5,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1607473681481-72abb1152aa6?w=300&h=300&fit=crop&crop=center",
    badge: "Hybrid",
    badgeColor: "bg-green-500"
  },
  {
    id: 4,
    name: "Red Congolese",
    price: 13.00,
    originalPrice: 775.00,
    rating: 5,
    reviews: 207,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop&crop=center",
    badge: "Sativa",
    badgeColor: "bg-orange-500"
  },
  {
    id: 5,
    name: "White Widow",
    price: 12.00,
    originalPrice: 700.00,
    rating: 5,
    reviews: 80,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center",
    badge: "Sativa",
    badgeColor: "bg-orange-500"
  },
  {
    id: 6,
    name: "Diablo OG Kush",
    price: 12.00,
    originalPrice: 700.00,
    rating: 5,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop&crop=center",
    badge: "Indica",  
    badgeColor: "bg-purple-500"
  }
];

const ProductCategory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest Products
            </h1>
            <p className="text-muted-foreground">
              Mix & Match to Save Up to 45% OFF
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>

                {/* Sale Badge */}
                {product.id === 1 && (
                  <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    4%
                  </div>
                )}

                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Add to Cart Button - Appears on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-primary text-white hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Badge */}
                  <Badge className={`${product.badgeColor} text-white mb-2`}>
                    {product.badge}
                  </Badge>

                  {/* Product Name */}
                  <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.reviews}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;