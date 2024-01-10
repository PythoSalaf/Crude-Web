import { styled } from "styled-components";

export const AddContactContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem auto 0;

  .form {
    width: 50%;
    margin: 0 auto;
    @media screen and (max-width: 568px) {
      width: 80%;
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 0 1.5rem;

    input {
      width: 60%;
      height: 35px;
      padding: 0 8px;
      border-radius: 10px;
      outline: none;
      border: 1px solid #ed4d06;

      @media screen and (max-width: 568px) {
        width: 90%;
        height: 30px;
      }
    }

    .label {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 700;
      text-transform: capitalize;
    }
  }
  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      padding: 0.4rem 1rem;
      font-size: 19px;
      background-color: green;
      border-radius: 8px;
      color: #fff;
      border: none;
    }
  }
`;
