// src/layout/Body.tsx
import React from 'react';
import Content from '@/components/layout/Content.tsx';
import Footer from '@/components/layout/Footer.tsx';

const Body: React.FC = () => {
  return (
    <div className='container-fluid flex-fill'>
      <div className='d-flex flex-column h-100'>
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
