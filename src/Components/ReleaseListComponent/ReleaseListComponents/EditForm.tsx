/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelEdit, saveEditInDataBase } from '../../../redux/Actions/EditActions/editActions';
import {
  EditButtonAdd,
  FormContainet,
  InputForm,
  LabelForm,
} from './FormComponents';

function EditReleaseForm() {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userReducer.userData);
  const index = useSelector(({ editReleaseReducer }: any) => editReleaseReducer.indexOfRelease);
  const releaseInEditing = useSelector(({ editReleaseReducer }: any) => editReleaseReducer.release);
  const [releaseData, setRealeaseData] = useState<any>({
    value: releaseInEditing.value,
    date: releaseInEditing.date,
    type: releaseInEditing.type,
    description: releaseInEditing.description,
    details: releaseInEditing.details,
    releaseDataId: releaseInEditing.releaseDataId,
  });

  const updateReleaseData = (name: any, value: any) => {
    const cloneReleaseData = structuredClone(releaseData);
    cloneReleaseData[name] = value;
    const now = new Date();
    cloneReleaseData.releaseDataId = `${now.getMilliseconds()},${now.getTime()},${now.getMinutes()}`;
    setRealeaseData(cloneReleaseData);
  };

  const saveReleaseEdit = async () => {
    dispatch(saveEditInDataBase(userData, index, releaseData));
  };

  const cancelEditRelease = () => {
    dispatch(cancelEdit());
  };

  const getCurrentDate = () => {
    const cloneReleaseData = structuredClone(releaseData);
    const now = new Date();
    const formatedData = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
    cloneReleaseData.date = formatedData;
    setRealeaseData(cloneReleaseData);
  };

  return (
    <FormContainet>
      <LabelForm htmlFor="description">
        Description
        <InputForm
          value={releaseData.description}
          onChange={({ target }) => updateReleaseData(target.name, target.value)}
          name="description"
          type="text"
        />
      </LabelForm>
      <LabelForm htmlFor="value">
        Value
        <InputForm
          value={releaseData.value}
          onChange={({ target }) => updateReleaseData(target.name, target.value)}
          name="value"
          type="number"
        />
      </LabelForm>
      <LabelForm>
        Type
        <select
          value={releaseData.type}
          onChange={({ target }) => updateReleaseData(target.name, target.value)}
          name="type"
        >
          <option>Type of release</option>
          <option>Revenue</option>
          <option>Expense</option>
        </select>
      </LabelForm>
      <LabelForm htmlFor="date">
        Date
        <InputForm
          value={releaseData.date}
          onChange={({ target }) => updateReleaseData(target.name, target.value)}
          name="date"
          placeholder="dd/mm/yy"
        />
        <button
          onClick={getCurrentDate}
          className="currentDateBtn"
          type="button"
        >
          Current Date
        </button>
      </LabelForm>
      <EditButtonAdd
        onClick={saveReleaseEdit}
      >
        <span>Save</span>
      </EditButtonAdd>
      <EditButtonAdd
        onClick={cancelEditRelease}
      >
        <span>cancel</span>
      </EditButtonAdd>
    </FormContainet>
  );
}

export default EditReleaseForm;
