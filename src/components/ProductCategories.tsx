import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Budget Products",
    description: "Enjoy Quality Products As Low As $39!",
    buttonText: "Shop Now →",
    image: "https://images.unsplash.com/photo-1595475038665-8cd6d43c9bf4?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Premium Collections",
    description: "We Offer Premium Quality, Latest Collections & More.",
    buttonText: "Shop Now →",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Special Bundles",
    description: "Shop From Special Bundles, Gift Sets & More.",
    buttonText: "Shop Now →",
    image: "https://images.unsplash.com/photo-1607473681481-72abb1152aa6?w=400&h=300&fit=crop&crop=center"
  },
];

const mainCategories = [
  {
    title: "Craft Products",
    subtitle: "Top Shelf",
    description: "Try Out Our Highest Quality Products.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Wellness Products", 
    subtitle: "Shop the Best in",
    description: "Relax, Unwind and Sleep Easily With Our Wellness Products.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center"  
  },
  {
    title: "Premium Collections",
    subtitle: "Experience the Smoothest",  
    description: "Convenient Premium Quality Products on the Go!",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center"
  },
];

const ProductCategories = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* First Category Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center p-6">
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl font-bold text-card-foreground mb-3">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <Button
                      variant="hero"
                      size="sm"
                      className="group-hover:scale-105 transition-transform duration-200"
                      onClick={() => navigate('/product-category/cannabis')}
                    >
                      {category.buttonText}
                    </Button>
                  </div>
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainCategories.map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center p-8">
                  <div className="flex-1 pr-6">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-primary">
                        {category.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    <Button
                      variant="hero"
                      size="lg"
                      className="group-hover:scale-105 transition-transform duration-200"
                      onClick={() => navigate('/product-category/cannabis')}
                    >
                      Shop Now →
                    </Button>
                  </div>
                  <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategories;