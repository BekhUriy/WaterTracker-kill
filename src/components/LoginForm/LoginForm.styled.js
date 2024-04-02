import styled, { css } from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { NavLink } from 'react-router-dom';


export const NavForm = styled(NavLink)`
font-size: 16px;
font-weight: 400;
line-height: 20px;
text-align: left;
color:  var(--text-blue);;
margin-top: 8px;
transition: font-size 250ms cubic-bezier(0.4, 0, 0.2, 1), 
line-height 250ms cubic-bezier(0.4, 0, 0.2, 1), 
color 250ms cubic-bezier(0.4, 0, 0.2, 1);
 &:hover {
font-size: 18px;
line-height: 24px;
color:  var(--orange-color);
;
  } 
`;

export const ErrMessage = styled(ErrorMessage)`
position: absolute;
font-size: 15px;
font-weight: 400;
line-height: 1.3;
color:  ${({ $error }) => ($error ? 'rgba(255, 255, 255, 1)' : 'rgba(64, 123, 255, 1)')};
`

export const Title = styled.div`
font-size: 18px;
font-weight: 400;
line-height: 1.3;
text-align: left;
margin-top: 5px;
color: var(--text);
`

export const CloseEye = styled(VisibilityRoundedIcon)`
width: 13px;
height: 12px;
color:  var(--text-blue);
`
export const OpenEye = styled(VisibilityOffOutlinedIcon)`
width: 13px;
height: 12px;
color:  var(--text-blue);
`;

export const TitleForm = styled.div`
font-size: 26px;
font-weight: 500;
line-height: 1.23;
text-align: left;
color: var(--text);
`;

export const Label = styled.label`
width: 100%;
position: relative;
`
export const EyesBtn = styled.span`
  display: block;
  position: absolute;
  top: 40px;
  right: 12px;
`
export const Btn = styled.button`
font-size: 18px;
font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 8px 30px 8px 30px;
  border-radius: 10px;
  border-color: transparent;
  color: var(--background);
  background-color: var(--text-blue);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
    box-shadow: 0px 4px 14px 0px var(--text-blue);

  }
  @media screen and (min-width:768px) {
    padding: 10px 30px 10px 30px;
  }
 
`;

export const AuthForm = styled(Form)`
display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 280px;
  height: 404px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    }
`;
export const Input = styled(Field)`
  position: relative;
  min-width: 280px;
  font-weight: 400;
  text-align: left;
  font-family: inherit;
  font-size: 16px;
  line-height: calc(20 / 16);
  padding-top: 12px;
  padding-bottom: 12px;
  color: blue;
  border: 1px solid var(--button-pup-up);
  border-radius: 6px;
  width: 100%;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
   color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--text-blue);
    position: absolute;
    left: 10px;
  }
  
  ${({ $error }) =>
    $error &&
    css`
      color: var(--coral-color); 
      border-color: var(--coral-color); 
      &::placeholder {
        color: var(--coral-color); 
       
      }
    `}
@media screen and (min-width: 768px ) {
  width:336px;
};
@media screen and (min-width: 1440px) {
   width: 384px;
}
`;
