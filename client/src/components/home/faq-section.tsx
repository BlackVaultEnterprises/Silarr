import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      id: "faq-1",
      question: "How quickly can you close on my house?",
      answer: "We can close in as little as 7 days, or on your timeline. Since we buy with cash, there's no waiting for bank financing, inspections, or appraisals. You decide when you want to close based on your needs."
    },
    {
      id: "faq-2",
      question: "Do I need to make repairs before selling?",
      answer: "No, you don't need to make any repairs. We buy houses in any condition, and we'll handle all repairs, cleaning, and renovations after purchase. You can leave the property exactly as it is."
    },
    {
      id: "faq-3",
      question: "Are there any fees or commissions?",
      answer: "None whatsoever. Unlike selling with a real estate agent (which typically costs 5-6% in commissions), we charge no fees or commissions. The price we offer is the amount you receive at closing."
    },
    {
      id: "faq-4",
      question: "How is the offer amount determined?",
      answer: "We consider the location, condition, and current market value of your property, then subtract the estimated cost of repairs and renovations needed. Our goal is to provide a fair offer that works for both parties while allowing us to renovate and resell the property."
    }
  ];
  
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about selling your house to Silar Enterprises.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem 
                value={faq.id} 
                key={faq.id}
                className="bg-secondary rounded-xl mb-4 overflow-hidden animate-on-scroll data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline font-montserrat font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="font-inter text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
