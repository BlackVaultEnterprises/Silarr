import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Phone, MessageCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Silar Enterprises - York, PA Home Buyers</title>
        <meta 
          name="description" 
          content="Learn about Silar Enterprises, York PA's trusted local home buying company. We buy houses for cash with no fees, no repairs, and fast closings."
        />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 animate-on-scroll">
              About <span className="text-primary">Silar Enterprises</span>
            </h1>
            
            <div className="mb-12 animate-on-scroll">
              <p className="font-inter text-xl text-muted-foreground mb-6">
                Selling a house can be a pain. Inspections, realtors, waiting months just to get lowballed? We've seen it all. We started Silar Enterprises because we got tired of watching our York neighbors get nickel-and-dimed by big "We Buy Houses" chains that don't give a damn about our community.
              </p>
              
              <p className="font-inter text-xl font-medium mb-8">
                This isn't a sales pitch. If you want to sell fast, great. If not? We'll still tell you exactly what your options are. No pressure, no gimmicks.
              </p>
            </div>
            
            <section className="mb-16 animate-on-scroll">
              <h2 className="font-montserrat font-bold text-3xl mb-4 text-primary">Why People Actually Choose Us</h2>
              <p className="text-lg italic mb-6">(Straight from our clients)</p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-secondary p-8 rounded-xl shadow-md">
                  <p className="text-xl font-medium mb-4">"You answered your damn phone."</p>
                  <p className="text-muted-foreground mb-4">— Mike, Spring Grove</p>
                  <p>Most companies make you talk to a call center. Text/call Spencer directly: (717) 858-8338. We're local. We pick up.</p>
                </div>
                
                <div className="bg-secondary p-8 rounded-xl shadow-md">
                  <p className="text-xl font-medium mb-4">"You didn't care that my basement looked like a zombie movie set."</p>
                  <p className="text-muted-foreground mb-4">— Sarah, Dover</p>
                  <p>No judging your clutter, repairs, or that weird wallpaper your grandma installed in 1987. We buy houses as-is, no inspection needed in as little as 7 days. Always.</p>
                </div>
                
                <div className="bg-secondary p-8 rounded-xl shadow-md">
                  <p className="text-xl font-medium mb-4">"You let me stay an extra month so my kids could finish school."</p>
                  <p className="text-muted-foreground mb-4">— James, Red Lion</p>
                  <p>Big corporations want you out yesterday. We work around your timeline to make the moving process as smooth and convenient as possible.</p>
                </div>
              </div>
            </section>
            
            <section className="mb-16 animate-on-scroll">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-primary">How This Works</h2>
              
              <div className="mb-6 flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <p className="text-xl font-medium">You tell us about your house (5 minutes, no commitments).</p>
                </div>
              </div>
              
              <div className="mb-6 flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <p className="text-xl font-medium">We give you a cash offer within 24 hours.</p>
                </div>
              </div>
              
              <div className="mb-6 flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <p className="text-xl font-medium">You decide. Close in 7 days, 7 months, or never. Your call.</p>
                </div>
              </div>
            </section>
            
            <section className="mb-16 animate-on-scroll">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-primary">No "Psychology," Just Honesty</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">We don't do:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-destructive mr-2 text-xl">✖</span> 
                      <span>Fake urgency ("OFFER EXPIRES TONIGHT!")</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-destructive mr-2 text-xl">✖</span> 
                      <span>Bait-and-switch pricing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-destructive mr-2 text-xl">✖</span> 
                      <span>Scripted "empathy" from hired actors</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">We do:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2 text-xl">✓</span> 
                      <span>Show you comps so you know our offer's fair</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2 text-xl">✓</span> 
                      <span>Let you keep the washer/dryer (seriously, take it)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2 text-xl">✓</span> 
                      <span>Recommend other options if we're not the best fit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="bg-secondary p-8 rounded-xl mb-16 animate-on-scroll">
              <h2 className="font-montserrat font-bold text-3xl mb-4">Meet Spencer</h2>
              <p className="text-xl font-bold text-primary mb-4">York born and built.</p>
              <p className="mb-6">
                I've rebuilt 19 homes here since 2023. My mom still lives in the house I grew up in off Leader Heights Rd. I'm not a saint—just a guy who thinks you deserve better than sleezy investor tactics.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <Button 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
                  onClick={() => window.location.href = 'tel:+17178588338'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: (717) 858-8338
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto border border-primary text-primary hover:bg-primary/10 px-6 py-4 transition-all duration-300"
                  onClick={() => window.location.href = 'sms:+17178588338'}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Text Me Direct
                </Button>
              </div>
              
              <p className="mt-4 text-muted-foreground">No bots. No assistants. Just me and my coffee addiction.</p>
            </section>
            
            <div className="text-lg italic border-l-4 border-primary pl-4 py-2 animate-on-scroll">
              <p>P.S. If a competitor beats our offer, forward it. We may just buy you a case of Lionshead while you think it over.</p>
            </div>
            
            <div className="text-center mt-16 animate-on-scroll">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 
                               transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105">
                  Get Your Cash Offer Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
