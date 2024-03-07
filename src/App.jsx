import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/NavBar';
import Home from './pages/home';
import Service from './pages/service';
import Sidebar from './components/sideBar/SideBar';
import About from './pages/about';
import { Main } from './components/Styled-Components/main';
import ContactUs from './pages/contactUs';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Main>
        <Router>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/services" element={<Service />} exact />
            <Route path="/aboutUs" element={<About />} exact />
            <Route path='/contactUs' element={<ContactUs />} exact/>
          </Routes>
        </Router>
      </Main>
    </>
  );
}

export default App;
