import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import ProcessSection from '@/components/home/process-section';
import ProjectsSection from '@/components/home/projects-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import FAQSection from '@/components/home/faq-section';
import CTASection from '@/components/home/cta-section';
import ContactSection from '@/components/home/contact-section';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Silar Enterprises - Sell Your York, PA House Fast For Cash</title>
        <meta 
          name="description" 
          content="Sell your York, PA house fast for cash. No inspections, no repairs, no realtors. Get a fair offer from Silar Enterprises, your trusted local home buyer."
        />
        <meta property="og:title" content="Silar Enterprises - Sell Your York, PA House Fast For Cash" />
        <meta 
          property="og:description" 
          content="Sell your York, PA house fast for cash. No inspections, no repairs, no realtors. Get a fair offer from Silar Enterprises, your trusted local home buyer."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Silar Enterprises LLC",
            "description": "We buy houses in York, PA for cash. Fast, fair, and hassle-free.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "York",
              "addressRegion": "PA",
              "addressCountry": "US"
            },
            "telephone": "+1234567890",
            "email": "Silarenterprisesllc@gmail.com",
            "url": "https://silarenterprisesllc.com"
          })}
        </script>
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ProcessSection />
      {/* Projects and Testimonials moved to their own pages */}
      <CTASection />
    </>
  );
};

export default HomePage;
