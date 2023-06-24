import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Components/Layout/Layout';
import { Home } from '../src/Components/Home/Home'


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
