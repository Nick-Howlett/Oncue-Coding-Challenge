import { combineReducers } from 'redux';
import TruckErrorsReducer from "./truck_errors_reducer";
import JobErrorsReducer from "./job_errors_reducer";

export default combineReducers({
  jobs: JobErrorsReducer,
  trucks: TruckErrorsReducer
});