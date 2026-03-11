import React, { useState } from 'react';
import { Award, Star, Trophy, Code, MessageSquare, Globe, ChevronRight, BarChart } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

interface Skill {
  id: string;
  name: string;
  category: 'product' | 'content' | 'language' | 'data';
  proficiency: number;
  description: string;
  applications: string[];
}

interface Competition {
  id: string;
  name: string;
  award: string;
  level: 'national' | 'provincial' | 'municipal' | 'school';
  year: string;
  highlights?: string[];
}

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  console.log('Skills page rendered with updated categories based on user feedback');

  // Updated skill categories - mapped out operation skills
  const skillCategories = [
    { id: 'product', name: '产品技能', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'data', name: '数据分析', icon: BarChart, color: 'from-pink-500 to-purple-500' },
    { id: 'content', name: '内容技能', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
    { id: 'language', name: '语言技能', icon: Globe, color: 'from-orange-500 to-red-500' }
  ];

  // Updated skills definition
  const skills: Skill[] = [
    // Product Skills
    {
      id: 'skill-1',
      name: 'Figma',
      category: 'product',
      proficiency: 4,
      description: '原型设计与交互设计工具',
      applications: ['产品原型图绘制', '交互流程设计', '页面展示设计']
    },
    {
      id: 'skill-2',
      name: 'Vibe Coding',
      category: 'product',
      proficiency: 3.5,
      description: 'AI辅助编程工具',
      applications: ['AI编程辅助', '代码生成', '快速原型开发']
    },
    {
      id: 'skill-prd',
      name: 'PRD文档撰写',
      category: 'product',
      proficiency: 4.5,
      description: '产品需求文档与规格说明编写',
      applications: ['需求分析与拆解', '功能逻辑梳理', '需求文档(PRD)输出']
    },
    
    // Data Analysis
    {
      id: 'skill-3',
      name: 'Excel',
      category: 'data',
      proficiency: 5,
      description: '数据分析与处理',
      applications: ['数据分析', '报表制作', 'KOC发帖量统计', 'CTR/转化率分析']
    },
    {
      id: 'skill-4',
      name: 'SPSS',
      category: 'data',
      proficiency: 4,
      description: '统计分析软件',
      applications: ['问卷数据分析', '统计检验', '用户调研数据处理']
    },
    {
      id: 'skill-5',
      name: 'Python',
      category: 'data',
      proficiency: 3,
      description: '数据分析与脚本编程',
      applications: ['数据清洗', '自动化脚本', '数据可视化']
    },
    
    // Content Skills
    {
      id: 'skill-6',
      name: 'PR & 剪映',
      category: 'content',
      proficiency: 5,
      description: '视频剪辑与短视频制作',
      applications: ['营销视频制作', '抖音短视频', '爆款视频创作', '内容创意视频']
    },
    {
      id: 'skill-9',
      name: '秀米',
      category: 'content',
      proficiency: 5,
      description: '公众号排版工具',
      applications: ['微信推文排版', '图文内容美化', '模板设计']
    },
    {
      id: 'skill-10',
      name: '可画',
      category: 'content',
      proficiency: 5,
      description: '在线平面设计工具',
      applications: ['营销海报设计', '社交媒体配图', '可视化内容制作']
    },
    
    // Language Skills
    {
      id: 'skill-12',
      name: '英语',
      category: 'language',
      proficiency: 4,
      description: 'CET-6: 525',
      applications: ['专业文献阅读', '国际产品调研', '英文文档撰写']
    }
  ];

  const competitions: Competition[] = [
    {
      id: 'comp-1',
      name: '中国大学生计算机设计大赛',
      award: '国家三等奖',
      level: 'national',
      year: '2023',
      highlights: ['数字游戏与交互设计赛道', '制作【姓名福袋】h5网页']
    },
    {
      id: 'comp-2',
      name: '新传杯辩论赛',
      award: '亚军 + 全程最佳辩手',
      level: 'national',
      year: '2023',
      highlights: ['全国高校新传杯邀请赛(64队)', '三辩、四辩位置']
    },
    {
      id: 'comp-3',
      name: '北京体育大学本科生校级奖学金',
      award: '二等奖、三等奖',
      level: 'school',
      year: '2021-2022',
      highlights: ['连续两年获得北京体育大学本科生奖学金']
    },
    {
      id: 'comp-4',
      name: '北京师范大学研究生新生奖学金',
      award: '二等奖',
      level: 'school',
      year: '2025',
      highlights: ['考研专硕初试/总排第一', '智能传播专业']
    }
  ];

  const getLevelInfo = (level: string) => {
    switch (level) {
      case 'national':
        return { label: '国家级', color: 'from-red-500 to-orange-500', bgColor: 'bg-red-500/20', textColor: 'text-red-400' };
      case 'provincial':
        return { label: '省级', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/20', textColor: 'text-blue-400' };
      case 'municipal':
        return { label: '市级', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/20', textColor: 'text-green-400' };
      case 'school':
        return { label: '校级', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/20', textColor: 'text-purple-400' };
      default:
        return { label: '其他', color: 'from-gray-500 to-gray-600', bgColor: 'bg-gray-500/20', textColor: 'text-gray-400' };
    }
  };

  const renderStars = (proficiency: number) => {
    const fullStars = Math.floor(proficiency);
    const hasHalfStar = proficiency % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          if (star <= fullStars) {
            return (
              <Star
                key={star}
                className="text-accent fill-accent"
                size={16}
                strokeWidth={3}
              />
            );
          } else if (star === fullStars + 1 && hasHalfStar) {
            return (
              <div key={star} className="relative">
                <Star className="text-muted-foreground/30" size={16} strokeWidth={3} />
                <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                  <Star className="text-accent fill-accent" size={16} strokeWidth={3} />
                </div>
              </div>
            );
          } else {
            return (
              <Star
                key={star}
                className="text-muted-foreground/30"
                size={16}
                strokeWidth={3}
              />
            );
          }
        })}
      </div>
    );
  };

  return (
    <PageWrapper title="SKILLS & AWARDS">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Professional Skills */}
        <div className="lg:col-span-7">
          <div className="retro-border bg-secondary text-secondary-foreground p-8 shadow-custom relative">
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent retro-border rotate-45 flex items-center justify-center shadow-[3px_3px_0_0_var(--shadow-color)]">
              <Code className="text-accent-foreground -rotate-45" size={20} strokeWidth={3} />
            </div>
            
            <h2 className="text-3xl font-black uppercase tracking-widest text-background mb-8 border-b-4 border-background pb-3">
              专业技能
            </h2>

            <div className="space-y-6">
              {skillCategories.map((category) => {
                const CategoryIcon = category.icon;
                const categorySkills = skills.filter(s => s.category === category.id);
                
                if (categorySkills.length === 0) return null;
                
                return (
                  <div key={category.id}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-background retro-border flex items-center justify-center rotate-45">
                        <CategoryIcon className="text-secondary -rotate-45" size={16} strokeWidth={3} />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-wider text-background">
                        {category.name}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {categorySkills.map((skill) => (
                        <div
                          key={skill.id}
                          className="bg-background retro-border p-4 text-foreground hover:-translate-y-1 transition-all group relative"
                          onMouseEnter={() => setHoveredSkill(skill.id)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-black text-base uppercase tracking-wide">
                              {skill.name}
                            </h4>
                            {renderStars(skill.proficiency)}
                          </div>
                          
                          <p className="text-sm font-bold text-muted-foreground mb-3">
                            {skill.description}
                          </p>

                          {/* Hover expansion - Applications */}
                          <div className={`transition-all overflow-hidden ${
                            hoveredSkill === skill.id 
                              ? 'max-h-96 opacity-100 mt-3' 
                              : 'max-h-0 opacity-0'
                          }`}>
                            <div className="border-t-2 border-border pt-3">
                              <div className="flex items-center gap-2 mb-2">
                                <ChevronRight className="text-accent" size={14} strokeWidth={3} />
                                <span className="text-xs font-black uppercase tracking-widest text-accent">
                                  应用场景
                                </span>
                              </div>
                              <div className="space-y-1">
                                {skill.applications.map((app, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-primary rounded-full" />
                                    <span className="text-xs font-bold text-foreground/80">
                                      {app}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Competition Achievements */}
        <div className="lg:col-span-5">
          <div className="retro-border bg-card p-8 shadow-custom relative">
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary retro-border flex items-center justify-center shadow-[3px_3px_0_0_var(--shadow-color)]">
              <Trophy className="text-primary-foreground" size={20} strokeWidth={3} />
            </div>
            
            <h2 className="text-3xl font-black uppercase tracking-widest text-foreground mb-8 border-b-4 border-border pb-3">
              竞赛荣誉
            </h2>

            <div className="space-y-4">
              {competitions.map((comp, index) => {
                const levelInfo = getLevelInfo(comp.level);
                
                return (
                  <div 
                    key={comp.id}
                    className="retro-border bg-background p-5 hover:bg-muted hover:shadow-[4px_4px_0_0_var(--shadow-color)] hover:-translate-x-1 transition-all group relative"
                  >
                    {/* Corner badge with index */}
                    <div className="absolute -left-2 -top-2 w-8 h-8 bg-accent retro-border rotate-45 flex items-center justify-center">
                      <span className="font-black text-sm text-accent-foreground -rotate-45">
                        {index + 1}
                      </span>
                    </div>

                    {/* Level badge */}
                    <div className={`inline-block ${levelInfo.bgColor} ${levelInfo.textColor} px-3 py-1 retro-border text-xs font-black uppercase tracking-widest mb-3`}>
                      {levelInfo.label}
                    </div>

                    <h4 className="font-black text-base text-foreground mb-2 uppercase tracking-wide leading-tight">
                      {comp.name}
                    </h4>

                    <div className="flex items-center gap-2 mb-3">
                      <Award className="text-accent flex-shrink-0" size={16} strokeWidth={3} />
                      <span className="font-bold text-sm text-accent">
                        {comp.award}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground ml-auto">
                        {comp.year}
                      </span>
                    </div>

                    {comp.highlights && comp.highlights.length > 0 && (
                      <div className="space-y-1 mt-3 pt-3 border-t-2 border-border border-dashed">
                        {comp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-xs font-bold text-foreground/70">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Updated Stats summary */}
            <div className="mt-6 pt-6 border-t-4 border-border grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-muted retro-border">
                <div className="text-2xl font-black text-foreground">
                  {competitions.filter(c => c.level === 'national').length}
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">
                  国家级
                </div>
              </div>
              <div className="text-center p-3 bg-muted retro-border">
                <div className="text-2xl font-black text-foreground">
                  {skills.length}
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">
                  专业技能
                </div>
              </div>
              <div className="text-center p-3 bg-muted retro-border">
                <div className="text-2xl font-black text-foreground">
                  {competitions.length}
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">
                  获奖总数
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default Skills;