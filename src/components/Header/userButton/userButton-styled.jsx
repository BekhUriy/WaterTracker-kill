import styled, { css } from "styled-components";

export const UserPhoto = styled.img`
    width: 28px; 
    height: 28px; 
    border-radius: 50%;
    background-color: #9EBBFF;
    display: flex;
    flex-shrink: 0;
`

export const UserButtonStyle = styled.button`
    background-color: transparent;
    border: none;
    width: 122px;
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: right;
    cursor: pointer;
    padding: 0;


    ${props =>
    props.media &&
    css`
      /* Media query styles */
      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
      }
    `}
`

export const PhotoBlock = styled.div`
      width: 48px;
      display: flex;
    gap: 4px;
    align-items: center;

`

export const UserName = styled.div`
    text-overflow: clip;
    text-wrap: nowrap;
    max-width: 66px;
`

export const Holder = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 122px;
`