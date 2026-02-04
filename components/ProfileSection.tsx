import React from 'react';
import { IMAGES, TEXTS } from '../constants';

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto py-16 px-4">
      
      {/* Circular Image Container */}
      <div className="relative group shrink-0">
         {/* Rotating Rings */}
         <div className="absolute inset-0 rounded-full border border-cyber-red/30 w-full h-full scale-125 animate-[spin_10s_linear_infinite]"></div>
         <div className="absolute inset-0 rounded-full border-t-2 border-cyber-red w-full h-full scale-110 animate-[spin_5s_linear_infinite_reverse]"></div>
         
         {/* Main Glow Ring */}
         <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyber-red p-1 shadow-[0_0_40px_rgba(255,0,60,0.6)] relative z-10 bg-black">
            <div className="w-full h-full rounded-full overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500">
                <img 
                    src={IMAGES.authorProfile} 
                    alt={TEXTS.authorName}
                    className="w-full h-full object-cover object-center"
                />
            </div>
         </div>

         {/* Tech Details around circle */}
         <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-[8px] text-cyber-red/60 font-mono -rotate-90 hidden md:block">
            DATA_STREAM_01
         </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 text-left space-y-6">
        <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wider glow-text mb-1">
                {TEXTS.authorName}
            </h2>
            <p className="text-cyber-red font-body font-bold tracking-[0.2em] text-sm uppercase">
                {TEXTS.authorRole}
            </p>
        </div>

        <div className="space-y-4 text-gray-300 font-body text-lg md:text-xl leading-relaxed">
            {TEXTS.authorBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
      </div>
    </div>
  );
};