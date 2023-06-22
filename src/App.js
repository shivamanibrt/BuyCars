import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Components/Layout/Layout';
import { Login } from './Components/Component/Login';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='' element={<Login />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
