import React from 'react';
import './LogoSignIn.css';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/xablau.json';

function LogoSignIn() {
  const defaultOptions: any = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <section
      className="generalContainer"
    >
      <section
        className="LogoContainer"
      >
        <h1
          className="Logo_1"
        >
          Redux
        </h1>
        <h1
          className="Logo_2"
        >
          Wallet
        </h1>
      </section>
      <Lottie
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width: 300,
        }}
        options={defaultOptions}
      />
    </section>

  );
}

export default LogoSignIn;
