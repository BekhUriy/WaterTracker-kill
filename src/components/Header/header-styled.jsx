import styled, {css} from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    width: 320px;
    justify-content: space-between;

    ${props =>
    props.media &&
    css`
   
      @media (min-width: 768px) {
        min-width: 768px;
      }

      @media (min-width: 1440px) {
        width: 1128px;
      }
    `}
    
`

export const Block = styled.div`
padding:0;
`