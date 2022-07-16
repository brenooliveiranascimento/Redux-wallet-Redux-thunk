import React, { useState } from 'react';
import {
  FormButtonAdd, FormContainet, InputForm, LabelForm,
} from './FormComponents';

function NewReleaseForm() {
  const [releaseData, setRealeaseData] = useState<any>({
    value: 0,
    date: new Date(),
    type: '',
    description: '',
    details: '',
  });

  const updateReleaseData = (name: any, value: any) => {
    const cloneReleaseData = structuredClone(releaseData);
    cloneReleaseData[name] = value;
    console.log(cloneReleaseData);
    setRealeaseData(cloneReleaseData);
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
      <LabelForm htmlFor="description">
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
          name="type"
        >
          <option>Revenue</option>
          <option>Expense</option>
        </select>
      </LabelForm>
      <LabelForm htmlFor="description">
        Date
        <InputForm
          onChange={({ target }) => updateReleaseData(target.name, target.value)}
          name="description"
          type="date"
        />
      </LabelForm>
      <FormButtonAdd>
        <span>Add</span>
      </FormButtonAdd>
    </FormContainet>
  );
}

export default NewReleaseForm;
