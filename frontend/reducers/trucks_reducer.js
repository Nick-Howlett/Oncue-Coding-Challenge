import { RECEIVE_TRUCKS, RECEIVE_TRUCK } from '../actions/actions';

export default (state = {}, action) => {
  switch(action.type){
    case RECEIVE_TRUCKS:
      return Object.assign({}, state, action.trucks);
    case RECEIVE_TRUCK:
      return Object.assign({}, state, action.truck);
    default:
      return state; 
  }
};