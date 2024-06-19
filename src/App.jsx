import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navBar/NavBar';
import { Main } from './components/Styled-Components/main';
import Sidebar from './components/sideBar/SideBar';
import WhatsappButton from './components/whatsapp';

const Footer =lazy(()=> import ('./components/footer/index'));
const Home = lazy(() => import('./pages/home'));
const Service = lazy(() => import('./pages/service'));
const About = lazy(() => import('./pages/about'));
const ContactUs = lazy(() => import('./pages/contactUs'));
const Jedan = lazy(() => import('./pages/jedan-process-brand-construction'));
const OfferPage = lazy(() => import('./pages/offerPage'));

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
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/services" element={<Service />} exact />
            <Route path="/aboutUs" element={<About />} exact />
            <Route path='/contactUs' element={<ContactUs />} exact/>
            <Route path='/jedan-process-brand-construction' element={<Jedan/>} exact/>
            <Route path="/services/:category" element={<OfferPage />} />
          </Routes>
          <Footer />
          </Suspense>
          <WhatsappButton phoneNumber="3194526834" message="Hola, ¡me interesa obtener una cotización de sus servicios! ¿Podrían proporcionarme más detalles sobre...? ¡Gracias!" /> 
          
        </Router>
        
      </Main>
    </>
  );
}

export default App;
