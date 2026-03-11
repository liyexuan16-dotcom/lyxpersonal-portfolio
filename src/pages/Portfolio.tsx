import React, { useState } from 'react';
import { ExternalLink, FileText, Image as ImageIcon, Video, Award, Filter } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'deep-content' | 'planning' | 'research';
  description: string;
  thumbnail: string;
  previewLink: string;
  tags: string[];
  type: 'document' | 'image' | 'video';
  date: string;
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  console.log('Portfolio page rendered with updated stable image for work-5');

  const categories = [
    { id: 'all', name: '全部作品', icon: '📁', color: 'from-purple-500 to-blue-500' },
    { id: 'deep-content', name: '深度内容作品', icon: '✍️', color: 'from-blue-500 to-cyan-500' },
    { id: 'planning', name: '策划营销方案', icon: '💡', color: 'from-pink-500 to-purple-500' },
    { id: 'research', name: '用户调研报告', icon: '📊', color: 'from-green-500 to-emerald-500' }
  ];

  const portfolioItems: PortfolioItem[] = [
    // === Deep Content Works (5 items) ===
    {
      id: 'work-1',
      title: '伊斯坦布尔机场世界环境日推文',
      category: 'deep-content',
      description: '围绕世界环境日主题策划的伊斯坦布尔机场社媒推文，提升品牌环保与社会责任形象。',
      thumbnail: '/1.jpg',
      previewLink: 'https://rcn29s2y08yx.feishu.cn/file/INZ7bmCMtooQFkxcQy1cT6gWn7b',
      tags: ['品牌营销', '社媒推文', '节日热点'],
      type: 'document',
      date: '2024'
    },
    {
      id: 'work-2',
      title: '亚斯岛吴尊KOL推广',
      category: 'deep-content',
      description: '合作知名公众人物吴尊，为阿布扎比亚斯岛进行的文旅KOL专属背书与深度整合推广。',
      thumbnail: '/2.jpg',
      previewLink: 'https://rcn29s2y08yx.feishu.cn/file/AZ3Qbh61Ho6GNtx149pcC4sWnoh',
      tags: ['KOL营销', '文旅推广', '名人背书'],
      type: 'document',
      date: '2024'
    },
    {
      id: 'work-3',
      title: '伊斯坦布尔城市美食游推文',
      category: 'deep-content',
      description: '以本地特色美食为切入点策划的伊斯坦布尔城市旅游深度长图文内容。',
      thumbnail: '/3.jpg',
      previewLink: 'https://rcn29s2y08yx.feishu.cn/file/YpFUbZPfOovPFmx0klcclLZZnkf',
      tags: ['内容营销', '美食垂类', '城市导览'],
      type: 'document',
      date: '2024'
    },
    {
      id: 'work-4',
      title: '阿布扎比亚斯岛妇女节推广',
      category: 'deep-content',
      description: '结合国际妇女节热点，输出针对女性消费受众的情感向及促销向品牌推文。',
      thumbnail: '/4.jpg',
      previewLink: 'https://rcn29s2y08yx.feishu.cn/file/WKe0b7vYgoav7VxmnJrc17qQnpf',
      tags: ['节日营销', '女性向诉求', '品牌公关'],
      type: 'document',
      date: '2024'
    },
    {
      id: 'work-5',
      title: '亚斯岛春节推广',
      category: 'deep-content',
      description: '针对中国出境游受众策划的“龙游亚斯岛”系列暖冬迎新春社媒内容推广，浏览量达团队峰值。',
      thumbnail: '/5.jpg',
      previewLink: 'https://rcn29s2y08yx.feishu.cn/file/HmDVbQXHZo6pvdxCMMCcIWBqnbh',
      tags: ['海外营销', '春节热点', '爆款打造'],
      type: 'document',
      date: '2024'
    },
    
    // === Planning & Marketing Proposals (3 items) ===
    {
      id: 'work-6',
      title: '点点APP小红书图文合集与单推需求',
      category: 'planning',
      description: '小红书生活搜索AI“点点”针对小红书平台的精细化图文合集与单篇笔记内容的投放需求统筹规划。',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      previewLink: 'https://rcn29s2y08yx.feishu.cn/docx/QEGSdAtRmokP55xqmAqchYL3nEg?from=from_copylink',
      tags: ['小红书投放', '策略规划', '内容Brief'],
      type: 'document',
      date: '2025.01'
    },
    {
      id: 'work-7',
      title: '点点APP小红书图文直发评论区种草需求',
      category: 'planning',
      description: '围绕【图文直发+评论区种草】这一高转化率玩法拆解落实的SOP及素人直发详细策略。',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      previewLink: 'https://docs.qq.com/sheet/DSFZKdXNoUVh1dVp1?tab=BB08J2',
      tags: ['评论区种草', '素人直发', '用户转化'],
      type: 'document',
      date: '2025.02'
    },
    {
      id: 'work-8',
      title: '点点APP出行方向内容brief',
      category: 'planning',
      description: '点点产品策略下，针对出行领域（如“不爱做攻略人的天菜”等策略）拆解输出的核心投流 Brief。',
      thumbnail: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&h=300&fit=crop',
      previewLink: 'https://rcn29s2y08yx.feishu.cn/wiki/PvkYwY8Iqiveb2k13YFc3Fd1nwc?from=from_copylink',
      tags: ['出行业务', '策略投流', '爆款策略'],
      type: 'document',
      date: '2025.02'
    },
    
    // === User Research Reports (1 item) ===
    {
      id: 'work-9',
      title: '医学AI产品用户需求调研报告',
      category: 'research',
      description: '通过问卷设计和深度访谈调研医生对AI工具的具体需求场景，分析量化数据和定性原声的完整实战洞察报告。',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
      previewLink: 'https://docs.qq.com/doc/DSGh1d2FHSkFDUndR',
      tags: ['医学AI', '用户调研', '需求挖掘', '定性与定量'],
      type: 'document',
      date: '2025.06'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'document': return FileText;
      case 'image': return ImageIcon;
      case 'video': return Video;
      default: return FileText;
    }
  };

  return (
    <PageWrapper title="SELECT PORTFOLIO">
      
      {/* Category Filter Bar */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-accent retro-border flex items-center justify-center rotate-45">
            <Filter className="text-accent-foreground -rotate-45" size={16} strokeWidth={3} />
          </div>
          <h2 className="text-xl font-black uppercase tracking-widest text-foreground">
            作品分类
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 font-black uppercase tracking-wider text-sm retro-border transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-[4px_4px_0_0_var(--shadow-color)] translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-card text-foreground hover:bg-accent hover:text-accent-foreground shadow-custom hover:translate-x-[-2px] hover:translate-y-[-2px]'
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
            共找到 {filteredItems.length} 件作品
          </span>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => {
          const TypeIcon = getTypeIcon(item.type);
          
          return (
            <div 
              key={item.id} 
              className="retro-border bg-card flex flex-col group hover:-translate-y-2 hover:shadow-[8px_8px_0_0_var(--shadow-color)] transition-all duration-200 relative overflow-hidden"
            >
              {/* Corner Number Badge */}
              <div className="absolute -left-3 -top-3 w-12 h-12 bg-accent retro-border rotate-45 flex items-center justify-center shadow-[3px_3px_0_0_var(--shadow-color)] z-30">
                <span className="font-black text-lg text-accent-foreground -rotate-45">
                  {index + 1}
                </span>
              </div>

              {/* Improved Thumbnail Area with loading states */}
              <div className="h-48 retro-border border-l-0 border-r-0 border-t-0 bg-muted relative flex items-center justify-center overflow-hidden">
                
                {/* Fallback pattern / Loading skeleton shown behind image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted z-0">
                  <TypeIcon className="text-muted-foreground/30 animate-pulse mb-2" size={48} strokeWidth={1.5} />
                  <span className="text-xs font-bold text-muted-foreground/50 tracking-widest uppercase">LOADING</span>
                </div>

                {/* Actual Image with smooth fade-in */}
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onLoad={(e) => {
                    // Reveal the image when fully loaded
                    e.currentTarget.classList.remove('opacity-0');
                  }}
                  onError={(e) => {
                    // Keep the image hidden and let the fallback background show if it fails
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:scale-[1.05] relative z-10"
                />

                <div className="absolute inset-0 bg-primary opacity-10 mix-blend-multiply transition-opacity group-hover:opacity-30 z-20 pointer-events-none" />
                
                {/* Type Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm retro-border px-3 py-1 flex items-center gap-2 z-30 shadow-[2px_2px_0_0_var(--shadow-color)]">
                  <TypeIcon className="text-primary" size={14} strokeWidth={3} />
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {item.type === 'document' ? '文档' : item.type === 'image' ? '图片' : '视频'}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 bg-accent retro-border px-3 py-1 z-30 shadow-[2px_2px_0_0_var(--shadow-color)]">
                  <span className="text-xs font-black uppercase text-accent-foreground">
                    {item.date}
                  </span>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col z-30 bg-card">
                <div className="flex items-start gap-2 mb-3">
                  <div className="w-3 h-3 bg-secondary rounded-full inline-block border-2 border-border flex-shrink-0 mt-1" />
                  <h3 className="font-black text-lg text-foreground uppercase tracking-wide leading-tight flex-1 line-clamp-2" title={item.title}>
                    {item.title}
                  </h3>
                </div>
                
                <p className="font-bold text-sm text-foreground/80 mb-4 flex-1 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-muted text-foreground px-2 py-1 text-xs font-bold uppercase tracking-wider retro-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Preview Button */}
                <Button
                  onClick={() => {
                    window.open(item.previewLink, '_blank');
                  }}
                  className="w-full bg-accent text-accent-foreground px-4 py-2 font-black text-center text-sm retro-border cursor-pointer hover:bg-primary hover:text-primary-foreground uppercase shadow-[2px_2px_0_0_var(--shadow-color)] hover:shadow-[4px_4px_0_0_var(--shadow-color)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  <ExternalLink className="inline-block mr-2" size={16} strokeWidth={3} />
                  在线预览
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <div className="bg-muted retro-border p-12 max-w-md mx-auto">
            <div className="w-20 h-20 bg-accent retro-border mx-auto mb-6 flex items-center justify-center rotate-45">
              <Award className="text-accent-foreground -rotate-45" size={32} strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wider text-foreground mb-4">
              暂无作品
            </h3>
            <p className="text-foreground/70 font-bold mb-6">
              该分类下暂时没有作品展示
            </p>
            <Button
              onClick={() => setSelectedCategory('all')}
              className="retro-border shadow-custom font-black uppercase tracking-wider hover:bg-primary hover:text-primary-foreground"
            >
              查看全部作品
            </Button>
          </div>
        </div>
      )}

    </PageWrapper>
  );
};

export default Portfolio;