import styled from 'styled-components';

import { shade } from 'polished';

export const BudgetContainer = styled.section`
  width: 100%;
  padding: 130px 0px;
  margin-top: 130px;
  background: url(${require('~/public/images/bg-budget.png')}) center top repeat;
  .budget-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1,
    p {
      width: 100%;
      text-align: center;
    }
    h1 {
      color: ${props => props.theme.colors.secondary};
      margin: 0px 0px 20px 0px;
    }
    p {
      margin: 0px;
      strong {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
  form {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    button {
      border: none;
      width: 480px;
      height: 70px;
      border-radius: 50px;
      text-transform: uppercase;
      color: ${props => props.theme.colors.light};
      font-family: 'ComfortaaRegular';
      font-size: 20px;
      cursor: pointer;
      transition: 0.5s;
      background: ${props => props.theme.colors.error};
      &:hover {
        background: ${props => shade(0.2, props.theme.colors.error)};
      }
    }
  }
  @media (max-width: 960px) {
    margin-top: 65px;
    padding: 65px 0px;
  }
`;
