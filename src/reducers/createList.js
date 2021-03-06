import {combineReducers} from 'redux';
import {types} from '../actions/actionTypes';

const createList = (filter) => {
  const ids = (state = [], action) => {
    if (action.filter !== filter)
      return state;

    switch (action.type) {
      case types.FETCH_TODOS_SUCCESS:
        return action.response.map(todo => todo.id);

      default:
        return state;
    }
  };

  const isLoading = (state = false, action) => {
      if (action.filter !== filter)
        return state;

      switch (action.type) {
        case types.FETCH_TODOS_REQUEST:
          return true;

        case types.FETCH_TODOS_SUCCESS:
        case types.FETCH_TODOS_ERROR:
          return false;

        default:
          return state;
      }
    };

    const errorMessage = (state = null, action) => {
      if (action.filter !== filter)
        return state;

      switch (action.type) {
        case types.FETCH_TODOS_ERROR:
          return action.message;
        case types.FETCH_TODOS_REQUEST:
        case types.FETCH_TODOS_SUCCESS:
          return null;

        default:
          return state;
      }
    };

    return combineReducers({
      ids,
      isLoading,
      errorMessage
    });

};



export default createList;

export const getIds = (state) => state.ids;

export const getIsLoading = (state) => state.isLoading;

export const getErrorMessage = (state) => state.errorMessage;


