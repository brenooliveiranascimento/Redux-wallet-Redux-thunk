import React from 'react';
import { useSelector } from 'react-redux';
import NewReleaseForm from './ReleaseListComponents/NewReleaseForm';
import EditReleaseForm from './ReleaseListComponents/EditForm';
import ReleaseListComponent from './ReleaseListComponents/ReleaseList';
import { ListContainer, NewReleaseFormArea, ReleaseListArea } from './ReleaseListStylesComponents';

function ReleaseList() {
  const releasesData = useSelector((state: any) => state.manegerReducer);
  const enableEdit = useSelector(({ editReleaseReducer }: any) => editReleaseReducer.editing);

  console.log(releasesData);
  return (
    <ListContainer>
      <h2>New Release</h2>
      <NewReleaseFormArea>
        {
          enableEdit ? (
            <EditReleaseForm />
          ) : (
            <NewReleaseForm />
          )
        }
      </NewReleaseFormArea>
      <ReleaseListArea>
        <ReleaseListComponent />
      </ReleaseListArea>
    </ListContainer>
  );
}

export default ReleaseList;
