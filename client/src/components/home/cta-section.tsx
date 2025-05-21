import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 to-primary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="font-montserrat font-bold text-4xl mb-6">
            Ready to Sell Your <span className="text-primary">York, PA</span> House?
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a fair cash offer with no obligations. Skip the repairs, skip the waiting, and skip the hassle of traditional home selling.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-poppins text-md font-semibold px-8 py-4 
                      transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
            >
              Get Your Cash Offer Now
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.location.href = 'tel:+17178588338'}
              className="w-full sm:w-auto bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground
                      font-poppins text-md font-semibold px-8 py-4 transition-all duration-300"
            >
              <Phone className="h-4 w-4 mr-2" /> Call Us Directly
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
