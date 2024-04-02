import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.25;
    font-weight: 400;
    --bold: 700;
    font-style: normal;
    --background: #ffffff;
    --background-tracker: #ecf2ff;
    --text: #2f2f2f;
    --text-passowrd: #9ebbff;
    --text-blue: #407bff;
    --coral-color: #ef5050;
    --orange-color: #ff9d43;
    --button-pup-up: #d7e3ff;
    --color-vector: #c6d7ff;
    --color-splash: #f5f5f5;
    color-scheme: light;
  }

  .dark-theme {
    --backgroundDT: #1c1d26;
    --background-trackerDT: #1f2438;
    --textDT: #d5dff5;
    --text-passowrdDT: #2f3875;
    --text-blueDT: #5082f2;
    --coral-colorDT: #f16161;
    --orange-colorDT: #ffa756;
    --button-pup-upDT: #5082f2;
    --color-vectorDT: #1f2438;
    --color-splashDT: #5082f2;
    color-scheme: dark;
  }

  /* Reset styles */
  body {
    background-color: var(--background);
    font-family: 'Roboto';
    font-style: normal;
    color: var(--text);
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('../src/font/Roboto-Medium.eot');
    src:
      url('../src/font/Roboto-Medium.eot?#iefix') format('embedded-opentype'),
      url('../src/font/Roboto-Medium.woff2') format('woff2'),
      url('../src/font/Roboto-Medium.woff') format('woff'),
      url('../src/font/Roboto-Medium.ttf') format('truetype'),
      url('../src/font/Roboto-Medium.otf') format('opentype'),
      url('../src/font/Roboto-Medium.svg#Roboto-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('../src/font/Roboto-Regular.eot');
    src:
      url('../src/font/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
      url('../src/font/Roboto-Regular.woff2') format('woff2'),
      url('../src/font/Roboto-Regular.woff') format('woff'),
      url('../src/font/Roboto-Regular.ttf') format('truetype'),
      url('../src/font/Roboto-Regular.otf') format('opentype'),
      url('../src/font/Roboto-Regular.svg#Roboto-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('../src/font/Roboto-Bold.eot');
    src:
      url('../src/font/Roboto-Bold.eot?#iefix') format('embedded-opentype'),
      url('../src/font/Roboto-Bold.woff2') format('woff2'),
      url('../src/font/Roboto-Bold.woff') format('woff'),
      url('../src/font/Roboto-Bold.ttf') format('truetype'),
      url('../src/font/Roboto-Bold.otf') format('opentype'),
      url('../src/font/Roboto-Bold.svg#Roboto-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }
`;
