import { useState } from 'react';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import './App.css';
import './css/NavBar.css';
import ProdcustDetails from './components/ProdcustDetails';

function App() {

  return (
    <main>
      <NavBar />
      <section className='mainContent'>
        {/* <Presentation /> */}
        <ProdcustDetails />
      </section>
    </main>
  )
}

export default App
