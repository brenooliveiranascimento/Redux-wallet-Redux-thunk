import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ExitBtn, HeaderWalletContainer } from './HeaderWalletComponents';
import { signOut } from '../../../redux/Actions/AuthActions/genericActions';
import { signOutUser } from '../../../redux/Actions/AuthActions/firebaseControl/autenticationControl';

function HeaderWallet() {
  const userData = useSelector((state: any) => state.userReducer.userData);
  const dispatch = useDispatch();
  const sair = () => {
    signOutUser();
    dispatch(signOut());
  };
  return (
    <HeaderWalletContainer>
      <h2>MyWallet</h2>
      <span>{userData.email}</span>
      <ExitBtn
        onClick={() => sair()}
        type="button"
      >
        Exit
      </ExitBtn>
    </HeaderWalletContainer>
  );
}

export default HeaderWallet;
