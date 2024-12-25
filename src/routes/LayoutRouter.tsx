// src/layout/Layout.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout.tsx';
import AuthLayout from '@/components/AuthLayout.tsx';
import Home from '@/pages/Home.tsx';
import About from '@/pages/About.tsx';
import Login from '@/pages/auth/Login.tsx';
import Register from '@/pages/auth/Register.tsx';
import AuthRoute from '@/routes/AuthRoute';
import AuthPreventRoute from '@/routes/AuthPreventRoute';


const LayoutRouter: React.FC = () => {
  return (
    <Routes>
      {/* protected routes */}
      <Route element={<AuthRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Route>

      {/* public routes */}
      <Route element={<AuthPreventRoute/>}>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default LayoutRouter;
