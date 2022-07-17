import React from 'react';
import { useSelector } from 'react-redux';
import { ValueIndicator } from '../ReleaseListStylesComponents';
import { FormContainet } from './FormComponents';

function ReleaseListComponent() {
  const release = useSelector((state:any) => state.manegerReducer.wallet);
  return (
    <FormContainet>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
            <th>Type</th>
            <th>Date</th>
            <th>Deletar/Excluir</th>
          </tr>
        </thead>
        {
          release.map((releaseItem: any) => (
            <tr
              key={releaseItem}
            >
              <td>
                {releaseItem.description}
              </td>
              <td>
                {releaseItem.value}
                R$
              </td>
              <td>
                <ValueIndicator
                  color={releaseItem.type === 'Revenue' ? '#0C602D' : '#C62C36'}
                >
                  <p>
                    {releaseItem.type}
                  </p>
                </ValueIndicator>
              </td>
              <td>
                {releaseItem.date}
              </td>
              <button type="button">Editar</button>
              <button type="button">deletar</button>
            </tr>
          ))
        }
      </table>
    </FormContainet>
  );
}

export default ReleaseListComponent;
