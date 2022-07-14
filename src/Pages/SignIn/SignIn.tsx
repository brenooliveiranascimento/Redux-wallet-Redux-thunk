import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthForm from '../../Components/Forms/AuthForm/AuthForm';
import LogoSignIn from '../../Components/Logo/LogoSignIn';
import { authFormPropTypes, updateUserDataPropTypes, userDataType } from '../../globalTypes/mapStateTypes';
import { createUserAccount } from '../../redux/Actions/AuthActions/authActions';
import {
  emailVerification,
  passwordVerification,
} from '../../Services/AuthVerification/authVerification';
import './signinStyles.css';

function SignIn() {
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [userData, setUserData] = useState<userDataType>({ name: '', email: '', password: '' });

  const updateUserData = ({ value, name }: updateUserDataPropTypes) => {
    const updateData = structuredClone(userData);
    updateData[name] = value;
    setUserData(updateData);
  };

  const handleSignIn = async () => {
    const { email, password, name } = userData;
    if (emailVerification(email) && passwordVerification(password)) {
      dispatch(createUserAccount(email, password, name));
    }
  };

  const clearInputsAndChangeAuthState = () => {
    setUserData({ name: '', email: '', password: '' });
    setIsRegister(!isRegister);
  };

  const formProps: authFormPropTypes = {
    updateUserData,
    userData,
    handleSignIn,
    isRegister,
    handleRegisterAndSignIn: () => clearInputsAndChangeAuthState(),
  };

  return (
    <section
      className="signInContainer"
    >
      <section
        className="container"
      >
        <LogoSignIn />
        <AuthForm
          authFormProps={formProps}
        />
      </section>
    </section>
  );
}

export default SignIn;
