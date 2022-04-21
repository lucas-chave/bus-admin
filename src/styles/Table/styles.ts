import styled from "styled-components";

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3em;
  padding: 0 3em 3em 3em;

  a {
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
  }

  table {
    border-collapse: collapse;
    border-spacing: 5em 0;
    thead {
      tr {
        th {
          font-size: 18px;
          text-align: start;
          padding-right: 1em;
        }

        & > th:not(:last-of-type) {
          padding: 1em 5em 1em 1em;
          padding-right: 10em;
        }
      }
    }

    tbody {
      tr {
        cursor: pointer;
        td {
          font-size: 18px;
          text-align: start;
          padding-right: 1em;
        }
        & > td:not(:last-of-type) {
          padding: 1em 5em 1em 1em;
          padding-right: 10em;
        }
      }
      tr:hover {
        background: #d1d1d1cf;
      }
      tr:not(:last-of-type) {
        border-bottom: 2px solid #a6a6a6;
      }
      
    }
  }
`;
