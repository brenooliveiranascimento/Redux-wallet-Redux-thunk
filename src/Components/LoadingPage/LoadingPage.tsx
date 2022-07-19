import React from 'react';
import './LoadingPage.css';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/walletLoading.json';

function LoadingPage() {
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
      className="containerLoading"
    >
      <Lottie
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width: 300,
          height: 300,
        }}
        options={defaultOptions}
      />
    </section>
  );
}

export default LoadingPage;
