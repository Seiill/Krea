import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  GridContainer,
  Container,
  LeftColumn,
  TextContainer,
  Title,
  TitleHeader,
  Description,
  RightColumn
} from '../lightBulbElements';

const Lightbulb = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.1 && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  return (
    <Container>
      <TitleHeader>¡En nuestra agencia de diseño, la clave es tu visión! Nuestro enfoque se basa en cuatro pasos fundamentales:</TitleHeader>
      <GridContainer>
        <LeftColumn>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <TextContainer>
              <Title> Escuchar </Title>
              <Description>
                Nos sumergimos en tus ideas, necesidades y objetivos. Tu voz es nuestra brújula, y estamos aquí para captar cada detalle de tu visión.
              </Description>
            </TextContainer>
            <TextContainer>
              <Title>Analizar</Title>
              <Description>
                Estudiamos cuidadosamente cada aspecto, evaluamos posibilidades y trazamos estrategias. Esta fase nos permite trazar el camino más sólido para convertir tu visión en realidad.
              </Description>
            </TextContainer>
          </motion.div>
        </LeftColumn>
        <RightColumn>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <TextContainer>
              <Title>Krear</Title>
              <Description>
                Nuestro equipo creativo se sumerge en el proceso de dar forma a tus ideas, utilizando nuestra experiencia y creatividad para hacerlas cobrar vida.
              </Description>
            </TextContainer>
            <TextContainer>
              <Title>Resolver</Title>
              <Description>
                Nos comprometemos a superar desafíos, encontrar soluciones innovadoras y asegurar que tu proyecto se complete con excelencia y precisión.
              </Description>
            </TextContainer>
          </motion.div>
        </RightColumn>
      </GridContainer>
    </Container>
  );
};

export default Lightbulb;
