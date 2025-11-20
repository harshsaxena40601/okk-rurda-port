import { Project, Service, Skill, ShopifyProject, SEOStep, Testimonial, CaseStudy } from './types';
import { 
  Code, 
  ShoppingBag, 
  Search, 
  Smartphone, 
  Globe, 
  BarChart 
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Shopify', href: '#shopify' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React.js' },
  { name: 'TypeScript' },
  { name: 'Shopify Liquid' },
  { name: 'Node.js' },
  { name: 'Next.js' },
  { name: 'Tailwind CSS' },
  { name: 'Technical SEO' },
  { name: 'Google Analytics' },
  { name: 'MongoDB' },
  { name: 'AWS' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Building responsive, high-performance web applications using modern technologies like React, Next.js, and Node.js.',
    icon: Globe,
  },
  {
    id: '2',
    title: 'Shopify Development',
    description: 'Custom Shopify themes, app integrations, and store optimization to boost your e-commerce sales.',
    icon: ShoppingBag,
  },
  {
    id: '3',
    title: 'SEO Optimization',
    description: 'Improving your website visibility on search engines through technical SEO, keyword research, and content strategy.',
    icon: Search,
  },
  {
    id: '4',
    title: 'App Development',
    description: 'Cross-platform mobile application development ensuring a seamless experience on both iOS and Android.',
    icon: Smartphone,
  },
  {
    id: '5',
    title: 'Performance Tuning',
    description: 'Optimizing website speed and core web vitals for better user experience and improved search engine rankings.',
    icon: Code,
  },
  {
    id: '6',
    title: 'Analytics & Strategy',
    description: 'Data-driven insights and strategy planning to grow your digital presence effectively.',
    icon: BarChart,
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Redesign',
    category: 'Shopify',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'A complete overhaul of a fashion brand\'s Shopify store, resulting in a 40% increase in conversion rate.',
    tech: ['Shopify', 'Liquid', 'JS', 'Tailwind'],
    link: '#',
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    category: 'Web App',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'A comprehensive analytics dashboard for a B2B SaaS platform, featuring real-time data visualization.',
    tech: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    link: '#',
  },
  {
    id: '3',
    title: 'SEO Audit Tool',
    category: 'SEO / Tool',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'An internal tool developed to automate technical SEO audits for client websites.',
    tech: ['Python', 'React', 'Next.js'],
    link: '#',
  },
  {
    id: '4',
    title: 'Real Estate Platform',
    category: 'Web App',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'A listing platform with advanced filtering, map integration, and virtual tour capabilities.',
    tech: ['Next.js', 'PostgreSQL', 'Google Maps API'],
    link: '#',
  },
];

export const SHOPIFY_PROJECTS: ShopifyProject[] = [
  {
    id: 's1',
    title: 'Velvet & Vine Boutique',
    description: 'Developed a custom Shopify 2.0 theme focusing on mobile-first UX. Implemented advanced filtering, custom product metaobjects for sizing guides, and a streamlined checkout flow to reduce cart abandonment.',
    image: 'https://picsum.photos/800/600?random=20',
    technologies: ['Shopify Liquid', 'Theme Kit', 'jQuery', 'Klaviyo Integration'],
    results: [
      { metric: 'Conversion Rate', value: '+45%' },
      { metric: 'Mobile Sales', value: '+60%' },
      { metric: 'Page Speed Score', value: '92/100' }
    ]
  },
  {
    id: 's2',
    title: 'PureGlow Skincare',
    description: 'Migrated a high-volume store from WooCommerce to Shopify Plus. Built a custom subscription portal using Recharge API to enhance recurring revenue and implemented a loyalty rewards program.',
    image: 'https://picsum.photos/800/600?random=21',
    technologies: ['Shopify Plus', 'Recharge API', 'React', 'Node.js Middleware'],
    results: [
      { metric: 'Recurring Revenue', value: '+30%' },
      { metric: 'Load Time', value: '-2.5s' },
      { metric: 'Admin Efficiency', value: '+50%' }
    ]
  },
  {
    id: 's3',
    title: 'TechGear Global',
    description: 'Created a headless commerce solution for an international electronics retailer. Utilized Shopify as the backend CMS with a Next.js frontend to support multi-currency and multi-language capabilities.',
    image: 'https://picsum.photos/800/600?random=22',
    technologies: ['Shopify Storefront API', 'Next.js', 'Sanity CMS', 'Tailwind'],
    results: [
      { metric: 'Intl. Traffic', value: '+120%' },
      { metric: 'SEO Rankings', value: 'Top 3' },
      { metric: 'Bounce Rate', value: '-25%' }
    ]
  }
];

