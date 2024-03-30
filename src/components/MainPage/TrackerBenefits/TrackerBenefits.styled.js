import styled from "styled-components";

import { ReactComponent as CalendarIconSvg } from '../../../images/icons/calendar.svg';
import { ReactComponent as SettingsIconSvg } from '../../../images/icons/settings.svg';
import { ReactComponent as StatisticsIconSvg } from '../../../images/icons/statistics.svg';

export const Container = styled.div`
  margin-bottom: 40px;

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 185px;
  }
`;

export const Tittle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: black;
  line-height: 32px;
  text-align: left;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const SubTittle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: black;
  line-height: 30px;
  text-align: left;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const ListTittle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;



  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
export const ItemText = styled.p`
font-size:16px;
line-height:20px`

export const CalendarIcon = styled(CalendarIconSvg)`
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const StatisticsIcon = styled(StatisticsIconSvg)`
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const SettingIcon = styled(SettingsIconSvg)`
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const Button = styled.button`
  justify-content: center;
  padding: 8px 30px;
  width: 280px;
  border: none;
  border-radius: 10px;
  color: #FFFFFF;
  background-color: #407BFF;
  box-shadow: 0px 4px 8px 0px #407BFF57;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px #407BFF8A;

  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    line-height: calc(24 / 18);
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;
