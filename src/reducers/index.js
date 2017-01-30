import {types} from '../actions/actionTypes';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import {combineReducers} from 'redux';

/*eslint-disable no-case-declarations */

const listByFilter = combineReducers({
  all: createList("all"),
  todo: createList("todo"),
  done: createList("done")
});

const todoList = combineReducers({
  listByFilter,
  byId
});

export default todoList;

export const getFilteredTodoList = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsLoading = (state, filter) =>
  fromList.getIsLoading(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);