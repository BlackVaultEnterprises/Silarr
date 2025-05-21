import React, { useRef, useEffect, useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before transformation",
  afterAlt = "After transformation",
  className = ''
}) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleDrag = (clientX: number) => {
    if (!containerRef.current || !isDraggingRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const containerWidth = rect.width;
    const x = clientX - rect.left;
    
    // Calculate position as percentage
    let newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setPosition(newPosition);
  };

  const startDrag = (clientX: number) => {
    isDraggingRef.current = true;
    handleDrag(clientX);
  };

  const stopDrag = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDrag(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleDrag(e.touches[0].clientX);
    
    if (isDraggingRef.current) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('touchend', stopDrag);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startDrag(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    startDrag(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* After image (background) */}
      <img 
        src={afterImage}
        alt={afterAlt}
        className="w-full h-full object-cover"
      />
      
      {/* Before image (foreground, clipped) */}
      <img 
        src={beforeImage}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` 
        }}
      />
      
      {/* Slider handle */}
      <div 
        ref={sliderRef}
        className="absolute top-0 bottom-0 w-1 bg-white z-10 cursor-ew-resize"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md"></div>
      </div>
      
      {/* Label */}
      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium">
        Before/After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
