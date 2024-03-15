import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Image from '../../assets/contact-img.svg';
import { variables } from '../Styled-Components/themMode';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4 // Umbral del 40%
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes enviar los datos del formulario a tu servidor
  };

  return (
    <Container ref={ref}>
      <FormContainer onSubmit={handleSubmit(onSubmit)} isVisible={isVisible}>
        <LeftContainer>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ delay: 0.1 }}
          >
            <DataContainer>
              <InputLabel htmlFor="fullName">Nombre Completo</InputLabel>
              <InputField type="text" {...register('fullName', { required: true })} />
            </DataContainer>
            {errors.fullName && <ErrorText>Este campo es requerido</ErrorText>}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ delay: 0.2 }}
          >
            <DataContainer>
              <InputLabel htmlFor="email">Email</InputLabel>
              <InputField type="email" {...register('email', { required: true })} />
            </DataContainer>
            {errors.email && <ErrorText>Este campo es requerido</ErrorText>}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ delay: 0.3 }}
          >
            <DataContainer>
              <InputLabel htmlFor="phone">Teléfono</InputLabel>
              <InputField type="tel" {...register('phone', { required: true })} />
            </DataContainer>
            {errors.phone && <ErrorText>Este campo es requerido</ErrorText>}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ delay: 0.4 }}
          >
            <DataContainer>
              <InputLabel>¿Cómo podemos ayudarte?</InputLabel>
              <TextAreaField {...register('message')} />
            </DataContainer>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ delay: 0.5 }}
          >
            <SubmitButton type="submit">Enviar</SubmitButton>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ delay: 0.6 }}
          >
            <DataContainer>
              <CheckboxLabel>
                <input type="checkbox" {...register('privacyPolicy',{ required: true })} />
                He leído y acepto las políticas de privacidad
              </CheckboxLabel>
              {errors.privacyPolicy && <ErrorText>Debes aceptar las políticas de privacidad</ErrorText>}
            
            </DataContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ delay: 0.7 }}
          >
            <DataContainer>
              <CheckboxLabel>
                <input type="checkbox" {...register('newsletter')} />
                Me gustaría recibir noticias
              </CheckboxLabel>
            </DataContainer>
          </motion.div>
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <motion.img
              src={Image}
              alt='imagen'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ delay: 0.8 }}
            />
          </ImageContainer>
        </RightContainer>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.form`
  display: flex;
  width: 80%;
  column-gap: 1rem;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50% 0;
  background-color: #f1f9ff;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${variables.hoverPrimaryDarkColor};
  border-radius: 5px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100px;
  max-height: 300px; 
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${variables.hoverPrimaryDarkColor};
  border-radius: 5px;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: ${variables.hoverPrimaryLightColor};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 1rem 0;
  font-weight: ${variables.boldFont}; 
  &:hover {
    background-color: ${variables.hoverPrimaryDarkColor};
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(.9);
  }  
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ErrorText = styled.span`
  color: red;
`;

export default ContactForm;

