import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 130px;
  border-bottom: 10px solid ${props => props.theme.colors.error};
  background: url(${require('~/public/images/bg-footer.png')}) center top
    no-repeat #164f6c;
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    strong.footer-title,
    p.footer-description {
      width: 100%;
      text-align: center;
      color: ${props => props.theme.colors.light};
    }
    strong.footer-title {
      margin: 0px 0px 20px 0px;
    }
    p.footer-description {
      max-width: 800px;
      margin: 0px;
      line-height: 30px;
    }
  }
  @media (max-width: 960px) {
    padding-top: 60px;
  }
`;

export const FooterInfosContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24%, 1fr));
  grid-column-gap: 1%;
  margin-top: 130px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-bottom: 65px;
    svg {
      font-size: 40px;
    }
    svg,
    span,
    address,
    a,
    strong {
      color: ${props => props.theme.colors.light};
      text-align: center;
      max-width: 100%;
    }
    span {
      letter-spacing: 6px;
      font-size: 16px;
      margin: 15px 0px;
      text-transform: lowercase;
    }
    address,
    a,
    strong {
      font-family: 'DMSerifDisplayRegular';
      font-style: normal;
      font-size: 24px;
      line-height: 32px;
      @media (max-width: 960px) {
        font-size: 18px;
        line-height: 26px;
      }
    }
    a:hover {
      color: ${props => props.theme.colors.primary};
    }
    .email {
      word-wrap: break-word;
    }
    @media (max-width: 576px) {
      margin-bottom: 40px;
    }
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  }
  @media (max-width: 960px) {
    margin-top: 65px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    grid-column-gap: 0%;
  }
`;

export const FooterMapContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 65px;
  background: ${props => props.theme.colors.primary};
  @media (max-width: 960px) {
    margin-top: 0px;
    height: 350px;
  }
`;

export const FooterCopyRightContainer = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 96%;
    margin: 0px;
    text-align: center;
    color: ${props => props.theme.colors.light};
  }
`;
