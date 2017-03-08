import React, { Component } from 'react';

function Item({onRemove, index, item}) {
  return (
    <div className="col-lg-12" key={index}>
      <h4>{item.name}</h4>
      <p>{item.content}</p>
      <p className="pull-right"><i className="glyphicon glyphicon-trash" role="button" onClick={onRemove.bind(this, index)}/></p>
    </div>
  )
}

function ItemList({onRemove, sourceList}) {
  const list = [];
  sourceList.map((item, key) => {
    list.push(<Item onRemove={onRemove} index={key} item={item} key={key} />)
    return true;
  });

  return (
    <div className="row">{list}</div>
  )
}

class ToDoList extends Component {
  render() {
    return (
        <ItemList onRemove={this.props.onRemove} sourceList={this.props.list} />
    );
  }
}

export default ToDoList;