import React, { Component } from 'react';
import {Link } from 'react-router'

class Menu extends Component {
  render() {
    return (
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation" className="active"><Link to="/">Home</Link></li>
            <li role="presentation"><Link to="detail">Detail</Link></li>
          </ul>
        </nav>
        <h3 className="text-muted">Project name</h3>
      </div>
    );
  }
}

export default Menu;