import React from 'react';
import { CardMainContainer } from '../CardsComponents';

function BalanceCard() {
  const colorCard: string = '#5338BF';
  return (
    <CardMainContainer
      color={colorCard}
    >
      <h1>Total Balance</h1>
      <span>R$</span>
    </CardMainContainer>
  );
}

export default BalanceCard;
