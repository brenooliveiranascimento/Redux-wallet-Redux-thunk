import styled from 'styled-components';

export const SideContent = styled.aside`
  height: 100vh;
  display: flex;
  padding: 30px;
  /* width: 20%; */
  width: 23rem;
  background-color: #212026;
  color: #ddd;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 99;

  h2 {
    align-self: flex-start;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 900px){
    flex-direction: column;
    height: 19vh;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;

    h2 {
    align-self: flex-start;
    margin-bottom: 5px;
  }
  }
`;

export const SideButton = styled.button`
  width: 100%;
  height: auto;
  padding: 5px;
  border: 1px solid #5338BF;
  background-color: ${({ color }) => color};
  color: #aaa;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
  margin-bottom: 1.5rem;
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
    width: 100%;
    height: 50px;
    margin-right: 50px;
    font-size: 20px;
    padding: 8px ;
    margin-top: 2rem;
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
