import styled from 'styled-components';

export const ListContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: white;
  .newAre {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #313447;
    color: white;
    border-radius: 6px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-top: 10px;
    @media screen and (max-width: 900px){
      justify-content: center;
    }
  }

  .arrows {
    margin-top: 1.8rem;
    font-size: 30px;

    .newText {
      font-size: 90px;
    }
  }

  h2 {
    font-size: 30px;
    margin-top: 50px;
  }
`;

export const NewReleaseFormArea = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ReleaseListArea = styled.section<any>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ValueIndicator = styled.section`
  width: 100px;
  background-color: ${({ color }) => color};
  border-radius: 6px;
  display: flex;
  height: 30px;
  align-items: center;
  p {
    color: #fff;
    margin-left: 4px;
  }
`;
