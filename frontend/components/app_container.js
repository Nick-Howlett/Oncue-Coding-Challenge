import { connect } from 'react-redux';
import App from './app';
import { fetchJobs, fetchTrucks } from '../actions/actions';

const msp = state => ({
  trucks: state.entities.trucks,
  jobs: state.entities.jobs
});

const mdp = dispatch => ({
  fetchTrucks: () => (dispatch(fetchTrucks())),
  fetchJobs: () => (dispatch(fetchJobs()))
});


export default connect(msp, mdp)(App);
