import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { caseProud } from '../../data';
import { Container, Wrapper, Description, Image, Article, ButtonContainer, ButtonNext, ImageContainer } from './caseProudElements';
import icon1 from '../../assets/prehome image.svg';
import icon2 from '../../assets/prehome image.svg';
import icon3 from '../../assets/prehome image.svg';
import icon4 from '../../assets/prehome image.svg';

const getIconPath = (iconName) => {
    switch (iconName) {
        case 'icon1':
            return icon1;
        case 'icon2':
            return icon2;
        case 'icon3':
            return icon3;
        case 'icon4':
            return icon4;
        default:
            return '';
    }
};

const CaseProud = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

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
                threshold: 0.4 // Al menos el 40% del elemento es visible
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? caseProud.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === caseProud.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Container>
            {caseProud.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                    <Wrapper style={{ display: index === currentIndex ? 'flex' : 'none' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                            style={{ width: '50%' }} // Ajusta el ancho según tu diseño
                        >
                            <ImageContainer>
                                <Image src={getIconPath(item.icon)} alt={item.title} />
                            </ImageContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                            style={{ width: '50%' }} // Ajusta el ancho según tu diseño
                        >
                            <Article>
                                <Description>{item.description}</Description>
                                <ButtonContainer>
                                    <ButtonNext onClick={goToPrevSlide}>&lt;&lt; Anterior </ButtonNext>
                                    <ButtonNext onClick={goToNextSlide}>Siguiente &gt;&gt;</ButtonNext>
                                </ButtonContainer>
                            </Article>
                        </motion.div>
                    </Wrapper>
                </motion.div>
            ))}
            <div ref={ref}></div> {/* Este div es el observado por Intersection Observer */}
        </Container>
    );
};

export default CaseProud;
