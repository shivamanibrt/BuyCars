import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout/Layout';

import { About } from './Pages/About/About';
import { Login } from './Components/SignUp Login/Login';
import { Signup } from './Components/SignUp Login/Signup';
import { Home } from './Pages/Home/Home';

import { Dashboard } from './Admin/Dashboard/Dashboard';
import { Products } from './Admin/Products/Products';
import { AdminCatagories } from './Admin/Catagories/AdminCatagories';
import { Profile } from './Admin/Profile/Profile';

import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { getUserAction } from './Redux/User/UserAction';
import { auth } from './Firebase/firebase-config';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NewCar } from './Admin/Products/NewCar';
import { BuyCar } from './Pages/BuyCar/BuyCar';
import { Catagories } from './Pages/Catagories/Catagories';
import { HatchBack } from './Pages/Catagories/HatchBack/HatchBack';
import { Suv } from './Pages/Catagories/SUV/Suv';
import { SportsCar } from './Pages/Catagories/SportsCar/SportsCar';
import { Sedan } from './Pages/Catagories/Sedan/Sedan';
import { NewArrivals } from './Pages/Catagories/NewArrivals/NewArrivals';


function App() {
  const dispatch = useDispatch();

  //let firebase to re auth user if they relod the page
  onAuthStateChanged(auth, (user) => {
    user?.uid && dispatch(getUserAction(user.uid))
  })
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          {/* <Route path='cart' element={<Cart />} /> */}
          <Route path='signUp' element={<Signup />} />


          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='adminCatgories' element={<AdminCatagories />} />

          <Route path='profile' element={<Profile />} />
          <Route path='newCar' element={<NewCar />} />
          <Route path='buyCar/:carId' element={<BuyCar />} />

          <Route path='catgories' element={<Catagories />} />
          <Route path='newArrivals' element={<NewArrivals />} />
          <Route path='hatchBack' element={<HatchBack />} />
          <Route path='suv' element={<Suv />} />
          <Route path='sportsCar' element={<SportsCar />} />
          <Route path='sedan' element={<Sedan />} />


        </Routes>
        <ToastContainer />
      </Layout>
    </div>
  );
}

export default App;
