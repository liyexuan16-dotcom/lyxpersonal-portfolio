import React, { useState } from 'react';
import { Mail, Phone, GraduationCap, Award, Sparkles, Layers, Target, Users } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

const About: React.FC = () => {
  const [hoveredEducation, setHoveredEducation] = useState<string | null>(null);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
  
  console.log('About page rendered with the newest personal photo');

  // Contact information with hover tooltip for phone
  const contactInfo = {
    phone: '157****9713',
    phoneTooltip: '请下载pdf查看手机号码',
    email: '2685176573@qq.com'
  };

  // Education background with updated years
  const educationList = [
    {
      id: 'master',
      school: '北京师范大学',
      degree: '智能传播硕士',
      period: '2025-2027',
      rank: '初试/总排第一',
      coreCourses: [
        '人工智能与传播前沿',
        '数据新闻与可视化',
        '智能媒体产品设计',
        '计算传播学方法'
      ],
      bgColor: 'bg-primary',
      textColor: 'text-primary-foreground'
    },
    {
      id: 'bachelor',
      school: '北京体育大学',
      degree: '新闻学本科',
      period: '2019-2023',
      rank: '校级奖学金获得者',
      coreCourses: [
        '新闻采访与写作',
        '传播学概论',
        '新媒体运营',
        '体育新闻报道'
      ],
      bgColor: 'bg-secondary',
      textColor: 'text-secondary-foreground'
    }
  ];

  // Personal traits
  const personalTraits = [
    {
      icon: Layers,
      title: '0-1项目落地能力',
      description: '从需求调研到产品上线全流程把控经验'
    },
    {
      icon: Target,
      title: '数据驱动的运营思维',
      description: '擅长通过数据分析优化内容策略与用户增长'
    },
    {
      icon: Sparkles,
      title: '跨平台内容策划能力',
      description: '熟悉微信、抖音、小红书等多平台内容生态'
    },
    {
      icon: Users,
      title: '外联统筹能力',
      description: '具备跨部门协作与资源整合经验'
    }
  ];

  return (
    <PageWrapper title="ABOUT ME">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Photo + Basic Info */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Personal Photo - Fixed Image Rendering with the newest uploaded image */}
          <div className="retro-border bg-accent p-6 shadow-custom relative group hover:-translate-y-2 transition-transform">
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary retro-border rotate-45 z-10" />
            
            <div className="aspect-[3/4] retro-border bg-background flex items-center justify-center relative overflow-hidden">
              <picture className="w-full h-full">
                <source srcSet="/lyxphoto.webp" type="image/webp" />
                <img 
                  src="/lyxphoto.jpg"
                  alt="李叶萱个人照片"
                  decoding="async"
                  fetchPriority="high"
                  onError={(e) => {
                    console.error("Personal photo failed to load. Using fallback.");
                    e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=533&fit=crop";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out z-0"
                />
              </picture>
            </div>
            
            <div className="mt-6 text-center">
              <div className="font-black text-2xl uppercase tracking-widest text-foreground mb-2">
                李叶萱
              </div>
              <div className="font-bold text-sm text-foreground/80 uppercase tracking-wider">
                LI YEXUAN
              </div>
            </div>
          </div>

          {/* Contact Information Card with Phone Tooltip */}
          <div className="retro-border bg-card p-6 shadow-custom relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent retro-border rounded-full" />
            
            <h3 className="text-xl font-black uppercase tracking-wider text-foreground mb-6 border-b-4 border-border pb-3">
              联系方式
            </h3>
            
            <div className="space-y-4">
              {/* Phone with hover tooltip */}
              <div 
                className="flex items-center gap-4 p-4 bg-muted retro-border hover:bg-secondary hover:text-secondary-foreground transition-colors group relative"
                onMouseEnter={() => setShowPhoneTooltip(true)}
                onMouseLeave={() => setShowPhoneTooltip(false)}
              >
                <div className="w-10 h-10 bg-primary retro-border flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone className="text-primary-foreground group-hover:text-accent-foreground" size={20} strokeWidth={3} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                    Phone
                  </div>
                  <div className="font-bold text-base">
                    {contactInfo.phone}
                  </div>
                </div>
                
                {/* Tooltip on hover */}
                {showPhoneTooltip && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-foreground text-background px-3 py-2 retro-border text-xs font-bold whitespace-nowrap z-10 shadow-custom animate-in fade-in zoom-in duration-200">
                    {contactInfo.phoneTooltip}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-muted retro-border hover:bg-secondary hover:text-secondary-foreground transition-colors group">
                <div className="w-10 h-10 bg-primary retro-border flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="text-primary-foreground group-hover:text-accent-foreground" size={20} strokeWidth={3} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                    Email
                  </div>
                  <div className="font-bold text-base break-all">
                    {contactInfo.email}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Education & Traits */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Personal Traits Wall */}
          <div className="retro-border bg-secondary text-secondary-foreground p-6 shadow-custom relative overflow-hidden">
            <div className="absolute top-4 right-4 text-background opacity-20 font-black text-6xl pointer-events-none">
              ★
            </div>
            <div className="absolute -bottom-8 -left-8 text-background opacity-10 font-black text-8xl pointer-events-none -rotate-12">
              #
            </div>
            
            <h3 className="text-2xl font-black uppercase tracking-wider mb-6 border-b-4 border-background pb-3 relative z-10">
              个人特质
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {personalTraits.map((trait, index) => (
                <div 
                  key={index}
                  className="bg-background retro-border p-5 text-foreground hover:scale-[1.02] transition-transform group shadow-[2px_2px_0_0_var(--background)]"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent retro-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <trait.icon size={20} strokeWidth={3} />
                    </div>
                    <h4 className="font-black text-base uppercase tracking-wide leading-tight flex-1 mt-1">
                      {trait.title}
                    </h4>
                  </div>
                  <p className="text-sm font-bold text-foreground/70 pl-[3.25rem]">
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Background Timeline */}
          <div className="retro-border bg-card p-6 shadow-custom relative">
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary retro-border flex items-center justify-center">
              <Award className="text-primary-foreground" size={20} strokeWidth={3} />
            </div>
            
            <h3 className="text-2xl font-black uppercase tracking-wider text-foreground mb-6 border-b-4 border-border pb-3">
              教育背景
            </h3>
            
            <div className="space-y-6">
              {educationList.map((edu, index) => (
                <div 
                  key={edu.id}
                  className="relative"
                  onMouseEnter={() => setHoveredEducation(edu.id)}
                  onMouseLeave={() => setHoveredEducation(null)}
                >
                  {/* Main Education Card */}
                  <div className={`retro-border ${edu.bgColor} ${edu.textColor} p-5 shadow-[4px_4px_0_0_var(--shadow-color)] transition-all ${
                    hoveredEducation === edu.id ? 'translate-x-1 translate-y-1 shadow-[2px_2px_0_0_var(--shadow-color)]' : ''
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-3 sm:gap-0">
                      <div className="flex-1">
                        <h4 className="font-black text-xl uppercase tracking-wide mb-1">
                          {edu.school}
                        </h4>
                        <p className="font-bold text-base opacity-90">
                          {edu.degree}
                        </p>
                      </div>
                      <div className="bg-background text-foreground px-3 py-1 retro-border font-black text-xs uppercase tracking-widest flex-shrink-0 self-start">
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-4 inline-flex bg-background/20 px-3 py-1.5 retro-border border-dashed border-current">
                      <Award className="flex-shrink-0" size={16} strokeWidth={3} />
                      <span className="font-bold text-sm">
                        {edu.rank}
                      </span>
                    </div>
                  </div>

                  {/* Core Courses Expansion (Hover Effect) */}
                  <div className={`mt-3 retro-border bg-background p-4 transition-all duration-300 overflow-hidden ${
                    hoveredEducation === edu.id 
                      ? 'max-h-96 opacity-100 shadow-[3px_3px_0_0_var(--shadow-color)] translate-y-0' 
                      : 'max-h-0 opacity-0 border-transparent -translate-y-2'
                  }`}>
                    <h5 className="font-black text-sm uppercase tracking-widest text-foreground mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-accent retro-border flex items-center justify-center rotate-45">
                        <GraduationCap className="text-accent-foreground -rotate-45" size={12} strokeWidth={3} />
                      </div>
                      核心课程
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.coreCourses.map((course, idx) => (
                        <div 
                          key={idx}
                          className="bg-muted px-3 py-2 retro-border text-foreground font-bold text-xs flex items-center gap-2 hover:bg-secondary hover:text-secondary-foreground transition-colors"
                        >
                          <span className="w-5 h-5 bg-primary retro-border flex items-center justify-center text-primary-foreground font-black text-[10px]">
                            {idx + 1}
                          </span>
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connector Line for Timeline */}
                  {index < educationList.length - 1 && (
                    <div className="w-1 h-6 bg-border ml-6 my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
};

export default About;