import React from "react";

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {time: new Date()}

    this.tick = this.tick.bind(this);
  }

  tick () {
    // const interval = setInterval(this.setState({ time: new Date() }), 1000);
    this.setState( {time: new Date()} );
  }

  componentDidMount () {
    // { this.tick() }
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    // how to cancel interval id , what is this??
    clearInterval(this.interval);
  }

  render () {
    let current = this.state.time;
    let month = {
      1: "February"
    }
    let day = {
      4: "Friday",
      5: "Friday",
      6: "Friday"
    }
    return (
     
    <div>
    <h1>Clock</h1> 
    
    <h2 class="time">Time
    
    {`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`}
    </h2>
    <h2 class="date">Date
     
    {`${day[current.getDay()]} ${month[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`}
    </h2>
    </div>
    )
  }
}

export default Clock;