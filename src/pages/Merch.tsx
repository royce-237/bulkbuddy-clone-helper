import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

export const products = [
  {
    id: 1,
    name: "Chronic Gravity Hookah",
    price: "$200.00",
    image: "img/merch/hookak.png",
    inStock: true,
    rating: 5,
    reviews: 1,
    sku: "N/A",
    categories: ["Merch"],
    description: "Elevate your sessions with the Chronic Gravity Hookah."
  },
  {
    id: 2,
    name: "Chronic Guru Embroidered Joggers",
    price: "$40.00",
    image: "img/merch/joggers.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "Comfortable and stylish joggers from Chronic Guru."
  },
  {
    id: 3,
    name: "Higher Society Crewneck",
    price: "$35.00",
    image: "img/merch/crewneck.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "A stylish crewneck for the higher society."
  },
  {
    id: 4,
    name: "IYKYK T-Shirt",
    price: "$35.00",
    image: "img/merch/It-shirt.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "If you know, you know. The IYKYK T-Shirt."
  },
  {
    id: 5,
    name: "Match Pocket Shorts",
    price: "$35.00",
    image: "img/merch/short.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "Convenient and stylish shorts with a match pocket."
  },
  {
    id: 6,
    name: "Truth T-Shirt",
    price: "$34.99",
    image: "img/merch/T-shirt.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "The Truth T-Shirt from Chronic Guru."
  },
  {
    id: 7,
    name: "Peace T-Shirt",
    price: "$34.99",
    image: "img/merch/pT-shirt.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "Spread peace with this T-Shirt from Chronic Guru."
  },
  {
    id: 8,
    name: "Fuel the Fire T-shirt",
    price: "$30.00",
    image: "img/merch/FT-shirt.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "Fuel the fire with this T-shirt from Chronic Guru."
  },
  {
    id: 9,
    name: "Guru Grinders",
    price: "$25.00",
    image: "img/merch/grinders.png",
    inStock: true,
    rating: 5,
    reviews: 5,
    sku: "N/A",
    categories: ["Merch"],
    description: "High-quality grinders from Chronic Guru."
  },
  {
    id: 10,
    name: "Cultivate Comfort Hat",
    price: "$25.00",
    image: "img/merch/hat.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "A comfortable and stylish hat from Chronic Guru."
  },
  {
    id: 11,
    name: "Match Pocket T-Shirt",
    price: "$25.00",
    image: "img/merch/MT-shirt.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "A stylish T-shirt with a match pocket."
  },
  {
    id: 12,
    name: "Cable Knit Beanie",
    price: "$20.00",
    image: "img/merch/beanie.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "A warm and stylish beanie from Chronic Guru."
  },
  {
    id: 13,
    name: "CG Athletic Quarter Crew Socks",
    price: "$12.99",
    image: "img/merch/socks.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "Comfortable and stylish socks from Chronic Guru."
  },
  {
    id: 14,
    name: "Higher Society Crew Socks",
    price: "$9.99",
    image: "img/merch/Csocks.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "Crew socks for the higher society."
  },
  {
    id: 15,
    name: "CG Keychain Grinder",
    price: "$5.00",
    image: "img/merch/keychain.png",
    inStock: true,
    rating: 5,
    reviews: 0,
    sku: "N/A",
    categories: ["Merch"],
    description: "A convenient keychain grinder from Chronic Guru."
  },
];

const Merch = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: any) => {
    const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    navigate(`/product/${slug}`, { state: { product: { ...product, menuCategory: "Merch" } } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Merchandise</h1>
            <p className="text-lg text-muted-foreground">Elevate your style with Chronic Guru apparel and merch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden bg-gray-50 cursor-pointer"
                  onClick={() => handleProductClick(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="font-medium text-card-foreground mb-2 text-sm leading-tight line-clamp-2 cursor-pointer hover:text-primary"
                    onClick={() => handleProductClick(product)}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                     <span className="text-xs text-muted-foreground ml-1">
                      {product.reviews}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="font-bold text-foreground text-sm">
                      {product.price}
                    </span>
                  </div>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Merch;
