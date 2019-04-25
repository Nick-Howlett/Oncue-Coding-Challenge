import { combineReducers } from 'redux';
import TrucksReducer from './trucks_reducer';
import JobsReducer from './jobs_reducer';

export default combineReducers({
  trucks: TrucksReducer,
  jobs: JobsReducer
});