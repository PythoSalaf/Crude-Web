import { styled } from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem auto 0;
  .info-card {
    width: 400px;
    border-radius: 10px;
    background-color: #ed4d06;
    .card-top {
      width: 95%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      border-radius: 10px 10px 0 0;

      h2 {
        color: #fff;
      }
    }

    .card-body {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .card-data {
        margin: 0 0 1rem;
        display: flex;
        align-items: center;
        gap: 10px;

        h4 {
          font-size: 18px;
          font-weight: 600;
        }
      }
    }

    .card-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;

      button {
        padding: 0.4rem 1.2rem;
        font-size: 17px;
      }
    }
  }
`;
