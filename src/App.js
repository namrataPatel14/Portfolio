import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom"
import { Home } from './containers/home';
import { Portfolio } from './containers/portfolio';
import { Contact } from './containers/contacts';
import { About } from './containers/about';
import { Resume } from './containers/resume';
import { Skills } from './containers/skills';
import { Navbar } from './components/navbar';
import {Theme} from './components/theme'
function App() {
  return (
    <div className="App">
      {/* navbar */}
      <div className='App__navbar--wrapper'>
        <Navbar />
      </div>
      {/* main pages */}
      <div className='App__main-content--wrapper'>
        <Theme />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
