import { IMaskInput } from "react-imask";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
`;

export const inputStyles = css`
  padding: .8em;
  border: 1px solid #bbbbbf;
  margin: 0 5px;
  border-radius: 10px;
  max-width: 600px;
  outline: blue;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  transition: 0.2s;
  &:focus {
    border: 1px solid #2B59ff;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const MaskedInput = styled(IMaskInput)`
  ${inputStyles}
`;

export const Error = styled.p``;
