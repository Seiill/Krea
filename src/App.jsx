import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/NavBar';
import Home from './pages/home';
import Service from './pages/service';
import Sidebar from './components/sideBar/SideBar';
import About from './pages/about';
import { Main } from './components/Styled-Components/main';
import ContactUs from './pages/contactUs';
import Jedan from './pages/jedan-process-brand-construction';
import WhatsappButton from './components/whatsapp';

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
            <Route path='/jedan-process-brand-construction' element={<Jedan/>} exact/>
          </Routes>
          <WhatsappButton phoneNumber="3194526834" message="Hola, ¡me interesa obtener una cotización de sus servicios! ¿Podrían proporcionarme más detalles sobre...? ¡Gracias!" /> 
        </Router>
      </Main>
    </>
  );
}

export default App;
