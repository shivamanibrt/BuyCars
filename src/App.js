import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout/Layout';

import { About } from './Pages/About/About';
import { Login } from './Components/SignUp Login/Login';
import { Signup } from './Components/SignUp Login/Signup';
import { Home } from './Pages/Home/Home';

import { Dashboard } from './Admin/Dashboard/Dashboard';
import { Products } from './Admin/Products/Products';
import { Catgories } from './Admin/Catagories/Catagories';
import { Profile } from './Admin/Profile/Profile';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='signUp' element={<Signup />} />

          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='catgories' element={<Catgories />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
        <ToastContainer />
      </Layout>

    </>
  );
}

export default App;
