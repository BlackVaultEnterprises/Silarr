import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import BeforeAfterSlider from '@/components/ui/before-after-slider';
import { imageUrls } from '@/lib/utils';
import { MapPin, Clock } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  timeframe: string;
  before: string;
  after: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Oakland Ave Kitchen Renovation",
      description: "Complete kitchen transformation with new cabinets, countertops, and appliances.",
      location: "York, PA",
      timeframe: "3 weeks turnaround",
      before: imageUrls.project1.before,
      after: imageUrls.project1.after
    },
    {
      id: 2,
      title: "Spring Garden Full Home Rehab",
      description: "Complete interior renovation including new flooring, paint, and modernized layout.",
      location: "York, PA",
      timeframe: "4 weeks turnaround",
      before: imageUrls.project2.before,
      after: imageUrls.project2.after
    },
    {
      id: 3,
      title: "Market Street Bathroom Remodel",
      description: "Luxury bathroom renovation with custom tile work and modern fixtures.",
      location: "York, PA",
      timeframe: "2 weeks turnaround",
      before: imageUrls.project3.before,
      after: imageUrls.project3.after
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            See the amazing transformations we've completed in York, PA and surrounding areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="animate-on-scroll">
              <div className="bg-secondary rounded-xl overflow-hidden shadow-xl card-tilt h-full">
                <div className="relative h-64">
                  <BeforeAfterSlider
                    beforeImage={project.before}
                    afterImage={project.after}
                    beforeAlt={`Before: ${project.title}`}
                    afterAlt={`After: ${project.title}`}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="font-inter text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-inter text-primary flex items-center">
                      <MapPin className="h-3 w-3 mr-1" /> {project.location}
                    </span>
                    <span className="text-xs font-inter flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> {project.timeframe}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Link href="/projects">
            <Button 
              variant="outline"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins text-md font-semibold px-8 py-4
                       transition-all duration-300"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
