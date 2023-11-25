import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Home, About, Projects, Contact} from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route pathabout="/about" element={<About/>}/>
          <Route pathabout="/projects" element={<Projects/>}/>
          <Route pathabout="/contact" element={<Contact/>}/>
        </Routes>

      </Router>

    </main>
  )
}

export default App