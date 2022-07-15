import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingPage from '../Components/LoadingPage/LoadingPage';
import AppRoutes from './AppRoutes/AppRoutes';
import AuthRoutes from './AuthRoutes/AuthRoutes';

function Routes() {
  const userData = useSelector((state: any) => state.userReducer.userData.name).length;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <LoadingPage />
    );
  }

  return (
    userData === 0 ? <AuthRoutes /> : <AppRoutes />
  );
}

export default Routes;
