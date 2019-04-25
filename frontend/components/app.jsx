import React from 'react';
import TruckList from './truck_list';
import TruckForm from './truck_form';
import JobForm from './job_form';

class App extends React.Component{

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchJobs();
    this.props.fetchTrucks();
  }

  render(){
    return(
      <>
        <TruckForm/>
        <JobForm/>
        <TruckList trucks={this.props.trucks} jobs={this.props.jobs}/>
      </>
    )
  }

}

export default App;

