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
  });
  const [checkData, setCheckData] = useState(true);

  const verifyFormInputs = () => {
    if (releaseData.date === '' || releaseData.type === '' || releaseData.description === '') return false;
    return true;
  };

  const updateReleaseData = (name: any, value: any) => {
    const cloneReleaseData = structuredClone(releaseData);
    cloneReleaseData[name] = value;
    setRealeaseData(cloneReleaseData);
    console.log(releaseData);
    if (verifyFormInputs()) {
      setCheckData(false);
      return;
    }
    setCheckData(true);
  };

  const addRelease = async () => {
    dispatch(addReleaseInDataBase(userData, releaseData));
    setRealeaseData({
      value: 0,
      date: '',
      type: '',
      description: '',
      details: '',
    });
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
          type="date"
        />
      </LabelForm>
      <FormButtonAdd
        disabled={checkData}
        onClick={addRelease}
      >
        <span>Add</span>
      </FormButtonAdd>
    </FormContainet>
  );
}

export default NewReleaseForm;
