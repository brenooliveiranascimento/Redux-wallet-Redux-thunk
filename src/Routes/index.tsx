import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingPage from '../Components/LoadingPage/LoadingPage';
import { getUserData, getUserDataInDataBase } from '../redux/Actions/AuthActions/firebaseControl/autenticationControl';
import { signInUserSuccess } from '../redux/Actions/AuthActions/genericActions';
import AppRoutes from './AppRoutes/AppRoutes';
import AuthRoutes from './AuthRoutes/AuthRoutes';

function Routes() {
  const userData = useSelector((state: any) => state.userReducer.userData.name).length;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const userIsLoggedIn = () => getUserData();

  const fetchUserData = (userInf: any) => getUserDataInDataBase(userInf);

  const signIn = async () => {
    const data = await fetchUserData(userIsLoggedIn());
    await dispatch(signInUserSuccess(data));
  };

  useEffect((): any => {
    if (userIsLoggedIn()) signIn();
    setTimeout(() => setLoading(false), 600);
  }, []);

  if (loading) {
    return (
      <LoadingPage />
    );
  }

  return (
    userData ? <AppRoutes /> : <AuthRoutes />
  );
}

export default Routes;
