import React, { Component } from 'react';
import './App.css';

class Detail extends Component {
  render() {
    return (
      <div className="container">
        Detail page
        {this.props.children}
      </div>
    );
  }
}

export default Detail;
