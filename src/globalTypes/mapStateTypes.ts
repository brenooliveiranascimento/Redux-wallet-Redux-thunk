export interface mapStateTypes {
  userReducer: object,
  manegersReducer: object,
}

export interface dispatchTypes {
  type: string,
}

export interface updateUserDataPropTypes {
  target: {
    value: string,
    name: string,
  }
}

export interface userDataType {
  name: string,
  email: string,
  password: string
}

export interface authFormPropTypes {
  updateUserData: any,
  userData: object,
  handleSignIn: any,
}
