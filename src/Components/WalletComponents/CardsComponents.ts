import styled from 'styled-components';

export const CardMainContainer = styled.section`
  width: 430px;
  height: 6rem;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${({ color }: any) => color};
  align-items: flex-start;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: #fff;

  h1 {
    color: #fff;
    font-weight: 900;
    font-size: 40px;
    margin-top: 0px;
  }
  span {
    color: #fff;
    margin-top: -50px;
  }

  @media screen and (max-width: 900px){
    width: 185px;
    height: 6rem;
    align-self: flex-start;
  }
`;

export const CardText = styled.span`
  color: #fff;
  margin-top: -50px;
`;
