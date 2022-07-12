import React, { useState } from 'react';
import AuthForm from '../../Components/Forms/AuthForm/AuthForm';
import LogoSignIn from '../../Components/Logo/LogoSignIn';
import { authFormPropTypes, updateUserDataPropTypes, userDataType } from '../../globalTypes/mapStateTypes';
import './signinStyles.css';
// import firebase from '../../Services/firebase_connection';

function SignIn() {
  const [userData, setUserData] = useState<userDataType>({
    name: '',
    email: '',
    password: '',
  });
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const updateUserData = ({ target }: updateUserDataPropTypes) => {
    const { value, name } = target;
    const updateData = structuredClone(userData);
    updateData[name] = value;
    setUserData(updateData);
  };

  const handleSignIn = () => console.log('logou');

  const formProps: authFormPropTypes = {
    updateUserData,
    userData,
    handleSignIn,
    isRegister,
    handleRegisterAndSignIn: () => setIsRegister(!isRegister),
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
