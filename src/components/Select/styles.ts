import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
  cursor: pointer;
`;

export const NativeSelect = styled.select`
  padding: .8em;
  border: 1px solid #bbbbbf;
  margin: 0 5px;
  border-radius: 10px;
  max-width: 600px;
  background: transparent;
  outline: blue;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;

  &:focus {
    border: 1px solid #2B59ff;
  }
`;

export const Error = styled.p`
  margin-top: 5px;

  font: 500 11px "Roboto", sans-serif;
  color: #ff0000;
`;
