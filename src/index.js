// In Ihrer Index.js oder App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Co from './components/Kohlenstoffdioxid/App';
import NoPage from './components/Homepage/NoPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Co" element={<Co />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
