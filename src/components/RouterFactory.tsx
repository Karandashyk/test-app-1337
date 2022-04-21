import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Employees } from '@routes';

export function RouterFactory() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="employees" element={<Employees />} />
      </Routes>
    </Router>
  );
}
