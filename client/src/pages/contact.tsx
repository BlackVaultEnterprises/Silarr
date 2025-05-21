import React from 'react';
import { Helmet } from 'react-helmet';
import ContactSection from '@/components/home/contact-section';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Silar Enterprises - Get Your Cash Offer</title>
        <meta 
          name="description" 
          content="Contact Silar Enterprises for a fast, fair cash offer on your York, PA house. No obligations, no pressure, just a simple selling process."
        />
      </Helmet>

      <div className="pt-24">
        <ContactSection />
      </div>
    </>
  );
};

export default ContactPage;
