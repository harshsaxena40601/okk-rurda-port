import React from 'react';
import ShopifyShowcase from '../components/ShopifyShowcase';
import { AppMode } from '../types';

interface SolutionsPageProps {
  mode: AppMode;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ mode }) => {
  return (
    <div className="pt-10">
       <ShopifyShowcase mode={mode} />
    </div>
  );
};

export default SolutionsPage;