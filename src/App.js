import React, { Component } from 'react';
import Menu from './component/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        {this.props.children}
        <footer className="footer">
          <p>&copy; 2016 Company, Inc.</p>
        </footer>
      </div>
    );
  }
}

export default App;
