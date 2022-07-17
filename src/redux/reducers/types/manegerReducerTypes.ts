export interface actionTypes {
  type: string;
  payLoad: any;
  loading: boolean;
  error: string;
}

export interface stateTypes {
  monthlyPayments: Array<object>,
  wallet: Array<object>,
  loading: boolean,
  error: string,
}
