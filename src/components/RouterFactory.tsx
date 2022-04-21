import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Employees, PageNotFound } from '@pages';
import { Layout } from '@components';

export function RouterFactory() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </Layout>
  );
}
