import React from 'react';
import { useSelector } from 'react-redux';
import AppRoutes from './AppRoutes/AppRoutes';
import AuthRoutes from './AuthRoutes/AuthRoutes';

function Routes() {
  const userData = useSelector((state: any) => state.userReducer.userData.name).length;

  return (
    userData === 0 ? <AuthRoutes /> : <AppRoutes />
  );
}

export default Routes;
