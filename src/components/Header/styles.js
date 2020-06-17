import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 80vw;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 960px) {
    justify-content: space-between;
  }
`;

export const StyledListContainer = styled.ul`
  margin: 1em 0 0.5em;
  text-align: center;
`;

export const StyledListItem = styled.li`
  display: inline;
  padding: 0.5em 1.5em;
`;

export const StyledLink = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => (props.active ? '#474747' : '#bbb')};
  border-bottom: ${(props) => props.active && '4px solid'};
  display: inline-block;

  &:hover {
    cursor: pointer;
    color: #000000;
  }
`;
