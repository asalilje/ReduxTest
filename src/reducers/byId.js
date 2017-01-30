import {types} from '../actions/actionTypes';

/*eslint-disable no-case-declarations */
const byId = (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_TODOS_SUCCESS:
      const nextState = {...state};
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;

    default:
      return state;
  }
};

export default byId;

export const getTodo = (state,id) => state[id];