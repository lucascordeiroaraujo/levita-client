import styled, { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  input, select, textarea {
    outline: none;
  }
  ol, ul {
    list-style: none;
    padding: 0px;
  }
  a {
    text-decoration: none;
  }
  button {
    outline: none !important;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  @font-face{
    font-family: 'ComfortaaLight';
    src: url('/fonts/ComfortaaLight/ComfortaaLight.woff') format('woff'),
      url('/fonts/ComfortaaLight/ComfortaaLight.woff2') format('woff2'),
      url('/fonts/ComfortaaLight/ComfortaaLight.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face{
    font-family: 'ComfortaaRegular';
    src: url('/fonts/ComfortaaRegular/ComfortaaRegular.woff') format('woff'),
      url('/fonts/ComfortaaRegular/ComfortaaRegular.woff2') format('woff2'),
      url('/fonts/ComfortaaRegular/ComfortaaRegular.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face{
    font-family: 'ComfortaaBold';
    src: url('/fonts/ComfortaaBold/ComfortaaBold.woff') format('woff'),
      url('/fonts/ComfortaaBold/ComfortaaBold.woff2') format('woff2'),
      url('/fonts/ComfortaaBold/ComfortaaBold.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face{
    font-family: 'DMSerifDisplayRegular';
    src: url('/fonts/DMSerifDisplayRegular/DMSerifDisplayRegular.woff') format('woff'),
      url('/fonts/DMSerifDisplayRegular/DMSerifDisplayRegular.woff2') format('woff2'),
      url('/fonts/DMSerifDisplayRegular/DMSerifDisplayRegular.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

  body {
    overflow-x: hidden;
    transition: 0.5s;
    font-family: "ComfortaaRegular";
    font-size: 18px;
    @media (max-width: 960px) {
      font-size: 16px;
    }
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
  #nprogress {
		pointer-events: none;
		.bar {
			position: fixed;
			z-index: 1031;
			top: 0;
			left: 0;
			width: 100%;
			height: 5px;
			background: ${props => props.theme.colors.primary}
		}
	}
  .react-reveal {
		opacity: 0;
  }
  .site-default-title {
    color: ${props => props.theme.colors.secondary};
    font-family: 'DMSerifDisplayRegular';
    font-size: calc(1.625rem + ((1vw - 2.5px) * 1.7365));
    line-height: calc(1.625rem + ((1vw - 2.5px) * 1.7365));
    @media (min-width: 1920px) {
      font-size: 55px;
      line-height: 55px;
    }
  }
`;

interface IContainerProps {
  fullContainer?: boolean;
  smallContainer?: boolean;
}

export const AppBox = styled.div`
  width: 100%;
  max-width: 2560px;
  margin: 0px auto;
  overflow: hidden;
`;

export const Container = styled.div<IContainerProps>`
  width: 96%;
  max-width: 1680px;
  margin: 0px auto;
  position: relative;
  ${props =>
    props.fullContainer &&
    css`
      width: 100%;
      max-width: 100%;
    `}
`;
