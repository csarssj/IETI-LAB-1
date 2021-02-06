import React, {Component} from 'react';
import {Todo} from './Todo'

export class TodoList extends Component {

    render() {
            const list = this.props.items.map((todo,index) => 
                <th key={index}>
                   <Todo text={todo.text} priority={todo.priority} fecha={todo.dueDate}/>
                 </th>
            );
            return (
                <tr> {list} </tr>
            );
        }
}
export default TodoList;