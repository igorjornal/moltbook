import React from 'react';
import { IMAGES, TEXTS } from './constants';
import { CyberBorder } from './components/CyberBorder';
import { ProfileSection } from './components/ProfileSection';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-dark bg-grid-pattern bg-[length:40px_40px] overflow-x-hidden selection:bg-cyber-red selection:text-white flex flex-col">
      
      {/* Decorative Top Bar (Substituindo a imagem por uma linha fina estilo tech) */}
      <div className="w-full h-2 bg-cyber-red shadow-[0_0_20px_rgba(255,0,60,0.5)]"></div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative z-30 pb-20 flex-grow">
        
        {/* Main Text Content Box */}
        <div className="max-w-4xl mx-auto mb-24">
            <div className="text-center mb-12 space-y-4">
                 {/* Decorative element above title */}
                <div className="inline-block px-4 py-1 border border-cyber-red/30 rounded-full text-xs font-mono text-cyber-red/80 tracking-[0.2em] mb-4">
                    SYSTEM_CRITICAL // OPINION_PIECE
                </div>
                
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-wider glow-text leading-tight">
                    {TEXTS.title}
                </h1>

                {/* Author Byline */}
                <p className="text-cyber-red text-sm md:text-base font-mono font-bold tracking-[0.2em] pt-2">
                    POR {TEXTS.authorName.toUpperCase()}
                </p>
            </div>

            <CyberBorder warningIcon={true}>
                <div className="space-y-6 text-base md:text-xl font-body text-gray-200 leading-relaxed text-justify md:text-left">
                    {TEXTS.mainDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </CyberBorder>
        </div>

        {/* Divider */}
        <div className="w-full max-w-5xl mx-auto h-[1px] bg-cyber-red/30 my-10 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 bg-cyber-red rotate-45"></div>
        </div>

        {/* Author Profile Section */}
        <ProfileSection />

      </main>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-cyber-red/30 text-center mt-auto">
        <p className="text-cyber-dim font-mono text-xs md:text-sm tracking-widest uppercase px-4 text-balance">
            {TEXTS.footer}
        </p>
      </footer>

    </div>
  );
}