import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import Image from '../../assets/contact-img.svg'
import { variables } from '../Styled-Components/themMode';
const ContactForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes enviar los datos del formulario a tu servidor
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <LeftContainer>
          <DataContainer>
          <InputLabel htmlFor="fullName">Nombre Completo</InputLabel>
          <InputField type="text" {...register('fullName', { required: true })} />
          </DataContainer>
          {errors.fullName && <ErrorText>Este campo es requerido</ErrorText>}
          
          <DataContainer>
          <InputLabel htmlFor="email">Email</InputLabel>
          <InputField type="email" {...register('email', { required: true })} />
          </DataContainer>
          {errors.email && <ErrorText>Este campo es requerido</ErrorText>}
          <DataContainer>
          <InputLabel htmlFor="phone">Teléfono</InputLabel>
          <InputField type="tel" {...register('phone', { required: true })} />
          </DataContainer>
          {errors.phone && <ErrorText>Este campo es requerido</ErrorText>}
          <DataContainer>
          <InputLabel>¿Cómo podemos ayudarte?</InputLabel>
          <TextAreaField {...register('message')} />
          </DataContainer>

          <DataContainer>
          <CheckboxLabel>
            <input type="checkbox" {...register('privacyPolicy')} />
            He leído y acepto las políticas de privacidad
          </CheckboxLabel>

          <CheckboxLabel>
            <input type="checkbox" {...register('newsletter')} />
            Me gustaría recibir noticias
          </CheckboxLabel>
          </DataContainer>
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <Img src={Image}  alt='imagen'/>
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
` 

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

const ErrorText = styled.span`
  color: red;
`;
const DataContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export default ContactForm;
