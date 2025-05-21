import React from 'react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';
import { Clock, Ban, Wallet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Fast Closing',
      description: 'Close in as little as 7 days or on your timeframe. No waiting for buyer financing or inspections.'
    },
    {
      icon: <Ban className="h-6 w-6 text-primary" />,
      title: 'No Repairs Needed',
      description: 'Sell your house as-is. We handle all repairs, renovations, and cleaning. You take what you want and leave the rest.'
    },
    {
      icon: <Wallet className="h-6 w-6 text-primary" />,
      title: 'No Fees or Commissions',
      description: 'Zero real estate agent commissions, closing costs, or hidden fees. The offer you accept is the amount you receive.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Why <span className="text-primary">Choose Us</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not agents or investors looking to list your home. We're local York, PA property specialists who buy directly from homeowners and restore your homes to their fullest potential with care and empathy in mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-secondary text-foreground shadow-lg card-tilt animate-on-scroll"
            >
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">{benefit.title}</h3>
                <p className="font-inter text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Button
            onClick={() => scrollToElement('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins text-md font-semibold px-8 py-4 
                    transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
