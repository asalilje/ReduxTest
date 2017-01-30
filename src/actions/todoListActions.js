import {types} from './actionTypes';
import {v4} from 'node-uuid';
import * as api from '../../mockapi/mock-api';
import {getIsLoading} from '../reducers/index';


export const addTodoItem = (text) => ({
  type: types.ADD_TODO,
  id: v4(),
  text
});

export const toggleTodoItem = (id) => ({
  type: types.TOGGLE_TODO,
  id
});

export const fetchTodoList = (filter) => (dispatch, getState) => {
  if (getIsLoading(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch({
    type: types.FETCH_TODOS_REQUEST,
    filter
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: types.FETCH_TODOS_SUCCESS,
        response,
        filter
      });
    },
    error => {
      dispatch({
        type: types.FETCH_TODOS_ERROR,
        message: error.message || 'Something went wrong',
        filter
      });
    });
};




