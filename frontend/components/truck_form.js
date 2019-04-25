import { connect } from 'react-redux';
import CreateForm from './create_form';
import { createTruck } from '../actions/actions';


const msp = state => ({
  type: "Truck",
  startingState: {name: "", start: "07:00", end: "07:00"},
  submitValue: "Create Truck",
  errors: state.errors.trucks
});

const mdp = dispatch => ({
  submit: data => {
    data.avail_end = data.end; //the backend is expecting avail_start not start;
    data.avail_start = data.start;
    delete data.start;
    delete data.end;
    return dispatch(createTruck(data));
  }
});

export default connect(msp, mdp)(CreateForm);