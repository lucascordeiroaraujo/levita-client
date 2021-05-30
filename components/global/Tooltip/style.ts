import styled from 'styled-components';

export default styled.div`
  position: relative;
  span {
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    text-align: center;
    color: ${props => props.theme.colors.dark};
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: 0.4s;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    background: ${props => props.theme.colors.primary};
    &::before {
      content: '';
      border-style: solid;
      border-color: ${props => props.theme.colors.primary} transparent;
      border-width: 6px 6px 0px 6px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
