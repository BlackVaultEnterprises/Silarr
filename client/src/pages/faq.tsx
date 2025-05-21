import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "How does the house buying process work?",
      answer: "Our process is simple and straightforward. First, you contact us through our form or phone number. We'll gather some initial information about your property and schedule a time to see it. After evaluating your house, we make a fair, no-obligation cash offer, typically within 24 hours. If you accept, we can close on your timeline - as quickly as 7 days or according to your schedule."
    },
    {
      question: "Do I need to make repairs before selling?",
      answer: "Absolutely not! We buy houses in any condition - and we mean ANY condition. You don't need to clean, make repairs, or fix anything before selling to us. We handle all repairs, cleaning, and updates after the purchase, saving you time and money."
    },
    {
      question: "How fast can I sell my house?",
      answer: "We can typically close in as little as 7 days, or on your timeline whenever you're ready. Unlike traditional sales that can take months, our process eliminates financing contingencies, appraisals, and lengthy inspections that slow down the process."
    },
    {
      question: "What types of fees will I pay?",
      answer: "None! You pay ZERO fees when selling to us. No real estate commissions, no closing costs, no hidden charges. The offer we make is the amount you receive at closing. This represents significant savings compared to traditional selling methods."
    },
    {
      question: "How is your offer calculated?",
      answer: "We base our offers on the current market value of your property in its present condition, minus the cost of repairs and updates we'll need to make. We also factor in our carrying costs and a fair profit margin to make the transaction work for all parties."
    },
    {
      question: "What areas do you buy houses in?",
      answer: "We primarily focus on York, PA and surrounding areas throughout York County. Our local market expertise allows us to make better offers than national companies that don't understand the specific neighborhood values and market conditions."
    },
    {
      question: "Are there any obligations if I get an offer?",
      answer: "None whatsoever. Our cash offers come with no strings attached. You can take as much time as you need to think it over or shop around. We're confident in the fairness of our offers, but we want you to feel completely comfortable with your decision."
    },
    {
      question: "What types of properties do you buy?",
      answer: "We buy all types of residential properties including single-family homes, multi-family units, condos, townhouses, and even some commercial properties. Whether it's a property in perfect condition, needs major repairs, has tenant issues, or any other situation - we're interested."
    },
    {
      question: "Why should I sell to you instead of listing with a realtor?",
      answer: "Selling to us means: no repairs needed, no cleaning required, no commissions or fees, no showings with strangers walking through your home, no financing contingencies that can fall through, no appraisal issues, and a guaranteed sale on your timeline. We're the right solution for homeowners who value convenience, speed, and certainty."
    },
    {
      question: "What documents do I need to sell my house?",
      answer: "Typically you'll need your ID, your deed or mortgage statement, and any relevant documents related to the property (like surveys, tax information, etc.). But don't worry! We'll guide you through exactly what's needed and help you gather anything that's missing."
    }
  ];

  return (
    <div className="container py-16 md:py-24">
      <Helmet>
        <title>Frequently Asked Questions | Silar Enterprises LLC</title>
        <meta name="description" content="Find answers to commonly asked questions about selling your house for cash to Silar Enterprises LLC. Learn about our process, timeline, and why homeowners choose us." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Find answers to the most common questions about selling your house for cash. If you don't see your question here, please feel free to <a href="/contact" className="text-primary hover:underline">contact us</a>.
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-16 p-8 bg-secondary rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            We're here to help and happy to discuss any aspect of our house buying process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
            >
              Contact Us
            </a>
            <a 
              href="tel:+15551234567" 
              className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-all duration-300"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;