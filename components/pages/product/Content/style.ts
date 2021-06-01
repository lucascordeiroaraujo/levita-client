import styled from 'styled-components';

export const ContentContainer = styled.article`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  span.category {
    font-size: 16px;
    text-transform: lowercase;
  }
  h1 {
    font-family: 'DMSerifDisplayRegular';
    font-size: 30px;
    color: ${props => props.theme.colors.secondary};
    margin: 10px 0px 40px 0px;
  }
  h2 {
    text-transform: uppercase;
    font-family: 'ComfortaaBold';
    margin-bottom: 15px;
  }
  p,
  li {
    width: 100%;
    font-size: 16px;
    line-height: 34px;
  }
  p {
    margin-bottom: 40px;
  }
  ul {
    width: 100%;
    list-style: square;
    padding-left: 17px;
    margin-bottom: 40px;
    li {
      margin-bottom: 5px;
    }
  }
  a {
    text-decoration: underline;
    color: ${props => props.theme.colors.secondary};
    &:hover {
      text-decoration: none;
    }
  }
  div.buttons-actions {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    button {
      padding: 20px;
      border-radius: 50px;
      color: ${props => props.theme.colors.light};
      text-transform: lowercase;
      font-family: 'ComfortaaBold';
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 10px;
      }
      &.download {
        background: ${props => props.theme.colors.primary};
      }
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    p {
      text-align: justify;
    }
    p,
    li {
      font-size: 14px;
      line-height: 28px;
    }
  }
`;
