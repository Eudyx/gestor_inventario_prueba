import Presentation from './components/Presentation';
import './App.css';
import './css/styles.css';
import ProdcustDetails from './components/ProdcustDetails';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Layout from './Layout/Layout';
import Details from './components/Details';
import { useState } from 'react';

function App() {

  const [hidde, setHidde] = useState(true); //to detect if the create and edit form is active

  return (
    <main>
    <NavBar setHidde={setHidde} />
    <section className='mainContent'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='products' element={<ProdcustDetails hidde={hidde} setHidde={setHidde} />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='/' element={<Presentation />} />
        </Route>
      </Routes>
    </section>
    </main>
  )
}

export default App
