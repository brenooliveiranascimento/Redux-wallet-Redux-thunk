import styled from 'styled-components';

export const ListContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  h2 {
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
