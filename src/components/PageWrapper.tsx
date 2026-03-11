import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title }) => {
  return (
    <div data-cmp="PageWrapper" className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 text-center md:text-left relative inline-block">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-foreground z-10 relative">
          {title}
        </h1>
        {/* Retro text background highlight */}
        <div className="absolute bottom-1 left-0 w-full h-4 bg-accent -z-10 -ml-2" />
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;