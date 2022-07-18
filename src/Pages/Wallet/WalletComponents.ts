import styled from 'styled-components';

export const MainWallet = styled.main`
  background-color: #313447;
  width: 100%;
  position: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 10rem;

  .resume {
    color: #ddd;
    margin-top: 10px;
    margin-bottom: -3px;
  }

  @media screen and (max-width: 900px) {
    margin-left: 20px;
  }
`;

export const BtnWallet = styled.section`

`;

export const CardsArea = styled.article`
  width: 90%;
  height: auto;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
`;

export const ReleasesListArea = styled.section`
  width: 90%;
  height: auto;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;

  /* @media screen and (max-width: 1100px){
    margin-left: -10%
  }

  @media screen and (max-width: 900px){
    margin-left: 0%
  } */
`;
