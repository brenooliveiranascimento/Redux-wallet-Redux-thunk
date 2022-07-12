import React from 'react';

function AuthForm({ authFormProps }: any) {
  const { updateUserData, userData, handleSignIn } = authFormProps;
  return (
    <section>
      <form>
        <label htmlFor="name">
          Nome
          <input
            value={userData.name}
            onChange={updateUserData}
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            value={userData.email}
            onChange={updateUserData}
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            value={userData.password}
            onChange={updateUserData}
            type="password"
            name="password"
          />
        </label>
        <button
          onClick={handleSignIn}
          type="button"
        >
          Registrar
        </button>
      </form>
    </section>
  );
}

export default AuthForm;
