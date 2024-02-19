import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Question, Button, Container, Label, Form, Response, Span, Input, ButtonContainer, ErrorMessage } from './elementsQuestionnari'; // Asegúrate de importar ErrorMessage

import { questions } from '../../data';

const QuestionnaireForm = () => {
  const { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const validateAnswer = (questionIndex) => {
    const answer = getValues(`question${questions[questionIndex].id}`);
    console.log('Answer for question', questionIndex, ':', answer);

    return answer !== undefined && answer !== '' && answer !== null;
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {questions.map((question, index) => (
          <div key={question.id} style={{ display: index === currentQuestion ? 'block' : 'none' }}>
            <Question>
              <Span>{question.text}</Span>
              <Response>
                {question.options.map((option, optionIndex) => (
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
                ))}
              </Response>
              <ButtonContainer>
                <Button
                  type="button"
                  onClick={() => handleQuestionChange(index, 'prev')}
                  style={{ display: index === currentQuestion && index > 0 ? 'block' : 'none' }}
                >
                  Anterior
                </Button>
                <Button
                  type="button"
                  onClick={() => handleQuestionChange(index, 'next')}
                  style={{ display: index === currentQuestion && index < questions.length - 1 ? 'block' : 'none' }}
                >
                  Siguiente
                </Button>
                {index === questions.length - 1 && (
                  <Button type="submit" style={{ display: index === currentQuestion ? 'block' : 'none' }}>
                    Enviar
                  </Button>
                )}
              </ButtonContainer>
            </Question>
            {errors[`question${question.id}`] && (
              <ErrorMessage>Por favor, selecciona una respuesta antes de continuar.</ErrorMessage>
            )}
          </div>
        ))}
      </Form>
    </Container>
  );
};

export default QuestionnaireForm;