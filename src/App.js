import logo from './logo.svg';
import './App.css';
import {TodoApp} from './TodoApp'
import {TodoList} from './TodoList'

function App() {
  const todos = [{text:"Learn React", priority:5, dueDate: new Date().toDateString() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23).toDateString() },
          {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30).toDateString() }];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h>TODO React App</h>
        </p>
      </header>
      <bod className="App-body">
        <TodoApp/>
      </bod>
    </div>
  );
}

export default App;
