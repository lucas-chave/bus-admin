import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 1em 4em;
  text-decoration: none;
  background-color: #3C63D2;
  max-width: 250px;
  display: flex;
  justify-content: center;
  color: #fff;
  border-radius: 6px;
  transition: 0.3s;
  font-size: 18px;
  white-space: nowrap;

  &:hover {
    transform: scale(1.1);
    font-size: 18px;
  }
`;