import styled from 'styled-components';

export const StyledInput = styled.input`
  -moz-appearance: none;
  --webkit-appearance: none;
  margin: 0;
  position: relative;
  vertical-align: top;
  line-height: 1.5;
  height: 2.5em;
  font-size: 1rem;
  color: #474747;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-grow: 2;
  border-radius: 0;
  padding: 0.1em calc(0.75em - 1px);
  border: 1px solid #3298dc;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: #3298dc;
  color: #fff;
  border-radius: 0;
  padding: 0 20px;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(80%);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  padding: 2px;
  width: 100%;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 35vw;

  @media (max-width: 560px) {
    margin: 0 10%;
  }
`;

export const StyledTableInner = styled.div`
  height: 100%;
  overflow-x: auto;
`;

export const StyledTableContainer = styled.div`
  font-size: 1.5em;
  text-align: center;
  width: 70vw;
  margin-bottom: 10vh;
`;
