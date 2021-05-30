import styled from 'styled-components';

import { shade } from 'polished';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 0px;
  background: ${props => props.theme.colors.primary};
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      margin: 0px;
      padding: 0px;
      li {
        margin: 0px 20px;
        a {
          font-size: 18px;
          text-transform: lowercase;
          color: ${props => props.theme.colors.dark};
          position: relative;
          transition: 0.5s;
          &:hover {
            color: ${props => props.theme.colors.secondary};
          }
          &:before {
            content: '';
            width: 100%;
            height: 4px;
            border-radius: 5px;
            position: absolute;
            bottom: -10px;
            left: 0px;
            opacity: 0;
            background: ${props => props.theme.colors.secondary};
          }
          &.active-item {
            color: ${props => props.theme.colors.secondary};
            &:before {
              opacity: 1;
            }
          }
        }
      }
    }
    > button {
      border: none;
      cursor: pointer;
      padding: 15px 25px;
      font-size: 16px;
      text-align: center;
      border-radius: 50px;
      text-transform: lowercase;
      font-family: 'ComfortaaBold';
      transition: 0.5s;
      color: ${props => props.theme.colors.light};
      background: ${props => props.theme.colors.info};
      &:hover {
        background: ${props => shade(0.2, props.theme.colors.info)};
      }
    }
  }
`;
