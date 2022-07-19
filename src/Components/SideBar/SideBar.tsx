import React from 'react';
import {
  AiOutlineWallet, AiOutlineGithub, AiOutlineLinkedin,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  ButtonArea, EuArea, EuRedes, EuRedesArea, EuText, SideButton, SideContent,
} from './SideBarStyles';
import './style.css';

function SideBar() {
  const location = window.location.href;
  return (
    <SideContent>
      <h2>
        Redux Wallet
      </h2>
      <ButtonArea>
        <Link
          style={{ textDecoration: 'none', width: 'auto' }}
          className="LinksSideBar"
          to="/"
        >
          <SideButton
            color={location === 'http://localhost:3000/' ? '#5338BF' : '#29282E'}
            value="/"
          >
            <AiOutlineWallet />
            <h3>My Wallet</h3>
          </SideButton>
        </Link>
        <Link
          className="LinksSideBar"
          style={{ textDecoration: 'none' }}
          to="/Config"
        >
          {/* <SideButton
            color={location === 'http://localhost:3000/Config' ? '#5338BF' : '#29282E'}
            type="button"
            value="Config"
          >
            <AiOutlineSetting />
            <h3>Config</h3>
          </SideButton> */}
        </Link>
      </ButtonArea>
      <EuArea>
        <EuText>
          Developed by Breno Nascimento
        </EuText>
        <EuRedesArea>
          <EuRedes
            target="_blank"
            href="https://github.com/brenooliveiranascimento"
          >
            <AiOutlineGithub />
          </EuRedes>
          <EuRedes
            target="_blank"
            href="https://www.linkedin.com/in/breno-nascimento-0b3331229/"
          >
            <AiOutlineLinkedin />
          </EuRedes>
        </EuRedesArea>
      </EuArea>
    </SideContent>
  );
}

export default SideBar;
