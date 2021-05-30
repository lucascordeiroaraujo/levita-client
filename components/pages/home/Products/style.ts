import styled from 'styled-components';

import { shade } from 'polished';

export const ProductsContainer = styled.section`
  width: 100%;
  margin-top: 130px;
  .products-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      margin: 0px 0px 20px 0px;
    }
    > a {
      padding: 25px 50px;
      border-radius: 50px;
      font-family: 'ComfortaaBold';
      color: ${props => props.theme.colors.light};
      text-transform: lowercase;
      text-align: center;
      transition: 0.5s;
      background: ${props => props.theme.colors.error};
      &:hover {
        background: ${props => shade(0.2, props.theme.colors.error)};
      }
    }
  }
  @media (max-width: 960px) {
    margin-top: 65px;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  position: relative;
  padding: 0px 20px;
`;

export const SliderControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 0px;
  transform: translate(0px, -50%);
  button {
    padding: 0px;
    border: none;
    cursor: pointer;
    background: transparent;
    svg {
      font-size: 50px;
      transition: 0.5s;
      color: ${props => props.theme.colors.secondary};
      &:hover {
        color: ${props => shade(0.2, props.theme.colors.secondary)};
      }
    }
  }
`;
