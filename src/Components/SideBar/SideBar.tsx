import React from 'react';
import { AiOutlineWallet, AiOutlineCalendar, AiOutlineSetting } from 'react-icons/ai';
import { ButtonArea, SideButton, SideContent } from './SideBarStyles';

function SideBar() {
  return (
    <SideContent>
      <h2>
        My Wallet
      </h2>
      <ButtonArea>
        <SideButton
          type="button"
          value="Wallet"
        >
          <AiOutlineWallet />
          <h3>My Wallet</h3>
        </SideButton>
        <SideButton
          type="button"
          value="Wallet"
        >
          <AiOutlineCalendar />
          <h3>My Monthly</h3>
        </SideButton>
        <SideButton
          type="button"
          value="Config"
        >
          <AiOutlineSetting />
          <h3>Config</h3>
        </SideButton>
      </ButtonArea>
    </SideContent>
  );
}

export default SideBar;
