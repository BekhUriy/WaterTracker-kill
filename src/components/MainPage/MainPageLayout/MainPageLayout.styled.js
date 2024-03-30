import styled from 'styled-components';

import bg_mobile_1x from '../../../images/MainPage/bottle_bg_main_page_mob_1x.png';
import bg_mobile_2x from '../../../images/MainPage/bottle_bg_main_page_mob_2x.png';
import bg_tablet_1x from '../../../images/MainPage/bottle_bg_main_page_tab_1x.png';
import bg_tablet_2x from '../../../images/MainPage/bottle_bg_main_page_tab_2x.png';
import bg_desk_1x from '../../../images/MainPage/bottle_bg_main_page_desk_1x.png';
import bg_desk_2x from '../../../images/MainPage/bottle_bg_main_page_desk_2x.png';
import backgroundDesktop from '../../../images/MainPage/Bubbles_bg_main_desk.svg';

export const Container = styled.div`
  background-image: url(${bg_mobile_1x});
  background-size: contain;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bg_mobile_2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image:  url(${bg_tablet_1x});
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bg_tablet_2x});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop}), url(${bg_desk_1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundDesktop}), url(${bg_desk_2x});
  }
`;