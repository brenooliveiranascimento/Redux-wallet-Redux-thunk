import React from 'react';
import { FormContainet } from './FormComponents';

function ReleaseListComponent() {
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
        <tr>
          <td>Alfreds </td>
          <td>Maria Anders</td>
          <td>Maria Anders</td>
          <td>Maria Anders</td>
          <button type="button">Editar</button>
          <button type="button">deletar</button>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Francisco Chang</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </FormContainet>
  );
}

export default ReleaseListComponent;
