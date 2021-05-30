import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32%, 1fr));
  grid-column-gap: 1%;
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    grid-column-gap: 0px;
  }
`;
