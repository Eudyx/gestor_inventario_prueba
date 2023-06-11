import Presentation from './components/Presentation';
import './App.css';
import './css/NavBar.css';
import ProdcustDetails from './components/ProdcustDetails';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Layout from './Layout/Layout';

function App() {

  return (
    <main>
    <NavBar />
    <section className='mainContent'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='products' element={<ProdcustDetails />} />
          <Route path='/' element={<Presentation />} />
        </Route>
      </Routes>
    </section>
    </main>
  )
}

export default App
