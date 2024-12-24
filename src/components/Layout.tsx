// src/layout/Layout.tsx
import React from 'react';
import Header from '@/components/layout/Header.tsx';
import Body from '@/components/layout/Body';

const Layout: React.FC = () => {
  return (
    <div className='d-flex flex-column h-100'>
      <Header />
      <Body />
    </div>
  );
};

export default Layout;
