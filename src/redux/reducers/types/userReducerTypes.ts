interface expensesTypes {
  data: string
  value: number,
  type: string,
  currentCoin: string
}

export interface stateTypes {
  userData: {
    name: string
    email: string
    uid: string
    balance: number
    expenses: Array<expensesTypes> | Array<object>
  }
}

export interface actionTypes {
  type: string,
  payload: object,
}
