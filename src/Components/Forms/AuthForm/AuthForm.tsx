import React from 'react';
import './AuthForm.css';

function AuthForm({ authFormProps }: any) {
  const {
    updateUserData,
    userData,
    handleSignIn,
    isRegister,
    handleRegisterAndSignIn,
  } = authFormProps;
  return (
    <section
      className="formCard"
    >
      <form
        className="formContent"
      >
        {
          isRegister && (
            <label htmlFor="name">
              <input
                placeholder="name"
                value={userData.name}
                onChange={updateUserData}
                type="text"
                name="name"
              />
            </label>
          )
        }
        <label htmlFor="email">
          <input
            placeholder="email"
            value={userData.email}
            onChange={updateUserData}
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="password">
          <input
            placeholder="password"
            value={userData.password}
            onChange={updateUserData}
            type="password"
            name="password"
          />
        </label>
        <button
          className="sumbitBtn"
          onClick={handleSignIn}
          type="button"
        >
          {isRegister ? 'registrar' : 'entrar'}
        </button>

        <button
          className="sumbitBtn"
          onClick={handleRegisterAndSignIn}
          type="button"
        >
          {isRegister ? 'Já possuo conta' : 'Criar uma conta'}
        </button>
      </form>
      <section
        className="blourContainer"
      />
    </section>
  );
}

export default AuthForm;
