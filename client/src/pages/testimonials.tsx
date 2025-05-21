import React from 'react';
import { Helmet } from 'react-helmet';
import { Star, MapPin, User, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
  serviceType?: string;
}

const TestimonialsPage: React.FC = () => {
  // This data would come from a real database in a production environment
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "I was worried about selling my mom's house after she passed away. It needed a lot of work and I didn't have the time or money to fix it up. Silar Enterprises made me a fair cash offer and handled everything. They even let me take my time removing personal belongings. The whole process was easy and respectful.",
      author: "Michael Johnson",
      location: "Spring Grove, PA",
      rating: 5,
      serviceType: "Inherited Property"
    },
    {
      id: 2,
      text: "After trying to sell through an agent for 6 months with no success, I contacted Silar. They made a fair offer within 24 hours and closed when I needed to. They answered all my questions directly and never pressured me. What a refreshing experience compared to other investors who constantly pushed for a quick decision.",
      author: "Sarah Williams",
      location: "Dover, PA",
      rating: 5,
      serviceType: "Quick Sale"
    },
    {
      id: 3,
      text: "My job was relocating me out of state and I needed to sell quickly. Spencer at Silar Enterprises was honest from the start about what he could offer and why. He showed me the comparable properties he was using to determine value, which no other investor did. We closed in just 10 days, and I was able to start my new job without the stress of an unsold house.",
      author: "James Rodriguez",
      location: "Red Lion, PA",
      rating: 5,
      serviceType: "Relocation"
    },
    {
      id: 4,
      text: "Our rental property had problem tenants who left it in terrible condition. We lived out of state and couldn't deal with it. Silar Enterprises bought it as-is, didn't nickel and dime us over the damage, and handled the whole process remotely. They even sent us videos of the closing to keep us in the loop. Excellent service!",
      author: "Emma and Robert Thompson",
      location: "York, PA",
      rating: 5,
      serviceType: "Rental Property"
    },
    {
      id: 5,
      text: "I had medical bills piling up and needed to sell fast. Most investors lowballed me terribly. Silar offered me $15K more than anyone else and closed in just 8 days. They were professional, responsive, and genuinely cared about my situation. I'm grateful for their help during a difficult time.",
      author: "Patricia Garcia",
      location: "Hanover, PA",
      rating: 5,
      serviceType: "Financial Hardship"
    },
    {
      id: 6,
      text: "The house I inherited needed massive repairs that I couldn't afford. Silar Enterprises gave me a fair price considering the condition and made the process simple. They were upfront about everything and didn't hit me with last-minute surprises like other investors had done. I highly recommend them.",
      author: "David Wilson",
      location: "Mechanicsburg, PA",
      rating: 5,
      serviceType: "Distressed Property"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Customer Testimonials | Silar Enterprises</title>
        <meta 
          name="description" 
          content="Read real reviews from homeowners who sold their houses to Silar Enterprises. See why our customers recommend our fast, fair, and hassle-free home buying service."
        />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-center animate-on-scroll">
              What <span className="text-primary">Homeowners Say</span>
            </h1>
            
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
              Don't just take our word for it. Read what real homeowners in York, PA and surrounding areas have to say about their experience selling their house to Silar Enterprises.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-secondary rounded-xl p-8 shadow-md animate-on-scroll">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill={i < testimonial.rating ? 'currentColor' : 'none'} className="h-5 w-5" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <p className="font-inter text-foreground relative z-10 pl-4">{testimonial.text}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-primary" />
                        <p className="font-medium">{testimonial.author}</p>
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    {testimonial.serviceType && (
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {testimonial.serviceType}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-secondary rounded-xl p-8 text-center animate-on-scroll">
              <h2 className="font-montserrat font-semibold text-2xl mb-4">Ready to Sell Your House?</h2>
              <p className="font-inter text-muted-foreground mb-6">
                Join hundreds of satisfied homeowners who have experienced our fair, fast, and hassle-free home buying process.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105 px-6 py-3">
                    Get Your Cash Offer
                  </Button>
                </Link>
                <a href="tel:+17178588338">
                  <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-6 py-3">
                    Call (717) 858-8338
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;