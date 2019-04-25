import * as APIUtil from '../util/api_util';

export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const RECEIVE_TRUCKS = "RECEIVE_TRUCKS";
export const RECEIVE_JOB = "RECEIVE_JOB";
export const RECEIVE_TRUCK = "RECEIVE_TRUCK";
export const RECEIVE_JOB_ERRORS = "RECEIVE_JOB_ERRORS";
export const RECEIVE_TRUCK_ERRORS = "RECEIVE_TRUCK_ERRORS";

export const fetchJobs = () => dispatch => {
  return APIUtil.fetchJobs().then(jobs => dispatch(receiveJobs(jobs)));
};

export const fetchTrucks = () => dispatch => {
  return APIUtil.fetchTrucks().then(trucks => dispatch(receiveTrucks(trucks)));
};

export const createJob = job => dispatch => {
  return APIUtil.createJob(job).then(job => dispatch(receiveJob(job)), ({responseJSON}) => dispatch(receiveJobErrors(responseJSON)));
};

export const createTruck = truck => dispatch => {
  return APIUtil.createTruck(truck).then(truck => dispatch(receiveTruck(truck), ({responseJSON}) => dispatch(receiveTruckErrors(responseJSON))));
};


export const receiveJobs = jobs => ({
  type: RECEIVE_JOBS,
  jobs
});

export const receiveTrucks = trucks => ({
  type: RECEIVE_TRUCKS,
  trucks
});


export const receiveJob = job => ({
  type: RECEIVE_JOB,
  job
});

export const receiveTruck = truck => ({
  type: RECEIVE_TRUCK,
  truck
});

export const receiveJobErrors = errors => ({
  type: RECEIVE_JOB_ERRORS,
  errors
});

export const receiveTruckErrors = errors => ({
  type: RECEIVE_TRUCK_ERRORS,
  errors
});

