import React from 'react';
import BalanceCard from '../../Components/WalletComponents/BalancesCard/BalanceCard';
import ExpensesCard from '../../Components/WalletComponents/ExpensesCard/ExpensesCard';
import HeaderWallet from '../../Components/WalletComponents/HeaderWallet/HeaderWallet';
import RevenueCard from '../../Components/WalletComponents/RevenueCard/RevenueCard';
import { CardsArea, ReleasesListArea, MainWallet } from './WalletComponents';

function Wallet() {
  return (
    <MainWallet>
      <HeaderWallet />
      <h2 className="resume">Resume</h2>
      <CardsArea>
        <RevenueCard />
        <ExpensesCard />
        <BalanceCard />
      </CardsArea>
      <ReleasesListArea>
        <span>dmawoidw</span>
      </ReleasesListArea>
    </MainWallet>
  );
}

export default Wallet;
