import styled from "styled-components";


export const Container = styled.div`
  padding: 24px 16px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 14px 0px #407BFF4D;
  background-color: #ECF2FF;
;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    max-width: 494px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 34px;
  }
`;

export const Tittle = styled.h2`
  font-size: 18px;
  line-height: calc(20 / 18);
  font-weight: 700;
  text-align: left;
  margin-bottom: 12px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: calc(20 / 16);
  font-size: 16px;

  &::before {
    content: '';
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
    border-color: #407BFF;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;