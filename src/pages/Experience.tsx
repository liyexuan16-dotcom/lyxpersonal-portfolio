import React, { useState } from 'react';
import { Briefcase, Calendar, TrendingUp, Award, ChevronDown, ChevronUp, Target, Users, Zap, FileText, BarChart, Eye, Heart, UserPlus } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

interface ExperienceItem {
  id: string;
  category: 'ai-product' | 'content-ops' | 'product-ops';
  company: string;
  position: string;
  product?: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements: {
    metric: string;
    value: string;
    description: string;
    icon: typeof TrendingUp;
  }[];
  skills: string[];
  bgColor: string;
  textColor: string;
}

const Experience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  console.log('Experience page rendered, active category:', selectedCategory);

  const categories = [
    { id: 'all', name: '全部经历', icon: '📋' },
    { id: 'ai-product', name: '大模型产品经理', icon: '🤖' },
    { id: 'content-ops', name: '内容运营', icon: '✍️' },
    { id: 'product-ops', name: '产品运营', icon: '📊' }
  ];

  const experiences: ExperienceItem[] = [
    {
      id: 'exp-1',
      category: 'ai-product',
      company: '百川智能',
      position: '医疗产品大模型产品经理实习生',
      product: '百小应医疗大模型改版与内测',
      period: '2025.05 - 2025.09',
      location: '北京',
      responsibilities: [
        '设计问卷、组织访谈，调研医生对AI工具的具体需求场景，分析量化数据和定性原声，输出调研报告',
        '撰写"临床指南"和"内测"功能需求文档，绘制原型图，设计页面展示和交互逻辑，完成需求评审',
        '调研市场竞品（AQ、夸克健康、OpenEvidence、小荷AI医生）的运营策略，输出调研报告',
        '设计产品内和品牌运营方案，完成200人用户内测，运营用户社群'
      ],
      achievements: [
        { metric: '0-1落地', value: '全流程', description: '跟进百小应从通用到垂直医学改版', icon: Zap },
        { metric: '用户内测', value: '200+', description: '成功完成200人医生用户种子积累', icon: Users },
        { metric: '需求文档', value: '2', description: '主导撰写"临床指南"等核心PRD', icon: FileText },
        { metric: '竞品调研', value: '4大', description: '深度拆解4大竞品产品运营策略', icon: BarChart }
      ],
      skills: ['用户调研', '需求分析', '原型设计', '竞品分析', '产品运营', '医疗AI'],
      bgColor: 'bg-primary',
      textColor: 'text-primary-foreground'
    },
    {
      id: 'exp-2',
      category: 'content-ops',
      company: '小红书',
      position: '大模型C端内容运营实习生',
      product: '小红书生活搜索AI “点点”',
      period: '2025.01 - 2025.03',
      location: '北京',
      responsibilities: [
        '结合点点产品策略，输出投放内容Brief，从0-1落地3个核心推广方案',
        '单图直发+评论区种草类实现平均一周产出一篇转化1000+的爆款',
        '维护小红书KOL/KOC资源池，建联达人20+、素人100+，每周发布30+篇素人直发笔记',
        '定期拆解不同垂类笔记CTR/万曝注册/转化率/爆款率指标，通过A/B测试精准调整'
      ],
      achievements: [
        { metric: '话题曝光', value: '1000w+', description: '多热点话题实现千万级内容曝光', icon: Eye },
        { metric: '总互动量', value: '60w+', description: '累计获得60万次用户深度互动', icon: Heart },
        { metric: '用户转化', value: '1.4万+', description: '累计拉新转化14000+名优质用户', icon: UserPlus },
        { metric: '单篇极值', value: '10000+', description: '单篇笔记转化量达团队数据峰值', icon: TrendingUp }
      ],
      skills: ['内容策划', 'A/B测试', 'KOL/KOC运营', '数据分析', '小红书生态', '爆款打造'],
      bgColor: 'bg-secondary',
      textColor: 'text-secondary-foreground'
    },
    {
      id: 'exp-3',
      category: 'product-ops',
      company: '携程',
      position: '产品运营实习生',
      product: '去哪儿旅行APP',
      period: '2024.05 - 2024.08',
      location: '北京',
      responsibilities: [
        '结合热点和抖音平台生态，围绕去哪儿机酒产品的优惠活动策划产品运营方案',
        '生产"阿勒泰""五月天演唱会""去长沙看决赛"等多个爆款内容模板，实现拉新',
        '维护200人素人KOC资源，完成养号培训，沟通图文、视频内容要求及发帖跟进',
        '定期复盘KOC发帖量与账号生态、漏斗转化率（CTR/完播率），拆解优化投放'
      ],
      achievements: [
        { metric: '团队获客', value: '200+', description: '团队月均新客获取达200个峰值', icon: Users },
        { metric: '个人贡献', value: '35%', description: '个人单月最高获新客73人占比35%', icon: TrendingUp },
        { metric: 'KOC资源', value: '200+', description: '独立维护和赋能200名素人创作者', icon: UserPlus },
        { metric: '爆款模板', value: '4组+', description: '成功验证多组高转化内容复刻模板', icon: Zap }
      ],
      skills: ['产品运营', '热点营销', '漏斗拆解', '数据复盘', '抖音生态', '内容模板化'],
      bgColor: 'bg-accent',
      textColor: 'text-accent-foreground'
    },
    {
      id: 'exp-4',
      category: 'content-ops',
      company: 'Travel Link Marketing',
      position: '内容运营实习生',
      product: '@阿布扎比亚斯岛 与 @土耳其伊斯坦布尔机场 官方账号矩阵',
      period: '2024.01 - 2024.04',
      location: '远程',
      responsibilities: [
        '负责跨国旅游品牌官方全平台账号的日常运营与内容生产',
        '生成旅行攻略、文化宣传、服务设施及KOL类软文稿件',
        '根据母亲节、开斋节等国内外节日热点，灵活调整内容产出策略',
        '策划落地"带妈妈去浪漫的土耳其"及"斋月指南"等专题营销'
      ],
      achievements: [
        { metric: '爆款推文', value: '5000+', description: '"龙游亚斯岛"推文浏览量达团队第一', icon: Eye },
        { metric: '节日营销', value: '3期', description: '成功主导3场独立节日热点跨文化营销', icon: Award },
        { metric: '矩阵运营', value: '全平台', description: '同时管理2大跨国品牌的社媒矩阵', icon: BarChart },
        { metric: '内容产出', value: '高频', description: '生成大量长短图文及文旅攻略稿件', icon: FileText }
      ],
      skills: ['跨境社媒', '旅游营销', '节日营销', '文案撰写', '全平台矩阵'],
      bgColor: 'bg-primary',
      textColor: 'text-primary-foreground'
    },
    {
      id: 'exp-5',
      category: 'content-ops',
      company: '《人物》杂志',
      position: '新媒体运营实习生',
      product: '@每日人物全平台账号及品牌活动栏目',
      period: '2022.01 - 2022.06',
      location: '北京',
      responsibilities: [
        '独立负责@每日人物微博固定栏目#每人时光机#和#每人夜话# 的内容生产与采编',
        '撰写公域微博投票与互动文案，盘活日常内容流量池',
        '关注并定期整理多平台官方账号核心运营数据，据此调整发稿策略',
        '建立并维护深度的用户交互粘性，拉升账号常态化活跃度'
      ],
      achievements: [
        { metric: '栏目主理', value: '2大', description: '成功接手并推进2大微博王牌栏目', icon: FileText },
        { metric: '量速双增', value: '持续↗', description: '实习半年期间官方粉丝数持续净增长', icon: TrendingUp },
        { metric: '用户粘性', value: '高活', description: '通过夜话等共情内容大幅提升转评赞', icon: Heart },
        { metric: '数据体系', value: 'SOP', description: '建立基础新媒体流量监测与数据归档', icon: BarChart }
      ],
      skills: ['公域流量', '微博运营', '栏目主理', '用户共情', '文字采编'],
      bgColor: 'bg-secondary',
      textColor: 'text-secondary-foreground'
    }
  ];

  const filteredExperiences = selectedCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageWrapper title="CORE EXPERIENCE">
      
      {/* Category Filter */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 font-black uppercase tracking-wider text-sm retro-border transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-[4px_4px_0_0_var(--shadow-color)] translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-card text-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-custom hover:translate-x-[-2px] hover:translate-y-[-2px]'
              }`}
            >
              <span className="mr-2 text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-muted px-4 py-2 retro-border inline-block">
          <span className="font-bold text-foreground uppercase tracking-wider text-sm">
            找到 {filteredExperiences.length} 段经历记录
          </span>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {filteredExperiences.map((experience, index) => (
          <div 
            key={experience.id}
            className="retro-border bg-card shadow-custom relative overflow-hidden group/card hover:border-primary transition-colors duration-300"
          >
            {/* Number Corner */}
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-accent retro-border rotate-45 flex items-center justify-center shadow-[4px_4px_0_0_var(--shadow-color)] z-10">
              <span className="font-black text-2xl text-accent-foreground -rotate-45">
                {index + 1}
              </span>
            </div>

            {/* Content Padding */}
            <div className="p-8 md:p-10 pl-12 md:pl-16">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 pb-6 border-b-4 border-border border-dashed">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className={`${experience.bgColor} ${experience.textColor} px-3 py-1 retro-border font-black uppercase text-xs tracking-widest`}>
                      {experience.position}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-2 group-hover/card:text-primary transition-colors">
                    {experience.company}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-foreground" size={16} strokeWidth={3} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="text-foreground" size={16} strokeWidth={3} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Operational Product Tag */}
                  {experience.product && (
                    <div className="inline-flex items-center gap-3 bg-muted px-4 py-2 retro-border shadow-[2px_2px_0_0_var(--shadow-color)]">
                      <span className="w-2 h-2 bg-primary rounded-full relative animate-pulse" />
                      <span className="font-black text-xs uppercase tracking-widest text-muted-foreground">所属产品</span>
                      <span className="font-bold text-sm text-foreground">{experience.product}</span>
                    </div>
                  )}

                </div>

                <Button
                  onClick={() => toggleExpand(experience.id)}
                  variant="outline"
                  className="retro-border shadow-custom font-black uppercase tracking-wider bg-background hover:bg-accent hover:text-accent-foreground transition-all shrink-0 mt-2 md:mt-0"
                >
                  {expandedId === experience.id ? (
                    <><ChevronUp className="mr-2" size={16} strokeWidth={3} />收起详情</>
                  ) : (
                    <><ChevronDown className="mr-2" size={16} strokeWidth={3} />查看详情</>
                  )}
                </Button>
              </div>

              {/* Achievements - Redesigned Hover for absolute clarity */}
              <div className="mb-6">
                <h4 className="text-base font-black uppercase tracking-widest text-foreground mb-4 flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary retro-border flex items-center justify-center rotate-45">
                    <Award className="text-primary-foreground -rotate-45" size={12} strokeWidth={3} />
                  </div>
                  量化成果
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {experience.achievements.map((achievement, idx) => (
                    <div 
                      key={idx}
                      className="bg-card retro-border p-4 hover:bg-muted hover:-translate-y-1 hover:shadow-[4px_4px_0_0_var(--shadow-color)] transition-all flex flex-col group/achieve"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-background retro-border flex items-center justify-center group-hover/achieve:bg-accent transition-colors">
                          <achievement.icon className="text-foreground" size={16} strokeWidth={3} />
                        </div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          {achievement.metric}
                        </div>
                      </div>
                      <div className="text-2xl font-black text-primary mb-2 group-hover/achieve:scale-105 transition-transform origin-left">
                        {achievement.value}
                      </div>
                      <p className="text-xs font-bold text-foreground/80 leading-snug">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expandable Content - Redesigned Hover for clarity */}
              <div className={`transition-all overflow-hidden ${
                expandedId === experience.id 
                  ? 'max-h-[2000px] opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="pt-4 space-y-6">
                  
                  {/* Responsibilities */}
                  <div className="bg-background retro-border p-6 shadow-inner">
                    <h4 className="text-base font-black uppercase tracking-widest text-foreground mb-4 border-b-2 border-border pb-2">
                      工作执行细节
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-card retro-border hover:bg-muted hover:border-primary hover:-translate-y-1 transition-transform"
                        >
                          <div className="w-6 h-6 bg-accent retro-border flex items-center justify-center shrink-0 font-black text-accent-foreground text-xs font-mono">
                            {idx + 1}
                          </div>
                          <p className="font-bold text-sm text-foreground flex-1">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, idx) => (
                        <div 
                          key={idx}
                          className="bg-accent/20 text-foreground px-3 py-1.5 retro-border border-dashed font-bold text-xs uppercase tracking-wide hover:bg-accent hover:border-solid hover:shadow-[2px_2px_0_0_var(--shadow-color)] transition-all cursor-default"
                        >
                          #{skill}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </PageWrapper>
  );
};

export default Experience;