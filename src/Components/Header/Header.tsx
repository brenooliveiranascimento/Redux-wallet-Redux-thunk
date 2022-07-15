import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const userData = useSelector((state: any) => state.userReducer.userData);
  const { name, email } = userData;
  return (
    <header>
      <h3>{name}</h3>
      <h3>{email}</h3>
    </header>
  );
}

export default Header;
