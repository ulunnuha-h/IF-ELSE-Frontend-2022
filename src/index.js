import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home/Home';
import {News} from './Pages/News/News';
import FAQ from './Pages/FAQ/FAQ';
import Presence from './Pages/Presence/Presence';
import Tasks from './Pages/Tasks/Tasks';
import TasksDetail from './Pages/Tasks/Task-detail/Tasks-Detail'
import Error404 from './Pages/404/404';
import UserGroup from './Pages/User/Menu/User-Group';
import UserProfile from './Pages/User/Menu/User-Profile';
import UserGrade from './Pages/User/Menu/User-Grade';
import { BrowserRouter, Route} from 'react-router-dom';
import AnimateRoutes from './Config/Animate';
import Admin from './Pages/Admin/Admin';
import AdminDashboard from './Pages/Admin/Components/Admin-dashboard';
import AdminKelompok from './Pages/Admin/Components/Admin-kelompok';
import AdminBerita from './Pages/Admin/Components/Admin-berita';
import AdminPenugasan from './Pages/Admin/Components/Admin-penugasan';
import AdminRangkaian from './Pages/Admin/Components/Admin-rangkaian';
import KelompokDetail from './Pages/Admin/Components/Admin-kelompok/Admin-kelompok-detail';
import MahasiswaDetail from './Pages/Admin/Components/Admin-kelompok/Admin-mahasiswa-detail';
import TambahBerita from './Pages/Admin/Components/Admin-berita/Admin-berita-tambah';
import { ProtectedUser,ProtectedLogin } from './Config/Protected';
import EditBerita from './Pages/Admin/Components/Admin-berita/Admin-berita-edit';
import ListPerizinan from './Pages/Admin/Components/Admin-rangkaian/Admin-perizinan-list';
import ListPendataan from './Pages/Admin/Components/Admin-rangkaian/Admin-pendataan-list';
import Perizinan from './Pages/Admin/Components/Admin-rangkaian/Admin-perizinan';
import Pendataan from './Pages/Admin/Components/Admin-rangkaian/Admin-pendataan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <BrowserRouter>
        <AnimateRoutes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="task" element={<Tasks />}>
              <Route path = ":id" element={<TasksDetail/>}/>
            </Route>
            <Route path='presence' element={<Presence/>}/>
            <Route path='login' element={<ProtectedLogin/>}/>
            <Route path='user' element={<ProtectedUser/>}>
                <Route index element={<UserProfile/>}/>
                <Route path='group' element={<UserGroup/>}/>
                <Route path='grade' element={<UserGrade/>}/>
            </Route>
          </Route>
          <Route path='*' element={<Error404/>}/>
          <Route path='/admin$' element={<Admin/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path='kelompok' element={<AdminKelompok/>}/>
            <Route path='kelompok/:kelompokId' element={<KelompokDetail/>}/>
            <Route path='kelompok/mahasiswa/:id' element={<MahasiswaDetail/>}/>
            <Route path='rangkaian' element={<AdminRangkaian/>}>
              <Route path='perizinan' element={<Perizinan/>}>
                <Route path=':rangkaian' element={<ListPerizinan/>}/>
              </Route>      
              <Route path='pendataan' element={<Pendataan/>}>
                <Route path=':rangkaian' element={<ListPendataan/>}/>
              </Route>
            </Route>
            <Route path='berita' element={<AdminBerita/>}/>
            <Route path='berita/baru' element={<TambahBerita/>}/>
            <Route path='berita/edit/:id' element={<EditBerita/>}/>
            <Route path='penugasan' element={<AdminPenugasan/>}/>
          </Route>
          </AnimateRoutes>
      </BrowserRouter>
  </React.StrictMode>
);