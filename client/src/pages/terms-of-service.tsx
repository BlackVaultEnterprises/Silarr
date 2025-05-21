import React from 'react';
import { Helmet } from 'react-helmet';

const TermsOfService: React.FC = () => {
  return (
    <div className="container py-16 md:py-24">
      <Helmet>
        <title>Terms of Service | Silar Enterprises LLC</title>
        <meta name="description" content="Read our terms of service to understand the conditions and rules that apply when you use the services provided by Silar Enterprises LLC." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-6">
            Last Updated: May 21, 2025
          </p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Silar Enterprises LLC website or services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, you may not access or use our services.
          </p>
          
          <h2>2. Services Description</h2>
          <p>
            Silar Enterprises LLC is a real estate investment company that purchases properties directly from homeowners. We provide information about our home buying services through our website and facilitate communication with homeowners interested in selling their properties.
          </p>
          
          <h2>3. User Conduct</h2>
          <p>
            You agree to use our website and services only for lawful purposes and in accordance with these Terms of Service. You agree not to:
          </p>
          <ul>
            <li>Use our services in any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>Use our services to transmit false or misleading information</li>
            <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our service</li>
            <li>Submit false or inaccurate information about a property or your ownership status</li>
          </ul>
          
          <h2>4. Intellectual Property Rights</h2>
          <p>
            The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by Silar Enterprises LLC, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
          
          <h2>6. Limitation of Liability</h2>
          <p>
            IN NO EVENT WILL SILAR ENTERPRISES LLC, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>
          
          <h2>7. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Silar Enterprises LLC, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the website.
          </p>
          
          <h2>8. Governing Law and Jurisdiction</h2>
          <p>
            All matters relating to the website and these Terms of Service and any dispute or claim arising therefrom or related thereto shall be governed by and construed in accordance with the internal laws of the State of Pennsylvania without giving effect to any choice or conflict of law provision or rule.
          </p>
          
          <h2>9. Changes to Terms of Service</h2>
          <p>
            We may revise and update these Terms of Service from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the website thereafter.
          </p>
          
          <h2>10. Contact Information</h2>
          <p>
            Questions or comments about the website or these Terms of Service may be directed to:
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

export default TermsOfService;