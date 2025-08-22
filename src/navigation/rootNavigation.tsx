import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from '../pages/home';

const RootNavigation: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
      </Routes>
    </Router>
  );
};

export default RootNavigation;