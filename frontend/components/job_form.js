import { connect } from 'react-redux';
import CreateForm from './create_form';
import { createJob } from '../actions/actions';

const msp = state => ({
  type: "Job",
  startingState: {name: "", date: new Date(), start: "07:00", end: "07:00"},
  submitValue: "Create Job",
  errors: state.errors.jobs
});

const mdp = dispatch => ({
  submit: data => dispatch(createJob(data))
});

export default connect(msp, mdp)(CreateForm);