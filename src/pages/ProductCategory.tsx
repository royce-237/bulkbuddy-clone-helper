import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Star, Grid, List, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const cannabisProducts = [
  {
    id: 1,
    name: "Chocolate Kush",
    category: "Indica",
    priceRange: "$12.00 - $675.00",
    rating: 5,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1605878863885-094e0c3c9fdb?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 2,
    name: "Chocolate Thunder",
    category: "Sativa",
    priceRange: "$12.00 - $22.00",
    rating: 5,
    reviews: 166,
    image: "https://images.unsplash.com/photo-1601739879461-e373f0ff2149?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 3,
    name: "$39/oz *PROMO* Mixed Strain (POPCORN)",
    category: null,
    priceRange: "$39.00 - $139.00",
    rating: 4.5,
    reviews: 487,
    image: "https://images.unsplash.com/photo-1603909945879-54e78f773dc8?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: 65
  },
  {
    id: 4,
    name: "$55/oz *Promo*Mystery AA-AAAA Weed Ounce",
    category: null,
    priceRange: "$55.00 - $190.00",
    rating: 4.5,
    reviews: 748,
    image: "https://images.unsplash.com/photo-1612524424827-a0e0c68c1f95?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: 54
  },
  {
    id: 5,
    name: "9 Pound Hammer",
    category: "Indica",
    priceRange: "$12.00",
    rating: 4.5,
    reviews: 139,
    image: "https://images.unsplash.com/photo-1605878864842-d4ab4777c2fc?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 6,
    name: "94 Monkey",
    category: "Indica",
    priceRange: "$12.00 - $725.00",
    rating: 5,
    reviews: 170,
    image: "https://images.unsplash.com/photo-1601739878544-3e04439b83fd?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 7,
    name: "Premium Shake/Trim (Gelato)",
    category: null,
    priceRange: "$12.00 - $200.00",
    rating: 5,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1560750461-121f1d0afa6e?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 8,
    name: "AAA+ Shake/Trim (4 Star General)",
    category: null,
    priceRange: "$12.00 - $200.00",
    rating: 5,
    reviews: 171,
    image: "https://images.unsplash.com/photo-1608336979521-9fbb349c2f03?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 9,
    name: "Shake/Trim (Pink Kush)",
    category: null,
    priceRange: "$12.00 - $65.00",
    rating: 4.5,
    reviews: 133,
    image: "https://images.unsplash.com/photo-1619094108846-dddbef0deab5?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 10,
    name: "Shake/Trim Ace Killer OG Shake Weed",
    category: null,
    priceRange: "$12.00",
    rating: 4.5,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1601739878038-5f58ea0b2faf?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 11,
    name: "AAA+ Shake/Trim Greasy Pink Premium Shake",
    category: null,
    priceRange: "$12.00 - $200.00",
    rating: 5,
    reviews: 50,
    image: "https://images.unsplash.com/photo-1610295770731-aea59a17fbc6?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 12,
    name: "Shake/Trim Master Kush Premium Shake Weed",
    category: null,
    priceRange: "$12.00 - $200.00",
    rating: 5,
    reviews: 35,
    image: "https://images.unsplash.com/photo-1605878863887-3b65932b8bb3?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 13,
    name: "Ace Killer OG",
    category: "Indica",
    priceRange: "$11.00 - $73.00",
    rating: 5,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1603909945879-54e78f773dc8?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 14,
    name: "Afghan Death Bubba",
    category: "Indica",
    priceRange: "$12.00 - $725.00",
    rating: 5,
    reviews: 133,
    image: "https://images.unsplash.com/photo-1612524424827-a0e0c68c1f95?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 15,
    name: "Alaskan Thunder Fuck",
    category: "Sativa",
    priceRange: "$12.00 - $84.00",
    rating: 5,
    reviews: 534,
    image: "https://images.unsplash.com/photo-1605878864842-d4ab4777c2fc?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 16,
    name: "Alien Banana Candy",
    category: "Indica",
    priceRange: "$12.00 - $725.00",
    rating: 5,
    reviews: 147,
    image: "https://images.unsplash.com/photo-1601739878544-3e04439b83fd?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 17,
    name: "Alien OG",
    category: "Hybrid",
    priceRange: "$12.00 - $675.00",
    rating: 5,
    reviews: 157,
    image: "https://images.unsplash.com/photo-1560750461-121f1d0afa6e?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 18,
    name: "Animal Cookies",
    category: "Indica",
    priceRange: "$12.00 - $43.00",
    rating: 4.5,
    reviews: 70,
    image: "https://images.unsplash.com/photo-1608336979521-9fbb349c2f03?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 19,
    name: "Atomic Blueberry",
    category: "Indica",
    priceRange: "$13.00 - $775.00",
    rating: 4.5,
    reviews: 187,
    image: "https://images.unsplash.com/photo-1619094108846-dddbef0deab5?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 20,
    name: "Atomic Bomb",
    category: "Hybrid",
    priceRange: "$12.00 - $40.00",
    rating: 5,
    reviews: 135,
    image: "https://images.unsplash.com/photo-1601739878038-5f58ea0b2faf?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  }
];

const concentratesProducts = [
  {
    id: 1,
    name: "Chocolate Rain Budder",
    category: "Budder",
    priceRange: "$42.00 - $73.00",
    rating: 5,
    reviews: 35,
    image: "https://images.unsplash.com/photo-1608839175115-fa1e9c0e9c0d?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 2,
    name: "9 Pound Hammer Kief",
    category: "Kief",
    priceRange: "$14.00 - $82.00",
    rating: 5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1605878863885-094e0c3c9fdb?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: 18
  },
  {
    id: 3,
    name: "9 Pound Hammer THCa Sugar Diamonds",
    category: "THCa Diamond",
    priceRange: "$22.00 - $260.00",
    rating: 5,
    reviews: 46,
    image: "https://images.unsplash.com/photo-1608336979521-9fbb349c2f03?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 4,
    name: "A-Bomb Budder",
    category: "Budder",
    priceRange: "$72.00 - $73.00",
    rating: 5,
    reviews: 30,
    image: "https://images.unsplash.com/photo-1619094108846-dddbef0deab5?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 5,
    name: "Ace of Spade THCa Sugar",
    category: "THCa Diamond",
    priceRange: "$22.00 - $260.00",
    rating: 4.5,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1560750461-121f1d0afa6e?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 6,
    name: "Bentley Hash",
    category: "Hash",
    priceRange: "$10.00 - $641.00",
    rating: 4.5,
    reviews: 69,
    image: "https://images.unsplash.com/photo-1601739878544-3e04439b83fd?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 7,
    name: "Berry White Shatter",
    category: "Shatter",
    priceRange: "$21.00 - $250.00",
    rating: 4.5,
    reviews: 14,
    image: "https://images.unsplash.com/photo-1612524424827-a0e0c68c1f95?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 8,
    name: "Better Than Bubba Live Resin",
    category: "Live Resin",
    priceRange: "$42.00 - $73.00",
    rating: 5,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1608839175115-fa1e9c0e9c0d?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 9,
    name: "Bio-Jesus Budder",
    category: "Budder",
    priceRange: "$22.00 - $260.00",
    rating: 5,
    reviews: 36,
    image: "https://images.unsplash.com/photo-1619094108846-dddbef0deab5?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 10,
    name: "Black Diamond Kief",
    category: "Kief",
    priceRange: "$14.00 - $26.00",
    rating: 5,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1605878863885-094e0c3c9fdb?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: 18
  },
  {
    id: 11,
    name: "Blue Cheese Live Resin",
    category: "Live Resin",
    priceRange: "$42.00 - $73.00",
    rating: 4.5,
    reviews: 17,
    image: "https://images.unsplash.com/photo-1608839175115-fa1e9c0e9c0d?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 12,
    name: "Blue Cheese Shatter",
    category: "Shatter",
    priceRange: "$21.00 - $250.00",
    rating: 4.5,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1612524424827-a0e0c68c1f95?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 13,
    name: "Blue Gelato Budder",
    category: "Budder",
    priceRange: "$42.00 - $73.00",
    rating: 5,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1619094108846-dddbef0deab5?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 14,
    name: "Blue Zkittlez Budder",
    category: "Budder",
    priceRange: "$42.00 - $73.00",
    rating: 5,
    reviews: 36,
    image: "https://images.unsplash.com/photo-1608336979521-9fbb349c2f03?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 15,
    name: "Princess Leia Live Resin",
    category: "Live Resin",
    priceRange: "$42.00 - $73.00",
    rating: 5,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1608839175115-fa1e9c0e9c0d?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 16,
    name: "Gorilla Glue Hash",
    category: "Hash",
    priceRange: "$10.00 - $641.00",
    rating: 5,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1601739878544-3e04439b83fd?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 17,
    name: "Strawberry Cough Shatter",
    category: "Shatter",
    priceRange: "$21.00 - $250.00",
    rating: 4.5,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1612524424827-a0e0c68c1f95?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 18,
    name: "Wedding Cake Budder",
    category: "Budder",
    priceRange: "$42.00 - $73.00",
    rating: 5,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1619094108846-dddbef0deab5?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 19,
    name: "White Widow Live Resin",
    category: "Live Resin",
    priceRange: "$42.00 - $73.00",
    rating: 5,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1608839175115-fa1e9c0e9c0d?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  },
  {
    id: 20,
    name: "Zombie Kush Distillate",
    category: "Distillate",
    priceRange: "$21.00",
    rating: 4.5,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1560750461-121f1d0afa6e?w=300&h=300&fit=crop",
    inStock: true,
    salePercentage: null
  }
];

const ProductCategory = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();
  
  const products = category === 'concentrates' ? concentratesProducts : cannabisProducts;
  const categoryTitle = category === 'concentrates' ? 'Cannabis Concentrates' : 'Cannabis Flower';
  const categoryDescription = category === 'concentrates' 
    ? "Explore our top-tier range of cannabis concentrates in Canada, perfect for users seeking high potency and fast-acting effects. Bulk Buddy brings you expertly crafted shatter, budder, hash, and more—all lab-tested and ready to elevate your experience."
    : "Discover the largest selection of cannabis strains in Canada at Bulk Buddy. Our extensive range includes Indica, Sativa, & Hybrid strains, ensuring you find the perfect match for your needs.";

  const handleProductClick = (product: any) => {
    const productName = product.name;
    const slug = productName
      .toLowerCase()
      .replace(/[|]/g, '') // Remove pipes first
      .replace(/[^\w\s-]+/g, '') // Remove special characters except spaces and dashes
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/-+/g, '-') // Collapse multiple dashes
      .trim();
    navigate(`/product/${slug}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Notice Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm">
        <strong>Notice:</strong> Notice: Due to an unexpected Canada Post strike, all shipments will now be sent via UPS. Please note that we are unable to deliver to PO Boxes or rural addresses at this time. UPS shipping is a flat rate of $50, with <strong>Free Shipping on orders over $300.</strong> Thank you for your understanding and continued support. If you have any questions or concerns, please don't hesitate to contact us.
      </div>

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-64 flex-shrink-0">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-4">Product Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="in-stock" defaultChecked />
                    <label htmlFor="in-stock" className="text-sm text-foreground">In Stock</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="on-sale" />
                    <label htmlFor="on-sale" className="text-sm text-foreground">On Sale</label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Promotional Banner */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 mb-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-sm text-purple-600 font-medium mb-2">Contact Us</div>
                  <h2 className="text-2xl font-bold text-purple-800 mb-2">
                    First Time Ordering? Use Bulk5 for 5% OFF!
                  </h2>
                  <p className="text-purple-700 text-sm mb-4">
                    Attention New Customers: There's a $500 limit on your account.<br/>
                    To get it lifted, please email us with your Government-issued ID<br/>
                    with picture.
                  </p>
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">
                    Contact Us →
                  </Button>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌿</span>
                  </div>
                </div>
              </div>

              {/* Product Controls */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Showing all {products.length} results
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">Sort:</span>
                    <Select defaultValue="default">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Default sorting" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default sorting</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">Show:</span>
                    <Select defaultValue="50">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12 items</SelectItem>
                        <SelectItem value="24">24 items</SelectItem>
                        <SelectItem value="50">50 items</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex border rounded">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Wishlist Button */}
                    <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>

                    {/* Sale Badge */}
                    {product.salePercentage && (
                      <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        {product.salePercentage}%
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-gray-50 cursor-pointer" onClick={() => handleProductClick(product)}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      {/* Category Badge */}
                      {product.category && (
                        <div className="mb-2">
                          <span className={`inline-block px-3 py-1 rounded text-xs font-medium text-white ${
                            product.category === 'Indica' ? 'bg-purple-600' :
                            product.category === 'Sativa' ? 'bg-orange-500' :
                            product.category === 'Hybrid' ? 'bg-green-600' :
                            product.category === 'Budder' ? 'bg-blue-600' :
                            product.category === 'Shatter' ? 'bg-amber-600' :
                            product.category === 'Live Resin' ? 'bg-yellow-600' :
                            product.category === 'Hash' ? 'bg-emerald-600' :
                            product.category === 'Kief' ? 'bg-lime-600' :
                            product.category === 'THCa Diamond' ? 'bg-cyan-600' :
                            product.category === 'Distillate' ? 'bg-rose-600' :
                            'bg-gray-500'
                          }`}>
                            {product.category}
                          </span>
                        </div>
                      )}

                      {/* Product Name */}
                      <h3 
                        className="font-medium text-card-foreground mb-2 text-sm leading-tight line-clamp-2 cursor-pointer hover:text-primary"
                        onClick={() => handleProductClick(product)}
                      >
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : i < product.rating
                                ? "fill-yellow-400/50 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          {product.reviews}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <span className="font-bold text-foreground text-sm">
                          {product.priceRange}
                        </span>
                      </div>

                      {/* In Stock Badge */}
                      <Button 
                        className="w-full bg-green-600 text-white hover:bg-green-700 text-xs h-8"
                        disabled={!product.inStock}
                        onClick={() => handleProductClick(product)}
                      >
                        {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-8">
                <Button variant="default" className="bg-green-600 hover:bg-green-700 h-10 w-10">
                  1
                </Button>
                <Button variant="outline" className="h-10 w-10">
                  2
                </Button>
                <Button variant="outline" className="h-10 w-10">
                  3
                </Button>
                <Button variant="outline" className="h-10 w-10">
                  →
                </Button>
              </div>

              {/* Description */}
              <div className="mt-12 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{categoryTitle}</h2>
                
                <p className="text-muted-foreground">
                  {categoryDescription}
                </p>
                
                {category === 'concentrates' ? (
                  <>
                    <h3 className="text-xl font-bold text-foreground mt-6">What Are Cannabis Concentrates?</h3>
                    
                    <p className="text-muted-foreground">
                      Cannabis concentrates are highly potent extracts derived from the cannabis plant. They contain significantly higher levels of cannabinoids, particularly{" "}
                      <a href="#" className="text-primary hover:underline">THC</a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">CBD</a>, compared to traditional flower. Popular concentrate types include shatter, budder, live resin, hash, kief, distillate, and THCa diamonds.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Concentrates are created through various extraction methods that isolate and preserve the most desirable compounds from the cannabis plant. The result is a product that delivers powerful effects with smaller amounts, making them ideal for experienced users and those seeking fast-acting relief.
                    </p>
                    
                    <p className="text-muted-foreground">
                      At Bulk Buddy, all our concentrates are lab-tested to ensure purity, potency, and safety. Whether you prefer the glass-like consistency of shatter, the creamy texture of budder, or the terpene-rich profile of live resin, we have premium options to suit every preference.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Cannabis concentrates can be consumed in various ways, including dabbing, vaporizing, or adding to flower. They're popular among medical patients for their precise dosing capabilities and among recreational users for their potent effects and rich flavors.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-muted-foreground">
                      Whether you're looking for medicinal cannabis, relaxation, or stimulation, we offer premium cannabis flowers that guarantee satisfaction. Our team of experts is here to help you navigate our extensive strains list to find the perfect match.
                    </p>
                    
                    <p className="text-muted-foreground">
                      <a href="#" className="text-primary hover:underline">Buy weed online</a>{" "}
                      in Canada at Bulk Buddy, your top destination for quality cannabis products. Find the best cannabis store in Canada with our unparalleled selection and expert guidance.
                    </p>
                    
                    <h3 className="text-xl font-bold text-foreground mt-6">What Is Cannabis?</h3>
                    
                    <p className="text-muted-foreground">
                      Cannabis, also known as weed or marijuana, is a plant famous for its psychoactive and medicinal properties. The main chemical compounds in cannabis are cannabinoids, particularly THC (Tetrahydrocannabinol) and CBD (Cannabidiol).{" "}
                      <a href="#" className="text-primary hover:underline">THC</a>{" "}
                      is known for producing a "high" due to its psychoactive effects, while{" "}
                      <a href="#" className="text-primary hover:underline">CBD</a>{" "}
                      is renowned for its therapeutic benefits without causing a high.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Historically, people have used marijuana for both medical and recreational purposes. It is also an integral part of many religious and cultural rituals. Today, cannabis is the subject of extensive research due to its potential to support and alleviate various medical conditions.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Many individuals use cannabis for its relaxing and euphoric effects. It is commonly used to manage pain, reduce inflammation, and relieve nausea. Cannabis is frequently sought as a treatment for conditions such as anxiety, depression, glaucoma, and muscle spasms from multiple sclerosis. Additionally, it is effective in alleviating symptoms for chemotherapy patients, such as stimulating appetite and managing sleep disorders.
                    </p>
                    
                    <p className="text-muted-foreground">
                      One of the most common uses of cannabis is for chronic pain relief. It is considered a safer alternative to opioids and has proven very effective when other pain medications have failed.
                    </p>
                    
                    <p className="text-muted-foreground">
                      In summary, cannabis offers a range of benefits for both medical and recreational users. Its popularity continues to grow as more people discover its potential for improving quality of life.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;