import React from 'react';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/Actions/AuthActions/firebaseControl/autenticationControl';
import { signOut } from '../../redux/Actions/AuthActions/genericActions';

function Home() {
  const dispatch = useDispatch();

  const userSignOut = () => {
    dispatch(signOut());
    signOutUser();
  };

  return (
    <section>
      <h1>
        Area de Home
      </h1>
      <button
        type="button"
        onClick={userSignOut}
      >
        SignOut
      </button>
    </section>
  );
}

export default Home;
