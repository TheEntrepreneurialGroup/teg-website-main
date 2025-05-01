import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ForStudents from './pages/ForStudents';
import ForCompanies from './pages/ForCompanies';
import { Home } from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Imprint from './pages/Imprint';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="for-students" element={<ForStudents />} />
        <Route path="for-companies" element={<ForCompanies />} />
      </Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/imprint" element={<Imprint />} />
    </Routes>
  );
}

export default App;