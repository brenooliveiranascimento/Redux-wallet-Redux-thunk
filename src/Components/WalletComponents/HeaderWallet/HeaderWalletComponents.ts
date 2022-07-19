import styled from 'styled-components';

export const HeaderWalletContainer = styled.header`
  width: 90%;
  height: 8rem;
  padding: 20px;
  margin: 20px;
  background-color: #0B0113;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-left: -17px;

  @media screen and (max-width: 900px){
    margin-top: 12rem;
    height: 6rem;
    margin-left: 0px;
    width: 80%;
  }
`;

export const ExitBtn = styled.button`
  width: 100px;
  height: auto;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #5338BF;
  color: white;
  margin: 5px;
  margin-left: -5px;
`;

export const UserInf = styled.form`

`;