export const SEO_STEPS: SEOStep[] = [
  {
    id: 'seo1',
    step: 1,
    title: 'Audit & Analysis',
    description: 'I begin with a comprehensive site audit to identify technical issues, crawl errors, and existing keyword performance. This establishes a baseline for growth.',
    tools: ['Screaming Frog', 'Google Search Console', 'SEMrush']
  },
  {
    id: 'seo2',
    step: 2,
    title: 'Strategy & Keywords',
    description: 'Developing a tailored strategy based on competitor gap analysis and high-intent keyword research. I focus on "money keywords" that drive conversions, not just traffic.',
    tools: ['Ahrefs', 'Google Keyword Planner', 'Surfer SEO']
  },
  {
    id: 'seo3',
    step: 3,
    title: 'Technical Implementation',
    description: 'Fixing the foundation. I optimize Core Web Vitals, fix broken links, implement proper schema markup, and ensure mobile responsiveness.',
    tools: ['Lighthouse', 'Schema.org', 'Robots.txt']
  },
  {
    id: 'seo4',
    step: 4,
    title: 'Content & Authority',
    description: 'Creating high-quality, SEO-optimized content briefs and building domain authority through ethical backlink outreach and digital PR.',
    tools: ['Jasper AI', 'Hunter.io', 'HARO']
  },
  {
    id: 'seo5',
    step: 5,
    title: 'Monitoring & Reporting',
    description: 'Continuous tracking of rankings and traffic. I provide transparent monthly reports detailing ROI, traffic growth, and keyword movements.',
    tools: ['Google Analytics 4', 'Looker Studio', 'RankMath']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'LuxeApparel',
    content: 'Rudra transformed our online store. The new Shopify theme is blazing fast, and our mobile conversion rate doubled within two months. Highly recommended!',
    image: 'https://picsum.photos/100/100?random=50'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'DataFlow SaaS',
    content: 'The technical SEO expertise Rudra brings is unmatched. He cleaned up our site architecture and we saw a 300% increase in organic traffic in just 6 months.',
    image: 'https://picsum.photos/100/100?random=51'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'E-commerce Manager',
    company: 'PureGlow',
    content: 'Working with Rudra was seamless. He understood our vision for the subscription portal perfectly and executed it with precision code.',
    image: 'https://picsum.photos/100/100?random=52'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Scaling Organic Traffic for B2B SaaS',
    client: 'CloudSync Solutions',
    category: 'Technical SEO',
    problem: 'CloudSync was struggling to rank for industry terms despite having a good product. Their website had severe technical debt, slow load times, and poor internal linking structure, resulting in stagnant organic growth.',
    solution: 'Executed a complete technical overhaul. Fixed 400+ crawl errors, implemented dynamic XML sitemaps, optimized JS rendering for bots, and created a topic-cluster content strategy targeting high-intent B2B keywords.',
    impact: 'Achieved a 300% increase in organic traffic over 6 months. Domain Authority increased by 12 points, and the site now ranks #1 for 5 key industry terms.'
  },
  {
    id: 'cs2',
    title: 'Revitalizing a Fashion Brand Checkout',
    client: 'UrbanThreads',
    category: 'Shopify Development',
    problem: 'UrbanThreads was experiencing a 75% cart abandonment rate. The checkout process was clunky, non-intuitive on mobile, and lacked trust signals, causing potential customers to drop off at the final step.',
    solution: 'Redesigned the cart drawer and checkout flow. Implemented a one-page checkout modification, added auto-address completion, integrated trust badges, and set up automated abandoned cart email flows.',
    impact: 'Reduced cart abandonment rate to 55% (20% improvement). Recovered approximately $150k in annual revenue and increased average order value by 12%.'
  }
];

export const TICKER_ITEMS = [
  "Web Development",
  "Shopify Expert",
  "Technical SEO",
  "React.js",
  "Next.js",
  "E-commerce Strategy",
  "Performance Optimization",
  "UI/UX Design",
  "Full Stack Engineering"
];
