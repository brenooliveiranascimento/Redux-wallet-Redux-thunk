import React from 'react';
import { CardMainContainer } from '../CardsComponents';

function RevenueCard() {
  const colorCard: string = '#0C602D';
  return (
    <CardMainContainer
      color={colorCard}
    >
      <h1>Total revenue</h1>
      <span>R$</span>
    </CardMainContainer>
  );
}

export default RevenueCard;
