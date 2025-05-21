import React from 'react';
import { Button } from '@/components/ui/button';
import LeadForm from '@/components/shared/lead-form';
import { imageUrls, scrollToElement } from '@/lib/utils';
import { Bolt, Home, DollarSign } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/90 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30 backdrop-blur-sm"
          style={{ backgroundImage: `url(${imageUrls.hero})` }}
        ></div>
      </div>
      
      <div className="container z-10 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-shadow-sm">
                Sell Your <span className="text-primary drop-shadow-md">York, PA</span> House Fast For <span className="text-primary drop-shadow-md">Cash</span>
              </h1>
              <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Skip the hassle of repairs, inspections, and real estate commissions. Get a fair cash offer for your house in as little as 24 hours.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <Bolt className="text-primary h-5 w-5" />
                </div>
                <span className="font-inter">Fast Closing</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <Home className="text-primary h-5 w-5" />
                </div>
                <span className="font-inter">As-Is Purchase</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <DollarSign className="text-primary h-5 w-5" />
                </div>
                <span className="font-inter">No Fees</span>
              </div>
            </div>
            
            <div className="flex items-center mb-8 bg-secondary/40 backdrop-blur-sm rounded-lg p-3 border border-secondary">
              <div className="flex -space-x-3 mr-3">
                {/* Testimonial avatars stack */}
                <div className="h-8 w-8 rounded-full border-2 border-background overflow-hidden bg-muted flex items-center justify-center text-xs font-bold">JD</div>
                <div className="h-8 w-8 rounded-full border-2 border-background overflow-hidden bg-muted flex items-center justify-center text-xs font-bold">SM</div>
                <div className="h-8 w-8 rounded-full border-2 border-background overflow-hidden bg-muted flex items-center justify-center text-xs font-bold">RK</div>
              </div>
              <div className="text-sm">
                <div className="flex items-center">
                  {/* Star rating */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-muted-foreground">Trusted by 100+ York homeowners</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToElement('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8 py-6
                        transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
                aria-label="Get your cash offer now"
              >
                <span className="inline-flex items-center">
                  Get Your Cash Offer Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </Button>
              <Button
                onClick={() => scrollToElement('process')}
                variant="outline"
                className="border border-muted text-foreground hover:bg-foreground/10 font-medium text-md px-6 py-6
                      transition-all duration-300"
                aria-label="Learn how it works"
              >
                How It Works
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-right">
            <LeadForm simplified={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
