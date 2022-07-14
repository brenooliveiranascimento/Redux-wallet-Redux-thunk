interface expensesTypes {
  data: string;
  value: number;
  type: string;
  currentCoin: string;
  error: string;
  loading: boolean;
}

export interface stateTypes {
  userData: {
    name: string
    email: string
    uid: string
    balance: number
    expenses: Array<expensesTypes> | Array<object>
  }
  error: string;
  loading: boolean;
}

export interface actionTypes {
  type: string,
  userData: any,
  error: string;
  loading: boolean;
}
