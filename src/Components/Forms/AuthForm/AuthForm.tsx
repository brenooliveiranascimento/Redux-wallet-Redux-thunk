import React from 'react';
import './AuthForm.css';

function AuthForm({ authFormProps }: any) {
  const { updateUserData, userData, handleSignIn } = authFormProps;
  return (
    <section
      className="formCard"
    >
      <form
        className="formContent"
      >
        <label htmlFor="name">
          <input
            placeholder="name"
            value={userData.name}
            onChange={updateUserData}
            type="text"
            name="name"
          />
        </label>
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
            placeholder="email"
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
          Registrar
        </button>
      </form>
      <section
        className="blourContainer"
      />
    </section>
  );
}

export default AuthForm;
