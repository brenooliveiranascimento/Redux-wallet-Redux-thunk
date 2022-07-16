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
    value: 0,
    date: '',
    type: '',
    description: '',
    details: '',
  });

  const updateReleaseData = (name: any, value: any) => {
    const cloneReleaseData = structuredClone(releaseData);
    cloneReleaseData[name] = value;
    setRealeaseData(cloneReleaseData);
  };

  const addRelease = async () => {
    dispatch(addReleaseInDataBase(userData, releaseData));
  };

  return (
    <FormContainet>
      <LabelForm htmlFor="description">
        Description
        <InputForm
          onChange={({ target }) => updateReleaseData(target.name, target.value)}
          name="description"
          type="text"
        />
      </LabelForm>
      <LabelForm htmlFor="value">
        Value
        <InputForm
          onChange={({ target }) => updateReleaseData(target.name, target.value)}
          name="value"
          type="number"
        />
      </LabelForm>
      <LabelForm>
        Type
        <select
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
          onChange={({ target }) => updateReleaseData(target.name, target.value)}
          name="date"
          type="date"
        />
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
