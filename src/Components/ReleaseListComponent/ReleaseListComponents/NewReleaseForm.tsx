/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReleaseInDataBase } from '../../../redux/Actions/WalletActions/walletActions';
import {
  FormButtonAdd, FormContainet, InputForm, LabelForm,
} from './FormComponents';

function NewReleaseForm() {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userReducer.userData);
  const [releaseData, setRealeaseData] = useState<any>({
    value: null,
    date: '',
    type: '',
    description: '',
    details: '',
    releaseDataId: '',
  });

  const verifyFormInputs = () => {
    if (releaseData.date === '' || releaseData.type === '' || releaseData.description === '' || releaseData.value === 0) return false;
    return true;
  };

  const updateReleaseData = (name: any, value: any) => {
    const cloneReleaseData = structuredClone(releaseData);
    cloneReleaseData[name] = value;
    const now = new Date();
    cloneReleaseData.releaseDataId = `${now.getMilliseconds()},${now.getTime()},${now.getMinutes()}`;
    setRealeaseData(cloneReleaseData);
  };

  const addRelease = async () => {
    if (!verifyFormInputs()) return;
    dispatch(addReleaseInDataBase(userData, releaseData));
    setRealeaseData({
      value: 0,
      date: '',
      type: '',
      description: '',
      details: '',
      releaseDataId: '',
    });
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
      <FormButtonAdd
        onClick={addRelease}
      >
        <span>Add</span>
      </FormButtonAdd>
    </FormContainet>
  );
}

export default NewReleaseForm;
