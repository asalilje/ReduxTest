import {createStore, applyMiddleware} from 'redux';
import {loadState, saveState} from './loadState';
import throttle from 'lodash/throttle';
import thunk from  'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

/*eslint-disable no-console */

// const thunk = (store) => (next) => (action) =>
//   typeof action === 'function' ?
//     action(store.dispatch, store.getState) :
//     next(action);

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('%c state before: ', 'blue', store.getState());
  console.log('%c action: ', 'red', action.type);
  const returnValue = next(action);
  console.log('%c state after: ', 'green', store.getState());
  console.groupEnd(action.type);
  return returnValue;
};

const configureStore = () => {

  //const persistedState = loadState();
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {//eslint-disable-line no-undef
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    //persistedState,
    applyMiddleware(...middlewares)
  );


  /*  store.subscribe(throttle(() => {
   saveState({
   todoList: store.getState().todoList
   });
   }, 1000));*/

  return store;
};

export default configureStore;
