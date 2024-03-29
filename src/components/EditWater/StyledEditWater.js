import styled from "styled-components";

export const StyledModal = styled.div`

  z-index: 1500;
background: #FFFFFF;

  border-radius: 10px;
  width:592px;
height: 580px;
top: 110px;
left: 424px;
padding: 32px 24px 32px 24px;
gap: 24px;
border-radius: 10px 10px 10px 10px;
opacity: 0px;

  `

  export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
 opacity:80;
  z-index: 1300;`

  export const StyledModalHeader = styled.div`
  display:flex;
  justify-content: space-between;
  `
  export const StyledCounter = styled.div`
  display:flex`
