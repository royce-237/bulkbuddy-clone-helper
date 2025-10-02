import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1600&h=400&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-600/80" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-sm uppercase tracking-wider mb-2">ALL ABOUT</p>
            <h1 className="text-5xl md:text-6xl font-bold">BULK BUDDY</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              If you're looking for a reliable and trustworthy wholesale weed supplier in Canada,
              look no further than Bulk Buddy Online Dispensary. We offers top-quality cannabis
              products at wholesale prices, making us the perfect choice for dispensaries and
              other retailers.
            </p>
          </div>
        </section>

        {/* One Standard Low Wholesale Pricing */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">One Standard Low Wholesale Pricing</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
              Our selection of wholesale weed includes both dried flowers and concentrates and more high-quality cannabis strains.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop" 
                  alt="Cannabis growing facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1536964549840-15ad32257d0a?w=800&h=600&fit=crop" 
                  alt="Cannabis greenhouse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info Sections */}
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Section 01 */}
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-primary">01.</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Who We Serve?</h3>
                  <p className="text-muted-foreground mb-4">
                    We serve other online dispensaries and retailers all across Canada.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    After a few years of operations, we have built several relations all across Canada. We maintain good rapport with our clients and respond to their needs within a timely manner.
                  </p>
                  <p className="text-muted-foreground">
                    We believe that our clients choose us because they value our service above all else.
                  </p>
                </div>
              </div>

              {/* Section 02 */}
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-primary">02.</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Should You Order With Bulk Buddy?</h3>
                  <p className="text-muted-foreground">
                    We firmly believe customers will appreciate the level of service they can expect from Bulk Buddy staff. We hand select the best quality products after testing them, and work directly with other manufacturers to ensure our customers are satisfied. We pride ourselves in giving our complete attention to each customer. That is what separates us from the competitors.
                  </p>
                </div>
              </div>

              {/* Section 03 */}
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-primary">03.</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Company Mission</h3>
                  <p className="text-muted-foreground">
                    Our mission is to provide the highest-quality cannabis product at the lowest possible price available to all Canadians across Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
