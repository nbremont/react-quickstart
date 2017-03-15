import React, { Component } from 'react';
import ToDoList from './ToDoList';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {id: null, name: '', content: '', time: 0, list: [], debug: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleApi = this.handleApi.bind(this);
  }

  pushListFromData(data) {
    this.setState({list: []});
    data.map((item) => {
      return this.state.list.push(item);
    });

    this.setState({list: this.state.list});
  }

  publishToDo(toDo) {
    this.setState({name: '', content: '', time: 0});
    fetch('http://localhost:8080/api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toDo)
    })
      .then(response => response.json())
      .then((toDoResponse) => {
        this.state.list.push(toDoResponse);
        this.setState({list: this.state.list});
      })
  }

  deleteToDo(toDo) {
    fetch('http://localhost:8080/api', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toDo)
    });
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;

    this.setState(state);
  }

  handleSubmit(event) {
    if ('' === this.state.name) {
      event.preventDefault();
      return false;
    }

    this.publishToDo({
      id: null,
      name: this.state.name,
      content: this.state.content,
      time: this.state.time
    });

    event.preventDefault();
  }

  handleRemove(toDo) {
    this.state.list.map((item, key) => {
      if (item.id === toDo.id) {
        this.state.list.splice(key, 1);
        this.deleteToDo(toDo);
      }

      return true;
    });

    this.setState({list: this.state.list});
  }

  handleApi() {
    fetch('http://localhost:8080/api')
      .then(response => response.json())
      .then(responseJson => this.pushListFromData(responseJson))
  }

  render() {
    return (
      <div>
        <div className="well">
          <button type="submit" className="btn btn-default" onClick={this.handleApi}>Load</button>
          <h1>Add Training</h1>
          <p className="lead">
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" className="form-control" id="address" placeholder="Some text..."
              value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea name="content" className="form-control" value={this.state.content} onChange={this.handleChange} placeholder="..."></textarea>
            </div>
            <div className="form-group">
              <label>Time: <small>(in minutes)</small></label>
              <input name="time" className="form-control" type="number" value={this.state.time} onChange={this.handleChange} placeholder="0"></input>
            </div>
            <button type="submit" className="btn btn-default">Add</button>
          </form>
        </div>
        <ToDoList onRemove={this.handleRemove} list={this.state.list} />
      </div>
    );
  }
}

export default ToDo;