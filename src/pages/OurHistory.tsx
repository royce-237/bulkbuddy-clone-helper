import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurHistory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Chronic Guru's History</h1>
            
            <div className="space-y-12">
              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chronic Guru's mission is to enhance lives and foster a sense of community through the transformative power of cannabis. Inspired by the vibrant energy of Amsterdam coffee shops and the exclusivity of speakeasies, they strive to create a blend of luxury and accessibility. As third-generation cannabis growers, they are dedicated to quality and innovation, providing relief to the masses at an accessible price point and creating a high-end yet inviting dispensary line.
                </p>
              </section>

              <section className="text-center">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden max-w-2xl mx-auto mb-4">
                  {/* TODO: Replace with actual image */}
                  <img src="/placeholder.svg" alt="Sativa University" className="w-full h-full object-cover"/>
                </div>
                <h2 className="text-3xl font-bold mb-4">Sativa University</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Started in 2017 by Patrick and his wife in Pine Hills, Florida, to educate students for careers in the cannabis industry.
                </p>
              </section>

              <section className="text-center">
                 <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden max-w-2xl mx-auto mb-4">
                  {/* TODO: Replace with actual image */}
                  <img src="/placeholder.svg" alt="Apopka Farm" className="w-full h-full object-cover"/>
                </div>
                <h2 className="text-3xl font-bold mb-4">The Apopka Farm</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Due to its popularity, Sativa University acquired a 5-acre farm in Apopka during the 2020 pandemic to build a hands-on training facility, with significant help from students and volunteers, including Patrick’s mother, Kelly Lynn McCabe.
                </p>
              </section>

               <section className="text-center">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden max-w-2xl mx-auto mb-4">
                  {/* TODO: Replace with actual image */}
                  <img src="/placeholder.svg" alt="Chronic Guru Inception" className="w-full h-full object-cover"/>
                </div>
                <h2 className="text-3xl font-bold mb-4">Chronic Guru's Inception</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Students encouraged Patrick to open his own dispensaries. Erdem and Ata provided funding, leading to the creation of “Chronic Guru.”
                </p>
              </section>

              <section className="text-center">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden max-w-2xl mx-auto mb-4">
                  {/* TODO: Replace with actual image */}
                  <img src="/placeholder.svg" alt="First Dispensary" className="w-full h-full object-cover"/>
                </div>
                <h2 className="text-3xl font-bold mb-4">The First Dispensary</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Longtime friend David assisted with construction, and Allyson (co-owner) played a vital role. The first dispensary opened in downtown Sanford, Florida, after overcoming municipal challenges.
                </p>
              </section>

              <section className="text-center">
                <h2 className="text-3xl font-bold mb-4">Philanthropy and Impact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Patrick dedicates most of Chronic Guru’s profits to advocate for accessible, high-quality cannabis, challenging corporations and government entities. The company has garnered over 900,000 customers, emphasizing real change beyond recreational use.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurHistory;
