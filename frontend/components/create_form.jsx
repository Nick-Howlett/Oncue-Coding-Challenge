import React from 'react';
import { formatTime } from '../util/util_functions';

class CreateForm extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.startingState;
    this.times = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
    console.log(this.labels);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submit(this.state);
    this.setState(this.props.startingState); 
  }

  render(){
    return(
      <>
      <h1>Create {this.props.type}</h1>
      <form onSubmit={this.handleSubmit}>
        <label> Name: 
          <input type="text" onChange={this.handleChange("name")} value={this.state.name}/>
        </label><br/>
        {this.props.type === "Job" ? <>Date: <input type="date" onChange={this.handleChange("date")}/><br/></> : ""}
        Start:
        <select onChange={this.handleChange("start")} value={this.state.start}>
          {this.times.map(time => <option key={time} value={time}>{formatTime(time)}</option>)}
        </select><br/>
        End:
        <select onChange={this.handleChange("end")} value={this.state.end}>
          {this.times.map(time => <option key={time} value={time}>{formatTime(time)}</option>)}
        </select><br/>
        {this.props.errors.map(error => <li key={error}>{error}</li>)}
        <input type="submit" value={this.props.submitValue}/>
      </form>
      </>
    )
  }
}

export default CreateForm;