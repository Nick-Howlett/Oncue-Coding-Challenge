import { RECEIVE_JOBS, RECEIVE_JOB } from '../actions/actions';

export default (state = {}, action) => {
switch(action.type){
    case RECEIVE_JOBS:
      return Object.assign({}, state, action.jobs);
    case RECEIVE_JOB:
      return Object.assign({}, state, action.job);
    default:
      return state; 
  }
};