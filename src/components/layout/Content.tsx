// src/layout/Content.tsx
import React from 'react';
import {Outlet} from 'react-router-dom'

const Content: React.FC = () => {
  return (
    <div className='w-100 flex-fill'>
      <Outlet />
    </div>
  );
};

export default Content;
