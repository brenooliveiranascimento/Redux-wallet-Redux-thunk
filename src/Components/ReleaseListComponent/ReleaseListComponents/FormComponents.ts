import styled from 'styled-components';

export const FormContainet = styled.form`
  display: flex;
  width: 100%;
  height: auto;
  border: #fff;
  background-color: #1A1B25;
  padding: 20px;
  border-radius: 10px;
  h2 {
    color: #fff;
  }
  select {
    width: 250px;
    border-bottom: 1px solid white;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 40px;
    padding: 10px;
    background-color: #1A1B25;
    color: #aaa;
    font-size:18px;

  @media screen and (max-width: 900px){
    width: 380px;
    margin-bottom: 20px;
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
    top: -37px;
    height: 35px;
    position: relative;
    align-self: flex-end;
    background-color: #153BA3;
    color: white;
    font-weight: 600;
  }

  .currentDateBtn:hover {
    background-color: #2f216b;
    border:none
  }

  @media screen and (max-width: 900px){
    .currentDateBtn {
    top: -53px;
  } 
  }
`;

export const InputForm = styled.input`
  width: 250px;
  height: 30px;
  padding: 5px;
  background-color: #1A1B25;
  font-size:18px;
  color: #aaa;
  border-bottom: 1px solid white;

  @media screen and (max-width: 900px){
    width: 370px;
    margin-bottom: 15px;
  }
`;

export const FormButtonAdd = styled.button`
  width: 150px;
  height: 40px;
  padding: 5px;
  margin: 16px;
  margin-top: 35px;
  font-weight: 700;
  background-color: #153ba3;
  border-radius: 6px;
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
