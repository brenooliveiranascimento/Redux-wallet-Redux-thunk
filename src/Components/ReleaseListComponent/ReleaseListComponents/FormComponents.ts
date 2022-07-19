import styled from 'styled-components';

export const FormContainet = styled.form`
  display: flex;
  width: 100%;
  height: auto;
  border: #fff;
  background-color: #0B0113;
  padding: 24px;
  border-radius: 70px;
  h2 {
    color: #fff;
  }

  select {
    width: 250px;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 35px;
    padding: 4px;
    background-color: #4B395A;
    border-radius: 20px;
    color: #aaa;
    font-size:18px;

  @media screen and (max-width: 900px){
    width: 380px;
    margin-bottom: 20px;
   border-radius: 50px;
  }
  }

  @media screen and (max-width: 650px){
    width: 90%;
    thead th {
    font-size: 14px;
  }
  }

  @media screen and (max-width: 560px) {
    .dateArea {
      display: none;
    }
    .typeBtn {
      width: 70px;
    }
  }

  @media screen and (max-width: 1600px){
    flex-wrap: wrap;
  }

  @media screen and (max-width: 900px){
    align-items: center;
    justify-content: center;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 20px;
  color: #aaa;
  font-weight: 600;
  margin-top: 15px;

  .currentDateBtn {
    width: 70px;
    top: -33px;
    border-radius: 20px;
    position: relative;
    align-self: flex-end;
    background-color: #7627C6;
    color: white;
    font-weight: 600;
    left: 10px;
  }

  .currentDateBtn:hover {
    border:none
  }

  @media screen and (max-width: 650px){
    input {
      width: 100%;
    }
    select {
      width: 250px;
    }
    .currentDateBtn {
    right: 3px;
  }
  }

`;

export const InputForm = styled.input`
  width: 250px;
  height: 25px;
  padding: 5px;
  background-color: #4B395A;
  border-radius: 20px;
  font-size:18px;
  color: #aaa;
`;

export const FormButtonAdd = styled.button`
  width: 150px;
  height: 40px;
  padding: 5px;
  margin: 16px;
  margin-top: 28px;
  font-weight: 700;
  background-color: #153ba3;
  border-radius: 20px;
  font-size: 20px;
  color: white;
  @media screen and (max-width: 1600px){
    margin: 0px;
  margin-top: 35px;
  }
  @media screen and (max-width: 900px){
    width: 380px;
    margin: 50px;
  }
`;

export const EditButtonAdd = styled.button`
  width: 110px;
  height: 40px;
  padding: 5px;
  margin: 16px;
  font-weight: 700;
  background-color: #5338BF;
  border-radius: 6px;
  font-size: 20px;
  margin-top: 16px;
  margin-right: -10px;
  color: white;
  @media screen and (max-width: 1600px){
    margin: 0px;
    margin-top: 18px;
    margin-left: 10px;
  }
  @media screen and (max-width: 900px){
    width: 380px;
  }
`;

export const BtnDelet = styled.button`
  width: 80px;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 6px;
  margin-left: 10px;
  font-size: 17px;
  margin
  :hover {
    background-color: #891b2c;
  }

  @media screen and (max-width: 690px){
    margin-left: 2px;
  }

  @media screen and (max-width: 1095px){
    width: 50px;
    font-size: 14px;
  }
`;

export const BtnEdit = styled.button`
  width: 80px;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 6px;
  text-decoration: dashed;
  font-size: 17px;

  :hover{
    background-color: #563511;
  }

  @media screen and (max-width: 1095px){
    font-size: 14px;
    width: 50px;
  }
`;
