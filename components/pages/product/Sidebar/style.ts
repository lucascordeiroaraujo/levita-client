import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  h1 {
    width: 100%;
    font-family: 'DMSerifDisplayRegular';
    font-size: 24px;
    color: ${props => props.theme.colors.secondary};
    margin: 0px 0px 40px 0px;
    text-transform: lowercase;
    text-align: center;
  }
  article {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 100px;
    article {
      width: 50%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    article {
      width: 100%;
    }
  }
`;
