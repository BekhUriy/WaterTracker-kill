import styled from 'styled-components';

export const CrossbarBox = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  margin: 0 auto;

  @media screen and (min-width: 767px) {
    width: 704px;
    flex-direction: row;
    gap: 24px;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    gap: 32px;
  }
`;

export const CrossbarBoxRange = styled.div``;

export const CrossbarText = styled.p`
  color: #407bff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  margin-bottom: 8px;
`;

export const CrossbarInput = styled.input`
  flex: 1;
  height: 8px;
  width: 256px;
  border-radius: 10px;
  background-color: rgb(215, 227, 255);
  background-image: linear-gradient(rgb(158, 187, 255), rgb(158, 187, 255));
  background-repeat: no-repeat;
  background-size: ${({ percentage }) => percentage}% 100%;
  appearance: none;
  margin: 0 8px;

  @media screen and (min-width: 767px) {
    width: 315px;
  }

  @media screen and (min-width: 1440px) {
    width: 356px;
  }
`;

export const CrossbarProcentSpan = styled.span`
  height: 32px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const CrossbarSpanStart = styled.span`
  color: #407bff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  position: relative;

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`;

export const CrossbarSpanSEnd = styled.span`
  color: #407bff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`;

export const CrossbarSpanMiddle = styled.span`
  color: #407bff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    color: rgb(158, 187, 255);
  }
`;

export const CrossbarButton = styled.button`
  display: inline-flex;
  padding: 6px 76px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  position: relative;
  color: white;
  border: none;
  height: 100%;

  @media screen and (min-width: 767px) {
    padding: 10px 104px;
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
    height: 44px;
    padding: 10px 30px;
  }

  &:hover {
    background: rgba(64, 123, 255, 0.8);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    cursor: pointer;
  }

  &:active {
    background: #407bff;
    cursor: pointer;
  }
`;
