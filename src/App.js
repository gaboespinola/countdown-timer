import React, { Component } from 'react';
import './App.css';

class App extends Component {
    
  constructor(props){
      
        super(props);
        
        this.state={
            days: 1,
            hours: 23,
            minutes: 27,
            seconds: 47
            };
        
   }
   componentDidMount() {
      setInterval(() => this.handleTime(), 1000)
 }
 
 handleTime(){
     let days = this.state.days;
     let hours = this.state.hours;
     let minutes = this.state.minutes;
     let seconds = this.state.seconds;
     if(days==0 &&hours==0 && minutes==0 && seconds==0){
        return; 
     }
     seconds--;
     if(seconds==-1){
         seconds=59;
         minutes--;
         if(minutes==-1){
             minutes=59;
             hours--;
             if(hours==-1){
                hours=23;
                days--;
             }
         }
     }
     
     this.setState({ days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
            })
 }
 
  render() {
    return (
      <section className="timer">
        <div className="time-object"><h1>{this.state.days}</h1> <p>Days</p> </div>
        <div className="time-object"><h1>{this.state.hours}</h1>  <p>Hours</p> </div>
        <div className="time-object"><h1>{this.state.minutes}</h1>  <p>Minutes</p> </div>
        <div className="time-object"><h1>{this.state.seconds}</h1>  <p>Seconds</p> </div>
      </section>
    );
  }
}

export default App;
