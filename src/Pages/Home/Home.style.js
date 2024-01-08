import { styled } from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto 0;
  flex-direction: column;

  .top-link {
    padding: 0.6rem 1rem;
    background-color: #ed4d06;
    border-radius: 8px;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 20px;
    }
    @media screen and (max-width: 425px) {
      a {
        font-size: 16px;
      }
    }
  }

  .main {
    margin: 2rem auto 0;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .table {
      width: 100%;
      border-collapse: collapse;
    }

    .table-head {
      background-color: #ed4d06;
      border-radius: 8px;
    }
    .th {
      padding: 0.7rem 0;
      color: #fff;
      text-align: center;
    }

    .loader {
      text-align: center;
      margin-top: 1rem;
    }

    .td {
      padding: 0.6rem 0;
      text-align: center;
    }
    .action {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
    .edit {
      background-color: green;
      border-radius: 8px;
      text-decoration: none;
      color: #fff;
      padding: 0.3rem 0.8rem;
      font-size: 15px;
    }
    .delete {
      background-color: red;
      color: #fff;
      border-radius: 8px;
      border: none;
      padding: 0.3rem 0.8rem;
      cursor: pointer;
    }
    .view {
      background-color: orange;
      color: #fff;
      border-radius: 8px;
      border: none;
      padding: 0.3rem 0.8rem;
      cursor: pointer;
    }
  }
`;
