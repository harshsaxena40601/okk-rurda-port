import { Project, Service, Skill } from './types';
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
