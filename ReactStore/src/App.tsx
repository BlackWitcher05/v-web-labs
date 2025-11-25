import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CatalogPage from './pages/CatalogPage'

const App: React.FC = () => {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<CatalogPage />} />
      </Routes>
      
    </Router>
  );
}

export default App
