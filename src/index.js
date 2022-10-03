import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home/Home';
import Detail from './Pages/News/Detail/Detail';
import Narahubung from './Pages/FAQ/Narahubung/Narahubung'
import TasksDetail from './Pages/Tasks/Task-detail/Tasks-Detail'
import Error404 from './Pages/404/404';
import UserGroup from './Pages/User/Menu/User-Group';
import UserProfile from './Pages/User/Menu/User-Profile';
import UserGrade from './Pages/User/Menu/User-Grade';
import { BrowserRouter, Route, Navigate, Routes} from 'react-router-dom';
import KelompokDetail from './Pages/Admin/Components/Admin-kelompok/Admin-kelompok-detail';
import MahasiswaDetail from './Pages/Admin/Components/Admin-kelompok/Admin-mahasiswa-detail';
import TambahBerita from './Pages/Admin/Components/Admin-berita/Admin-berita-tambah';
import { ProtectedUser,LoginRoute } from './Config/Protected';
import EditBerita from './Pages/Admin/Components/Admin-berita/Admin-berita-edit';
import LoginForm from './Pages/Login/Login-form';
import RegisterForm from './Pages/Login/Register-form';
import Loading from './Components/Loading/Loading';
import AdminLoading from './Components/Loading/AdminLoading';
import Gallery from './Pages/Gallery/Gallery';
const Event = React.lazy(()=>import('./Pages/Event/Event'));
const Tasks = React.lazy(()=>import('./Pages/Tasks/Tasks'));
const FAQ = React.lazy(()=>import('./Pages/FAQ/FAQ'));
const News = React.lazy(()=>import('./Pages/News/News'));
const AdminDashboard = React.lazy(()=>import('./Pages/Admin/Components/Admin-dashboard'));
const AdminKelompok = React.lazy(()=>import('./Pages/Admin/Components/Admin-kelompok'));
const AdminBerita = React.lazy(()=>import('./Pages/Admin/Components/Admin-berita'));
const AdminPenugasan = React.lazy(()=>import('./Pages/Admin/Components/Admin-penugasan'));
const AdminRangkaian = React.lazy(()=>import('./Pages/Admin/Components/Admin-rangkaian'));
const Admin = React.lazy(()=>import('./Pages/Admin/Admin'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Navigate to={'home'} />} />
            <Route path='home' element={<Home />}/>
            <Route path='gallery' element={<Gallery />}/>
            <Route path="news" element={
              <Suspense fallback={<Loading/>}>
                <News/>
              </Suspense>
            }/>
            <Route path='news/:id' element={<Detail />}/>
            <Route path="faq" element={
              <Suspense fallback={<Loading/>}>
                <FAQ />
              </Suspense>  
            } />
            <Route path="narahubung" element={<Narahubung />} />
            <Route path="task" element={
              <Suspense fallback={<Loading/>}>
                <Tasks/>
              </Suspense>
            }>
              <Route path = ":id" element={<TasksDetail/>}/>
            </Route>
            <Route path='event' element={
              <Suspense fallback={<Loading/>}>
                <Event/>
              </Suspense>
            }/>
            <Route path='mahasiswa' element={<LoginRoute/>}>
                <Route path='login' element={<LoginForm/>}/>
                <Route path='register' element={<RegisterForm/>}/>
            </Route>
            <Route path='user' element={<ProtectedUser/>}>
                <Route index element={<UserProfile/>}/>
                <Route path='group' element={<UserGroup/>}/>
                <Route path='grade' element={<UserGrade/>}/>
            </Route>
          </Route>
          <Route path='*' element={<Error404/>}/>
          <Route path='/admin$-ifelse' element={
            <Suspense fallback={<AdminLoading/>}>
              <Admin/>
            </Suspense>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path='kelompok' element={<AdminKelompok/>}/>
            <Route path='kelompok/:kelompokId' element={<KelompokDetail/>}/>
            <Route path='kelompok/mahasiswa/:id' element={<MahasiswaDetail/>}/>
            <Route path='rangkaian' element={<AdminRangkaian/>}/>
            <Route path='berita' element={<AdminBerita/>}/>
            <Route path='berita/baru' element={<TambahBerita/>}/>
            <Route path='berita/edit/:id' element={<EditBerita/>}/>
            <Route path='penugasan' element={<AdminPenugasan/>}/>
          </Route>
        </Routes>  
      </BrowserRouter>
  </React.StrictMode>
);