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
                className="inputAuth"
                placeholder="name"
                data-testId="name-input"
                value={userData.name}
                onChange={(e) => updateUserData(e.target)}
                type="text"
                name="name"
              />
            </label>
          )
        }
        <label htmlFor="email">
          <input
            data-testId="email-input"
            placeholder="email"
            value={userData.email}
            onChange={(e) => updateUserData(e.target)}
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="password">
          <input
            data-testId="password-input"
            placeholder="password"
            value={userData.password}
            onChange={(e) => updateUserData(e.target)}
            type="password"
            name="password"
          />
        </label>
        <button
          data-testId="signin-btn"
          className="sumbitBtn"
          onClick={handleSignIn}
          type="button"
        >
          {isRegister ? 'registrar' : 'entrar'}
        </button>

        <button
          data-testId="register-btn"
          className="sumbitBtn"
          onClick={handleRegisterAndSignIn}
          type="button"
        >
          {isRegister ? 'Já possuo conta' : 'Criar uma conta'}
        </button>
      </form>
      {
        isRegister && (
          <a
            className="linkDataUse"
            target="_blank"
            href="https://brenooliveiranascimento.github.io/"
            rel="noreferrer"
          >
            <span>Ao se registrar você concorda com os termos de uso de dados</span>
          </a>
        )
      }
    </section>
  );
}

export default AuthForm;
