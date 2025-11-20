import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Skill {
  name: string;
  level?: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ShopifyProject {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  results: {
    metric: string;
    value: string;
  }[];
  link?: string;
}

export interface SEOStep {
  id: string;
  step: number;
  title: string;
  description: string;
  tools: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
}
