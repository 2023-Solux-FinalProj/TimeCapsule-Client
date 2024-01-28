import React from 'react';
import { css, styled } from 'styled-components';

const BasicButton = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      buttonWidth={props.buttonWidth}
      isCardAddBtn={props.isCardAddBtn}
      verticalPadding={props.verticalPadding}
      fontSize={props.fontSize}
      height={props.buttonHeight}
    >
      {props.children}
    </StyledButton>
  );
};

export default BasicButton;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  padding: ${(props) => props.verticalPadding} 1rem;

  color: #fff;
  font-weight: 700;
  font-size: ${(props) => props.fontSize || `1rem`};
  width: ${(props) => props.buttonWidth};

  .ic {
    margin-right: 0.5rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.58);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.7px);
    -webkit-backdrop-filter: blur(4.7px);
    cursor: pointer;
  }

  ${(props) =>
    props.isCardAddBtn &&
    css`
      padding: 1.7rem;
      z-index: 100;
      display: block;
      align-self: flex-end;
      margin-bottom: 1.3rem;
      // position: absolute;
      // right: 0;
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;
