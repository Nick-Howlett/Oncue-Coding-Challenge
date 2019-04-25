import React from 'react';
import { formatTime } from '../util/util_functions';

export default ({ trucks, jobs }) => {
  const truckArray = Object.values(trucks);
  const jobHash = createJobHash(jobs);
  return(
    <>
      <h1>Trucks</h1>
      <ul>
        {truckArray.map(truck => <TruckItem key={truck.id} truck={truck} jobs={jobHash[truck.id]}/>)}
      </ul>
    </>)
};

const TruckItem = ({truck, jobs}) => {
  return(<li>
          {truck.name} <br/>
          {`Availability: ${formatTime(truck.avail_start)} - ${formatTime(truck.avail_end)} every day.`}
          <br/>
          {jobs ? <ul>
            {jobs.map(job => <JobListing key={job.id} job={job}/>)}
          </ul> : ""}
        </li>)
};

const JobListing = ({ job }) => {
  return(<li>
            {`${job.name}, ${job.date}, ${formatTime(job.start)} - ${formatTime(job.end)}`}
        </li>)
}


const createJobHash = jobs => {
  const ret = {};
  Object.values(jobs).forEach(job => {
    if(ret[job.truck_id]) 
      ret[job.truck_id].push(job)
    else
      ret[job.truck_id] = [job];
  });
  return ret;
}