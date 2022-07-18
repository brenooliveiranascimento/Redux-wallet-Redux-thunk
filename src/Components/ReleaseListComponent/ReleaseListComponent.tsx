/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import NewReleaseForm from './ReleaseListComponents/NewReleaseForm';
import EditReleaseForm from './ReleaseListComponents/EditForm';
import ReleaseListComponent from './ReleaseListComponents/ReleaseList';
import { ListContainer, NewReleaseFormArea, ReleaseListArea } from './ReleaseListStylesComponents';
import { cancelNewRelease, setNewRelease } from '../../redux/Actions/EditActions/editActions';

function ReleaseList() {
  const addNewRelease = useSelector(({ editReleaseReducer }: any) => editReleaseReducer.addNewRelease);
  const enableEdit = useSelector(({ editReleaseReducer }: any) => editReleaseReducer.editing);
  const dispatch = useDispatch();
  return (
    <ListContainer>
      <button
        onClick={() => (addNewRelease ? dispatch(cancelNewRelease()) : dispatch(setNewRelease()))}
        type="button"
        className="newAre"
      >
        <h2
          className="newText"
        >
          Add new Release
        </h2>

        {
          addNewRelease ? (
            <AiOutlineArrowUp
              className="arrows"
            />
          ) : (
            <AiOutlineArrowDown
              className="arrows"

            />
          )
        }
      </button>
      {
        addNewRelease && (
          <NewReleaseFormArea>
            {
            enableEdit ? (
              <EditReleaseForm />
            ) : (
              <NewReleaseForm />
            )
          }
          </NewReleaseFormArea>
        )
      }

      <ReleaseListArea>
        <ReleaseListComponent />
      </ReleaseListArea>
    </ListContainer>
  );
}

export default ReleaseList;
