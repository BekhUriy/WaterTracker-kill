import styled from 'styled-components';


import DesktopBottle1x from '../../images/imgSing/desktopBottle1x.png';
import DesktopBottle2x from '../../images/imgSing/desktopBottle2x .png';
import TabletBottle1x from '../../images/imgSing/tabletBottle1x.png';
import TabletBottle2x from '../../images/imgSing/tabletBottle2x.png';
import MobileBottle1x from '../../images/imgSing/mobileBottle1x.png';
import MobileBottle2x from '../../images/imgSing/mobileBottle1x.png';
import DesktopBackground from '../../images/imgSing/desktopBackground1x.jpg';
import TabletBackground from '../../images/imgSing/tabletBackground1x.png';
import MobileBackground from '../../images/imgSing/mobileBackground1x.png';


export const Container = styled.section`
  background-image:  url(${MobileBackground});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 768px) {
  background-image:  url(${TabletBackground});
  }
  @media screen and (min-width: 1440px) {
  background-image:  url(${DesktopBackground});
  }
`;


export const Bottle = styled.image`
  display: block;
  line-height: 0;
  background-image: -webkit-image-set(
    url(${MobileBottle1x}) 1x,
    url(${MobileBottle2x}) 2x);
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 280px;
  height: 210px;
  background-position: center;
   @media screen and (min-width: 768px) {
    background-image: -webkit-image-set(
      url(${TabletBottle1x}) 1x,
      url(${TabletBottle2x}) 2x);
    min-width: 736px;
    height: 548px;
    background-position: 120px center;
  }
  @media screen and (min-width: 1440px) {
     background-image: -webkit-image-set(
      url(${DesktopBottle1x}) 1x,
      url(${DesktopBottle2x}) 2x);
    background-position: -120px center;
    min-width: 916px;
    min-height: 680px;
  }`

export const Wraper = styled.div`
@media screen and (max-width:767px) {
 max-width: 280px;
 margin-top: 24px;
  margin-left: auto;
  margin-right: auto; 
}
@media screen and (min-width: 768px) {
  position: relative;
 max-width: 704px; 
  margin-top: 0px;
   margin-left: auto;
  margin-right: auto; 
}
@media screen and (min-width: 1440px) {
 max-width: 1216px; 
  margin-left: auto;
  margin-right: auto; 
}
` 

export const FormWraper = styled.div`
margin-top: 66px;
@media screen and (min-width: 768px ) {
position: absolute;
top: 40px;
left: 0px;

}
@media screen and (min-width: 1440px) {
  left: auto;
  top: 140px;
  right: 104px;
}
 `
