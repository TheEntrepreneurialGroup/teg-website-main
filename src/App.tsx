import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ForStudents from './pages/ForStudents';
import ForCompanies from './pages/ForCompanies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="for-students" element={<ForStudents />} />
        <Route path="for-companies" element={<ForCompanies />} />
      </Route>
    </Routes>
  );
}

export default App;