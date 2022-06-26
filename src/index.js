import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import FAQ from './Pages/FAQ/FAQ';
import Presence from './Pages/Presence/Presence';
import Tasks from './Pages/Tasks/Tasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path='presence' element={<Presence/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);