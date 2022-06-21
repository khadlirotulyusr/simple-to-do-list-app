import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitForm from "./components/SubmitForm/SubmitForm";
import TaskList from "./components/Task/TaskList";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { tasks : []}
  }

  addTask = (task) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task)
      };
    });
  }

  removeTask = (id) => {
    const tasks = this.state.tasks.filter(el => (el.id !== id));
    this.setState({tasks:tasks});
  }
  

  render(){
    return (
      <div className="App">
      <h3 className="App-header">Simple To-Do-List App</h3>
      <div className="App">
      <SubmitForm addTask={this.addTask}/>
      <TaskList tasks={this.state.tasks} removeTask={this.removeTask}/>
      <h3 className="App-footer">	&copy;khadlirotulyusr.2022</h3>

    </div>
    </div>

    );
  }
}


export default App;
