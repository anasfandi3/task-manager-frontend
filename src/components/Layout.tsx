// src/layout/Layout.tsx
import React from 'react';
import Header from '@/components/layout/Header.tsx';
import Footer from '@/components/layout/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
