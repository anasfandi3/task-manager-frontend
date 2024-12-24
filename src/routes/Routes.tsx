import React from 'react';
import Home from '@/pages/Home.tsx'
import About from '@/pages/About.tsx'
import { Routes, Route } from 'react-router-dom';

const Content: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
};

export default Content;
