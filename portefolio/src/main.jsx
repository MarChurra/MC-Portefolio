import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Layout from './components/AppLayout.jsx';
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Works from './pages/Works.jsx'
import NotFound from './pages/NotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
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
);

