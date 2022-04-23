import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  width: 100%;
  padding: 3em;
  flex-wrap: wrap;

  button {
    margin-top: 2em;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;
