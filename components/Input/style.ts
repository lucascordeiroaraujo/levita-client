import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export default styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  input {
    width: 100%;
    font-family: 'ComfortaaRegular';
    border: none;
    border-bottom: 1px solid #cdcdcd;
    font-size: 16px;
    color: ${props => props.theme.colors.dark};
    padding: 12px 30px 12px 0px;
    text-align: center;
    transition: 0.5s;
    background: transparent;
    ${props =>
      props.isErrored &&
      css`
        border-bottom: 1px solid ${props => props.theme.colors.error};
      `}
    ${props =>
      props.isFocused &&
      css`
        border-bottom: 1px solid ${props => props.theme.colors.secondary};
      `}
  }
  & + div {
    margin-top: 8px;
  }
  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  right: 5px;
  height: 20px;
  svg {
    margin: 0;
    font-size: 20px;
    color: ${props => props.theme.colors.error};
  }
  span {
    background: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.light};
    &::before {
      border-color: ${props => props.theme.colors.error} transparent;
    }
  }
`;
