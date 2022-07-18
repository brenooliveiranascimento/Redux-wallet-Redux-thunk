export const ENABLE_EDIT = 'ENABLE_EDIT';
export const SAVE_EDIT = 'SAVE_EDIT';
export const CANCEL_EDIT = 'CANCEL_EDIT';
export const ADD_NEW_RELEASE = 'ADD_NEW_RELEASE';
export const CANCEL_NEW_RELEASE = 'CANCEL_NEW_RELEASE';

const INITIAL_VALUE_STATE = {
  release: {},
  indexOfRelease: 0,
  editing: false,
  addNewRelease: true,
};

const INITIAL_VALUE_ACTION = {
  type: '',
  payLoad: {},
  indexOfRelease: 0,
};

function editReleaseReducer(state = INITIAL_VALUE_STATE, action = INITIAL_VALUE_ACTION) {
  switch (action.type) {
    case ENABLE_EDIT:
      return {
        ...state, editing: true, release: action.payLoad, indexOfRelease: action.indexOfRelease,
      };
    case SAVE_EDIT:
      return {
        ...state, editing: false, release: {},
      };
    case CANCEL_EDIT:
      return {
        ...state, editing: false, release: {},
      };
    case ADD_NEW_RELEASE:
      return { ...state, addNewRelease: true };
    case CANCEL_NEW_RELEASE:
      return { ...state, addNewRelease: false };
    default:
      return state;
  }
}
export default editReleaseReducer;
