import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout/Layout';

import { About } from './Pages/About/About';
import { Login } from './Components/SignUp Login/Login';
import { Signup } from './Components/SignUp Login/Signup';
import { Home } from './Pages/Home/Home';

import { AdminLayout } from './Admin/AdminLayout/AdminLayout';
import { Dashboard } from './Admin/Dashboard/Dashboard';
import { Products } from './Admin/Products/Products';
import { Catgories } from './Admin/Catagories/Catagories';
import { Profile } from './Admin/Profile/Profile';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='signUp' element={<Signup />} />

          <Route path='adminLayout' element={<AdminLayout />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='catgories' element={<Catgories />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
