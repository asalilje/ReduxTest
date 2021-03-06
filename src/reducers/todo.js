import {types} from '../actions/actionTypes';

export default function todo(state = {}, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case types.TOGGLE_TODO: {
      if(state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        done: !state.done
      };
    }

    default:
      return state;
  }
}
