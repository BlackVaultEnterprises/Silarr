import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "I needed to sell my house quickly after getting a job offer in another state. Silar Enterprises made me a fair offer, and we closed in just 9 days. The process couldn't have been easier!",
      author: "Michael S.",
      location: "West York, PA",
      rating: 5
    },
    {
      id: 2,
      text: "My inherited property needed a lot of work that I couldn't afford. Silar Enterprises bought it as-is with no questions asked. They were honest, transparent, and made the process simple.",
      author: "Jennifer T.",
      location: "East York, PA",
      rating: 5
    },
    {
      id: 3,
      text: "After trying to sell with a realtor for 6 months, I reached out to Silar Enterprises. They offered a fair price, worked around my schedule, and I didn't have to pay any commissions or fees. I highly recommend them!",
      author: "David R.",
      location: "North York, PA",
      rating: 5
    }
  ];
  
  // Calculate how many slides we should show based on screen width
  // This is just for illustration - in real implementation, this would use a responsive hook
  const slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  
  // Calculate total number of pages
  const totalPages = Math.ceil(testimonials.length / slidesToShow);
  
  // Change slide
  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            What <span className="text-primary">Homeowners</span> Say
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what York, PA homeowners have to say about working with us.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-300"
              style={{ transform: `translateX(-${activeSlide * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 animate-on-scroll`}
                >
                  <Card className="h-full bg-secondary shadow-lg">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="flex space-x-1 mb-2">
                          {Array.from({length: testimonial.rating}).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      
                      <p className="font-inter text-muted-foreground italic mb-6 flex-grow">"{testimonial.text}"</p>
                      
                      <div className="flex items-center">
                        <div className="mr-4">
                          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <User className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-montserrat font-semibold text-sm">{testimonial.author}</h4>
                          <p className="font-inter text-xs text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({length: totalPages}).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-opacity ${
                  index === activeSlide ? 'bg-primary opacity-100' : 'bg-muted opacity-50 hover:opacity-100'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
