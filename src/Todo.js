import React,{Component} from 'react';

export class Todo extends Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return ( 
            <div>
                <li>Texto: {this.props.text}</li>
                <li>Prioridad: {this.props.priority}</li> 
                <li>Fecha: {this.props.dueDate}</li>
            </div> 
        );
    }
}
export default Todo;