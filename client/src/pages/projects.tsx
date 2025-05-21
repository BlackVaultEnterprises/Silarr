import React from 'react';
import { Helmet } from 'react-helmet';
import BeforeAfterSlider from '@/components/ui/before-after-slider';
import { imageUrls } from '@/lib/utils';
import { MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  timeframe: string;
  before: string;
  after: string;
  details?: string;
}

const ProjectsPage: React.FC = () => {
  // In a full implementation, this would come from a CMS or API
  const projects: Project[] = [
    {
      id: 1,
      title: "Oakland Ave Kitchen Renovation",
      description: "Complete kitchen transformation with new cabinets, countertops, and appliances.",
      location: "York, PA",
      timeframe: "3 weeks turnaround",
      before: imageUrls.project1.before,
      after: imageUrls.project1.after,
      details: "This outdated kitchen was completely transformed with new custom cabinetry, quartz countertops, stainless steel appliances, and modern lighting. We also installed new flooring and opened up the layout to create a more spacious feel."
    },
    {
      id: 2,
      title: "Spring Garden Full Home Rehab",
      description: "Complete interior renovation including new flooring, paint, and modernized layout.",
      location: "York, PA",
      timeframe: "4 weeks turnaround",
      before: imageUrls.project2.before,
      after: imageUrls.project2.after,
      details: "This whole-house renovation included removing walls to create an open concept layout, installing new hardwood flooring throughout, completely remodeling the kitchen and bathrooms, and updating all electrical and plumbing systems."
    },
    {
      id: 3,
      title: "Market Street Bathroom Remodel",
      description: "Luxury bathroom renovation with custom tile work and modern fixtures.",
      location: "York, PA",
      timeframe: "2 weeks turnaround",
      before: imageUrls.project3.before,
      after: imageUrls.project3.after,
      details: "This bathroom renovation featured a complete gut and rebuild with custom shower tile work, a floating vanity, modern fixtures, and heated flooring. We also improved the layout to make better use of the available space."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Our Projects - Silar Enterprises House Transformations</title>
        <meta 
          name="description" 
          content="See the amazing transformations Silar Enterprises has completed in York, PA. Before and after photos of our home renovation projects."
        />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-center animate-on-scroll">
              Our <span className="text-primary">Projects</span>
            </h1>
            
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
              Browse our portfolio of house transformations in York, PA. We buy properties in any condition and turn them into beautiful, modern homes.
            </p>
            
            <div className="space-y-16">
              {projects.map((project) => (
                <div key={project.id} className="animate-on-scroll">
                  <div className="bg-secondary rounded-xl overflow-hidden shadow-xl">
                    <div className="grid md:grid-cols-2">
                      <div className="h-64 md:h-96">
                        <BeforeAfterSlider
                          beforeImage={project.before}
                          afterImage={project.after}
                          beforeAlt={`Before: ${project.title}`}
                          afterAlt={`After: ${project.title}`}
                          className="h-full"
                        />
                      </div>
                      
                      <div className="p-8 flex flex-col">
                        <h2 className="font-montserrat font-semibold text-2xl mb-4">{project.title}</h2>
                        
                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                          <span className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1 text-primary" /> {project.location}
                          </span>
                          <span className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1 text-primary" /> {project.timeframe}
                          </span>
                        </div>
                        
                        <p className="font-inter text-muted-foreground mb-6">{project.description}</p>
                        
                        <p className="font-inter text-foreground mb-6 flex-grow">{project.details}</p>
                        
                        <div className="mt-auto">
                          <p className="font-inter text-sm font-medium text-primary">Do you have a similar property to sell?</p>
                          <div className="mt-4">
                            <Link href="/contact">
                              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300">
                                Get Your Cash Offer
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16 animate-on-scroll">
              <h3 className="font-montserrat font-semibold text-2xl mb-6">
                Do you have a house you need to sell?
              </h3>
              <p className="font-inter text-muted-foreground mb-8">
                We buy houses in any condition throughout York, PA. Get a fair cash offer with no obligation.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold px-8 py-4 
                                transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
