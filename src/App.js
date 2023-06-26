import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Components/Layout/Layout';
import { Home } from '../src/Components/Home/Home'
import { About } from './Components/About/About';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
