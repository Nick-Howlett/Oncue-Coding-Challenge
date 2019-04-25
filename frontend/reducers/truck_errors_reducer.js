import { RECEIVE_TRUCK_ERRORS } from '../actions/actions';

export default (state = [], action) => {
  switch(action.type){
    case RECEIVE_TRUCK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};