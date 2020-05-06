import React from 'react';
export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount(){
      this.timerID = setInterval(()=>{
        this.setState({date: new Date()});
        // console.log(this);
      },1000);
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    tick(){
      console.log("hi");
      this.setState({
        date: new Date()
      });
    }
  
  
    render () {
      return(
        <div>
          <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
        </div>
      );
    }
  }