import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../Styled-Components/Responsive';
const SwitchContainer = styled.div`
left: 50%;
    position: absolute;
    transform: translate(-50%, -8%);
    bottom: 11%;
    display: flex;
    align-items: center;
    justify-content: center;
${tablet({
  bottom: "28%",
})}
${mobile({
  bottom: "129%",

})}
`;

const SwitchInput = styled.input`
  display: none;
`;

const SwitchLabel = styled.label`
  margin: auto auto 22px auto;
  display: block;
  position: relative;
  background: ${(props) => (props.checked ? '#20a0ff' : '#d2d9e4')};
  width: 90px;
  height: 36px;
  border-radius: 25px;
  border: 2px solid #cad3dc;
  cursor: pointer;
  transition: background 0.3s;
`;

const SwitchLabelBefore = styled.div`
  content: "";
  position: absolute;
  width: 36px;
  height: 36px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  left: ${(props) => (props.checked ? '56px' : '0')};
  top: 0;
  transition: all 0.3s;
`;

const Switch = ({ checked, onChange }) => {
    return (
      <SwitchContainer>
        <SwitchInput type="checkbox" id="check" checked={checked} onChange={onChange} />
        <SwitchLabel htmlFor="check" checked={checked}>
          <SwitchLabelBefore checked={checked} />
        </SwitchLabel>
      </SwitchContainer>
    );
  };
  
  export default Switch;