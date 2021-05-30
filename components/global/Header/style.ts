import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 0px;
  background: ${props => props.theme.colors.primary};
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .budget {
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
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    img {
      max-width: 120px;
      height: auto;
    }
  }
`;

interface IMenuProps {
  menuMobileOpend: boolean;
}

export const HeaderMenuContainer = styled.ul<IMenuProps>`
  list-style: none;
  display: flex;
  margin: 0px;
  padding: 0px;
  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: calc(100vh - 95px);
    top: 95px;
    left: 0px;
    transition: 0.5s;
    z-index: 20;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    pointer-events: none;
    background: rgba(41, 41, 41, 0.9);
    ${props =>
      props.menuMobileOpend &&
      css`
        opacity: 1;
        pointer-events: all;
      `}
  }
`;

interface IMenuItemProps {
  isActive?: boolean;
}

export const HeaderMenuItem = styled.li<IMenuItemProps>`
  margin: 0px 20px;
  a {
    font-size: 18px;
    text-transform: lowercase;
    color: ${props => props.theme.colors.dark};
    position: relative;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
    @media (min-width: 768px) {
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
    }
    ${props =>
      props.isActive &&
      css`
        color: ${props => props.theme.colors.secondary};
        &:before {
          opacity: 1;
        }
      `}
    @media (max-width: 768px) {
      color: ${props => props.theme.colors.light};
    }
  }
  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`;

export const MenuMobileContainer = styled.button<IMenuProps>`
  width: 33px;
  height: 24px;
  position: relative;
  margin-left: 20px;
  border: none;
  cursor: pointer;
  display: none;
  background-color: transparent;
  &:before,
  &:after,
  span {
    content: '';
    position: absolute;
    left: 0px;
    width: 100%;
    height: 3px;
    transition: 0.5s;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.secondary};
  }
  &:before {
    top: 0px;
  }
  &:after {
    bottom: 0px;
  }
  span {
    top: 50%;
    transform: translate(0px, -50%);
  }
  ${props =>
    props.menuMobileOpend &&
    css`
      &:before,
      &:after {
        top: 12px;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
      span {
        opacity: 0;
      }
    `}
  @media (max-width: 768px) {
    display: flex;
  }
`;
