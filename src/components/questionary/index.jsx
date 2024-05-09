import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { questions } from '../../data';
import Toast from '../Styled-Components/toast';
import { IoIosSend } from "react-icons/io";
import { FaAngleDoubleDown } from "react-icons/fa";1
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { 
  Question,
  Button,
  Container,
  Label,
  Form, 
  Response, 
  ContactContainer, 
  InputContainer,
  Span, 
  Input, 
  GuestToForm,
  Text,
  TextArea, 
  ButtonContainer, 
  ErrorMessage 
} from './elementsQuestionnari';
import { variables } from '../Styled-Components/themMode';

const iconAnimation = keyframes`
  0% {
    transform: translateY(-50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
`;
const AnimatedIcon = styled(FaAngleDoubleDown)`
margin-top: 3rem;
font-size:2rem;
color: ${variables.secondColor};
  animation: ${iconAnimation} 2s ease-out forwards 5; 
`;
const QuestionnaireForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { control, handleSubmit, setValue, getValues, formState: { errors }, register, reset } = useForm();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [responses, setResponses] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
const navigate = useNavigate();
  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const hideToast = () => {
    setToastVisible(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateAnswer = (questionIndex) => {
    const answer = getValues(`question${questions[questionIndex].id}`);
    const isValid = answer !== undefined && answer !== '' && answer !== null;

    if (!isValid) {
      showToast('Por favor, selecciona una respuesta antes de continuar.');
      return false;
    }

    return true;
  };

  const handleQuestionChange = (currentIndex, direction) => {
    if (direction === 'next' && !validateAnswer(currentIndex)) {
      return;
    }

    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= 0 && newIndex < questions.length) {
      setCurrentQuestion(newIndex);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (!data.name.trim()) { 
        showToast('Por favor, ingresa tu nombre.');
        return;
      }
    
      if (!validateEmail(data.email)) { 
        showToast('Por favor, ingresa un correo electrónico válido.');
        return;
      }
  
      console.log(data);
  
      showToast('¡Formulario enviado con éxito!');
  
      // Restablecer el estado del formulario
      reset();
      // Cerrar el div que contiene los datos de contacto
      setShowContactForm(false);
      setCurrentQuestion(0);
  
      navigate('/services');
    } catch (error) {
      showToast(error.message);
    }
  };

  const handleNext = () => {
    if (!validateAnswer(currentQuestion)) {
      return;
    }
  
    const currentResponse = getValues(`question${questions[currentQuestion].id}`);
    setResponses({ ...responses, [`question${questions[currentQuestion].id}`]: currentResponse });
  
    if (currentQuestion === questions.length - 1) {
      setShowContactForm(true);
    } else if (currentQuestion === 1 && currentResponse === "No tengo marca") {
      setCurrentQuestion(7); 
    } else if (currentQuestion === 11 && currentResponse === "No") {
      setCurrentQuestion(16); 
    } else if (currentQuestion === 16 && currentResponse === "No") {
      setCurrentQuestion(19); 
    } else if (currentQuestion === 19 && currentResponse === "No") {
      setCurrentQuestion(21);
    } else if (currentQuestion === 21 && currentResponse === "No") {
      setCurrentQuestion(23);
    } else if (currentQuestion === 23 && currentResponse === "No") {
      setCurrentQuestion(25);
    } else {
      handleQuestionChange(currentQuestion, 'next');
      hideToast();
    }
  };

  const handlePrevious = () => {
    handleQuestionChange(currentQuestion, 'prev');
    hideToast();
  };
  
  return (
    <Container>
      <GuestToForm>
        <Text>¿Quieres impulsar tu negocio en el mundo digital? ¡Este cuestionario te ayudará! Descubre rápidamente el estado de tu empresa en el mundo digital. ¡Conoce tus oportunidades de mejora y destaca en línea! ¡Comienza ahora!"</Text>
        <AnimatedIcon />
      </GuestToForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {questions.map((question, index) => (
          <div key={question.id} style={{ display: index === currentQuestion ? 'block' : 'none' }}>
            <Question>
              <Span>{question.text}</Span>
              <Response>
                {question.options.length > 0 ? (
                  question.options.map((option, optionIndex) => (
                    <Label key={`option-${question.id}-${optionIndex}`} htmlFor={`question${question.id}-${optionIndex}`}>
                      <Controller
                        name={`question${question.id}`}
                        control={control}
                        render={({ field }) => (
                          <>
                            <Input
                              type="radio"
                              {...field}
                              id={`question${question.id}-${optionIndex}`}
                              value={option}
                              checked={field.value === option}
                              onChange={() => setValue(`question${question.id}`, option)}
                            />
                            {option}
                          </>
                        )}
                      />
                    </Label>
                  ))
                ) : (
                  <Controller
                    name={`question${question.id}`}
                    control={control}
                    render={({ field }) => (
                      <TextArea
                        {...field}
                        id={`question${question.id}`}
                        placeholder="Escribe tu respuesta aquí..."
                        onChange={(e) => setValue(`question${question.id}`, e.target.value)}
                      />
                    )}
                  />
                )}
              </Response>
              <ButtonContainer>
                <Button
                  type="button"
                  onClick={handlePrevious}
                  style={{ display: index === currentQuestion && index > 0 ? 'block' : 'none' }}
                >
                  Anterior
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    if (index === currentQuestion && index < questions.length - 1) {
                      handleNext();
                    } else if (index === currentQuestion && index === questions.length - 1) {
                      setShowContactForm(true);
                    }
                  }}
                  style={{ display: 'block' }}
                >
                  {index === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
                </Button>
              </ButtonContainer>
            </Question>
            {errors[`question${question.id}`] && (
              <ErrorMessage>{question.errorMessage}</ErrorMessage>
            )}
          </div>
        ))}
        {showContactForm && (
          <ContactContainer>
            <h2>Deja tus datos para enviarte los resultados de este test</h2>
            <InputContainer>
              <Input {...register("name")} placeholder="Nombre" customWidth="40vw" />
              <Input {...register("email")} placeholder="Correo electrónico" customWidth="40vw" />
            </InputContainer>
            <Button type="submit">Enviar <IoIosSend /></Button>
          </ContactContainer>
        )}
      </Form>
      <Toast message={toastMessage} visible={toastVisible} onClose={hideToast} />
    </Container>
  );
};

export default QuestionnaireForm;
