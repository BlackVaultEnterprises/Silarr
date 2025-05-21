import React from "react";
import { cn } from "@/lib/utils";
import silarLogo from "@assets/silar.jpg";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <img src={silarLogo} alt="Silar Enterprises Logo" className="h-10 w-10" />
      <span className="text-xl font-montserrat font-bold text-primary-light">
        Silar <span className="text-accent">Enterprises</span>
      </span>
    </div>
  );
};

export default Logo;
