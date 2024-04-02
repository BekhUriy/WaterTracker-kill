import styled, { css } from "styled-components"

export const SignInStyled = styled.button`
    background-color: transparent;
    border: none;
    color: #407BFF;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 8px;

    ${props =>
    props.media &&
    css`
      /* Media query styles */
      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 24px;
      }
    `}
`
