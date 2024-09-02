import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CountryProvider from './context/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './main/home';
import Search from './main/search';
import Detail from './main/detail';
import MoreFilter from './main/moreFilter'
import About from './main/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/detail/:name" element={<Detail/>} />
          <Route path="/filter" element={<MoreFilter/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
