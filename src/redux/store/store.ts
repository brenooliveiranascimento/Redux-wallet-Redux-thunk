import { createStore, applyMiddleware } from 'redux';
import { manegerReducer } from '../reducers/manegersReducer/manegersReducer';
import thunk from 'redux-thunk';

export const store = createStore(manegerReducer, applyMiddleware(thunk));

