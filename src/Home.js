import React, { Component } from 'react';
import ToDo from './component/ToDo';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <ToDo />
      </div>
    );
  }
}

export default Home;