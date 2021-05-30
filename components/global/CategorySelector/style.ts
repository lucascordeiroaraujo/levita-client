import styled, { css } from 'styled-components';

export const CategoryContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  label {
    width: 100%;
    font-size: 14px;
    font-family: 'ComfortaaBold';
    color: ${props => props.theme.colors.dark};
    margin-bottom: 5px;
  }
  > div {
    width: 100%;
  }
`;

interface ISelectProps {
  isOpen: boolean;
}

export const SelectContainer = styled.div<ISelectProps>`
  width: 100%;
  height: 60px;
  border: 1px solid ${props => props.theme.colors.dark};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 5px;
  position: relative;
  z-index: 10;
  span,
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.dark};
    transition: 0.5s;
  }
  span {
    max-width: 90%;
    text-transform: lowercase;
    text-align: left;
    max-height: 19px;
    overflow: hidden;
  }
  &:hover {
    border: 1px solid ${props => props.theme.colors.secondary};
    span,
    svg {
      color: ${props => props.theme.colors.secondary};
    }
  }
  ul {
    transition: 0.5s;
    width: 100%;
    max-height: 197px;
    overflow: auto;
    position: absolute;
    top: 58px;
    left: 0px;
    width: 100%;
    border-radius: 0px 0px 5px 5px;
    border: 1px solid ${props => props.theme.colors.dark};
    width: calc(100% + 2px);
    margin-left: -1px;
    opacity: 0;
    background: #ededed;
    li {
      width: 100%;
      padding: 14px 10px;
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.colors.dark};
      }
      a {
        color: ${props => props.theme.colors.secondary};
        font-size: 14px;
      }
      &:hover a {
        color: ${props => props.theme.colors.dark};
        font-family: 'ComfortaaBold';
      }
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.secondary};
      border-radius: 20px;
      border: 3px solid #ededed;
    }
  }
  ${props =>
    props.isOpen &&
    css`
      border-radius: 5px 5px 0px 0px;
      ul {
        opacity: 1;
      }
    `}
`;
