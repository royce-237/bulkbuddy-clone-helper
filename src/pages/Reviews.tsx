import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data based on the scraped content
const reviews = [
  {
    product: "Cherry Gumbo",
    author: "Anthony W.",
    rating: 5,
    text: "Amazing experience! Very informative and helpful in determining what was best for me. Will be using in future!!!",
    date: "2024-05-15",
  },
  {
    product: "1:1 Gummies",
    author: "John D.",
    rating: 5,
    text: "These gummies are perfect for a balanced effect. Great for relaxing without feeling too high.",
    date: "2024-05-14",
  },
  {
    product: "Gush Mintz",
    author: "Emily R.",
    rating: 4,
    text: "Really enjoyed the flavor and the calming effects. A bit harsh on the throat, but overall a great product.",
    date: "2024-05-12",
  },
  {
    product: "Sunset Sherbet strain",
    author: "Mike S.",
    rating: 5,
    text: "A beautiful strain with an amazing aroma. The effects are uplifting and perfect for daytime use. Highly recommend.",
    date: "2024-05-11",
  },
  {
    product: "Layered Cake",
    author: "Sarah K.",
    rating: 5,
    text: "Absolutely delicious and potent. The best edible I've had in a long time. Will be buying again!",
    date: "2024-05-10",
  },
  {
    product: "Rainbow Runtz",
    author: "David L.",
    rating: 4,
    text: "Vibrant colors and a sweet, fruity taste. The high is very pleasant and relaxing. Good for evenings.",
    date: "2024-05-09",
  },
  {
    product: "Candy Gas",
    author: "Jessica P.",
    rating: 5,
    text: "This is my new favorite. The name says it all - sweet like candy with a powerful punch. A must-try!",
    date: "2024-05-08",
  },
  {
    product: "Strawberry Fritter",
    author: "Chris B.",
    rating: 4,
    text: "Great taste and a nice, mellow high. Good for social situations. I shared with friends and they all loved it.",
    date: "2024-05-07",
  },
  {
    product: "Chronic Guru 510 Battery",
    author: "Alex T.",
    rating: 5,
    text: "Sleek design and works perfectly. The variable voltage is a great feature. Best battery I've owned.",
    date: "2024-05-06",
  },
  {
    product: "1:1 Gummies",
    author: "Maria G.",
    rating: 5,
    text: "As a medical user, these are a lifesaver. Perfect for pain relief without the anxiety. Thank you!",
    date: "2024-05-05",
  },
  {
    product: "Cherry Gumbo",
    author: "Ben R.",
    rating: 5,
    text: "Wow, just wow. The quality is top-notch. Smooth smoke, great effects. Chronic Guru is the real deal.",
    date: "2024-05-04",
  },
  {
    product: "Gush Mintz",
    author: "Linda H.",
    rating: 5,
    text: "I have trouble sleeping and this strain has been a game changer. So relaxing. Knocks me right out.",
    date: "2024-05-03",
  },
];

const REVIEWS_PER_PAGE = 6;

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  const currentReviews = reviews.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Customer Reviews</h1>
            <p className="text-muted-foreground mt-2">See what our community is saying about our products.</p>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-4xl font-bold">4.8</span>
                <div className="flex flex-col items-start">
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5" fill="currentColor" />
                    <Star className="h-5 w-5" fill="currentColor" />
                    <Star className="h-5 w-5" fill="currentColor" />
                    <Star className="h-5 w-5" fill="currentColor" />
                    <Star className="h-5 w-5" fill="currentColor" />
                  </div>
                  <p className="text-sm text-muted-foreground">Based on 5,772 reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for video */}
          <div className="text-center mb-12">
             <p className="text-sm text-muted-foreground mb-2">WATCH: A customer review</p>
            <div className="aspect-video bg-slate-800 rounded-lg max-w-3xl mx-auto flex items-center justify-center">
              <p className="text-white">Video Placeholder</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentReviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{review.product}</CardTitle>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="text-sm font-medium">{review.author}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink href="#" isActive={currentPage === i + 1} onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;