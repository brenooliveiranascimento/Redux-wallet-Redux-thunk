import styled from 'styled-components';

export const SideContent = styled.aside`
  height: 100vh;
  display: flex;
  padding: 30px;
  width: 25rem;
  background-color: #212026;
  color: #ddd;
  flex-direction: column;
  align-items: center;

  h2 {
    align-self: flex-start;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 900px){
    flex-direction: column;
    height: 12vh;
    align-items: center;
    justify-content: center;
    width: 100%;

    h2 {
    align-self: flex-start;
    margin-bottom: 60px;
  }
  }
`;

export const SideButton = styled.button`
  width: 100%;
  height: auto;
  padding: 5px;
  border: 1px solid #5338BF;
  background-color: #29282E;
  color: #aaa;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
  margin-bottom: 2.5rem;
  padding-left: 15px;
  h3 {
    margin-left: 10px;
    font-size: 22px;
    margin-top: 25px;
  }
  :hover {
    background-color: #5338BF;
  }

  @media screen and (max-width: 900px){
    width: 25%;
    height: 50px;
    margin-right: 20px;
    font-size: 20px;
    padding: 8px ;
   h3 {
    font-size: 16px;
    text-align: start;
    margin-top: 20px;
   }
  }
`;

export const ButtonArea = styled.section`
  @media screen and (max-width: 900px){
    flex-direction: row;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  }
  width: 100%;
`;
