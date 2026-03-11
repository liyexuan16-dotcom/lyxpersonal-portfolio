import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Briefcase, 
  Building, 
  Map, 
  MessageSquare,
  Sparkles,
  Zap,
  Star,
  Heart,
  Asterisk,
  Send,
  Coffee
} from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const [hasCopied, setHasCopied] = useState(false);

  console.log('Contact page rendered with doodle animation area');

  const contactInfo = {
    phone: '157****9713',
    email: '2685176573@qq.com',
    location: '随时到岗'
  };

  const jobIntentions = [
    {
      icon: Briefcase,
      label: '意向岗位',
      items: ['产品经理', '内容运营', '产品运营']
    },
    {
      icon: Building,
      label: '意向行业',
      items: ['人工智能 (AI)', '互联网', '泛传媒']
    },
    {
      icon: Map,
      label: '意向城市',
      items: ['上海', '杭州', '深圳', '北京']
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email).then(() => {
      console.log('Email copied to clipboard');
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };

  return (
    <PageWrapper title="GET IN TOUCH">
      
      {/* Introduction Banner */}
      <div className="mb-12 relative">
        <div className="bg-primary text-primary-foreground p-6 md:p-8 retro-border shadow-custom inline-block w-full">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-background retro-border flex items-center justify-center shrink-0 -rotate-6 shadow-[3px_3px_0_0_var(--shadow-color)]">
                <MessageSquare className="text-foreground" size={24} strokeWidth={3} />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-wider mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                  期待与您的进一步沟通！
                </h2>
                <p className="font-bold text-primary-foreground/90 max-w-xl text-base">
                  如果您对我的履历、实战项目或调研报告感兴趣，欢迎通过以下两种方式与我取得联系。
                </p>
              </div>
            </div>
            
            {/* Decorative stamp */}
            <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary-foreground flex items-center justify-center -rotate-12 shrink-0 user-select-none pointer-events-none hidden md:flex opacity-80">
              <span className="font-black text-center leading-none text-primary-foreground tracking-widest text-lg drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                HIRE<br/>ME
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout for the Cards & Illustration */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        
        {/* Card 1: Contact Details */}
        <div className="retro-border bg-card shadow-custom flex flex-col group hover:-translate-y-2 transition-transform duration-300 h-full">
          <div className="bg-muted p-4 border-b-2 border-border flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary retro-border" />
            <div className="w-3 h-3 rounded-full bg-accent retro-border" />
            <h3 className="font-black uppercase tracking-widest text-foreground ml-2">
              联系方式 / CONTACT
            </h3>
          </div>
          <div className="p-6 md:p-8 flex-1 space-y-8 flex flex-col justify-center">
            
            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Phone size={16} strokeWidth={3} />
                <span className="font-black text-xs uppercase tracking-widest">Phone (脱敏)</span>
              </div>
              <div className="font-black text-2xl text-foreground bg-accent px-4 py-2 retro-border inline-block shadow-[3px_3px_0_0_var(--shadow-color)]">
                {contactInfo.phone}
              </div>
            </div>

            {/* Email with copy */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Mail size={16} strokeWidth={3} />
                <span className="font-black text-xs uppercase tracking-widest">Email</span>
              </div>
              <div className="flex flex-col xl:flex-row xl:items-center gap-3">
                <span className="font-bold text-lg text-foreground truncate block">
                  {contactInfo.email}
                </span>
                <Button 
                  onClick={handleCopyEmail}
                  variant="outline"
                  size="sm"
                  className={`retro-border transition-colors h-8 px-3 xl:ml-auto w-fit ${
                    hasCopied ? 'bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--shadow-color)]' : 'bg-background hover:bg-secondary hover:text-secondary-foreground shadow-[2px_2px_0_0_var(--shadow-color)] hover:shadow-none translate-x-[-2px] translate-y-[-2px] hover:translate-x-0 hover:translate-y-0'
                  }`}
                >
                  {hasCopied ? (
                    <><Check size={14} strokeWidth={3} className="mr-1" />已复制</>
                  ) : (
                    <><Copy size={14} strokeWidth={3} className="mr-1" />一键复制</>
                  )}
                </Button>
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <MapPin size={16} strokeWidth={3} />
                <span className="font-black text-xs uppercase tracking-widest">Status / Location</span>
              </div>
              <span className="font-bold text-base bg-secondary text-secondary-foreground px-3 py-1 retro-border inline-flex shadow-[3px_3px_0_0_var(--shadow-color)] -rotate-2 mt-1 hover:rotate-0 transition-transform">
                {contactInfo.location}
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Intention */}
        <div className="retro-border bg-secondary text-secondary-foreground shadow-custom flex flex-col group hover:-translate-y-2 transition-transform duration-300 h-full relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--background)_10px,var(--background)_20px)] pointer-events-none" />
          
          <div className="bg-background/10 backdrop-blur-[2px] p-4 border-b-2 border-border flex items-center gap-3 relative z-10">
            <Briefcase size={18} strokeWidth={3} />
            <h3 className="font-black uppercase tracking-widest ml-1">
              求职意向 / INTENTION
            </h3>
          </div>
          
          <div className="p-6 md:p-8 flex-1 space-y-6 relative z-10 flex flex-col justify-center">
            {jobIntentions.map((intent, idx) => (
              <div key={idx} className="group/item">
                <div className="flex items-center gap-2 mb-3">
                  <intent.icon className="text-accent group-hover/item:animate-bounce" size={18} strokeWidth={3} />
                  <span className="font-black text-sm uppercase tracking-widest opacity-90">
                    {intent.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {intent.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="bg-background text-foreground retro-border font-bold text-sm px-3 py-1 shadow-[2px_2px_0_0_var(--shadow-color)] hover:bg-accent hover:-translate-y-1 transition-transform"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Doodle Animation Area (Replacement for comic character) */}
        <div className="retro-border bg-card shadow-custom flex flex-col h-full min-h-[300px] relative overflow-hidden group hover:border-primary transition-colors duration-500">
          
          {/* Top Bar for aesthetic consistency */}
          <div className="bg-muted p-4 border-b-2 border-border flex items-center justify-end relative z-20">
             <div className="font-black text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
               <Coffee size={14} strokeWidth={3} /> Let's Talk!
             </div>
          </div>

          <div className="absolute inset-0 bg-background z-0">
             {/* Dot Matrix Background for notebook look */}
             <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
             
             {/* Animated Doodle Elements floating around */}
             <Zap size={48} className="absolute top-[20%] left-8 text-accent animate-[bounce_3s_ease-in-out_infinite] opacity-80" strokeWidth={2} />
             
             <Star size={36} className="absolute bottom-[25%] left-10 text-primary animate-[spin_5s_linear_infinite] opacity-90" strokeWidth={2} />
             
             <Heart size={40} className="absolute top-[25%] right-8 text-destructive animate-[pulse_2s_ease-in-out_infinite] -rotate-12 opacity-80 hover:text-primary transition-colors" strokeWidth={2} />
             
             <Asterisk size={64} className="absolute bottom-[15%] right-10 text-foreground animate-[spin_8s_linear_infinite] opacity-20" strokeWidth={1} />
             
             <Send size={32} className="absolute top-1/2 left-[20%] text-secondary animate-[bounce_4s_ease-in-out_infinite] rotate-45 opacity-70" strokeWidth={2.5} />
             
             <Sparkles size={80} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent opacity-20 pointer-events-none group-hover:scale-150 transition-transform duration-700" strokeWidth={1} />
          </div>

          {/* Central Focus Element */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-6">
            <div className="relative cursor-pointer transition-transform duration-300 hover:scale-110">
              
              {/* Dynamic Retro Text Bubble */}
              <div className="bg-foreground text-background retro-border px-8 py-5 font-black uppercase tracking-widest text-2xl shadow-[6px_6px_0_0_var(--accent)] -rotate-3 hover:rotate-2 hover:shadow-[8px_8px_0_0_var(--primary)] transition-all flex items-center gap-3">
                SEE U AGAIN! 
                <span className="inline-block animate-[bounce_2s_ease-in-out_infinite] origin-bottom">👋</span>
              </div>
              
              {/* Bubble Tail */}
              <div className="absolute -bottom-4 right-10 w-8 h-8 bg-foreground border-b-2 border-r-2 border-border rotate-45 z-[-1]" />
              
              {/* Extra decoration */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-4 border-secondary rounded-full border-dashed animate-[spin_10s_linear_infinite] opacity-50" />
            
            </div>
          </div>
          
        </div>

      </div>
    </PageWrapper>
  );
};

export default Contact;