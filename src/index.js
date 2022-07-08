import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import FAQ from './Pages/FAQ/FAQ';
import Presence from './Pages/Presence/Presence';
import Tasks from './Pages/Tasks/Tasks';
import Error404 from './Pages/404/404';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';
import UserGroup from './Pages/User/Menu/User-Group';
import UserProfile from './Pages/User/Menu/User-Profile';
import UserGrade from './Pages/User/Menu/User-Grade';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Pages/Admin/Admin';
import AdminDashboard from './Pages/Admin/Components/Admin-dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="task" element={<Tasks />} />
            <Route path='presence' element={<Presence/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='user' element={<User/>}>
                <Route index element={<UserProfile/>}/>
                <Route path='group' element={<UserGroup/>}/>
                <Route path='grade' element={<UserGrade/>}/>
            </Route>
          </Route>
          <Route path='*' element={<Error404/>}/>
          <Route path='/admin' element={<Admin/>}>
            <Route index element={<AdminDashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);