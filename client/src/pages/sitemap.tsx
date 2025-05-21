import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';

const Sitemap: React.FC = () => {
  const siteLinks = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Projects', url: '/projects' },
        { name: 'Contact', url: '/contact' },
      ]
    },
    {
      title: 'Legal & Information',
      links: [
        { name: 'Privacy Policy', url: '/privacy-policy' },
        { name: 'Terms of Service', url: '/terms-of-service' },
        { name: 'Sitemap', url: '/sitemap' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Cash Offers', url: '/#services' },
        { name: 'Fast Closings', url: '/#services' },
        { name: 'Property Evaluations', url: '/#services' },
        { name: 'Distressed Properties', url: '/#services' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Frequently Asked Questions', url: '/#faq' },
        { name: 'How It Works', url: '/#process' },
        { name: 'Testimonials', url: '/#testimonials' }
      ]
    }
  ];

  return (
    <div className="container py-16 md:py-24">
      <Helmet>
        <title>Sitemap | Silar Enterprises LLC</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all pages and resources available on Silar Enterprises LLC's website." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Sitemap</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Welcome to our sitemap. Use this page to find all the sections and pages available on our website.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {siteLinks.map((section, index) => (
            <div key={index} className="bg-secondary rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-primary">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.url}>
                      <a className="text-foreground hover:text-primary transition-colors duration-200 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;