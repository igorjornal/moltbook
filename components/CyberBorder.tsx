import React from 'react';
import { TriangleAlert } from 'lucide-react';

interface CyberBorderProps {
  children: React.ReactNode;
  warningIcon?: boolean;
}

export const CyberBorder: React.FC<CyberBorderProps> = ({ children, warningIcon = false }) => {
  return (
    <div className="relative p-1">
        {/* Outer Glow Container */}
        <div className="relative border-2 border-cyber-red/60 bg-black/40 backdrop-blur-sm p-8 md:p-12 glow-box overflow-hidden">
            
            {/* Corner Decorators - Top Left */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cyber-red z-10"></div>
            <div className="absolute top-0 left-0 w-24 h-[2px] bg-cyber-red opacity-50"></div>
            <div className="absolute top-0 left-0 h-24 w-[2px] bg-cyber-red opacity-50"></div>

            {/* Corner Decorators - Top Right */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cyber-red z-10"></div>
            <div className="absolute top-4 right-12 text-[10px] text-cyber-red/80 font-display tracking-widest opacity-70 hidden md:block">
                SYS.1024 // US-11011501
            </div>

            {/* Corner Decorators - Bottom Right */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyber-red z-10"></div>
            <div className="absolute bottom-2 right-12 flex space-x-1">
                <div className="w-1 h-1 bg-cyber-red rounded-full"></div>
                <div className="w-1 h-1 bg-cyber-red rounded-full"></div>
                <div className="w-1 h-1 bg-cyber-red rounded-full"></div>
            </div>

            {/* Corner Decorators - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-cyber-red z-10"></div>
            <div className="absolute bottom-4 left-4 text-[9px] text-cyber-red/50 font-mono">
                02105181011510510
            </div>

            {/* Content */}
            <div className="relative z-20">
                {children}
            </div>

            {/* Warning Icon at Bottom Center */}
            {warningIcon && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cyber-red animate-pulse">
                   <TriangleAlert size={32} />
                </div>
            )}
            
            {/* Scanlines Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(255,0,0,0.02),rgba(255,0,0,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-0"></div>
        </div>
    </div>
  );
};