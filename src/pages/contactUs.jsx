import React,{useEffect} from 'react'
import ContactForm from '../components/contactForm'
import { scrollToTop } from '../components/Styled-Components/ScrollToTop';
const ContactUs = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
    < ContactForm/>
    </>
  )
}

export default ContactUs