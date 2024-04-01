import styled from 'styled-components';

export const WrapperLogout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display:flex;
  flex-direction: column;
  gap: 24px;
  max-width: 592px;
  height: 208px;
  padding: 32px 24px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color:#FFFFFF;
  box-sizing:border-box;
`;

export const LogoutTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  min-width: 544px;
  height: 32px;
`;

export const TitleOne = styled.h1`
  margin: 0;
  color: #2F2F2F;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
`;

export const TitleTwo = styled(TitleOne)`
  font-size: 18px;
  line-height: 20px;
  width: 338px;
  height: 20px;
`;

export const Buttons = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  margin: 0;
  width: 100%;
  height: 44px;
  gap: 24px;
  padding: 0;
`;

export const CancelButton = styled.button`
  color: #407BFF;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100px;
  height: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 0;
  border: 0;
  background-color: #D7E3FF;
`;

export const LogoutButton = styled(CancelButton)`
  color: #FFFFFF;
  background-color: #EF5050;
`;

export const CancelLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  border-radius: 10px;
  padding: 10px 30px;
  gap: 10px;
  background-color: #D7E3FF;
  box-sizing: border-box;
`;

export const LogoutLi = styled(CancelLi)`
  background-color: #EF5050;
`;
