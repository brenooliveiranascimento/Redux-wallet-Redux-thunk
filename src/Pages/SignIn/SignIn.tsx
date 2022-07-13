import React, { useState } from 'react';
import AuthForm from '../../Components/Forms/AuthForm/AuthForm';
import LogoSignIn from '../../Components/Logo/LogoSignIn';
import { authFormPropTypes, updateUserDataPropTypes, userDataType } from '../../globalTypes/mapStateTypes';
import {
  emailVerification,
  passwordVerification,
} from '../../Services/AuthVerification/authVerification';
import './signinStyles.css';

function SignIn() {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [userData, setUserData] = useState<userDataType>({
    name: '',
    email: '',
    password: '',
  });

  const updateUserData = ({ target }: updateUserDataPropTypes) => {
    const { value, name } = target;
    const updateData = structuredClone(userData);
    updateData[name] = value;
    setUserData(updateData);
  };

  const handleSignIn = async () => {
    const { email, password } = userData;
    if (emailVerification(email) && passwordVerification(password)) {
      return;
    }
    alert('não apto');
  };

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
