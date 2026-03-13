import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  console.log('Current route path:', location.pathname);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '关于我', path: '/about' },
    { name: '核心经历', path: '/experience' },
    { name: '作品集', path: '/portfolio' },
    { name: '技能竞赛', path: '/skills' },
    { name: '校园经历', path: '/campus' },
    { name: '联系我', path: '/contact' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lyxresume202603.pdf';
    link.download = 'lyxresume202603.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const checkIsActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header data-cmp="Header" className="sticky top-0 z-50 w-full bg-background retro-border shadow-custom">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo with updated text LYX */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground font-black text-xl retro-border group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            LYX
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg uppercase tracking-wider text-foreground leading-tight hidden sm:block">
              Portfolio
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:block">
              Est. 2024
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-bold tracking-wide uppercase transition-all ${
                checkIsActive(item.path) 
                  ? 'bg-accent text-accent-foreground retro-border shadow-[2px_2px_0_0_var(--shadow-color)] translate-x-[-2px] translate-y-[-2px]' 
                  : 'text-foreground hover:bg-secondary hover:text-secondary-foreground retro-border border-transparent hover:border-border'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button onClick={handleDownloadResume} className="retro-border shadow-custom font-bold uppercase tracking-wider hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all">
            <Download className="mr-2 h-4 w-4" strokeWidth={3} />
            获取简历
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <Button variant="outline" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="retro-border shadow-custom bg-card">
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" strokeWidth={3} />
            ) : (
              <Menu className="h-6 w-6 text-foreground" strokeWidth={3} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-border bg-card">
          <div className="space-y-2 px-4 pb-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-bold uppercase tracking-wider retro-border ${
                  checkIsActive(item.path)
                    ? 'bg-accent text-accent-foreground shadow-[3px_3px_0_0_var(--shadow-color)]'
                    : 'bg-background hover:bg-secondary hover:text-secondary-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 space-y-3 flex flex-col items-center border-t-2 border-border border-dashed">
              <Button onClick={handleDownloadResume} className="w-full retro-border shadow-custom justify-center font-bold">
                <Download className="mr-2 h-4 w-4" strokeWidth={3} />
                DOWNLOAD RESUME
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;