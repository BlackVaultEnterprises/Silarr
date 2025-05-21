import React from 'react';
import LeadForm from '@/components/shared/lead-form';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="text-primary" />,
      title: "Our Office",
      content: "York, Pennsylvania",
      link: null
    },
    {
      icon: <Phone className="text-primary" />,
      title: "Phone",
      content: "(123) 456-7890",
      link: "tel:+1234567890"
    },
    {
      icon: <Mail className="text-primary" />,
      title: "Email",
      content: "Silarenterprisesllc@gmail.com",
      link: "mailto:Silarenterprisesllc@gmail.com"
    },
    {
      icon: <Clock className="text-primary" />,
      title: "Hours",
      content: "Monday - Friday: 9am - 6pm\nWeekends: By appointment",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="text-primary group-hover:text-white transition-colors" />,
      url: "https://www.facebook.com/share/p/15T6sHRgsf/"
    },
    {
      icon: <Instagram className="text-primary group-hover:text-white transition-colors" />,
      url: "#"
    },
    {
      icon: <Linkedin className="text-primary group-hover:text-white transition-colors" />,
      url: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to get your cash offer or ask any questions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-on-scroll">
            <LeadForm />
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-secondary p-8 rounded-xl shadow-lg h-full">
              <h3 className="font-montserrat font-semibold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-lg mb-1">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="font-inter text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="font-inter text-muted-foreground whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-montserrat font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center group hover:bg-primary transition-all"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
