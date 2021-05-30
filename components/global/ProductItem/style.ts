import styled from 'styled-components';

export const ProductItemContainer = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .product-image-container {
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: auto;
      pointer-events: none;
    }
    a {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.colors.light};
      opacity: 0;
      border-radius: 5px;
      transition: 0.5s;
      background: rgba(41, 41, 41, 0.8);
    }
    &:hover a {
      opacity: 1;
    }
  }
  span,
  h1,
  p {
    width: 100%;
    max-width: 380px;
    text-align: center;
  }
  span {
    text-transform: lowercase;
  }
  h1 {
    font-family: 'DMSerifDisplayRegular';
    font-size: 24px;
    margin: 0px 0px 40px 0px;
    color: ${props => props.theme.colors.secondary};
  }
  p {
    font-size: 14px;
    line-height: 25px;
    margin: 0px;
  }
  > a {
    width: 96%;
    max-width: 450px;
    height: 60px;
    border-radius: 50px;
    margin-top: 20px;
    text-align: center;
    color: ${props => props.theme.colors.dark};
    font-size: 16px;
    text-transform: lowercase;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    &:hover {
      color: ${props => props.theme.colors.light};
      background: ${props => props.theme.colors.secondary};
    }
  }
`;
