import React, { useState, useRef } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div
          ref={tooltipRef}
          className={`absolute z-10 top-10 py-2  -right-5 rounded-md shadow-tooltip bg-tooltip-bg text-sm white-space-nowrap text-tooltip-text border border-tooltip-border`}
          
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;