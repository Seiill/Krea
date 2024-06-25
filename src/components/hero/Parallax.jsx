import styled from 'styled-components';
<<<<<<< HEAD
=======
import Lightbulb from './Lamp/lightbulb';
>>>>>>> 11aed4418dacc0c30ba0f613c2d3037170ad5030
import PreHome from '../welcomeComponent/index'; 
import useHandleScroll from '../Hooks/useHandleScroll'
import HeroSell from './HeroSell';

const Container = styled.div`
  height: ${(props) => (props.$hasScrolled ? '100%' : '100vh')};
  transition: height 0.3s ease;
`;

const ParallaxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; 
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.$zIndex};
`;

const Parallax = () => {
  const { hasScrolled, zIndexLayer1, zIndexLayer2 } = useHandleScroll();

  return (
    <Container $hasScrolled={hasScrolled}>
      <ParallaxContent>
        <Layer $zIndex={zIndexLayer1}>
          <PreHome />
        </Layer>
        <Layer style={{ position: 'relative', margin: 'auto' }} $zIndex={zIndexLayer2}>
          <HeroSell />
        </Layer>
      </ParallaxContent>
    </Container>
  );
};

export default Parallax;
