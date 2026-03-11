import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase, Star } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  console.log('Home page rendered with updated personal information');

  // Core competency tags - User defined
  const coreAbilities = [
    '大模型产品/运营',
    '智能传播',
    '数据驱动内容运营',
    '0-1项目落地'
  ];

  // Job preferences - Updated with new cities
  const jobPreferences = {
    positions: ['产品经理', '内容运营', '产品运营'],
    cities: ['上海', '杭州', '深圳', '北京']
  };

  // Basic info - Updated with user's actual information
  const basicInfo = {
    name: '李叶萱',
    education: '北京师范大学 · 智能传播硕士',
    slogan: 'AI玩家'
  };

  const handleViewExperience = () => {
    console.log('Navigating to experience page');
    navigate('/experience');
  };

  return (
    <PageWrapper title="">
      <div className="retro-border bg-card shadow-custom relative overflow-hidden">
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-primary retro-border -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent retro-border translate-x-1/2 translate-y-1/2 rotate-12 opacity-15 pointer-events-none" />

        <div className="relative z-10 p-8 md:p-14">
          
          {/* Hero Title with Retro Badge */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 pb-8 border-b-4 border-border">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary text-primary-foreground px-3 py-1 retro-border font-black uppercase tracking-widest text-xs shadow-[3px_3px_0_0_var(--shadow-color)] inline-block">
                  CAMPUS RECRUIT
                </div>
                <Star className="text-accent fill-current" size={20} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-2">
                {basicInfo.name}
              </h1>
              <p className="text-lg font-bold text-muted-foreground mb-2">
                {basicInfo.education}
              </p>
              <p className="text-base font-bold text-foreground italic border-l-4 border-accent pl-3 max-w-2xl">
                "{basicInfo.slogan}"
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            
            {/* Core Abilities Section - Left */}
            <div className="lg:col-span-5">
              <div className="retro-border bg-secondary text-secondary-foreground p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent retro-border rotate-45" />
                
                <h2 className="text-2xl font-black uppercase tracking-wider mb-6 border-b-4 border-background pb-3">
                  核心能力标签
                </h2>
                
                <div className="space-y-3">
                  {coreAbilities.map((ability, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-background retro-border text-foreground hover:translate-x-2 transition-transform group"
                    >
                      <div className="w-8 h-8 bg-primary retro-border flex items-center justify-center font-black text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {index + 1}
                      </div>
                      <span className="font-bold text-base uppercase tracking-wide flex-1">
                        {ability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Preferences Section - Middle */}
            <div className="lg:col-span-4">
              <div className="retro-border bg-accent text-accent-foreground p-6 shadow-[6px_6px_0_0_var(--shadow-color)] h-full flex flex-col">
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary retro-border rounded-full hidden lg:block" />
                
                <h2 className="text-2xl font-black uppercase tracking-wider mb-6 border-b-4 border-border pb-3">
                  求职方向
                </h2>
                
                <div className="space-y-6 flex-1">
                  {/* Positions */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="text-foreground" size={20} strokeWidth={3} />
                      <h3 className="font-black uppercase text-sm tracking-widest text-foreground">
                        意向岗位
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {jobPreferences.positions.map((position, index) => (
                        <div 
                          key={index}
                          className="bg-background text-foreground px-4 py-2 retro-border font-bold text-sm shadow-[2px_2px_0_0_var(--shadow-color)]"
                        >
                          {position}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cities - Updated with 4 cities */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="text-foreground" size={20} strokeWidth={3} />
                      <h3 className="font-black uppercase text-sm tracking-widest text-foreground">
                        意向城市
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {jobPreferences.cities.map((city, index) => (
                        <div 
                          key={index}
                          className="bg-primary text-primary-foreground px-4 py-2 retro-border font-bold text-sm shadow-[2px_2px_0_0_rgba(0,0,0,0.5)]"
                        >
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Section - Right */}
            <div className="lg:col-span-3">
              <div className="retro-border bg-muted p-6 shadow-[6px_6px_0_0_var(--shadow-color)] h-full flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden">
                
                {/* Stripe pattern background */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--accent)_10px,var(--accent)_20px)] opacity-5 pointer-events-none" />
                
                <div className="relative z-10 w-full">
                  <h2 className="text-xl font-black uppercase tracking-wider mb-6 text-foreground">
                    快速操作
                  </h2>
                  
                  <Button 
                    onClick={handleViewExperience}
                    className="retro-border shadow-custom font-black uppercase tracking-wider w-full py-6 text-base hover:translate-y-[3px] hover:translate-x-[3px] hover:shadow-none transition-all group"
                  >
                    <span className="mr-2">查看核心经历</span>
                    <ArrowRight className="inline-block group-hover:translate-x-1 transition-transform" size={20} strokeWidth={3} />
                  </Button>

                  <div className="mt-6 pt-6 border-t-2 border-border border-dashed">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      EXPLORE MORE
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Highlight Section */}
          <div className="retro-border bg-primary text-primary-foreground p-6 shadow-[4px_4px_0_0_var(--shadow-color)] relative">
            <div className="absolute top-0 left-8 w-6 h-6 bg-accent retro-border -translate-y-1/2" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-black uppercase tracking-wider mb-2">
                  WHY HIRE ME?
                </h3>
                <p className="font-bold text-sm opacity-90">
                  愿意深耕内容、愿意思考逻辑、愿意担当责任、愿意见证历史
                </p>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/portfolio')}
                  className="retro-border shadow-[2px_2px_0_0_var(--shadow-color)] font-bold uppercase bg-background text-foreground hover:bg-accent hover:text-accent-foreground border-2 border-background"
                >
                  作品集
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/contact')}
                  className="retro-border shadow-[2px_2px_0_0_var(--shadow-color)] font-bold uppercase bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground border-2 border-background"
                >
                  联系我
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;