import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Components/Layout/Layout';
import { Home } from '../src/Components/Home/Home'
import { About } from './Components/About/About';
import { Login } from './Components/ReusableComponent/Login';
import { Signup } from './Components/ReusableComponent/Signup';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<Signup />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
