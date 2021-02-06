import React, {Component} from 'react';
import {Todo} from './Todo'
import {TodoList} from './TodoList'


export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date() },
      {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
      {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }], text: ' ' ,priority:null};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangePriority = this.handleChangePriority.bind(this);
    }
  
    render() {
      return (
        <div>
          <hr></hr>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              ¿Qué tienes por hacer?
            </label>
            <br></br>
            <input
              id="new-todo"
              type= "text"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br></br>
            <label htmlFor="new-todo-priority">
              ¿Cuál es la prioridad? 
            </label>
            <br></br>
            <input
              id="new-todo-priority"
              type= "number"
              onChange={this.handleChangePriority}
              value={this.state.priority}
            />
            <br></br>
            <button>
              Agregar #{this.state.items.length + 1}
            </button>
          </form>
          <div>
            <hr></hr>
            <br></br>
            <br></br>
            <br></br>
            <TodoList items={this.state.items} />
          </div>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
    handleChangePriority(e) {
      this.setState({ priority: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        id: Date.now()
        
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        priority: '',
        text: ''
      }));
    }
  }
export default TodoApp;