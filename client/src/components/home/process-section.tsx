import React from 'react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';
import { Phone, FileText, Key } from 'lucide-react';

type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Contact Us',
      description: 'Fill out our simple form or give us a call. We\'ll ask a few basic questions about your property to prepare our offer.',
      icon: <Phone className="h-16 w-16 text-primary" />
    },
    {
      number: 2,
      title: 'Receive Your Offer',
      description: 'We\'ll present you with a fair, no-obligation cash offer within 24 hours. No pressure, take your time to decide.',
      icon: <FileText className="h-16 w-16 text-primary" />
    },
    {
      number: 3,
      title: 'Close On Your Timeline',
      description: 'Accept the offer and close when it works for you. Get cash in your hand in as little as 7 days.',
      icon: <Key className="h-16 w-16 text-primary" />
    }
  ];
  
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple 3-step process makes selling your York, PA house quick and hassle-free.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="bg-secondary rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="font-montserrat font-bold text-xl text-primary">{step.number}</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl">{step.title}</h3>
              </div>
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 text-primary">
                  {step.icon}
                </div>
              </div>
              <p className="font-inter text-muted-foreground text-center">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-8 animate-on-scroll">
          <div className="text-center md:text-left">
            <h3 className="font-montserrat font-semibold text-2xl mb-3">Ready to Get Started?</h3>
            <p className="font-inter text-muted-foreground max-w-md">Take the first step toward selling your house quickly and hassle-free.</p>
          </div>
          
          <Button
            onClick={() => scrollToElement('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins text-md font-semibold px-8 py-4 
                    transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
          >
            Get Your Cash Offer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
