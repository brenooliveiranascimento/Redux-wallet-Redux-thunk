import styled from 'styled-components';

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: #131216;
  
  span, h2 {
    color: #aaa;
  }
`;

export const BlackContent = styled.section`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  background-color: #131216;
  position: absolute;
  z-index: 0;
`;

export const BaseText = styled.span`
  color: #ddd;
`;

export const MainContent = styled.main`
  width: 100%;
  height: auto;
  margin-left: 20rem;
  background-color: #131216;
  @media screen and (max-width: 900px){
    margin-left: 0rem;
  }
`;
