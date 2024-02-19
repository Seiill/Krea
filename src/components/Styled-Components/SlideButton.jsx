import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variables } from './themMode';
const Button = styled.button`
position: relative;
    z-index: 5;
    border: none;
    padding: 2px 10px;
    color: ${variables.primaryColor};
    font-size: ${variables.smallFont};
    font-weight: ${variables.mediumBoldFont};
    background-color: transparent;
    transition: background-color 0.3s, color 0.3s, border-radius 0.3s;

    &: hover{
        background-color: ${variables.hoverSecondaryDarkColor};
        color: ${variables.bgColor};
        border-radius: 10px;
    }
`

const SlideButton = ({ direction, onClick }) => (
  <Button onClick={onClick} >
    {direction === 'next' ? '>>' : '<<'}
  </Button>
);

SlideButton.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SlideButton;