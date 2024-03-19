import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Description, Image, Article, ButtonContainer, ButtonNext, ImageContainer, Container, Wrapper } from './caseProudElements';
import { caseProud } from '../../data';
import { useNavigate } from 'react-router-dom';
import icon1 from '../../assets/lapiz-jedan.jpg';

const CaseProud = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0.4 
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const handleButtonClick = () => {
        navigate('/jedan-process-brand-construction'); 
    };

    const item = caseProud[0]; 

    return (
        <Container ref={ref}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
            >
                <Wrapper >
                    <ImageContainer>
                        <Image src={icon1}  alt="Boceto de logo de JEDAN" /> 
                    </ImageContainer>
                    <Article>
                        <Description>{item.description}</Description>
                        <ButtonContainer>
                            <ButtonNext onClick={handleButtonClick}>Ver Más</ButtonNext>
                        </ButtonContainer>
                    </Article>
                </Wrapper>
            </motion.div>
        </Container>
    );
};

export default CaseProud;
