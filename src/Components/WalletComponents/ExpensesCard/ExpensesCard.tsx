import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardMainContainer } from '../CardsComponents';

function ExpensesCard() {
  const walletData = useSelector(({ manegerReducer }: any) => manegerReducer.wallet);
  const [totalExpense, setTotalExpense] = useState<number>(0);

  const sumAllExpense = () => walletData.filter((release: any) => release.type === 'Expense')
    .reduce((acc: any, currRelease: any) => acc + Number(currRelease.value), 0);

  useEffect(() => {
    setTotalExpense(sumAllExpense());
  }, [walletData]);
  const colorCard: string = '#6e1672';
  return (
    <CardMainContainer
      color={colorCard}
    >
      <h1>Total expenses</h1>
      <p>
        R$
        {totalExpense}
      </p>
    </CardMainContainer>
  );
}

export default ExpensesCard;
