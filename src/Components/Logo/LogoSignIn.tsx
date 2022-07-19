import React, { useEffect, useState } from 'react';
import './LogoSignIn.css';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/xablau.json';

function LogoSignIn() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const defaultOptions: any = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    setInterval(() => setWidthScreen(window.innerWidth), 1000);
  }, []);
  if (widthScreen < 700) {
    return (
      <section
        className="generalContainerMobile"
      >
        <section
          className="LogoContainerMobile"
        >
          <h1
            className="Logo_1Mobile"
          >
            Redux
          </h1>
          <h1
            className="Logo_2Mobile"
          >
            Wallet
          </h1>
        </section>
        <Lottie
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            width: 200,
            height: 200,
            marginRight: 20,
          }}
          options={defaultOptions}
        />
      </section>
    );
  }
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
