import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 130px;
  background: url(${require('~/public/images/bg-about.jpg')}) center bottom
    no-repeat;
  background-size: 100% auto;
  @media (max-width: 960px) {
    padding-bottom: 0px;
    background-size: cover;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 130px;
  background: ${props => props.theme.colors.light};
  h1,
  h2 {
    width: 100%;
    text-align: center;
  }
  h1 {
    text-transform: uppercase;
    margin: 0px;
    letter-spacing: 20px;
    @media (max-width: 576px) {
      letter-spacing: 10px;
    }
  }
  h2 {
    margin: 10px 0px 130px 0px;
    @media (max-width: 960px) {
      margin-bottom: 60px;
    }
  }
  @media (max-width: 960px) {
    padding-top: 65px;
  }
`;

export const ImageDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  flex-wrap: wrap;
  padding-top: 50px;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background: ${props => props.theme.colors.light};
  }
  img {
    width: 50%;
    height: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    @media (max-width: 960px) {
      width: 100%;
      position: relative;
    }
  }
  div {
    width: 62%;
    padding: 8% 8% 8% 20%;
    background: ${props => props.theme.colors.primary};
    p {
      margin: 0px;
      line-height: 40px;
    }
    @media (max-width: 1200px) {
      padding: 4% 4% 4% 16%;
      font-size: 16px;
    }
    @media (max-width: 960px) {
      width: 100%;
      padding: 30px;
    }
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
  @media (max-width: 960px) {
    padding-top: 0px;
  }
`;

export const TechnologyContainer = styled.div`
  width: 100%;
  margin-top: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    h3,
    p {
      width: 100%;
      max-width: 755px;
      @media (max-width: 960px) {
        width: 100%;
        max-width: none;
        text-align: center;
      }
    }
    h3 {
      margin: 0px 0px 50px 0px;
      color: ${props => props.theme.colors.light};
      @media (max-width: 960px) {
        margin: 0px 0px 25px 0px;
      }
    }
    p {
      margin: 0px;
      color: ${props => props.theme.colors.light};
      line-height: 40px;
      @media (max-width: 1200px) {
        font-size: 16px;
      }
      @media (max-width: 576px) {
        font-size: 14px;
      }
    }
    @media (max-width: 960px) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
  img {
    width: 44%;
    height: auto;
    @media (max-width: 960px) {
      width: 100%;
    }
  }
  @media (max-width: 960px) {
    margin-top: 65px;
  }
`;
