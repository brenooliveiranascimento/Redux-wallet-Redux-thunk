import React from 'react';
import { CardMainContainer } from '../CardsComponents';

function ExpensesCard() {
  const colorCard: string = '#c62c36';
  return (
    <CardMainContainer
      color={colorCard}
    >
      <h1>Total expenses</h1>
      <span>R$</span>
    </CardMainContainer>
  );
}

export default ExpensesCard;
