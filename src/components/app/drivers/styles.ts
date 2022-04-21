import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3em;
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
`;
