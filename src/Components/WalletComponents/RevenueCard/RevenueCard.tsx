import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardMainContainer } from '../CardsComponents';

function RevenueCard() {
  const colorCard: string = '#0C602D';
  const walletData = useSelector(({ manegerReducer }: any) => manegerReducer.wallet);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);

  const sumAllReveue = () => walletData.filter((release: any) => release.type === 'Revenue')
    .reduce((acc: any, currRelease: any) => acc + Number(currRelease.value), 0);

  useEffect(() => {
    setTotalRevenue(sumAllReveue());
  }, [walletData]);

  return (
    <CardMainContainer
      color={colorCard}
    >
      <h1>Total revenue</h1>
      <p>
        R$
        {totalRevenue}
      </p>
    </CardMainContainer>
  );
}

export default RevenueCard;
