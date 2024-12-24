// src/layout/Content.tsx
import React from 'react';
import RouteComponent from '@/routes/Routes.tsx'

const Content: React.FC = () => {
  return (
    <div className='w-100 flex-fill'>
      <RouteComponent></RouteComponent>
    </div>
  );
};

export default Content;
