import React from 'react';
import Services from '../components/Services';
import { AppMode } from '../types';

interface ServicesPageProps {
  mode: AppMode;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ mode }) => {
  return (
    <div className="pt-10">
      <Services mode={mode} />
    </div>
  );
};

export default ServicesPage;