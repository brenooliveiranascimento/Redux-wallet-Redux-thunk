import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { ValueIndicator } from '../ReleaseListStylesComponents';
import { FormContainet } from './FormComponents';
import { removeReleaseInDataBase } from '../../../redux/Actions/WalletActions/walletActions';

function ReleaseListComponent() {
  const release = useSelector((state:any) => state.manegerReducer.wallet);
  const userData = useSelector(({ userReducer }: any) => userReducer.userData);
  const dispatch = useDispatch();

  const deletRelease = (releaseSelected: any) => {
    dispatch(removeReleaseInDataBase(userData, releaseSelected));
  };

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
                  {
                    releaseItem.type === 'Revenue' ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )
                  }
                </ValueIndicator>
              </td>
              <td>
                {releaseItem.date}
              </td>
              <button type="button">Edit</button>
              <button
                onClick={() => deletRelease(releaseItem)}
                type="button"
              >
                Delete
              </button>
            </tr>
          ))
        }
      </table>
    </FormContainet>
  );
}

export default ReleaseListComponent;
