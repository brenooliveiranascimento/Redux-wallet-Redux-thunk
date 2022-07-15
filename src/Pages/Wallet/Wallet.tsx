import React from 'react';
import BalanceCard from '../../Components/WalletComponents/BalancesCard/BalanceCard';
import ExpensesCard from '../../Components/WalletComponents/ExpensesCard/ExpensesCard';
import HeaderWallet from '../../Components/WalletComponents/HeaderWallet/HeaderWallet';
import RevenueCard from '../../Components/WalletComponents/RevenueCard/RevenueCard';
import { CardsArea, MainWallet } from './WalletComponents';

function Wallet() {
  return (
    <MainWallet>
      <HeaderWallet />
      <CardsArea>
        <RevenueCard />
        <ExpensesCard />
        <BalanceCard />
      </CardsArea>
    </MainWallet>
  );
}

export default Wallet;
