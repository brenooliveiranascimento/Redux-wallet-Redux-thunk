import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardMainContainer } from '../CardsComponents';

function BalanceCard() {
  const colorCard: string = '#5338BF';
  const walletData = useSelector(({ manegerReducer }: any) => manegerReducer.wallet);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  const sumAllReveue = () => walletData.filter((release: any) => release.type === 'Revenue')
    .reduce((acc: any, currRelease: any) => acc + Number(currRelease.value), 0);

  const sumAllExpenses = () => walletData.filter((release: any) => release.type === 'Expense')
    .reduce((acc: any, currRelease: any) => acc - Number(currRelease.value), 0);

  const sumAllBalance = () => sumAllExpenses() + sumAllReveue();
  useEffect(() => {
    setTotalBalance(sumAllBalance());
  }, [walletData]);
  return (
    <CardMainContainer
      color={colorCard}
    >
      <h1>Total Balance</h1>
      <p>
        R$
        {totalBalance}
      </p>
    </CardMainContainer>
  );
}

export default BalanceCard;
