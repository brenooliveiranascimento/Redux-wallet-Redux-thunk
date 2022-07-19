import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { ValueIndicator } from '../ReleaseListStylesComponents';
import { BtnDelet, BtnEdit, FormContainet } from './FormComponents';
import { removeReleaseInDataBase } from '../../../redux/Actions/WalletActions/walletActions';
import { enableEdit } from '../../../redux/Actions/EditActions/editActions';

function ReleaseListComponent() {
  const release = useSelector((state:any) => state.manegerReducer.wallet);
  const userData = useSelector(({ userReducer }: any) => userReducer.userData);
  const isEditing = useSelector(({ editReleaseReducer }: any) => editReleaseReducer.editing);
  const dispatch = useDispatch();

  const deletRelease = (releaseSelected: any) => {
    dispatch(removeReleaseInDataBase(userData, releaseSelected));
  };

  const editRelease = (releaseSelected: any) => {
    const indexOfRelease = release
      .findIndex(({ releaseDataId }: any) => releaseDataId === releaseSelected.releaseDataId);
    dispatch(enableEdit(releaseSelected, indexOfRelease));
  };

  return (
    <FormContainet>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
            <th>Type</th>
            <th
              className="dateArea"
            >
              Date

            </th>
            <th>Editar/Excluir</th>
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
                  className="typeBtn"
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
              <td
                className="dateArea"
              >
                {releaseItem.date}
              </td>
              <BtnEdit
                color={isEditing ? '#755622' : '#bc8138'}
                disabled={isEditing}
                onClick={() => editRelease(releaseItem)}
                type="button"
              >
                Edit

              </BtnEdit>
              <BtnDelet
                color={isEditing ? '#93242a' : '#C62C36'}
                disabled={isEditing}
                onClick={() => deletRelease(releaseItem)}
                type="button"
              >
                Delete
              </BtnDelet>
            </tr>
          ))
        }
      </table>
    </FormContainet>
  );
}

export default ReleaseListComponent;
