import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderWalletContainer } from './HeaderWalletComponents';

function HeaderWallet() {
  const userData = useSelector((state: any) => state.userReducer.userData);

  return (
    <HeaderWalletContainer>
      <h2>MyWallet</h2>
      <span>{userData.email}</span>
    </HeaderWalletContainer>
  );
}

export default HeaderWallet;
