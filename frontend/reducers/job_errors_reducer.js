import { RECEIVE_JOB_ERRORS } from '../actions/actions';

export default (state = [], action) => {
  switch(action.type){
    case RECEIVE_JOB_ERRORS:
      return action.errors;
    default:
      return state;
  }
};