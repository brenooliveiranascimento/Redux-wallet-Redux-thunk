import React from 'react';
import { useDispatch } from 'react-redux';
import SideBar from '../../Components/SideBar/SideBar';
import { signOutUser } from '../../redux/Actions/AuthActions/firebaseControl/autenticationControl';
import { signOut } from '../../redux/Actions/AuthActions/genericActions';
import { ContainerHome } from './HomeStyles';

function Home() {
  const dispatch = useDispatch();

  const userSignOut = () => {
    dispatch(signOut());
    signOutUser();
  };

  return (
    <ContainerHome>
      <SideBar />
      <button
        onClick={userSignOut}
        type="button"
      >
        Sair
      </button>
    </ContainerHome>
  );
}

export default Home;
