import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Layout from './src/components/AppLayout.jsx';
import About from './src/pages/About.jsx'
import Home from './src/pages/Home.jsx'
import Works from './src/pages/Works.jsx'
import NotFound from './src/pages/NotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes >
    </BrowserRouter >
  </React.StrictMode>
);

