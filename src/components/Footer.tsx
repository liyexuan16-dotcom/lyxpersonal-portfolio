import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Scrolled to top');
  };

  return (
    <footer data-cmp="Footer" className="retro-border border-l-0 border-r-0 border-b-0 bg-muted mt-auto">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="font-black text-xl uppercase tracking-widest text-foreground bg-accent px-2 py-1 retro-border inline-block">
              PORTFOLIO
            </div>
            <p className="text-sm font-bold text-foreground">
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div>
            <Button 
              variant="default" 
              onClick={scrollToTop} 
              className="retro-border shadow-custom font-black uppercase tracking-wider h-12 px-6 hover:bg-secondary hover:text-secondary-foreground"
            >
              <ChevronUp className="h-5 w-5 mr-2" strokeWidth={3} />
              BACK TO TOP
            </Button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;