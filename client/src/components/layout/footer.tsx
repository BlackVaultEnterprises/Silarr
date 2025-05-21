import React from "react";
import { Link } from "wouter";
import Logo from "@/components/ui/logo";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-6" />
            <p className="font-inter text-muted-foreground text-sm mb-4">
              We buy houses in York, PA and surrounding areas for cash. Fast, fair, and hassle-free.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/faq" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  York, PA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Harrisburg, PA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Mechanicsburg, PA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Hanover, PA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Elizabethtown, PA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Carlisle, PA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  New Cumberland, PA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Gettysburg, PA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Columbia, PA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="text-primary mr-3 h-4 w-4" />
                <a href="tel:+17178588338" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  (717) 858-8338
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 h-4 w-4" />
                <a href="mailto:Silarenterprisesllc@gmail.com" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Silarenterprisesllc@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="text-primary mr-3 h-4 w-4" />
                <span className="font-inter text-muted-foreground">York, Pennsylvania</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Silar Enterprises LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="font-inter text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="font-inter text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="font-inter text-muted-foreground hover:text-primary transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
