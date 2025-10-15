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
              backgroundImage: "url('/placeholder.svg')", // TODO: Replace with a relevant hero image
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-600/80" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold">About Chronic Guru</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Chronic Guru's mission is to enhance lives and foster a sense of community through the transformative power of cannabis. Inspired by the vibrant energy of Amsterdam coffee shops and the exclusivity of speakeasies, they strive to create a blend of luxury and accessibility. As third-generation cannabis growers, they are dedicated to quality and innovation, providing relief to the masses at an accessible price point and creating a high-end yet inviting dispensary line.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* About Patrick O'Brien */}
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">About Patrick O’Brien</h2>
                <p className="text-muted-foreground mb-6">
                  Patrick O’Brien is by no means just an ordinary cannabis enthusiast. This third-generation cannabis grower and American veteran has trained over 60,000 students at his five-acre indoor/outdoor cannabis college and farm in Apopka, Florida (Sativa University). Now, he is opening his line of accessible cannabis dispensaries, known as Chronic Guru.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden max-w-2xl mx-auto mb-4">
                  {/* TODO: Replace with actual image of Patrick */}
                  <img 
                    src="/placeholder.svg" 
                    alt="Patrick showing off some top shelf flower."
                    className="w-full h-full object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2">Photo Above: Patrick showing off some top shelf flower.</p>
                </div>
                <p className="text-muted-foreground">
                  Billion-dollar cannabis companies like Curaleaf and MedMen have commissioned him and his team throughout the years. After receiving multiple requests from frustrated students about how things are done at some Medical Marijuana Treatment Centers, he decided it was time to begin opening his own line of dispensaries. This led to the creation of “Chronic Guru.”
                </p>
              </div>

              {/* Obstacles and Founding */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">The Road to Chronic Guru</h3>
                  <p className="text-muted-foreground mb-4">
                    However, this decision did not come without its obstacles. MMTCs currently have a monopoly holding over the market. In order to obtain a license in the State of Florida, it requires millions of dollars. This makes it very difficult to get a foot in the door unless people have significant investments or capital. Over the years, O’Brien has put every dollar back into the cannabis program at Sativa University. It was clear that bringing Chronic Guru to fruition would only be possible with some help.
                  </p>
                  <p className="text-muted-foreground">
                    “Simple — a passionate and incredibly successful investor and now brother-like mentor approached me with the idea of turning Chronic Guru into a reality after class one day,” says O’Brien. With the help of real estate mogul and European swimming champion Erdem Sezer of Trusa Investments, O’Brien plans on opening multiple locations throughout his home state of Florida.
                  </p>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  {/* TODO: Replace with actual image of Patrick & Erdem */}
                  <img 
                    src="/placeholder.svg" 
                    alt="The day Patrick & Erdem teamed up."
                    className="w-full h-full object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2">Photo Above: The day Patrick & Erdem teamed up.</p>
                </div>
              </div>
              
              {/* Community and Values */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video rounded-lg overflow-hidden">
                  {/* TODO: Replace with actual image of Allyson */}
                  <img 
                    src="/placeholder.svg" 
                    alt="Allyson getting her hands dirty in the organic garden."
                    className="w-full h-full object-cover"
                  />
                   <p className="text-sm text-muted-foreground mt-2">Photo Above: Allyson getting her hands dirty in the organic garden.</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">For the People, By the People</h3>
                   <p className="text-muted-foreground mb-4">
                    O’Brien continues, “We want people to feel comfortable asking questions about cannabis while fostering a sense of community for networking in a safe space without stigma and judgment.” His approach is unique in that “all decisions made for the company will be made by and for the people.”
                  </p>
                  <p className="text-muted-foreground">
                    “When someone enters our dispensary, we want them to feel value before they have even spent a dollar,” O’Brien states. “I come from the working class and know how hard it is to earn a dollar. Therefore, I want you to feel the value in spending your hard-earned money here.”
                  </p>
                </div>
              </div>

              {/* Product Philosophy */}
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Our Philosophy</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Unlike some dispensaries, the staff at Chronic Guru won't try to push products down people's throats that don't work. They only offer products that genuinely provide results. This is done by having a highly trained and educated staff that will guide visitors in the best direction to meet their needs. No fluff. Providing relief to the masses at an accessible price point is what drives Patrick O'Brien of Chronic Guru.
                </p>
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
