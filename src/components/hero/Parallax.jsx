import styled from 'styled-components';
import Lightbulb from './Lamp/Lightbulb';
import PreHome from '../welcomeComponent/index'; 
import useHandleScroll from '../Hooks/useHandleScroll'
const Container = styled.div`
  height: ${(props) => (props.hasScrolled ? '100%' : '100vh')};
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
  z-index: ${props => props.$zIndex};
`;

const Parallax = () => {
    const hasScrolled = useHandleScroll();

  return (
    <Container hasScrolled={hasScrolled}>
      <ParallaxContent>
        <Layer  $zIndex={2}>
          <PreHome />
        </Layer>
        <Layer style={{position: 'relative', margin: 'auto'}} $zIndex={1}>
          <Lightbulb />
        </Layer>
      </ParallaxContent>
    </Container>
  );
};

export default Parallax;
