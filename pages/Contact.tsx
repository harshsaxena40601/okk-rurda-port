import React from 'react';
import Contact from '../components/Contact';
import { AppMode } from '../types';

interface ContactPageProps {
  mode: AppMode;
}

const ContactPage: React.FC<ContactPageProps> = ({ mode }) => {
  return (
    <div className="pt-10">
      <Contact mode={mode} />
    </div>
  );
};

export default ContactPage;