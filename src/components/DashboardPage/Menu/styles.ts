import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #3C63D2;
  width: 260px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;

  h1 {
    text-align: center;
    color: #FFF;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5.5px;
  box-sizing: border-box;
  & > a:not(:last-of-type) {
          border-bottom: 2px solid rgba(255, 255, 255, 0.4);
        }

  .linkActive {
    background: rgba(255, 255, 255, 0.2);
  }

  .linkMenu {
    padding: 1.5em 1em 1.5em 2.4em;
    font-size: 20px;
    text-align: start;
    text-decoration: none;
    color: #C5C6F0;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    gap: 1em; width: 100%;
    width: 100%;
    margin: 0;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
  }
`;
