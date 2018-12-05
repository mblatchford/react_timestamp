import React, { Component } from 'react';
import './App.css';
import GetTime from './GetTime';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      timestamp: []
    }
  }

  _onSubmit = (e) => {
    e.preventDefault();
    // console.log("submit button pressed");
    const timestamp = Date();
    console.log(timestamp);
    this.setState({
        timestamp:[...this.state.timestamp, timestamp ] 
    });
  }


  render() {
    return (
      <div>
        <GetTime 
          onSubmit={this._onSubmit}
        />
       <List 
          timestamp = {this.state.timestamp} 
       />
      </div>
    );
  }
}

export default App;
