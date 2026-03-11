import React from 'react';
import { Target, Zap, LayoutList, MessageSquare, Anchor } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

const Campus: React.FC = () => {
  console.log('Campus page rendered with updated specific experiences');

  const campusExperiences = [
    {
      id: 'campus-1',
      period: '2025.10 - 至今',
      org: 'BNU新闻与传播学院就业促进中心',
      role: '主任',
      responsibilities: [
        '外联对接：联动传媒、互联网等领域优质用人单位，策划执行院系专场双选会及“访企拓岗”专项行动',
        '活动统筹：统筹就业讲座、求职集训等多场特色活动，覆盖政策解读、行业分享、技能提升等核心维度',
        '信息推送：构建公众号+社群双轨信息推送机制，提供校招资讯、选调报名协办等专项服务'
      ],
      capabilities: ['外联拓展', '活动统筹', '资源整合'],
      tagLine: 'MANAGEMENT & LIAISON',
      color: 'bg-primary',
      textColor: 'text-primary-foreground',
      icon: Target
    },
    {
      id: 'campus-2',
      period: '2025.10 - 至今',
      org: '中国VR/AR创作大赛秘书处',
      role: '视觉组组长',
      responsibilities: [
        '剪辑制作展映活动宣传视频物料',
        '担任现场副导演，负责灯光、大屏的调度'
      ],
      capabilities: ['视频剪辑', '现场执行', '视觉统筹'],
      tagLine: 'VISUAL & PRODUCTION',
      color: 'bg-accent',
      textColor: 'text-accent-foreground',
      icon: Zap
    },
    {
      id: 'campus-3',
      period: '2020.09 - 2022.06',
      org: '北京体育大学辩论队',
      role: '队长',
      responsibilities: [
        '赛事策划：承办校级赛事和市级联赛（华语辩论世界杯联赛杯北京赛区），其中新生辩论赛参赛人数超1000人',
        '内容运营：运营官方公众号@BSU辩论协会，发布公众号文章百余条，独立策划校级比赛宣传小片的拍摄和剪辑',
        '成就：团体—第八届新传杯全国高校辩论赛亚军，个人—全程最佳辩手'
      ],
      capabilities: ['赛事策划', '内容运营', '团队领导'],
      tagLine: 'PLANNING & OPERATION',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      icon: MessageSquare
    }
  ];

  return (
    <PageWrapper title="CAMPUS & LEADERSHIP">

      <div className="mb-8">
        <h2 className="text-xl font-black text-foreground uppercase tracking-widest border-l-4 border-primary pl-4 inline-block">
          学生工作与组织领导力
        </h2>
        <p className="text-muted-foreground mt-2 font-bold text-sm">
          Hover卡片查看核心职责明细
        </p>
      </div>

      {/* Horizontal Timeline Layout for Desktop / Vertical for Mobile */}
      <div className="relative pt-6">
        
        {/* Background Connecting Line (Desktop Only) */}
        <div className="hidden lg:block absolute top-[52px] left-0 right-0 w-full h-2 bg-border z-0 shadow-[0_2px_0_0_var(--shadow-color)]" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
          
          {campusExperiences.map((exp, index) => (
            <div key={exp.id} className="flex flex-col group/timeline">
              
              {/* Timeline Connector & Badge Node */}
              <div className="flex flex-col items-center lg:items-start mb-6">
                <div className={`w-16 h-16 retro-border ${exp.color} ${exp.textColor} flex items-center justify-center shadow-custom mb-4 transition-transform duration-300 group-hover/timeline:rotate-[15deg] group-hover/timeline:scale-110 z-10 relative bg-background mx-auto lg:mx-0`}>
                   <div className="absolute inset-0 bg-current opacity-10" />
                   <exp.icon size={28} strokeWidth={3} className="text-current relative z-10" />
                </div>
                
                {/* Period Ribbon */}
                <div className="bg-background px-4 py-1.5 retro-border font-black text-sm uppercase tracking-widest shadow-[3px_3px_0_0_var(--shadow-color)] text-foreground z-10 text-center lg:text-left whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              {/* The "Flip" Card with Hover Reveal Effect */}
              <div className="relative overflow-hidden bg-card retro-border h-full min-h-[350px] shadow-custom flex flex-col transition-all cursor-default">
                
                {/* Front View (Always visible initially, fades slightly on hover) */}
                <div className="p-6 h-full flex flex-col transition-opacity duration-300 group-hover/timeline:opacity-20 pointer-events-none">
                   
                   <div className="flex items-center gap-2 mb-2 opacity-60">
                      <LayoutList size={14} className="text-foreground" strokeWidth={3} />
                      <span className="text-xs font-black uppercase tracking-widest text-foreground">
                        {exp.tagLine}
                      </span>
                   </div>

                   <h3 className="text-2xl font-black text-foreground uppercase tracking-tight mb-1 leading-tight">
                     {exp.org}
                   </h3>
                   <div className="text-lg font-bold text-muted-foreground mb-6">
                     职务: <span className="text-foreground border-b-2 border-primary">{exp.role}</span>
                   </div>

                   <div className="mt-auto">
                     <p className="text-xs font-black text-foreground mb-2 tracking-widest uppercase">关联软实力</p>
                     <div className="flex flex-wrap gap-2">
                       {exp.capabilities.map((cap, i) => (
                         <span key={i} className="bg-muted retro-border px-3 py-1 font-bold text-xs text-foreground shadow-[2px_2px_0_0_var(--shadow-color)]">
                           {cap}
                         </span>
                       ))}
                     </div>
                   </div>

                   {/* Hover Hint */}
                   <div className="absolute bottom-4 right-4 animate-bounce flex items-center gap-1 opacity-70">
                     <Anchor size={14} className="text-primary" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Hover</span>
                   </div>

                </div>

                {/* Back View (Slides up on Hover) */}
                <div className="absolute inset-0 bg-secondary p-6 translate-y-[101%] group-hover/timeline:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-center border-t-[6px] border-primary shadow-inner">
                   <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 bg-background retro-border flex items-center justify-center rotate-45">
                        <Target className="text-secondary -rotate-45" size={16} strokeWidth={3} />
                      </div>
                      <h4 className="text-lg font-black uppercase tracking-wide text-secondary-foreground">
                        核心职责明细
                      </h4>
                   </div>
                   
                   <ul className="space-y-4">
                     {exp.responsibilities.map((task, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <div className="w-4 h-4 bg-accent mt-1 retro-border flex items-center justify-center shrink-0" />
                         <span className="text-secondary-foreground font-bold text-sm tracking-wide leading-relaxed shadow-sm">
                           {task}
                         </span>
                       </li>
                     ))}
                   </ul>
                </div>

              </div>
              
            </div>
          ))}
          
        </div>
      </div>

    </PageWrapper>
  );
};

export default Campus;