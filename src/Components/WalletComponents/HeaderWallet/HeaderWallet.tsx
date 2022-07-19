import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ExitBtn, HeaderWalletContainer } from './HeaderWalletComponents';
import { signOut } from '../../../redux/Actions/AuthActions/genericActions';

function HeaderWallet() {
  const userData = useSelector((state: any) => state.userReducer.userData);
  const dispatch = useDispatch();
  return (
    <HeaderWalletContainer>
      <h2>MyWallet</h2>
      <span>{userData.email}</span>
      <ExitBtn
        onClick={() => dispatch(signOut())}
        type="button"
      >
        Exit
      </ExitBtn>
    </HeaderWalletContainer>
  );
}

export default HeaderWallet;
