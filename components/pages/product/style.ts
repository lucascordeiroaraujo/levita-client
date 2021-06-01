import styled from 'styled-components';

export const ProductContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BackToHome = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.dark};
    svg {
      margin-right: 10px;
      font-size: 30px;
    }
    span {
      font-size: 16px;
    }
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  @media (max-width: 992px) {
    height: 65px;
  }
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
