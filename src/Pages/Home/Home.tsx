import React from 'react';
// import { useDispatch } from 'react-redux';
import SideBar from '../../Components/SideBar/SideBar';
// import {
// signOutUser
// } from '../../redux/Actions/AuthActions/firebaseControl/autenticationControl';
// import { signOut } from '../../redux/Actions/AuthActions/genericActions';
import MainPage from '../MainPage/MainPage';
import { BlackContent, ContainerHome, MainContent } from './HomeStyles';

function Home() {
  // const dispatch = useDispatch();
  // console.log(props);
  // const userSignOut = () => {
  //   dispatch(signOut());
  //   signOutUser();
  // };

  return (
    <ContainerHome>
      <SideBar />
      <BlackContent>
        <MainContent>
          <MainPage />
        </MainContent>
      </BlackContent>
    </ContainerHome>
  );
}

export default Home;
