import React from 'react';
import { Container, Lampara,LampContainer, Cable, Caja, Luz, Texto,Description, Input, Title} from './LampElements';
import { useLampState } from './LampActions';
import { cardsData } from '../../../data';

const Lamp = () => {
  const { encendidaIndex, encender } = useLampState(cardsData);

  return (
    <Container>
      <Title>¡En nuestra agencia de diseño, la clave es tu visión! Nuestro enfoque se basa en cuatro pasos fundamentales</Title>
      <LampContainer>
      {cardsData.map((item, index) => (
        <Lampara key={item.id}>
          <Cable></Cable>
          <Caja>
            <Input
              type="radio"
              checked={encendidaIndex === index}
              onChange={() => encender(index)}
            />
          </Caja>
          <Luz $encendida={encendidaIndex === index}></Luz>
          <Texto
            $encendida={encendidaIndex === index}
            className={encendidaIndex === index ? item.text : 'texto'}
          >
            {item.title}
          </Texto>
          <Description
          $encendida={encendidaIndex === index}
          className={encendidaIndex === index ? item.text : 'texto'} >{item.description}</Description>
        </Lampara>
        
      ))}
      </LampContainer>
    </Container>
  );
};

export default Lamp;