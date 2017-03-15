import React, { Component } from 'react';

function Item({onRemove, index, item}) {
  return (
    <div className="col-lg-12 page-header" key={index}>
      <h4>#{item.id} {item.name}: <small>{item.time}</small></h4>
      <p>{item.content}</p>
      <p className="pull-right"><i className="glyphicon glyphicon-trash" role="button" onClick={onRemove.bind(this, item)}/></p>
    </div>
  )
}

function ItemList({onRemove, list}) {
  const itemList = [];
  list.map((item, key) => {
    itemList.push(<Item onRemove={onRemove} index={key} item={item} key={key} />)
    return true;
  });

  return (
    <div className="row">{itemList}</div>
  )
}

class ToDoList extends Component {
  render() {
    return (
      <div className="bs-docs-section">
        <h1 className="page-header">List</h1>
        <ItemList onRemove={this.props.onRemove} list={this.props.list} />
      </div>
    );
  }
}

export default ToDoList;