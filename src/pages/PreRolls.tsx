import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const products = [
    {
        id: 1,
        name: "Infatuation",
        priceRange: "$12.99 - $265.00",
        rating: 4.8,
        reviews: 15,
        image: "/GuruImg/imgi_156_Inflation-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 25%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/infatuation/"
    },
    {
        id: 2,
        name: "Grape OG",
        priceRange: "$12.99 - $265.00",
        rating: 5.0,
        reviews: 11,
        image: "/GuruImg/imgi_167_Grape-OG-Web-FULL-1.png",
        inStock: true,
        badges: ["Indica 22.9%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/grape-og-strain/"
    },
    {
        id: 3,
        name: "Gas Can",
        priceRange: "$12.99 - $265.00",
        rating: 4.33,
        reviews: 10,
        image: "/GuruImg/imgi_178_Gas-Can-web-FULL.png",
        inStock: true,
        badges: ["Indica 21.4%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/gas-can/"
    },
    {
        id: 4,
        name: "Cherry Sangria",
        priceRange: "$12.99 - $265.00",
        rating: 5.0,
        reviews: 10,
        image: "/GuruImg/imgi_200_Cherry-Sangria-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 24.2%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/cherry-sangria/"
    },
    {
        id: 5,
        name: "Lizard Burger",
        priceRange: "$12.99 - $265.00",
        rating: 4.72,
        reviews: 19,
        image: "/GuruImg/imgi_211_Lizard-Burger-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 18.54%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/lizard-burger/"
    },
    {
        id: 6,
        name: "Triple Burger",
        priceRange: "$12.99 - $265.00",
        rating: 4.85,
        reviews: 22,
        image: "/GuruImg/imgi_222_Tripple-Burger-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 26.25%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/triple-burger/"
    },
    {
        id: 7,
        name: "Scorpion Tears",
        priceRange: "$12.99 - $265.00",
        rating: 4.65,
        reviews: 18,
        image: "/GuruImg/imgi_233_Scorpion-Tears-web-FULL-9.29.25-1.png",
        inStock: true,
        badges: ["Hybrid 21.50%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/scorpion-tears/"
    },
    {
        id: 8,
        name: "Mule Fuel",
        priceRange: "$12.99 - $265.00",
        rating: 4.97,
        reviews: 38,
        image: "/GuruImg/imgi_244_Mule-Fuel-web-FULL-8.4.25.png",
        inStock: true,
        badges: ["Hybrid 24.31%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/mule-fuel/"
    },
    {
        id: 9,
        name: "Purple Voodoo",
        priceRange: "$12.99 - $265.00",
        rating: 4.78,
        reviews: 24,
        image: "/GuruImg/imgi_253_Purple-Voodoo-Web.png",
        inStock: true,
        badges: ["Hybrid 24.3%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/purple-voodoo/"
    },
    {
        id: 10,
        name: "Gumbo",
        priceRange: "$12.99 - $265.00",
        rating: 4.43,
        reviews: 8,
        image: "/GuruImg/imgi_264_Gumbo-9.17.25-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 19.75%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/gumbo/"
    },
    {
        id: 11,
        name: "Menage",
        priceRange: "$12.99 - $135.00",
        rating: 3.80,
        reviews: 6,
        image: "/GuruImg/imgi_286_Mirage-web-FULL-1.png",
        inStock: true,
        badges: ["Hybrid 18.7%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/menage/"
    },
    {
        id: 12,
        name: "Lemon Cherry Swirl #31",
        priceRange: "$12.99 - $135.00",
        rating: 4.66,
        reviews: 30,
        image: "/GuruImg/imgi_297_Cherry-Swirl-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 26.9%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/lemon-cherry-swirl-31/"
    },
    {
        id: 13,
        name: "Blue Cookies",
        priceRange: "$12.99 - $70.00",
        rating: 4.88,
        reviews: 25,
        image: "/GuruImg/imgi_308_Blue-Cookies-Web-FULL.png",
        inStock: true,
        badges: ["Indica 25.87%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/blue-cookies/"
    },
    {
        id: 14,
        name: "Cherry Gumbo",
        priceRange: "$12.99 - $70.00",
        rating: 4.75,
        reviews: 20,
        image: "/GuruImg/imgi_330_Cherry-Gumbo-web-FULL-9.29.25.png",
        inStock: true,
        badges: ["Hybrid 28.4%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/cherry-gumbo-strain/"
    },
    {
        id: 15,
        name: "Sweet Retreat",
        priceRange: "$12.99 - $70.00",
        rating: 4.82,
        reviews: 17,
        image: "/GuruImg/imgi_341_Sweet-Retreat-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 26.5%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/sweet-retreat-strain/"
    },
    {
        id: 16,
        name: "Crystal Runtz",
        priceRange: "$12.99 - $70.00",
        rating: 4.90,
        reviews: 35,
        image: "/GuruImg/imgi_189_Crystal-Runtz-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 27.3%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/cystal-runtz/"
    },
    {
        id: 17,
        name: "El Chivo",
        priceRange: "$12.99 - $70.00",
        rating: 4.75,
        reviews: 17,
        image: "/GuruImg/imgi_352_El-Chivo-web-FULL.png",
        inStock: true,
        badges: ["Indica 17%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/el-chivo/"
    },
    {
        id: 18,
        name: "Slurp Juice",
        priceRange: "$12.99 - $70.00",
        rating: 4.70,
        reviews: 14,
        image: "/GuruImg/imgi_373_Slurp-Juice-Full.png",
        inStock: true,
        badges: ["Hybrid 23.8%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/slurp-juice/"
    },
    {
        id: 19,
        name: "High Octane Mintz",
        priceRange: "$12.99 - $70.00",
        rating: 4.47,
        reviews: 16,
        image: "/GuruImg/imgi_384_High-Octane-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 26.92%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/high-octane-mintz/"
    },
    {
        id: 20,
        name: "Gush Mintz",
        priceRange: "$12.99 - $70.00",
        rating: 4.85,
        reviews: 28,
        image: "/GuruImg/imgi_394_Gush-Mintz-WEB.png",
        inStock: true,
        badges: ["Indica 29.2%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/gush-mintz/"
    },
    {
        id: 21,
        name: "Super Jack",
        priceRange: "$12.99 - $40.00",
        rating: 4.78,
        reviews: 21,
        image: "/GuruImg/imgi_363_Super-Jam-web-FULL.png",
        inStock: true,
        badges: ["Sativa 24.31%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/super-jack/"
    },
    {
        id: 22,
        name: "Grape Candy",
        priceRange: "$12.99 - $40.00",
        rating: 4.82,
        reviews: 12,
        image: "/GuruImg/imgi_436_Grape-Candy-web-9.5.25-FULL.png",
        inStock: true,
        badges: ["Indica 28%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/grape-candy/"
    },
    {
        id: 23,
        name: "Horgurtz",
        priceRange: "$12.99",
        rating: 4.75,
        reviews: 5,
        image: "/GuruImg/imgi_468_Hogwartz-web-FULL-1.png",
        inStock: true,
        badges: ["Hybrid 24.15%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/horgurtz/"
    },
    {
        id: 24,
        name: "Glitter Bomb",
        priceRange: "$12.99",
        rating: 4.92,
        reviews: 31,
        image: "/GuruImg/imgi_479_Glitter-Bomb-web-FULL.png",
        inStock: true,
        badges: ["Indica 29.16%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/glitter-bomb/"
    },
    {
        id: 25,
        name: "Super Buff Cherry",
        priceRange: "$12.99",
        rating: 4.67,
        reviews: 13,
        image: "/GuruImg/imgi_490_Sherbaeio-web-FULL.png",
        inStock: true,
        badges: ["Hybrid 22.11%", "🔴 High Potency"],
        url: "https://chronicguru.com/pre-rolls/super-buff-cherry/"
    }
];

const PreRolls = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: any) => {
    const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    navigate(`/product/${slug}`, { state: { product: { ...product, menuCategory: "Pre-Rolls" } } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-xl md:text-4xl font-bold pb-8 flex flex-start">PRE-ROLLS</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                    className="w-full h-48 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
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
                      {product.priceRange}
                    </span>
                  </div>
                  {product.badges && product.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                          {product.badges.map((badge, idx) => (
                              <span
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded border border-gray-300"
                              >
                                  {badge}
                              </span>
                          ))}
                      </div>
                  )}
                  <Button
                    className="w-full bg-green-600 text-white hover:bg-green-700 text-xs h-8"
                    disabled={!product.inStock}
                    onClick={() => handleProductClick(product)}
                  >
                    {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4">What Are Cannabis Pre-Rolls?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Cannabis pre-rolls are ready-to-smoke joints made with premium cannabis flower, eliminating the need for rolling or preparation. Available in a variety of strains, sizes, and potency levels, pre-rolls are a convenient and consistent option for both casual and experienced users.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Unlike poorly packed or unevenly rolled joints, high-quality pre-rolls ensure an even burn, smooth draw, and full flavor—perfect for solo sessions or sharing.                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Benefits of Cannabis Pre-Rolls
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Convenient & Ready to Use </strong> – No rolling or prep required.</li>
                        <li><strong>Even Burn & Smooth Smoke</strong> – Expertly rolled for the best experience.</li>
                        <li><strong>Strain Variety </strong> – Available in indica, sativa, and hybrid options.</li>
                        <li><strong>Perfect for Any Occasion</strong> – Great for personal use or social settings.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">Popular Cannabis Pre-Roll Types</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Single Pre-Rolls</strong> – Perfect for quick and easy sessions.</li>
                        <li><strong>Multi-Pack Pre-Rolls</strong> – A great option for variety and convenience.</li>
                        <li><strong>Infused Pre-Rolls</strong> – Enhanced with concentrates for extra potency.</li>
                        <li><strong>Mini Pre-Rolls</strong> – Smaller-sized for microdosing or shorter sessions.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">FAQs About Cannabis Pre-Rolls</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">1. What’s inside a cannabis pre-roll?</h3>
                            <p className="text-gray-700">High-quality pre-rolls contain cannabis flower (not trim or shake) to ensure a potent and flavorful smoking experience.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">2. How long does a cannabis pre-roll last?</h3>
                            <p className="text-gray-700">A standard pre-roll typically burns for 10-20 minutes, depending on size and smoking pace.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">3. Are cannabis pre-rolls as strong as regular flower?</h3>
                            <p className="text-gray-700">Yes, pre-rolls are made with the same high-quality flower found in loose buds, providing identical potency and effects. Infused pre-rolls contain additional THC concentrates for an even stronger experience.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">4. How should I store pre-rolls?</h3>
                            <p className="text-gray-700">Store pre-rolls in an airtight container in a cool, dark place to preserve freshness and potency.</p>
                        </div>
                    </div>
                </div>

                <p className="text-gray-700 text-sm py-4 border-t">
                    <span className="font-bold">Browse our selection</span> of premium cannabis pre-rolls and enjoy the ultimate convenience in cannabis smoking.
                </p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PreRolls;