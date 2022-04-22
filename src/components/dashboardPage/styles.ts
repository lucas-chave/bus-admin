import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  h2 {
    width: 250px;
    color: #2d2d2d;
    font-size: 36px;
    margin: 1em 0 0 1em;
    min-width: 300px;
  }

  .profile {
    p {
      margin-right: 2em;
      color: #2d2d2d;
      font-weight: 600;
      font-size: 20px;
    }
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 260px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 1em 2em;
  background: #F7F8FB;
  background: #fff;
  align-items: center;
  gap: 5em;
  justify-content: space-between;

  .container-search {
    display: flex;
    max-width: 500px;
    width: 100%;

    .container-icon-search {
      display: flex;
      padding: .5em;
      background: #3C63D2;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      cursor: pointer;
      img {
        width: 34px;
        height: 34px;
      }
    }

    .input-search {
      border-radius: 6px;
      padding: .8em 0.7em;
      width: 100%;
      font-size: 20px;
    }
  }
`;
