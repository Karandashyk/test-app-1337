import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Employees, Layout, NotFoundPage } from '@components';

export function RouterFactory() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}
