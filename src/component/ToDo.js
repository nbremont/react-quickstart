import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <div className="well">
        <h1>Add Training</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <form onSubmit={this.props.onSubmit} onChange={this.props.onChange}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" type="text" className="form-control" id="address" placeholder="Some text..."
            value={this.props.name} />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea name="content" className="form-control" value={this.props.content} placeholder="..."></textarea>
          </div>
          <div className="form-group">
            <label>Time</label>
            <input name="time" className="form-control" value={this.props.time} placeholder="00:00"></input>
          </div>
          <button type="submit" className="btn btn-default">Add</button>
        </form>
      </div>
    );
  }
}

export default ToDo;