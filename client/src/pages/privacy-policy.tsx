import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container py-16 md:py-24">
      <Helmet>
        <title>Privacy Policy | Silar Enterprises LLC</title>
        <meta name="description" content="Our privacy policy explains how we collect, use, and protect your personal information when you visit our website or use our services." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-6">
            Last Updated: May 21, 2025
          </p>
          
          <h2>1. Introduction</h2>
          <p>
            Silar Enterprises LLC ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>
            We collect several types of information from and about users of our website, including:
          </p>
          <ul>
            <li>Contact information (such as name, email address, phone number, and property address)</li>
            <li>Information about your property when you submit a request for a cash offer</li>
            <li>Information about how you use our website</li>
            <li>IP address and browser information</li>
          </ul>
          
          <h2>3. How We Use Your Information</h2>
          <p>
            We use information that we collect about you or that you provide to us:
          </p>
          <ul>
            <li>To provide you with information or services that you request from us</li>
            <li>To fulfill any other purpose for which you provide it</li>
            <li>To provide you with notices about your account/subscription</li>
            <li>To contact you about our own services that may be of interest to you</li>
            <li>To improve our website and services</li>
          </ul>
          
          <h2>4. Disclosure of Your Information</h2>
          <p>
            We may disclose aggregated information about our users without restriction. We do not sell your personal information to third parties. We may disclose personal information:
          </p>
          <ul>
            <li>To our subsidiaries and affiliates</li>
            <li>To contractors, service providers, and other third parties we use to support our business</li>
            <li>To comply with any court order or legal obligation</li>
            <li>To enforce or apply our terms of use</li>
          </ul>
          
          <h2>5. Data Security</h2>
          <p>
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
          </p>
          
          <h2>6. Your Choices About Our Collection and Use of Your Information</h2>
          <p>
            You can opt out of receiving our marketing emails by following the unsubscribe instructions in the emails we send. You may contact us directly to request access to, correction of, or deletion of personal information that you have provided to us.
          </p>
          
          <h2>7. Changes to Our Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will post the new privacy policy on this page.
          </p>
          
          <h2>8. Contact Information</h2>
          <p>
            To ask questions or comment about this privacy policy and our privacy practices, contact us at:
          </p>
          <p>
            Silar Enterprises LLC<br />
            123 Main Street<br />
            York, PA 17401<br />
            Email: info@silarenterprisesllc.com<br />
            Phone: (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;