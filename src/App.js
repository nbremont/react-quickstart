import React, { Component } from 'react';
import ToDo from './component/ToDo';
import ToDoList from './component/ToDoList';
import Menu from './component/Menu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', content: '', time: new Date(), list: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;

    this.setState(state);
  }

  handleSubmit(event) {
    if ('' === this.state.value) {
      event.preventDefault();
      return false;
    }

    this.state.list.push({
      name: this.state.name,
      content: this.state.content,
      time: this.state.time
    });

    this.setState({list: this.state.list});
    this.setState({name: '', content: '', time: new Date()});

    event.preventDefault();
  }

  handleRemove(key) {
    this.state.list.splice(key, 1);

    this.setState({list: this.state.list});
  }

  render() {
    const time = this.state.time.getHours() + ':' + this.state.time.getMinutes() + ':' + this.state.time.getSeconds();
    return (
      <div className="container">
        <Menu />
        <ToDo
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name={this.state.name}
          content={this.state.content}
          time={time}
        />
        <div className="page-header">
          <h1>List</h1>
        </div>
        <ToDoList onRemove={this.handleRemove} list={this.state.list} />
        <footer className="footer">
          <p>&copy; 2016 Company, Inc.</p>
        </footer>
      </div>
    );
  }
}

export default App;
